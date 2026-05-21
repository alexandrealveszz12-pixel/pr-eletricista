import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { WHATSAPP_URL } from '../config';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 260, 
        damping: 20,
        delay: 1
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </motion.a>
  );
}
