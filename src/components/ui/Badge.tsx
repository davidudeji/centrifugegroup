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
    default: 'bg-transparent text-[#b4b4b2] border border-[#333333]',
    violet: 'bg-[#f0b66d]/10 text-[#f0b66d] border border-[#f0b66d]/30',
    teal: 'bg-[#f0b66d]/10 text-[#f0b66d] border border-[#f0b66d]/30',
    success: 'bg-[#10b981]/10 text-[#34d399] border border-[#10b981]/25',
    warning: 'bg-[#f59e0b]/10 text-[#fbbf24] border border-[#f59e0b]/25',
    error: 'bg-[#ef4444]/10 text-[#f87171] border border-[#ef4444]/25',
    info: 'bg-[#3b82f6]/10 text-[#f0b66d] border border-[#3b82f6]/25',
    neutral: 'bg-[#1e1e1d] text-[#868684] border border-[#333333]',
    outline: 'bg-transparent text-[#868684] border border-[#333333]',
  }

  const dotColors = {
    default: 'bg-[#b4b4b2]',
    violet: 'bg-[#f0b66d]',
    teal: 'bg-[#f0b66d]',
    success: 'bg-[#34d399]',
    warning: 'bg-[#fbbf24]',
    error: 'bg-[#f87171]',
    info: 'bg-[#60a5fa]',
    neutral: 'bg-[#868684]',
    outline: 'bg-[#868684]',
  }

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 rounded-[50px] font-normal transition-colors',
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
