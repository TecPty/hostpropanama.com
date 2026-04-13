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
  location: z.string().max(200).optional().or(z.literal("")),
  activationType: z.string().max(200).optional().or(z.literal("")),
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
      <span className="text-xs font-black uppercase tracking-[0.15em] text-black mb-3">
        {label} <span className="text-[#d4b200]">*</span>
      </span>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        {...(autoComplete && { autoComplete })}
        {...(maxLength && { maxLength })}
        className="w-full bg-white border-2 border-black/20 px-4 py-3 text-base text-black focus:border-[#d4b200] focus:outline-none transition-colors"
      />
      {error && <p className="text-xs text-red-600 font-bold mt-1">{error}</p>}
    </label>
  );
}

type SelectInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  options: string[];
  error?: string;
};

function SelectInput<T extends FieldValues>(props: SelectInputProps<T>) {
  const { label, name, register, options, error } = props;
  return (
    <label className="space-y-2">
      <span className="text-xs font-black uppercase tracking-[0.15em] text-black mb-3">
        {label} <span className="text-[#d4b200]">*</span>
      </span>
      <select
        {...register(name)}
        className="w-full bg-white border-2 border-black/20 px-4 py-3 text-base text-black focus:border-[#d4b200] focus:outline-none transition-colors"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-600 font-bold mt-1">{error}</p>}
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
      <span className="text-xs font-black uppercase tracking-[0.15em] text-black mb-3">
        {label} <span className="text-[#d4b200]">*</span>
      </span>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className="w-full bg-white border-2 border-black/20 px-4 py-3 text-base text-black focus:border-[#d4b200] focus:outline-none transition-colors resize-none"
      />
      {error && <p className="text-xs text-red-600 font-bold mt-1">{error}</p>}
    </label>
  );
}

export function LeadForm({ mode = 'activaciones' }: { mode?: 'booking' | 'activaciones' }) {
  const [state, setState] = useState<FormState>("idle");
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
        body: JSON.stringify({ ...data, leadMode: mode }),
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Banner Indicador */}
      <div className="bg-[#f9f3d9] border-l-4 border-[#d4b200] px-6 py-4 flex items-center gap-3">
        <div className="bg-black rounded-full p-2">
          <Send className="w-5 h-5 text-[#d4b200]" />
        </div>
        <span className="text-sm font-black uppercase tracking-wide text-black">
          {mode === 'booking' ? 'COTIZANDO BOOKING DE TALENTO' : 'COTIZANDO ACTIVACIÓN BTL'}
        </span>
      </div>

      {/* Fila 1: Nombre + Empresa */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput<LeadFormData>
          label="NOMBRE COMPLETO"
          name="name"
          register={register}
          error={errors.name?.message}
          placeholder="Nombre de la persona de contacto"
          maxLength={100}
        />
        <TextInput<LeadFormData>
          label="MARCA / CLIENTE"
          name="company"
          register={register}
          error={errors.company?.message}
          placeholder="Nombre de la empresa o marca"
          maxLength={100}
        />
      </div>

      {/* Fila 2: Email + Teléfono */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput<LeadFormData>
          label="EMAIL DE CONTACTO"
          name="email"
          register={register}
          error={errors.email?.message}
          placeholder="correo@empresa.com"
          type="email"
          autoComplete="email"
        />
        <TextInput<LeadFormData>
          label="TELÉFONO / CELULAR"
          name="phone"
          register={register}
          error={errors.phone?.message}
          placeholder="+507 6980-1194"
          autoComplete="tel"
          maxLength={20}
        />
      </div>

      {/* Fila 3: Tipo de servicio */}
      <SelectInput<LeadFormData>
        label={mode === 'booking' ? 'TIPO DE TALENTO' : 'TIPO DE EVENTO'}
        name="eventType"
        register={register}
        error={errors.eventType?.message}
        options={mode === 'booking'
          ? ['Bailarín', 'Moderador', 'Modelo']
          : ['Lanzamiento de producto', 'Evento corporativo', 'Feria comercial', 'Promoción en punto de venta']
        }
      />

      {/* Fila 4: Campos solo para Activaciones */}
      {mode === 'activaciones' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput<LeadFormData>
            label="LOCACIÓN"
            name="location"
            register={register}
            error={errors.location?.message}
            placeholder="Ciudad de Panamá, Colón, etc."
          />
          <SelectInput<LeadFormData>
            label="TIPO DE ACTIVACIÓN"
            name="activationType"
            register={register}
            error={errors.activationType?.message}
            options={['Sampling', 'Demostración', 'Experiencial', 'Roadshow']}
          />
        </div>
      )}

      {/* Brief */}
      <TextArea<LeadFormData>
        label="BRIEF CREATIVO / VOLUMEN"
        name="message"
        register={register}
        error={errors.message?.message}
        rows={4}
        maxLength={1000}
        placeholder="Describe cantidad de personal, estética buscada, fechas, etc..."
      />

      {/* Submit */}
      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full bg-black text-white py-4 px-8 font-black uppercase text-sm tracking-[0.15em] hover:bg-[#d4b200] hover:text-black transition-all flex items-center justify-center gap-3 disabled:opacity-70"
        >
          {state === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Procesando...
            </>
          ) : (
            <>
              Solicitar Cotización <Send className="h-4 w-4" />
            </>
          )}
        </button>
        <StatusBadge state={state} />
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
