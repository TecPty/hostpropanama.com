/**
 * Utilidades para WhatsApp - Mensajes contextuales prellenados
 * HostPro Panamá
 */

const WHATSAPP_NUMBER = "50769801194";

export type WhatsAppContext =
  | "general"
  | "lead-form"
  | "talent-apply"
  | "plan-basic"
  | "plan-btl"
  | "plan-audiovisual"
  | "service-experiencias"
  | "service-corporativo"
  | "service-btl"
  | "service-audiovisual"
  | "urgente"
  | "cotizacion";

/**
 * Genera un link de WhatsApp con mensaje personalizado según el contexto
 */
export function getWhatsAppLink(context: WhatsAppContext = "general", customParams?: {
  name?: string;
  company?: string;
  eventType?: string;
  date?: string;
  service?: string;
}): string {
  const messages: Record<WhatsAppContext, string> = {
    general: "Hola, necesito información sobre los servicios de HostPro Panamá",
    
    "lead-form": customParams?.eventType 
      ? `Hola, estoy interesado en solicitar staff para ${customParams.eventType}${customParams.date ? ` el ${customParams.date}` : ''}. ¿Pueden ayudarme?`
      : "Hola, estoy interesado en solicitar staff para un evento. ¿Pueden ayudarme?",
    
    "talent-apply": "Hola, me gustaría obtener más información sobre cómo formar parte del equipo de HostPro",
    
    "plan-basic": "Hola, estoy interesado en el Pack 1 (Evento Corporativo Básico) - 2 talentos. ¿Pueden enviarme más información?",
    
    "plan-btl": "Hola, necesito cotización para el Pack 2 (Activación/BTL) - 3-4 talentos especializados. ¿Cuándo podemos hablar?",
    
    "plan-audiovisual": "Hola, necesito talento para producción audiovisual (Pack 3). ¿Podemos coordinar una llamada para dar detalles del proyecto?",
    
    "service-experiencias": "Hola, necesito talento para experiencias de marca. ¿Pueden ayudarme con perfiles AAA?",
    
    "service-corporativo": "Hola, requiero staff bilingüe para evento corporativo. ¿Tienen disponibilidad?",
    
    "service-btl": "Hola, necesito ejecutar una activación BTL. ¿Pueden apoyarme con brand ambassadors capacitados?",
    
    "service-audiovisual": "Hola, estoy produciendo contenido audiovisual y necesito talento profesional. ¿Tienen disponibilidad?",
    
    urgente: "🚨 URGENTE: Necesito staff para un evento próximo. ¿Pueden responder ahora?",
    
    cotizacion: customParams?.service
      ? `Hola, necesito cotización para ${customParams.service}${customParams.date ? ` el ${customParams.date}` : ''}. ¿Cuándo podemos hablar?`
      : "Hola, necesito una cotización personalizada para un evento. ¿Cuándo podemos hablar?",
  };

  const message = messages[context];
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Genera mensaje de WhatsApp a partir de datos del formulario
 */
export function getWhatsAppLinkFromFormData(data: {
  name: string;
  company?: string;
  eventType?: string;
  date?: string;
}): string {
  const parts = [
    `Hola, soy ${data.name}`,
    data.company ? `de ${data.company}` : '',
    data.eventType ? `. Necesito staff para ${data.eventType}` : '',
    data.date ? ` el ${data.date}` : '',
    '. ¿Pueden ayudarme?'
  ];
  
  const message = parts.filter(Boolean).join('');
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Número de WhatsApp formateado para mostrar
 */
export const WHATSAPP_DISPLAY = "+507 6980-1194";

/**
 * Genera link directo de WhatsApp (sin mensaje)
 */
export function getWhatsAppDirectLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}`;
}
