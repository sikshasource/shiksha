// import React, { useState, useRef } from "react";
// import axios from "axios";

// export default function ChatWidget() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [position, setPosition] = useState({ x: 20, y: 20 });

//   const dragRef = useRef(null);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMsg = { role: "user", text: input };
//     setMessages((m) => [...m, userMsg]);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await axios.post("https://shiksha-chatbot.onrender.com/chat", {
//         message: userMsg.text,
//       });

//       setMessages((m) => [
//         ...m,
//         { role: "assistant", text: res.data.reply },
//       ]);
//     } catch {
//       setMessages((m) => [
//         ...m,
//         { role: "assistant", text: "Server error. Please try again." },
//       ]);
//     }

//     setLoading(false);
//   };

//   const handleDrag = (e) => {
//     setPosition({
//       x: window.innerWidth - e.clientX,
//       y: window.innerHeight - e.clientY,
//     });
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       {!open && (
//         <div
//           draggable
//           onDragEnd={handleDrag}
//           className="fixed z-50"
//           style={{ bottom: position.y, right: position.x }}
//         >
//           <button
//             onClick={() => setOpen(true)}
//             className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
//           >
//             💬
//           </button>
//         </div>
//       )}

//       {/* Chat Window */}
//       {open && (
//         <div
//           className="fixed z-50 w-80 h-[450px] bg-white shadow-2xl rounded-xl flex flex-col"
//           style={{ bottom: "20px", right: "20px" }}
//         >
//           {/* Header */}
//           <div className="bg-black text-white p-3 rounded-t-xl flex justify-between">
//             <span>Shiksha AI</span>
//             <button onClick={() => setOpen(false)}>✕</button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
//             {messages.map((m, i) => (
//               <div
//                 key={i}
//                 className={`p-2 rounded-lg text-sm ${
//                   m.role === "user"
//                     ? "bg-blue-600 text-white ml-auto"
//                     : "bg-white shadow"
//                 }`}
//               >
//                 {m.text}
//               </div>
//             ))}
//             {loading && (
//               <div className="text-xs text-gray-500">AI typing...</div>
//             )}
//           </div>

//           {/* Input */}
//           <div className="p-2 border-t flex gap-2">
//             <input
//               className="flex-1 border rounded px-2 py-1 text-sm"
//               value={input}
//               placeholder="Ask about projects..."
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-blue-600 text-white px-3 rounded text-sm"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }






















// client/src/ChatWidget.jsx

import React, { useState, useRef, useEffect } from "react";


export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [position, setPosition] = useState({ x: 20, y: 20 });


    const dragRef = useRef(null);


    const sendMessage = async () => {
        if (!input.trim() || loading) return;


        const userMsg = { role: "user", text: input };
        setMessages((m) => [...m, userMsg]);
        setInput("");
        setLoading(true);


        try {
            const res = await fetch("https://shiksha-chatbot.onrender.com/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg.text }),
            });


            if (res.ok) {
                const data = await res.json();
                setMessages((m) => [
                    ...m,
                    { role: "assistant", text: data.reply },
                ]);
            } else {
                setError();
            }
        } catch {
            setError();
        }


        setLoading(false);
    };


    const setError = () => {
        setMessages((m) => [
            ...m,
            { role: "assistant", text: "Chatbot offline. Contact +91 94823 084644." },
        ]);
    };


    const handleDrag = (e) => {
        setPosition({
            x: window.innerWidth - e.clientX,
            y: window.innerHeight - e.clientY,
        });
    };


    useEffect(() => {
        // Auto-start chat
        if (open && messages.length === 0) {
            setTimeout(() => {
                fetch("https://shiksha-chatbot.onrender.com/health")
                    .then(r => r.json())
                    .then(() => {
                        setMessages([{ role: "assistant", text: "Hi! How can I help with your project?" }]);
                    })
                    .catch(setError);
            }, 500);
        }
    }, [open, messages.length]);


    return (
        <>
            {/* Floating Button */}
            {!open && (
                <div
                    draggable
                    onDragEnd={handleDrag}
                    className="fixed z-50 cursor-move"
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
                    <div className="bg-black text-white p-3 rounded-t-xl flex justify-between items-center">
                        <span>Shiksha AI</span>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-white hover:bg-white/10 p-1 rounded"
                        >
                            ✕
                        </button>
                    </div>


                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`p-2 rounded-lg text-sm ${
                                    m.role === "user"
                                        ? "bg-blue-600 text-white ml-auto max-w-[80%]"
                                        : "bg-white shadow max-w-[85%]"
                                }`}
                            >
                                {m.text}
                            </div>
                        ))}
                        {loading && (
                            <div className="text-xs text-gray-500">
                                🤖 AI typing...
                            </div>
                        )}
                    </div>


                    {/* Input */}
                    <div className="p-2 border-t flex gap-2 bg-white">
                        <input
                            className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-400"
                            value={input}
                            placeholder="Ask about projects..."
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading}
                            className="bg-blue-600 text-white px-3 rounded text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "…" : "Send"}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
