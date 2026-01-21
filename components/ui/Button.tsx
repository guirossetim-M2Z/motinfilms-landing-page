'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  // Tracking props for ninetwo-user-tracking
  'data-nt-ut-event'?: string;
  'data-nt-ut-category'?: string;
  'data-nt-ut-label'?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className,
      'data-nt-ut-event': event,
      'data-nt-ut-category': category,
      'data-nt-ut-label': label,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary';

    const variantStyles = {
      primary: 'bg-accent text-primary hover:bg-purple-400 border border-transparent', // Assuming primary is dark text, accent is bright background
      secondary: 'bg-transparent text-accent border border-accent hover:bg-accent hover:text-primary',
      ghost: 'bg-transparent text-text hover:bg-white/10 border border-transparent',
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const mergedClassName = twMerge(
      clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)
    );

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={mergedClassName}
        data-nt-ut-event={event}
        data-nt-ut-category={category}
        data-nt-ut-label={label}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };