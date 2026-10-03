import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'outline' | 'violet' | 'teal'
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
    sm: 'text-[10px] px-2.5 py-0.5 uppercase tracking-[1px]',
    md: 'text-[10px] px-3 py-1 uppercase tracking-[1px]',
  }

  const variantStyles = {
    default: 'bg-[#FFF7ED] text-[#F27A22] border border-[#FDBA74]/30',
    violet: 'bg-[#FFF7ED] text-[#F27A22] border border-[#FDBA74]/30',
    teal: 'bg-[#F0FDF4] text-[#16A34A] border border-[#86EFAC]/30',
    success: 'bg-[#F0FDF4] text-[#16A34A] border border-[#86EFAC]/30',
    warning: 'bg-[#FFFBEB] text-[#D97706] border border-[#FCD34D]/30',
    error: 'bg-[#FEF2F2] text-[#DC2626] border border-[#FCA5A5]/30',
    info: 'bg-[#EFF6FF] text-[#2563EB] border border-[#93C5FD]/30',
    neutral: 'bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]',
    outline: 'bg-transparent text-[#475569] border border-[#E2E8F0]',
  }

  const dotColors = {
    default: 'bg-[#F27A22]',
    violet: 'bg-[#F27A22]',
    teal: 'bg-[#16A34A]',
    success: 'bg-[#16A34A]',
    warning: 'bg-[#D97706]',
    error: 'bg-[#DC2626]',
    info: 'bg-[#2563EB]',
    neutral: 'bg-[#94A3B8]',
    outline: 'bg-[#94A3B8]',
  }

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 rounded-[4px] font-semibold transition-colors',
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
