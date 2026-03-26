"use client";

import { useState } from "react";
import {
  useForm,
  type FieldValues,
  type Path,
  type UseFormRegister,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle, AlertTriangle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const leadSchema = z.object({
  name: z.string().min(2, "Nombre debe tener al menos 2 caracteres").max(100, "Nombre muy largo"),
  company: z.string().max(100, "Nombre muy largo").optional().or(z.literal("")),
  email: z.string().email("Email inválido. Ej: correo@empresa.com"),
  phone: z.string()
    .min(8, "Teléfono debe tener al menos 8 dígitos")
    .max(20, "Teléfono muy largo")
    .regex(/^[\d\s\+\-\(\)]*$/, "Solo números, espacios y símbolos + - ( )"),
  eventType: z.string().max(200).optional().or(z.literal("")),
  date: z.string()
    .optional()
    .refine((val) => {
      if (!val || val === "") return true;
      const dateRegex = /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/;
      return dateRegex.test(val);
    }, "Formato: DD/MM/YYYY o YYYY-MM-DD"),
  message: z.string().max(1000, "Mensaje muy largo (máx. 1000 caracteres)").optional().or(z.literal("")),
});

const talentSchema = z.object({
  name: z.string().min(2, "Nombre debe tener al menos 2 caracteres").max(100, "Nombre muy largo"),
  email: z.string().email("Email inválido. Ej: correo@ejemplo.com"),
  phone: z.string()
    .min(8, "Teléfono debe tener al menos 8 dígitos")
    .max(20, "Teléfono muy largo")
    .regex(/^[\d\s\+\-\(\)]*$/, "Solo números, espacios y símbolos + - ( )"),
  city: z.string().min(2, "Ciudad requerida"),
  role: z.string().min(3, "Especifica tu rol deseado (mín. 3 caracteres)"),
  languages: z.string().min(2, "Especifica los idiomas que dominas"),
  portfolio: z.string()
    .refine((val) => {
      if (!val || val === "") return true;
      // Validar URL o Instagram handle
      const urlRegex = /^https?:\/\/.+/;
      const igRegex = /^@?[a-zA-Z0-9._]+$/;
      return urlRegex.test(val) || igRegex.test(val);
    }, "URL completa (https://...) o usuario de Instagram (@usuario)")
    .optional()
    .or(z.literal("")),
});

type LeadFormData = z.infer<typeof leadSchema>;
type TalentFormData = z.infer<typeof talentSchema>;

type FormState = "idle" | "loading" | "success" | "error";

function StatusBadge({ state }: { state: FormState }) {
  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 text-sm font-semibold text-emerald-400"
      >
        <CheckCircle className="h-4 w-4" /> ¡Enviado exitosamente!
      </motion.div>
    );
  }
  if (state === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 px-3 py-2 text-sm font-semibold text-red-400"
      >
        <AlertTriangle className="h-4 w-4" /> Error al enviar. Inténtalo de nuevo.
      </motion.div>
    );
  }
  return null;
}

type BaseInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: string;
  type?: string;
  autoComplete?: string;
  maxLength?: number;
};

function TextInput<T extends FieldValues>(props: BaseInputProps<T>) {
  const { label, name, placeholder, register, error, type = "text", autoComplete, maxLength } = props;
  return (
    <label className="space-y-2">
      <span className="text-sm text-white/80">
        {label} <span className="text-[#d4b200]">*</span>
      </span>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        {...(autoComplete && { autoComplete })}
        {...(maxLength && { maxLength })}
        className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-3 text-sm text-white outline-none transition focus:border-[#d4b200] focus:ring-2 focus:ring-[#d4b200]/40"
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </label>
  );
}

type TextAreaProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: string;
  rows?: number;
  maxLength?: number;
};

