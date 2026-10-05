import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'subtle' | 'dark'
  hoverEffect?: boolean
}

/**
 * Data Card Module (UI/UX Spec §3.3)
 * - Border Radius: 8px
 * - Background & Border: #FFFFFF fill with an explicit #E2E8F0 1px border profile. No deep drop shadows.
 * - Padding Matrix: 24px internal inset padding uniformly applied.
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hoverEffect = false,
  className,
  ...props
}) => {
  const variantStyles = {
    default:
      'bg-[#FFFFFF] border border-[#E2E8F0] text-[#1A1A1A]',
    bordered:
      'bg-[#FFFFFF] border border-[#E2E8F0] text-[#1A1A1A] shadow-xs',
    subtle:
      'bg-[#F5F7FA] border border-[#E2E8F0] text-[#1A1A1A]',
    dark:
      'bg-[#0F2C59] border border-[#1E3A8A] text-[#FFFFFF]',
  }

  return (
    <div
      className={twMerge(
        clsx(
          'rounded-[8px] p-6 transition-all duration-200 ease-in-out',
          variantStyles[variant],
          hoverEffect && 'hover:border-[#CBD5E1] hover:shadow-xs',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  )
}
export default Card
