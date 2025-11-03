import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  icon: Icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClass = variant === 'primary' ? 'btn-primary'
    : variant === 'secondary' ? 'btn-secondary'
    : 'btn-ghost';

  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {Icon && iconPosition === 'left' && <Icon size={20} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={20} />}
    </button>
  );
}
