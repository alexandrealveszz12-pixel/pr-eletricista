import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { Button } from './Button';

interface ServiceCardProps {
  title: string;
  description?: string;
  Icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({ title, description, Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-start gap-4 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="p-3 rounded-xl bg-brand-light text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
        <Icon size={28} />
      </div>
      <div>
        <h3 className="text-xl font-bold font-display text-brand-black mb-2">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
      {/* <div className="mt-auto pt-4">
        <Button variant="outline" size="sm" className="w-full">
          Saiba Mais
        </Button>
      </div> */}
    </motion.div>
  );
}
