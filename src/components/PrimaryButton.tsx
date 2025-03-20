
import React from 'react';
import { cn } from '../lib/utils';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = "rounded-lg font-medium transition-all duration-300 ease-in-out";
  
  const variantClasses = {
    default: "bg-white text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
    outline: "bg-transparent border border-white text-white hover:bg-white/10"
  };
  
  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg"
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
