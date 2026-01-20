/**
 * Constantes globales de la aplicación
 */

// URLs
export const CONTACT_EMAIL = "contacto@hostpropanama.com";
export const PHONE_NUMBER = "+507 6980-1194";
export const WHATSAPP_URL = "https://wa.me/50769801194";
export const INSTAGRAM_URL = "https://instagram.com/hostpropanama";
export const TIKTOK_URL = "https://www.tiktok.com/@hostpropanama";

// Colores
export const COLORS = {
  primary: "#d4b200",
  secondary: "#d4b200",
  dark: "#0a0a0a",
  darkCard: "#1a1a1a",
  white: "#ffffff",
  lightGray: "#f5f5f5",
  mediumGray: "#999999",
} as const;

// Breakpoints
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  large: 1280,
  xl: 1536,
} as const;

// Duraciones de animación (ms)
export const ANIMATION = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 800,
} as const;

// Mensajes de validación
export const VALIDATION_MESSAGES = {
  emailRequired: "El email es requerido",
  emailInvalid: "El email no es válido",
  phoneRequired: "El teléfono es requerido",
  phoneInvalid: "El teléfono no es válido",
  nameRequired: "El nombre es requerido",
  nameTooShort: "El nombre debe tener al menos 3 caracteres",
  messageRequired: "El mensaje es requerido",
  messageTooShort: "El mensaje debe tener al menos 10 caracteres",
} as const;

// Límites
export const LIMITS = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  maxNameLength: 100,
  maxEmailLength: 255,
  maxMessageLength: 5000,
  maxPhoneLength: 20,
} as const;
