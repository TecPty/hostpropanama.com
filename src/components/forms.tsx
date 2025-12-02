"use client";

import { useState } from "react";
import { useForm, type UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle, AlertTriangle, Send } from "lucide-react";

const leadSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  company: z.string().min(2, "Empresa requerida"),
  email: z.string().email("Email invalido"),
  phone: z.string().min(6, "Telefono requerido"),
  eventType: z.string().min(2, "Tipo de evento requerido"),
  date: z.string().optional(),
  message: z.string().min(5, "Cuentanos mas del evento"),
});

const talentSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email invalido"),
  phone: z.string().min(6, "Telefono requerido"),
  city: z.string().min(2, "Ciudad requerida"),
  role: z.string().min(2, "Rol o posicion"),
  languages: z.string().min(2, "Idiomas"),
  portfolio: z.string().url("Link invalido").optional().or(z.literal("")),
});

type LeadFormData = z.infer<typeof leadSchema>;
type TalentFormData = z.infer<typeof talentSchema>;

type FormState = "idle" | "loading" | "success" | "error";

function StatusBadge({ state }: { state: FormState }) {
  if (state === "success") {
    return (
      <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
        <CheckCircle className="h-4 w-4" /> Enviado
      </div>
    );
  }
  if (state === "error") {
    return (
      <div className="flex items-center gap-2 text-sm font-semibold text-red-400">
        <AlertTriangle className="h-4 w-4" /> Hubo un error. Intenta de nuevo.
      </div>
    );
  }
  return null;
}

function TextInput(props: {
  label: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: string;
  type?: string;
}) {
  const { label, name, placeholder, register, error, type = "text" } = props;
  return (
    <label className="space-y-2">
      <span className="text-sm text-white/80">{label}</span>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-3 text-sm text-white outline-none transition focus:border-[#d4b200] focus:ring-2 focus:ring-[#d4b200]/40"
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </label>
  );
}

function TextArea(props: {
  label: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: string;
  rows?: number;
}) {
  const { label, name, placeholder, register, error, rows = 4 } = props;
  return (
    <label className="space-y-2">
      <span className="text-sm text-white/80">{label}</span>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        rows={rows}
        className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-3 text-sm text-white outline-none transition focus:border-[#d4b200] focus:ring-2 focus:ring-[#d4b200]/40"
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </label>
  );
}

export function LeadForm() {
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
        <TextInput
          label="Nombre completo"
          name="name"
          register={register}
          error={errors.name?.message}
          placeholder="Nombre y apellido"
        />
        <TextInput
          label="Empresa"
          name="company"
          register={register}
          error={errors.company?.message}
          placeholder="Nombre de la empresa"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <TextInput
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          placeholder="correo@empresa.com"
          type="email"
        />
        <TextInput
          label="Telefono / WhatsApp"
          name="phone"
          register={register}
          error={errors.phone?.message}
          placeholder="+507 ..."
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <TextInput
          label="Tipo de evento"
          name="eventType"
          register={register}
          error={errors.eventType?.message}
          placeholder="Congreso, feria, lanzamiento..."
        />
        <TextInput
          label="Fecha tentativa"
          name="date"
          register={register}
          error={errors.date?.message}
          placeholder="dd/mm/aaaa"
        />
      </div>
      <TextArea
        label="Cuentanos sobre el evento"
        name="message"
        register={register}
        error={errors.message?.message}
        rows={4}
        placeholder="Numero de personas, horarios, dress code, idioma, ubicacion..."
      />
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
              Enviar solicitud <Send className="h-4 w-4" />
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
        <TextInput
          label="Nombre completo"
          name="name"
          register={register}
          error={errors.name?.message}
          placeholder="Nombre y apellido"
        />
        <TextInput
          label="Telefono / WhatsApp"
          name="phone"
          register={register}
          error={errors.phone?.message}
          placeholder="+507 ..."
        />
        <TextInput
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          placeholder="correo@ejemplo.com"
          type="email"
        />
        <TextInput
          label="Ciudad"
          name="city"
          register={register}
          error={errors.city?.message}
          placeholder="Ciudad donde resides"
        />
        <TextInput
          label="Rol deseado"
          name="role"
          register={register}
          error={errors.role?.message}
          placeholder="Azafata, host, brand ambassador..."
        />
        <TextInput
          label="Idiomas"
          name="languages"
          register={register}
          error={errors.languages?.message}
          placeholder="Espanol / Ingles / Otros"
        />
      </div>
      <TextInput
        label="Link a portafolio o Instagram"
        name="portfolio"
        register={register}
        error={errors.portfolio?.message}
        placeholder="https://..."
      />
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
              Enviar aplicacion <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
