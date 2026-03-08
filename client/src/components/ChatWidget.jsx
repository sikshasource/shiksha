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
//       const res = await axios.post("https://shiksha-chatbot.onrender.com/health", {
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






















// import React, { useState, useEffect, useRef } from "react";

// export default function ChatWidget() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   const API_URL = "https://shiksha-l2iu.onrender.com/chat";

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   useEffect(() => {
//     if (open && messages.length === 0) {
//       setMessages([{
//         role: "assistant",
//         text: "👋 Hi! I'm Shiksha AI. Ask me about projects, services, or contact info.",
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       }]);
//     }
//   }, [open]);

//   const sendMessage = async () => {
//     if (!input.trim() || loading) return;

//     const userMsg = {
//       role: "user",
//       text: input,
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };

//     setMessages(m => [...m, userMsg]);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userMsg.text }),
//       });

//       if (res.ok) {
//         const data = await res.json();
//         setMessages(m => [...m, {
//           role: "assistant",
//           text: data.reply,
//           time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         }]);
//       } else {
//         throw new Error("API error");
//       }
//     } catch (err) {
//       setMessages(m => [...m, {
//         role: "assistant",
//         text: "⚠️ Connection issue. Contact +91 94823 84644.",
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       }]);
//     }

//     setLoading(false);
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       {!open && (
//         <button
//           onClick={() => setOpen(true)}
//           className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 flex items-center gap-2"
//           aria-label="Open chat"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//           </svg>
//         </button>
//       )}

//       {/* Chat Window - Perplexity Style */}
//       {open && (
//         <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white dark:bg-gray-900 shadow-2xl rounded-2xl flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden">
          
//           {/* Header - Gradient */}
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center">
//             {/* <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-white font-semibold text-lg">Shiksha AI</h3>
//                 <p className="text-blue-100 text-xs">Always here to help</p>
//               </div>
//             </div> */}
//             <div className="flex items-center gap-3">
//       <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm p-1">
//     <img 
//       src="C:\Users\Win\OneDrive\Desktop\shiksha\client\public\Fav.png"
//       alt="Shiksha Source Logo"
//       className="w-6 h-6 object-contain"
//     />
//   </div>
//   <div>
//     <h3 className="text-white font-semibold text-lg">Shiksha AI</h3>
//     <p className="text-blue-100 text-xs">Always here to help</p>
//   </div>
// </div>
//             <button
//               onClick={() => setOpen(false)}
//               className="text-white hover:bg-white/20 p-2 rounded-lg transition"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {/* Messages - Perplexity Style */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
//             {messages.map((m, i) => (
//               <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`max-w-[80%] ${m.role === 'user' ? 'order-2' : 'order-1'}`}>
//                   <div className={`rounded-2xl px-4 py-3 ${
//                     m.role === 'user'
//                       ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
//                       : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-md border border-gray-200 dark:border-gray-600'
//                   }`}>
//                     <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
//                   </div>
//                   <p className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
//                     {m.time}
//                   </p>
//                 </div>
//               </div>
//             ))}
            
//             {loading && (
//               <div className="flex justify-start">
//                 <div className="bg-white dark:bg-gray-700 rounded-2xl px-4 py-3 shadow-md">
//                   <div className="flex gap-1">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
//                     <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
//                     <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
//                   </div>
//                 </div>
//               </div>
//             )}
            
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input - Modern */}
//           <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
//             <div className="flex gap-2">
//               <input
//                 className="flex-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
//                 value={input}
//                 placeholder="Ask about projects..."
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
//                 disabled={loading}
//               />
//               <button
//                 onClick={sendMessage}
//                 disabled={loading || !input.trim()}
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//               >
//                 {loading ? (
//                   <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                 ) : (
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//             <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
//               Powered by Shiksha Source AI
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
























// client/src/ChatWidget.jsx this is the perfect code with simple ui

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";


// export default function ChatWidget() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [position, setPosition] = useState({ x: 20, y: 20 });

//   const messagesEndRef = useRef(null);

//   // Auto‑scroll to bottom
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!input.trim() || loading) return;

