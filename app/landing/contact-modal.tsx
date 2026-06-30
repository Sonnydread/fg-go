/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const modalRef = useRef<HTMLDivElement>(null);

  // ✅ evitar SSR error
  useEffect(() => {
  setMounted(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  // 🔒 bloquear scroll + ESC + focus trap
  useEffect(() => {
    if (!open) return;

    // bloquear scroll
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      // cerrar con ESC
      if (e.key === "Escape") {
        onClose();
      }

      // focus trap
      if (e.key === "Tab") {
        const focusable = modalRef.current?.querySelectorAll<
          HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
        >("input, textarea, button");

        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // focus inicial
    setTimeout(() => {
      const firstInput = modalRef.current?.querySelector("input");
      firstInput?.focus();
    }, 100);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    onClose();
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-[9998]"
            initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
            animate={{ backdropFilter: "blur(8px)", opacity: 1 }}
            exit={{ backdropFilter: "blur(0px)", opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.25 }}
          >
            <div
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-gray-200 text-black rounded-2xl p-6 md:p-8 shadow-2xl relative"
            >
              {/* cerrar */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 cursor-pointer hover:text-[#2474c3] p-2 rounded-full hover:bg-white/10"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 pr-8">
                Contáctame
              </h2>

              <p className="text-black mb-6 text-lg font-semibold">
                Envíame un mensaje para resolver tus dudas.
              </p>

              <div className="space-y-4">
                <input
                  name="name"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-300 placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-[#2474c3]"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Tu correo"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-300 placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-[#2474c3]"
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Escribe tu mensaje..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-300 placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-[#2474c3]"
                />

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-[#2474c3] hover:bg-[#2474c3]/80 py-5 cursor-pointer rounded-lg text-white font-semibold transition"
                >
                  {loading ? "Enviando..." : "Enviar al correo"}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}