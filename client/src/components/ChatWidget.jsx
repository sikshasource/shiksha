import React, { useState, useRef } from "react";
import axios from "axios";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });

  const dragRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("https://shiksha-chatbot.onrender.com", {
        message: userMsg.text,
      });

      setMessages((m) => [
        ...m,
        { role: "assistant", text: res.data.reply },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "Server error. Please try again." },
      ]);
    }

    setLoading(false);
  };

  const handleDrag = (e) => {
    setPosition({
      x: window.innerWidth - e.clientX,
      y: window.innerHeight - e.clientY,
    });
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <div
          draggable
          onDragEnd={handleDrag}
          className="fixed z-50"
          style={{ bottom: position.y, right: position.x }}
        >
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
          >
            💬
          </button>
        </div>
      )}

      {/* Chat Window */}
      {open && (
        <div
          className="fixed z-50 w-80 h-[450px] bg-white shadow-2xl rounded-xl flex flex-col"
          style={{ bottom: "20px", right: "20px" }}
        >
          {/* Header */}
          <div className="bg-black text-white p-3 rounded-t-xl flex justify-between">
            <span>Shiksha AI</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm ${
                  m.role === "user"
                    ? "bg-blue-600 text-white ml-auto"
                    : "bg-white shadow"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="text-xs text-gray-500">AI typing...</div>
            )}
          </div>

          {/* Input */}
          <div className="p-2 border-t flex gap-2">
            <input
              className="flex-1 border rounded px-2 py-1 text-sm"
              value={input}
              placeholder="Ask about projects..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}