//     const userMsg = {
//       role: "user",
//       text: input,
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };
//     setMessages((m) => [...m, userMsg]);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "https://shiksha-chatbot.onrender.com/chat",
//         { message: userMsg.text }, //  ❤️ this matches backend
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       // ✅ Your backend returns { "reply": "..." }
//       const replyText = res.data.reply || "No reply from server.";
//       setMessages((m) => [
//         ...m,
//         {
//           role: "assistant",
//           text: replyText,
//           time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         }
//       ]);
//     } catch (err) {
//       // ✅ Even if backend returns 500 body, show it in chat
//       const errorReply =
//         err.response?.data?.reply ||
//         "Server error. Please try again or contact +91 94823 84644.";
//       setMessages((m) => [
//         ...m,
//         { role: "assistant", text: errorReply }
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


//   // Auto‑start welcome message
//   useEffect(() => {
//     if (open && messages.length === 0) {
//       setMessages([
//         {
//           role: "assistant",
//           text: "Hi! I'm Shiksha AI. Ask me about projects, services, or contact info.",
//           time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         }
//       ]);
//     }
//   }, [open, messages.length]);


//   return (
//     <>
//       {/* Floating Button */}
//       {!open && (
//         <div
//           draggable
//           onDragEnd={handleDrag}
//           className="fixed z-50 cursor-move"
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
//           <div className="bg-black text-white p-3 rounded-t-xl flex justify-between items-center">
//             <span>Shiksha AI</span>
//             <button
//               onClick={() => setOpen(false)}
//               className="text-white hover:bg-white/10 p-1 rounded"
//             >
//               ✕
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-3 space-y-1">
//             {messages.map((m, i) => (
//               <div
//                 key={i}
//                 className={`max-w-[80%] ${
//                   m.role === "user" ? "ml-auto" : "ml-1"
//                 }`}
//               >
//                 <div
//                   className={`p-2 text-sm rounded-lg ${
//                     m.role === "user"
//                       ? "bg-blue-600 text-white"
//                       : "bg-white shadow"
//                   }`}
//                 >
//                   {m.text}
//                 </div>
//                 {m.time && (
//                   <p className="text-xs text-gray-500 text-right mt-1">
//                     {m.time}
//                   </p>
//                 )}
//               </div>
//             ))}
//             {loading && (
//               <p className="text-xs text-gray-500">AI typing...</p>
//             )}
//           </div>

//           {/* Input */}
//           <div className="p-2 border-t flex gap-2">
//             <input
//               className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-400"
//               value={input}
//               placeholder="Ask about projects..."
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) =>
//                 e.key === "Enter" && !e.shiftKey && sendMessage()
//               }
//               disabled={loading}
//             />
//             <button
//               onClick={sendMessage}
//               disabled={loading || !input.trim()}
//               className="bg-blue-600 text-white px-3 rounded text-sm hover:bg-blue-700 disabled:opacity-50"
//             >
//               {loading ? "…" : "Send"}
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }





























































// // client/src/ChatWidget.jsx

// // client/src/ChatWidget.jsx

// import React, { useState, useEffect, useRef, useMemo } from "react";
// import axios from "axios";
// import FavIcon from "/ChatBot-Ico.png"; // from public/Fav.png

// const API_URL = "https://shiksha-chatbot.onrender.com/chat";

// // Shiksha icon using your favicon image
// function ShikshaIcon({ size = 20 }) {
//   return (
//     <div
//       className="flex items-center justify-center rounded-full bg-white shadow-md border border-blue-100 overflow-hidden"
//       style={{ width: size, height: size }}
//     >
//       <img
//         src={FavIcon}
//         alt="Shiksha Source"
//         className="w-full h-full object-contain"
//       />
//     </div>
//   );
// }

// function SuggestionPill({ label, onClick }) {
//   return (
//     <button
//       onClick={() => onClick(label)}
//       className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-xs text-blue-700 hover:bg-blue-100 transition-colors whitespace-nowrap"
//     >
//       {label}
//     </button>
//   );
// }

// export default function ChatWidget() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]); // {role,text,time}
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [position, setPosition] = useState({ x: 20, y: 20 });

//   const messagesEndRef = useRef(null);

