'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Definimos os tipos básicos estendendo as props do Framer Motion
// Isso permite aceitar props tanto de botão quanto de âncora (link)
interface ButtonProps extends Omit<HTMLMotionProps<"button"> & HTMLMotionProps<"a">, "ref"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  target?: string;
  // Tracking props
  'data-nt-ut-event'?: string;
  'data-nt-ut-category'?: string;
  'data-nt-ut-label'?: string;
}

// O Ref agora pode ser um Botão OU um Link
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className,
      href,
      target,
      'data-nt-ut-event': event,
      'data-nt-ut-category': category,
      'data-nt-ut-label': label,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-300 ring-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary decoration-clone';

    const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
      primary: 'bg-accent text-primary border border-transparent',
      secondary: 'bg-transparent text-accent border border-accent hover:bg-accent hover:text-primary',
      ghost: 'bg-transparent text-text hover:bg-white/10 border border-transparent',
    };

    const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const mergedClassName = twMerge(
      clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)
    );

    // Lógica para link externo automático
    const isExternal = href?.startsWith('http') || href?.startsWith('//');
    const computedTarget = target || (isExternal ? '_blank' : undefined);
    const computedRel = computedTarget === '_blank' ? 'noopener noreferrer' : undefined;

    // Se tiver href, renderiza como <motion.a>
    if (href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={computedTarget}
          rel={computedRel}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={mergedClassName}
          data-nt-ut-event={event}
          data-nt-ut-category={category}
          data-nt-ut-label={label}
          {...props as HTMLMotionProps<"a">}
        >
          {children}
        </motion.a>
      );
    }

    // Caso contrário, renderiza como <motion.button>
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={mergedClassName}
        data-nt-ut-event={event}
        data-nt-ut-category={category}
        data-nt-ut-label={label}
        {...props as HTMLMotionProps<"button">}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };