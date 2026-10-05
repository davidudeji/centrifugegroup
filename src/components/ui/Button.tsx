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
      'inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out disabled:opacity-40 disabled:cursor-not-allowed select-none active:scale-[0.99] rounded-[4px] cursor-pointer'

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4.5 py-2 gap-2',
      lg: 'text-base px-6 py-2.5 gap-2.5 font-semibold',
    }

    // Button state styling per UI/UX Spec §5.1
    const variantStyles = {
      primary:
        'bg-[#008DDA] text-[#FFFFFF] font-semibold hover:bg-[#0077B6] focus:outline-none focus:ring-2 focus:ring-[#0F2C59] focus:ring-offset-1 border border-transparent shadow-xs',
      secondary:
        'bg-transparent text-[#008DDA] border border-[#008DDA] hover:bg-[#008DDA] hover:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#008DDA]/40',
      dark:
        'bg-[#0F2C59] text-[#FFFFFF] hover:bg-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#008DDA] border border-transparent',
      outline:
        'bg-[#FFFFFF] text-[#1A1A1A] border border-[#E2E8F0] hover:bg-[#F5F7FA] hover:border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#008DDA]/30',
      ghost:
        'bg-transparent text-[#1A1A1A] hover:bg-[#E2E8F0]/60 hover:text-[#0F2C59] focus:outline-none',
      'code-pill':
        'bg-[#F5F7FA] text-[#0F2C59] border border-[#E2E8F0] font-mono text-xs px-2.5 py-1 hover:border-[#008DDA] hover:bg-[#FFFFFF]',
      danger:
        'bg-[#EF4444] text-[#FFFFFF] hover:bg-[#DC2626] focus:outline-none focus:ring-2 focus:ring-[#EF4444]/40 border border-transparent',
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
