import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../lib/utils';
import { WHATSAPP_URL } from '../config';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href = WHATSAPP_URL, 
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:ring-4 focus:outline-none focus:ring-brand-red/50";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-red-700 shadow-lg shadow-brand-red/30",
    secondary: "bg-brand-yellow text-brand-black hover:bg-yellow-500 shadow-lg shadow-brand-yellow/30",
    outline: "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
    whatsapp: "bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/30",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {children}
    </motion.a>
  );
}
