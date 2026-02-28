/**
 * Componente de botón inline para WhatsApp
 * Uso en secciones de servicios, planes, etc.
 */

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, type WhatsAppContext } from "@/utils/whatsapp";

interface WhatsAppLinkButtonProps {
  context?: WhatsAppContext;
  message?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
}

export function WhatsAppLinkButton({
  context = "general",
  message,
  children,
  variant = "primary",
  size = "md",
  className = "",
  showIcon = true,
}: WhatsAppLinkButtonProps) {
  const link = message
    ? `https://wa.me/50769801194?text=${encodeURIComponent(message)}`
    : getWhatsAppLink(context);

  const variantStyles = {
    primary:
      "bg-[#25D366] text-white hover:bg-[#1ebe5b] shadow-md hover:shadow-lg",
    secondary:
      "bg-[#d4b200] text-black hover:bg-[#e6c700] shadow-md hover:shadow-lg",
    ghost:
      "bg-transparent border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center gap-2 
        rounded-full font-semibold
        transition-all duration-200
        hover:scale-105 active:scale-95
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {showIcon && <MessageCircle className="h-5 w-5" />}
      {children}
    </Link>
  );
}

/**
 * Botón compacto de WhatsApp (solo icono)
 */
export function WhatsAppIconButton({
  context = "general",
  message,
  className = "",
  size = 40,
}: {
  context?: WhatsAppContext;
  message?: string;
  className?: string;
  size?: number;
}) {
  const link = message
    ? `https://wa.me/50769801194?text=${encodeURIComponent(message)}`
    : getWhatsAppLink(context);

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center
        rounded-full bg-[#25D366] text-white
        hover:bg-[#1ebe5b] 
        transition-all duration-200
        hover:scale-110 active:scale-95
        shadow-md hover:shadow-lg
        ${className}
      `}
      style={{ width: size, height: size }}
      aria-label="Chat por WhatsApp"
    >
      <MessageCircle className="h-[60%] w-[60%]" />
    </Link>
  );
}
