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
      'bg-[#1e1e1d] border border-[#1e1e1d] text-[#faf9f6]',
    bordered:
      'bg-[#121212] border border-[#1e1e1d] text-[#faf9f6]',
    subtle:
      'bg-[#1e1e1d]/50 border border-[#333333] text-[#faf9f6]',
    dark:
      'bg-[#000000] border border-[#1e1e1d] text-[#faf9f6]',
  }

  return (
    <div
      className={twMerge(
        clsx(
          'rounded-[20px] p-6 transition-colors duration-150',
          variantStyles[variant],
          hoverEffect && 'hover:border-[#333333]',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  )
}
