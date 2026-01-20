/**
 * Validación de emails
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validación de teléfono (Panamá: +507 XXXX-XXXX)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+507)?[\s-]?\d{4}[\s-]?\d{4}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

/**
 * Validación de texto no vacío
 */
export const isValidText = (text: string, minLength: number = 1): boolean => {
  return text.trim().length >= minLength;
};

/**
 * Validación de URL
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Sanitizar entrada de texto (remover caracteres maliciosos)
 */
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "");
};
