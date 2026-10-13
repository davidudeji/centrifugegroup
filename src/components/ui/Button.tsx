import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost' | 'code-pill' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Global transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1) per spec §5.2
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed select-none active:scale-[0.99] rounded-[8px] cursor-pointer'

    const sizeStyles = {
      sm: 'text-xs px-3.5 py-2 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
    }

    // Button state styling per Centrifuge Brand Design System
    const variantStyles = {
      primary:
        'bg-[#E87916] text-[#FFFFFF] font-semibold hover:bg-[#D0690E] shadow-[0_4px_14px_rgba(232,121,22,0.28)] hover:shadow-[0_6px_18px_rgba(232,121,22,0.36)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#E87916] focus:ring-offset-2 border border-transparent',
      secondary:
        'bg-[#008DDA] text-[#FFFFFF] font-semibold hover:bg-[#0077B6] shadow-[0_4px_14px_rgba(0,141,218,0.25)] hover:shadow-[0_6px_18px_rgba(0,141,218,0.32)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#008DDA] focus:ring-offset-2 border border-transparent',
      dark:
        'bg-[#0B1F33] text-[#FFFFFF] font-semibold hover:bg-[#071521] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0B1F33] focus:ring-offset-2 border border-white/10 shadow-xs',
      outline:
        'bg-[#FFFFFF] text-[#0B1F33] font-semibold border border-[#CBD5E1] hover:bg-slate-50 hover:border-[#0B1F33]/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0B1F33]/20 shadow-2xs',
      ghost:
        'bg-transparent text-[#0B1F33] font-medium hover:bg-[#0B1F33]/5 hover:text-[#0B1F33] focus:outline-none',
      'code-pill':
        'bg-[#F7F9FA] text-[#0B1F33] border border-[#E2E8F0] font-mono text-xs px-2.5 py-1 hover:border-[#E87916] hover:bg-[#FFFFFF]',
      danger:
        'bg-[#DC2626] text-[#FFFFFF] font-semibold hover:bg-[#B91C1C] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/40 border border-transparent shadow-xs',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={twMerge(
          clsx(
            baseStyles,
            sizeStyles[size],
            variantStyles[variant],
            className
          )
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'
