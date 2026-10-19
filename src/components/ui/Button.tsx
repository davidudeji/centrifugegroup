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
        'bg-[#0756A5] text-[#FFFFFF] font-semibold hover:bg-[#073B70] shadow-[0_4px_14px_rgba(7,86,165,0.22)] hover:shadow-[0_6px_18px_rgba(7,86,165,0.3)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#1677D2] focus:ring-offset-2 border border-transparent',
      secondary:
        'bg-[#F28C28] text-[#102A43] font-semibold hover:bg-[#E87916] hover:text-[#102A43] shadow-[0_4px_14px_rgba(242,140,40,0.2)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F28C28] focus:ring-offset-2 border border-transparent',
      dark:
        'bg-[#073B70] text-[#FFFFFF] font-semibold hover:bg-[#102A43] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#1677D2] focus:ring-offset-2 border border-white/10 shadow-xs',
      outline:
        'bg-[#FFFFFF] text-[#0756A5] font-semibold border border-[#CBD5E1] hover:bg-[#F5F8FC] hover:border-[#0756A5]/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#1677D2]/30 shadow-2xs',
      ghost:
        'bg-transparent text-[#0756A5] font-medium hover:bg-[#EAF3FC] hover:text-[#073B70] focus:outline-none',
      'code-pill':
        'bg-[#F5F8FC] text-[#102A43] border border-[#E2E8F0] font-mono text-xs px-2.5 py-1 hover:border-[#F28C28] hover:bg-[#FFFFFF]',
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