//   // Auto-scroll
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Welcome message
//   useEffect(() => {
//     if (open && messages.length === 0) {
//       setMessages([
//         {
//           role: "assistant",
//           text: "Hi! I'm Shiksha AI. Ask me about colleges, courses, fees, placements, or project help.",
//           time: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         },
//       ]);
//     }
//   }, [open, messages.length]);

//   const handleDrag = (e) => {
//     setPosition({
//       x: window.innerWidth - e.clientX,
//       y: window.innerHeight - e.clientY,
//     });
//   };

//   const appendMessage = (role, text) => {
//     setMessages((m) => [
//       ...m,
//       {
//         role,
//         text,
//         time: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       },
//     ]);
//   };

//   const sendMessage = async (overrideText) => {
//     const finalText = typeof overrideText === "string" ? overrideText : input;
//     if (!finalText.trim() || loading) return;

//     appendMessage("user", finalText);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         API_URL,
//         { message: finalText },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       const replyText = res.data?.reply || "No reply from server.";
//       appendMessage("assistant", replyText);
//     } catch (err) {
//       const errorReply =
//         err.response?.data?.reply ||
//         "Server error. Please try again or contact +91 94823 84644.";
//       appendMessage("assistant", errorReply);
//     }

//     setLoading(false);
//   };

//   // Intent-based suggestions (2–3 max), based on last user message
//   const suggestionLabels = useMemo(() => {
//     const lastUser = [...messages].reverse().find((m) => m.role === "user");
//     const text = lastUser?.text?.toLowerCase() || "";

//     const suggestions = [];

//     if (/college|university|engineering|btech|mca|bca|degree/.test(text)) {
//       suggestions.push("Show me project domains for my degree");
//       suggestions.push("What are the best final year projects for my branch?");
//     }

//     if (/course|branch|stream|cse|ece|civil|mechanical/.test(text)) {
//       suggestions.push("Suggest project ideas for my course");
//       suggestions.push("Do you support mini projects for my course?");
//     }

//     if (/bangalore|tumakuru|mysore|location|near me|city|state/.test(text)) {
//       suggestions.push("Can you help students outside my city?");
//     }

//     if (/exam|viva|internal|external|review/.test(text)) {
//       suggestions.push("How do you help with viva preparation?");
//       suggestions.push("Do you conduct mock project reviews?");
//     }

//     if (/fee|fees|cost|price|charge|payment/.test(text)) {
//       suggestions.push("How much do you charge for a full project?");
//       suggestions.push("Is payment in installments available?");
//     }

//     if (/placement|job|internship|career/.test(text)) {
//       suggestions.push("Will this project help in placements?");
//       suggestions.push("Do you provide guidance for interviews?");
//     }

//     if (suggestions.length === 0) {
//       suggestions.push("Show services you provide");
//       suggestions.push("How can I contact Shiksha Source?");
//     }

//     return suggestions.slice(0, 3);
//   }, [messages]);

//   return (
//     <>
//       {/* Floating Button */}
//       {!open && (
//         <div
//           draggable
//           onDragEnd={handleDrag}
//           className="fixed z-50 cursor-move"
//           style={{ bottom: position.y, right: position.x }}
//         >
//           <button
//             onClick={() => setOpen(true)}
//             className="flex items-center gap-2 bg-gray-900   text-white px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-transform"
//           >
// <<<<<<< HEAD
//             <ShikshaIcon size={22} />
//             <span className="text-sm ">Chat with Shiksha AI</span>
// =======
//             <ShikshaIcon size={24} />
//             <span className="text-sm font-medium"> </span>
// >>>>>>> 1abb50b (contact info problem ui)
//           </button>
//         </div>
//       )}

