/**
 * Formatear teléfono a formato: +507 XXXX-XXXX
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");
  
  if (cleaned.length === 8) {
    return `+507 ${cleaned.slice(0, 4)}-${cleaned.slice(4)}`;
  }
  
  if (cleaned.length === 11 && cleaned.startsWith("507")) {
    const num = cleaned.slice(3);
    return `+507 ${num.slice(0, 4)}-${num.slice(4)}`;
  }
  
  return phone;
};

/**
 * Formatear nombre a capitalizado
 */
export const formatName = (name: string): string => {
  return name
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * Formatear fecha a formato legible
 */
export const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleDateString("es-PA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Formatear moneda en USD
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

/**
 * Truncar texto a cierta longitud
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};
