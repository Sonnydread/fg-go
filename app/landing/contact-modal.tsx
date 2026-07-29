/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, ChangeEvent, useMemo } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface FormData {
  name: string;
  celular: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  celular?: string;
  email?: string;
  message?: string;
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
    celular: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const modalRef = useRef<HTMLDivElement>(null);

  // ✅ evitar SSR error
  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔒 bloquear scroll + ESC + focus trap
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

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

    setTimeout(() => {
      const firstInput = modalRef.current?.querySelector("input");
      firstInput?.focus();
    }, 100);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  // Resetear formulario al cerrar
  useEffect(() => {
    if (!open) {
      setForm({ name: "", celular: "", email: "", message: "" });
      setErrors({});
      setTouched({});
      setLoading(false);
    }
  }, [open]);

  // ─── VALIDACIONES ───────────────────────────────────────────────
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    const trimmed = value.trim();

    switch (name) {
      case "name":
        if (!trimmed) return "El nombre es obligatorio";
        if (trimmed.length < 2) return "El nombre debe tener al menos 2 caracteres";
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(trimmed))
          return "Solo se permiten letras y espacios";
        break;

      case "celular":
        if (!trimmed) return "El celular es obligatorio";
        const cleaned = trimmed.replace(/[\s\-()]/g, "");
        if (!/^(\+?51)?9\d{8}$/.test(cleaned)) {
          return "Ingresa un celular peruano válido (ej: 999 999 999)";
        }
        break;

      case "email":
        if (!trimmed) return "El correo es obligatorio";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
          return "Ingresa un correo electrónico válido";
        }
        break;

      case "message":
        if (!trimmed) return "El mensaje es obligatorio";
        if (trimmed.length < 10) return "El mensaje debe tener al menos 10 caracteres";
        break;
    }

    return undefined;
  };

  // Calcula si el formulario está completamente válido
  const isFormValid = useMemo(() => {
    return (Object.keys(form) as (keyof FormData)[]).every(
      (key) => !validateField(key, form[key])
    );
  }, [form]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    (Object.keys(form) as (keyof FormData)[]).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ─── HANDLERS ───────────────────────────────────────────────────
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async () => {
    setTouched({
      name: true,
      celular: true,
      email: true,
      message: true,
    });

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          name: form.name.trim(),
          celular: form.celular.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      if (!res.ok) throw new Error("Error al enviar");

      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  const inputClass = (field: keyof FormErrors) =>
    `w-full p-3 rounded-lg bg-gray-300 placeholder:text-gray-600 outline-none transition
     focus:ring-2 ${
       errors[field]
         ? "ring-2 ring-red-500 focus:ring-red-500"
         : "focus:ring-[#009846]"
     }`;

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
                aria-label="Cerrar"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 pr-8">
                Contáctanos
              </h2>

              <p className="text-black mb-6 md:text-lg text-sm font-semibold">
                Envíanos un mensaje para resolver tus dudas.
              </p>

              <div className="space-y-4">
                {/* Nombre */}
                <div>
                  <input
                    name="name"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("name")}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-red-600 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Celular */}
                <div>
                  <input
                    name="celular"
                    placeholder="+51 999 999 999"
                    value={form.celular}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("celular")}
                    autoComplete="tel"
                    inputMode="tel"
                  />
                  {errors.celular && (
                    <p className="mt-1.5 text-sm text-red-600 font-medium">
                      {errors.celular}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Tu correo"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("email")}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-600 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Escribe tu mensaje..."
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("message")}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-red-600 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* BOTÓN */}
                <button
                  onClick={handleSubmit}
                  disabled={loading || !isFormValid}
                  className={`
                    w-full py-5 rounded-lg font-semibold transition
                    ${
                      loading || !isFormValid
                        ? "bg-gray-400 text-gray-200 opacity-70 cursor-not-allowed"
                        : "bg-[#009846] hover:bg-[#009846]/80 text-white cursor-pointer"
                    }
                  `}
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