
import React from 'react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'purple' | 'red' | 'glass';
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
  const sizeMap = {
    sm: 'sm',
    md: 'default',
    lg: 'lg'
  } as const;
  
  return (
    <Button
      variant={variant}
      size={sizeMap[size]}
      className={cn(className)}
      {...props}
    >
      {children}
    </Button>
  );
};