//       {/* Chat Window */}
//       {open && (
//         <div
//           className="fixed z-50 w-96 max-w-[95vw] h-[520px] bg-white shadow-2xl rounded-2xl flex flex-col border border-gray-200"
//           style={{ bottom: "20px", right: "20px" }}
//         >
//           {/* Header */}
//           <div className="flex items-center justify-between px-4 py-3 bg-gray-900  text-white rounded-t-2xl">
//             <div className="flex items-center gap-3">
//               <ShikshaIcon size={28} />
//               <div className="flex flex-col">
//                 <span className="font-semibold text-sm">Ask Shiksha</span>
//                 <span className="text-[11px] text-blue-100">
//                   Smart help for colleges, courses & projects
//                 </span>
//               </div>
//             </div>
//             <button
//               onClick={() => setOpen(false)}
//               className="p-1 rounded-full hover:bg-white/15"
//             >
//               ✕
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 bg-gray-50">
//             {messages.map((m, i) => (
//               <div
//                 key={i}
//                 className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 <div className="max-w-[80%]">
//                   <div
//                     className={`rounded-2xl px-3 py-2 text-sm leading-relaxed ${
//                       m.role === "user"
//                         ? "bg-blue-600 text-white rounded-br-sm"
//                         : "bg-white text-gray-900 rounded-bl-sm border border-gray-200 shadow-sm"
//                     }`}
//                   >
//                     {m.role === "assistant" && (
//                       <div className="flex items-center gap-1 mb-1">
//                         <ShikshaIcon size={16} />
//                         <span className="text-[10px] uppercase tracking-wide text-gray-500">
//                           Shiksha Source
//                         </span>
//                       </div>
//                     )}
//                     <p className="whitespace-pre-wrap">{m.text}</p>
//                   </div>
//                   <p
//                     className={`text-[10px] text-gray-400 mt-1 ${
//                       m.role === "user" ? "text-right" : "text-left"
//                     }`}
//                   >
//                     {m.time}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             {loading && (
//               <div className="flex justify-start">
//                 <div className="bg-white text-gray-700 border border-gray-200 rounded-2xl px-3 py-2 text-xs flex items-center gap-1 shadow-sm">
//                   <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
//                   <span>Shiksha AI is typing…</span>
//                 </div>
//               </div>
//             )}

//             <div ref={messagesEndRef} />
//           </div>

//           {/* Suggestions */}
//           {suggestionLabels.length > 0 && (
//             <div className="px-3 pt-2 pb-1 bg-gray-50 border-t border-gray-100">
//               <p className="text-[11px] text-gray-500 mb-1">Quick suggestions</p>
//               <div className="flex flex-wrap gap-1.5">
//                 {suggestionLabels.map((label) => (
//                   <SuggestionPill
//                     key={label}
//                     label={label}
//                     onClick={(text) => sendMessage(text)}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Input */}
//           <div className="px-3 py-2 bg-white border-t border-gray-200 flex items-center gap-2">
//             <textarea
//               rows={1}
//               className="flex-1 resize-none border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Ask about colleges, courses, fees or placements…"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" && !e.shiftKey) {
//                   e.preventDefault();
//                   sendMessage();
//                 }
//               }}
//               disabled={loading}
//             />
//             <button
//               onClick={() => sendMessage()}
//               disabled={loading || !input.trim()}
//               className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600   text-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "…" : "➤"}
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
























// client/src/ChatWidget.jsx

