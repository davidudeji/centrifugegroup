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
      'bg-white border border-[#E2E8F0] shadow-[0_1px_2px_rgba(0,0,0,0.04)]',
    bordered:
      'bg-white border border-[#E2E8F0]',
    subtle:
      'bg-[#F8FAFC] border border-[#E2E8F0]/80',
    dark:
      'bg-[#071521] border border-[#172333] text-white',
  }

  return (
    <div
      className={twMerge(
        clsx(
          'rounded-[12px] p-6 transition-all duration-200',
          variantStyles[variant],
          hoverEffect &&
            'hover:border-[#CBD5E1] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:-translate-y-0.5',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  )
}
