import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'subtle' | 'dark'
  hoverEffect?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hoverEffect = false,
  className,
  ...props
}) => {
  const variantStyles = {
    default:
      'bg-white border border-[#E2E8F0] text-[#0F172A]',
    bordered:
      'bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]',
    subtle:
      'bg-[#F8FAFC] border border-[#E2E8F0] text-[#334155]',
    dark:
      'bg-[#0F172A] border border-white/10 text-white',
  }

  return (
    <div
      className={twMerge(
        clsx(
          'rounded-[12px] p-6 transition-all duration-200',
          variantStyles[variant],
          hoverEffect && 'hover:border-[#CBD5E1] hover:shadow-md',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  )
}
