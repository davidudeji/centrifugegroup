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
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F27A22] focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed select-none active:scale-[0.99]'

    const sizeStyles = {
      sm: 'text-xs px-3.5 py-1.5 rounded-[6px] gap-1.5',
      md: 'text-sm px-5 py-2.5 rounded-[6px] gap-2',
      lg: 'text-sm sm:text-base px-6 py-3 rounded-[6px] gap-2.5 font-semibold',
    }

    const variantStyles = {
      primary:
        'bg-[#F27A22] text-[#0F172A] font-semibold hover:bg-[#E06910] shadow-[0_1px_3px_rgba(242,122,34,0.3)]',
      secondary:
        'bg-[#334155] text-white hover:bg-[#1E293B]',
      dark:
        'bg-[#0F172A] text-white hover:bg-[#1E293B]',
      outline:
        'bg-white text-[#334155] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]',
      ghost:
        'bg-transparent text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]',
      'code-pill':
        'bg-[#F8FAFC] text-[#F27A22] border border-[#E2E8F0] font-mono text-xs px-3 py-1.5 rounded-[6px] hover:border-[#F27A22]/40',
      danger:
        'bg-[#FEF2F2] text-[#DC2626] border border-[#FCA5A5]/40 hover:bg-[#FEE2E2]',
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