function TextArea<T extends FieldValues>(props: TextAreaProps<T>) {
  const { label, name, placeholder, register, error, rows = 4, maxLength } = props;
  return (
    <label className="space-y-2">
      <span className="text-sm text-white/80">
        {label} <span className="text-[#d4b200]">*</span>
      </span>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-3 text-sm text-white outline-none transition focus:border-[#d4b200] focus:ring-2 focus:ring-[#d4b200]/40 resize-none"
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </label>
  );
}

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [showOptional, setShowOptional] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setState("success");
      reset();
    } catch (error) {
      console.error(error);
      setState("error");
    } finally {
      setTimeout(() => setState("idle"), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex min-h-full flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <TextInput<LeadFormData>
          label="Nombre completo"
          name="name"
          register={register}
          error={errors.name?.message}
          placeholder="Nombre y apellido"
          autoComplete="name"
          maxLength={100}
        />
        <TextInput<LeadFormData>
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          placeholder="correo@empresa.com"
          type="email"
          autoComplete="email"
        />
      </div>
      <TextInput<LeadFormData>
        label="Teléfono / WhatsApp"
        name="phone"
        register={register}
        error={errors.phone?.message}
        placeholder="+507 6980-1194"
        autoComplete="tel"
        maxLength={20}
      />

      {/* Toggle campos opcionales */}
      <button
        type="button"
        onClick={() => setShowOptional(!showOptional)}
        className="flex items-center gap-2 text-xs text-[#d4b200] font-semibold hover:text-white transition-colors self-start"
      >
        <span className={`transition-transform duration-300 ${showOptional ? "rotate-45" : ""}`}>+</span>
        {showOptional ? "Ocultar detalles" : "Agregar más detalles (opcional)"}
      </button>

      <AnimatePresence>
        {showOptional && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <TextInput<LeadFormData>
                  label="Empresa (opcional)"
                  name="company"
                  register={register}
                  error={errors.company?.message}
                  placeholder="Nombre de la empresa"
                  autoComplete="organization"
                  maxLength={100}
                />
                <TextInput<LeadFormData>
                  label="Tipo de evento (opcional)"
                  name="eventType"
                  register={register}
                  error={errors.eventType?.message}
                  placeholder="Congreso, feria, lanzamiento..."
                />
              </div>
              <TextInput<LeadFormData>
                label="Fecha tentativa (opcional)"
                name="date"
                register={register}
                error={errors.date?.message}
                placeholder="DD/MM/YYYY"
              />
              <TextArea<LeadFormData>
                label="Cuéntanos sobre el evento (opcional)"
                name="message"
                register={register}
                error={errors.message?.message}
                rows={3}
                maxLength={1000}
                placeholder="Ej: 4 azafatas bilingües para congreso médico, Hotel Riu Plaza, dress code ejecutivo."
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-xs text-slate-400 italic mt-2">
        <span className="text-[#d4b200]">*</span> Solo nombre, email y teléfono son obligatorios
      </p>
      <div className="mt-auto flex items-center justify-between pt-2">
        <StatusBadge state={state} />
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex items-center gap-2 rounded-full bg-[#d4b200] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#e6c700] disabled:opacity-70"
        >
          {state === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
            </>
          ) : (
            <>
              Solicitar Cotización <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export function TalentForm() {
  const [state, setState] = useState<FormState>("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TalentFormData>({
    resolver: zodResolver(talentSchema),
  });

  const onSubmit = async (data: TalentFormData) => {
    setState("loading");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setState("success");
      reset();
    } catch (error) {
      console.error(error);
      setState("error");
    } finally {
      setTimeout(() => setState("idle"), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex min-h-full flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <TextInput<TalentFormData>
          label="Nombre completo"
          name="name"
          register={register}
          error={errors.name?.message}
          placeholder="Nombre y apellido"
          autoComplete="name"
          maxLength={100}
        />
        <TextInput<TalentFormData>
          label="Teléfono / WhatsApp"
          name="phone"
          register={register}
          error={errors.phone?.message}
          placeholder="+507 6980-1194"
          autoComplete="tel"
          maxLength={20}
        />
        <TextInput<TalentFormData>
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          placeholder="correo@ejemplo.com"
          type="email"
          autoComplete="email"
        />
        <TextInput<TalentFormData>
          label="Ciudad"
          name="city"
          register={register}
          error={errors.city?.message}
          placeholder="Panamá, Colón, David..."
        />
        <TextInput<TalentFormData>
          label="Rol deseado"
          name="role"
          register={register}
          error={errors.role?.message}
          placeholder="Azafata, host, modelo, brand ambassador..."
        />
        <TextInput<TalentFormData>
          label="Idiomas"
          name="languages"
          register={register}
          error={errors.languages?.message}
          placeholder="Español / Inglés / Francés..."
        />
      </div>
      <TextInput<TalentFormData>
        label="Link a portafolio o Instagram (opcional)"
        name="portfolio"
        register={register}
        error={errors.portfolio?.message}
        placeholder="https://instagram.com/usuario o @usuario"
      />
      <p className="text-xs text-slate-400 italic">
        <span className="text-[#d4b200]">*</span> Campos obligatorios (excepto portafolio)
      </p>
      <div className="mt-auto flex items-center justify-between pt-2">
        <StatusBadge state={state} />
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex items-center gap-2 rounded-full bg-[#d4b200] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#e6c700] disabled:opacity-70"
        >
          {state === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
            </>
          ) : (
            <>
              Aplicar Ahora <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
