export const PHONE = '+255716002790'
export const PHONE_DISPLAY = '+255 716 002 790'
export const WHATSAPP_NUMBER = '255716002790'
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`

export const generateWhatsAppLink = (message?: string) =>
  message ? `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}` : WHATSAPP_BASE