import React, { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
import FavIcon from "/ChatBot-Ico.png"; // from public/Fav.png

const API_URL = "https://shiksha-chatbot.onrender.com/chat";

// Shiksha icon using your favicon image
function ShikshaIcon({ size = 20 }) {
  return (
    <div
      className="flex items-center justify-center rounded-full bg-white shadow-md border border-blue-100 overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img
        src={FavIcon}
        alt="Shiksha Source"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function SuggestionPill({ label, onClick }) {
  return (
    <button
      onClick={() => onClick(label)}
      className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-xs text-blue-700 hover:bg-blue-100 transition-colors whitespace-nowrap"
    >
      {label}
    </button>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // {role,text,time}
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });

  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Welcome message
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          text: "Hi! I'm Shiksha AI. Ask me about colleges, courses, fees, placements, or project help.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }
  }, [open, messages.length]);

  const handleDrag = (e) => {
    setPosition({
      x: window.innerWidth - e.clientX,
      y: window.innerHeight - e.clientY,
    });
  };

  const appendMessage = (role, text) => {
    setMessages((m) => [
      ...m,
      {
        role,
        text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  const sendMessage = async (overrideText) => {
    const finalText = typeof overrideText === "string" ? overrideText : input;
    if (!finalText.trim() || loading) return;

    appendMessage("user", finalText);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(
        API_URL,
        { message: finalText },
        { headers: { "Content-Type": "application/json" } }
      );

      const replyText = res.data?.reply || "No reply from server.";
      appendMessage("assistant", replyText);
    } catch (err) {
      const errorReply =
        err.response?.data?.reply ||
        "Server error. Please try again or contact +91 94823 84644.";
      appendMessage("assistant", errorReply);
    }

    setLoading(false);
  };

  // Intent-based suggestions
  const suggestionLabels = useMemo(() => {
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    const text = lastUser?.text?.toLowerCase() || "";

    const suggestions = [];

    if (/college|university|engineering|btech|mca|bca|degree/.test(text)) {
      suggestions.push("Show me project domains for my degree");
      suggestions.push("What are the best final year projects for my branch?");
    }

    if (/course|branch|stream|cse|ece|civil|mechanical/.test(text)) {
      suggestions.push("Suggest project ideas for my course");
      suggestions.push("Do you support mini projects for my course?");
    }

    if (/bangalore|tumakuru|mysore|location|near me|city|state/.test(text)) {
      suggestions.push("Can you help students outside my city?");
    }

    if (/exam|viva|internal|external|review/.test(text)) {
      suggestions.push("How do you help with viva preparation?");
      suggestions.push("Do you conduct mock project reviews?");
    }

    if (/fee|fees|cost|price|charge|payment/.test(text)) {
      suggestions.push("How much do you charge for a full project?");
      suggestions.push("Is payment in installments available?");
    }

    if (/placement|job|internship|career/.test(text)) {
      suggestions.push("Will this project help in placements?");
      suggestions.push("Do you provide guidance for interviews?");
    }

    if (suggestions.length === 0) {
      suggestions.push("Show services you provide");
      suggestions.push("How can I contact Shiksha Source?");
    }

    return suggestions.slice(0, 3);
  }, [messages]);

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
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-transform"
          >
            <ShikshaIcon size={22} />
            <span className="text-sm font-medium">Chat with Shiksha AI</span>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {open && (
        <div
          className="fixed z-50 w-96 max-w-[95vw] h-[520px] bg-white shadow-2xl rounded-2xl flex flex-col border border-gray-200"
          style={{ bottom: "20px", right: "20px" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white rounded-t-2xl">
            <div className="flex items-center gap-3">
              <ShikshaIcon size={28} />
              <div className="flex flex-col">
                <span className="font-semibold text-sm">Ask Shiksha</span>
                <span className="text-[11px] text-blue-100">
                  Smart help for colleges, courses & projects
                </span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-full hover:bg-white/15"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="max-w-[80%]">
                  <div
                    className={`rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-blue-600 text-white rounded-br-sm"
                        : "bg-white text-gray-900 rounded-bl-sm border border-gray-200 shadow-sm"
                    }`}
                  >
                    {m.role === "assistant" && (
                      <div className="flex items-center gap-1 mb-1">
                        <ShikshaIcon size={16} />
                        <span className="text-[10px] uppercase tracking-wide text-gray-500">
                          Shiksha Source
                        </span>
                      </div>
                    )}

                    <p className="whitespace-pre-wrap">{m.text}</p>
                  </div>

                  <p
                    className={`text-[10px] text-gray-400 mt-1 ${
                      m.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    {m.time}
                  </p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-700 border border-gray-200 rounded-2xl px-3 py-2 text-xs flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span>Shiksha AI is typing…</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {suggestionLabels.length > 0 && (
            <div className="px-3 pt-2 pb-1 bg-gray-50 border-t border-gray-100">
              <p className="text-[11px] text-gray-500 mb-1">
                Quick suggestions
              </p>

              <div className="flex flex-wrap gap-1.5">
                {suggestionLabels.map((label) => (
                  <SuggestionPill
                    key={label}
                    label={label}
                    onClick={(text) => sendMessage(text)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-2 bg-white border-t border-gray-200 flex items-center gap-2">
            <textarea
              rows={1}
              className="flex-1 resize-none border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ask about colleges, courses, fees or placements…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              disabled={loading}
            />

            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "…" : "➤"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}






















