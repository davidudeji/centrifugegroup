import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'outline' | 'brand' | 'navy'
  size?: 'sm' | 'md'
  dot?: boolean
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  className,
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 tracking-[0.2px] font-medium',
    md: 'text-[12px] px-2.5 py-1 tracking-[0.2px] font-medium',
  }

  const variantStyles = {
    default: 'bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]',
    brand: 'bg-[#008DDA]/10 text-[#0077B6] border border-[#008DDA]/30',
    navy: 'bg-[#0F2C59]/10 text-[#0F2C59] border border-[#0F2C59]/25',
    success: 'bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]',
    warning: 'bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]',
    error: 'bg-[#FEE2E2] text-[#B91C1C] border border-[#FECACA]',
    info: 'bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]',
    neutral: 'bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]',
    outline: 'bg-transparent text-[#64748B] border border-[#CBD5E1]',
  }

  const dotColors = {
    default: 'bg-[#64748B]',
    brand: 'bg-[#008DDA]',
    navy: 'bg-[#0F2C59]',
    success: 'bg-[#10B981]',
    warning: 'bg-[#F59E0B]',
    error: 'bg-[#EF4444]',
    info: 'bg-[#0284C7]',
    neutral: 'bg-[#94A3B8]',
    outline: 'bg-[#94A3B8]',
  }

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 rounded-[4px] transition-colors',
          sizeStyles[size],
          variantStyles[variant],
          className
        )
      )}
      {...props}
    >
      {dot && (
        <span
          className={clsx('h-1.5 w-1.5 rounded-full shrink-0', dotColors[variant])}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  )
}
export default Badge
