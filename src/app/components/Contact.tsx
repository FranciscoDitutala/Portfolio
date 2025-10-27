"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, Send } from "lucide-react";

// Componente de contacto estilizado com Tailwind + framer-motion
// Export default para importação direta: `import ContactComponent from './ContactComponent'`

export default function ContactComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  function validate() {
    if (!name.trim() || !email.trim() || !message.trim()) return false;
    // validação simples do e-mail
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // Exemplo: enviar para /api/contact — implemente o endpoint no servidor
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacts" className="max-w-6xl mx-auto px-8 py-20   ">
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold">Contacte-nos</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Envie uma mensagem — responderemos assim que possível.
        </p>
      </motion.header>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Nome</span>
            <div className="flex items-center rounded-md border border-slate-200 dark:border-slate-700 px-3 py-2 bg-transparent focus-within:ring-2 focus-within:ring-indigo-300">
              <User className="w-4 h-4 text-slate-500 mr-2" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="bg-transparent outline-none w-full text-sm text-slate-900 dark:text-slate-100"
                aria-label="Nome"
                required
              />
            </div>
          </label>

          <label className="flex flex-col">
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Email</span>
            <div className="flex items-center rounded-md border border-slate-200 dark:border-slate-700 px-3 py-2 bg-transparent focus-within:ring-2 focus-within:ring-indigo-300">
              <Mail className="w-4 h-4 text-slate-500 mr-2" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@exemplo.com"
                type="email"
                className="bg-transparent outline-none w-full text-sm text-slate-900 dark:text-slate-100"
                aria-label="Email"
                required
              />
            </div>
          </label>
        </div>

        <label className="flex flex-col">
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Mensagem</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escreva a sua mensagem..."
            rows={6}
            className="resize-none rounded-md border border-slate-200 dark:border-slate-700 p-3 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-200"
            aria-label="Mensagem"
            required
          />
        </label>

        <div className="flex items-center justify-between gap-4">
          <div className="text-sm">
            {status === "success" && (
              <p className="text-green-600 dark:text-green-400">Mensagem enviada com sucesso. Obrigado!</p>
            )}
            {status === "error" && (
              <p className="text-rose-600 dark:text-rose-400">Ocorreu um erro. Verifique os campos e tente novamente.</p>
            )}
          </div>

          <button
            type="submit"
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:opacity-60 disabled:cursor-not-allowed ${
              loading ? "bg-indigo-400 text-white" : "bg-indigo-600 text-white hover:shadow-md"
            }`}
            disabled={loading}
            aria-disabled={loading}
          >
            <Send className="w-4 h-4" />
            <span>{loading ? "A enviar..." : "Enviar mensagem"}</span>
          </button>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">ou envie um email para <a href="mailto:contact@seusite.com" className="underline">contact@seusite.com</a></p>
      </form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.12 }}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        <div className="rounded-lg border border-slate-100 dark:border-slate-800 p-4">
          <h4 className="text-sm font-semibold">Localização</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Cidade, País</p>
        </div>

        <div className="rounded-lg border border-slate-100 dark:border-slate-800 p-4">
          <h4 className="text-sm font-semibold">Horário</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Seg — Sex · 9:00 — 18:00</p>
        </div>
      </motion.div>
    </section>
  );
}
