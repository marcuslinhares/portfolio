"use client";

import { useState, useRef, useEffect } from "react";
import { FiMessageSquare, FiX, FiSend, FiUser, FiCpu } from "react-icons/fi";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "Olá! 👋 Sou o assistente virtual do Marcus. Pergunte sobre habilidades, experiência, projetos ou qualquer coisa sobre ele!",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content: text }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        { role: "assistant", content: data.reply || "Desculpe, não consegui processar agora." },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Ops, ocorreu um erro. Tenta de novo!" },
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary-hover transition-all hover:scale-105 flex items-center justify-center"
        aria-label="Chat"
      >
        {open ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </button>

      {/* Janela de chat */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-96 rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-card-hover/50">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <FiCpu className="text-primary" size={16} />
            </div>
            <div>
              <p className="text-sm font-semibold">Assistente Marcus</p>
              <p className="text-[10px] text-muted-foreground">Pergunte sobre o Marcus</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-card-hover text-foreground rounded-bl-sm"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    {msg.role === "user" ? (
                      <FiUser size={11} className="opacity-70" />
                    ) : (
                      <FiCpu size={11} className="opacity-70" />
                    )}
                    <span className="text-[10px] opacity-70">
                      {msg.role === "user" ? "Você" : "IA"}
                    </span>
                  </div>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-card-hover rounded-xl rounded-bl-sm px-3 py-2 text-sm">
                  <span className="animate-pulse">Digitando...</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Pergunte algo..."
                className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="px-3 py-2 rounded-lg bg-primary text-white disabled:opacity-40 hover:bg-primary-hover transition-colors"
              >
                <FiSend size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
