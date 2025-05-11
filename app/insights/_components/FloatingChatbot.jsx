"use client";
import { useState, useRef, useEffect } from "react";
import { Mic, Send, Sparkles, BotMessageSquare , X } from "lucide-react";

export default function FloatingChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ← added for collapse toggle
  const recognitionRef = useRef(null);


//handle send 
const [isTyping, setIsTyping] = useState(false);
const handleSend = async (customInput) => {
  const finalInput = customInput || input;
  if (!finalInput.trim()) return;

  const userMessage = { sender: "user", text: finalInput };
  setMessages((prev) => [...prev, userMessage]);
  setInput("");
  setIsTyping(true); // Start typing

  try {
    const res = await fetch("/api/insights", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: finalInput }),
    });

    const data = await res.json();
    const botMessage = {
      sender: "bot",
      text: data.answer?.answer || "Sorry, something went wrong.",
      followUpSuggestions: data.answer?.followUpSuggestions || [],
    };

    setMessages((prev) => [...prev, botMessage]);
  } catch (error) {
    setMessages((prev) => [...prev, {
      sender: "bot",
      text: "An error occurred while fetching the response.",
    }]);
  } finally {
    setIsTyping(false); // Stop typing
  }
};

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window))
      return alert("Speech recognition not supported.");
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      handleSend(transcript);
    };

    recognition.onerror = (e) => {
      console.error("Voice error:", e.error);
    };

    recognition.start();
    recognitionRef.current = recognition;
    setIsListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  

  return (
    <>
      {/* Toggle Button */}
   {!isOpen && (
  <button
    onClick={() => setIsOpen(true)}
    className="fixed bottom-6 right-4 p-0 shadow-none z-50 flex items-center justify-center"
  >
    <img src="/lioraicon4.gif" alt="chatbot" className="w-25 h-25" />
  </button>
)}

      {/* Chatbot UI */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 max-h-[80vh] rounded-xl shadow-lg border border-gray-200 bg-white flex flex-col z-50">
          {/* Header */}
          <div className="bg-purple-600 text-white text-sm font-semibold px-4 py-3 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-yellow-400" />
              Liora Assistant
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-gray-100 text-right"
                    : "bg-purple-50 text-left"
                }`}
              >
                {msg.sender === "user" ? (
                  msg.text
                ) : (
                  <div>
                    <p>{msg.text}</p>
                    {msg.followUpSuggestions &&
                      msg.followUpSuggestions.length > 0 && (
                        <ul className="mt-2 space-y-1">
                          {msg.followUpSuggestions.map((suggestion, index) => (
                            <li
                              key={index}
                              className="text-purple-600 cursor-pointer hover:underline"
                              onClick={() => handleSend(suggestion)}
                            >
                              • {suggestion}
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                )}
              </div>
            ))}
            {/* Typing indicator */}
  {isTyping && (
    <div className="text-sm text-gray-500 italic">Liora is typing...</div>
  )}
          </div>

          {/* Input */}
          <div className="p-3 flex items-center gap-2 border-t">
            <input
              type="text"
              className="flex-1 border rounded-lg px-3 py-1 text-sm outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={() => handleSend()}>
              <Send size={16} className="text-purple-600" />
            </button>
            <button onClick={isListening ? stopListening : startListening}>
              <Mic
                size={16}
                className={isListening ? "text-red-500" : "text-gray-500"}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
