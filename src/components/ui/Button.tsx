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
      'inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-[#cbb0f7] focus:ring-offset-1 focus:ring-offset-black disabled:opacity-40 disabled:cursor-not-allowed select-none active:scale-[0.99]'

    const sizeStyles = {
      sm: 'text-xs px-3.5 py-1.5 rounded-[33px] gap-1.5 tracking-[-0.14px]',
      md: 'text-sm px-5 py-2.5 rounded-[33px] gap-2 tracking-[-0.14px]',
      lg: 'text-sm sm:text-base px-6 py-3 rounded-[33px] gap-2.5 font-semibold tracking-[-0.18px]',
    }

    const variantStyles = {
      primary:
        'bg-[#ffffff] text-[#080808] font-semibold hover:bg-[#e3e2e0] shadow-none',
      secondary:
        'bg-[#1e1e1d] text-[#faf9f6] border border-[#333333] hover:bg-[#333333] hover:border-[#40403f]',
      dark:
        'bg-[#121212] text-[#faf9f6] border border-[#1e1e1d] hover:bg-[#1e1e1d]',
      outline:
        'bg-transparent text-[#b4b4b2] border border-[#333333] hover:border-[#b4b4b2] hover:text-[#faf9f6]',
      ghost:
        'bg-transparent text-[#b4b4b2] hover:text-[#faf9f6] hover:bg-[#1e1e1d]',
      'code-pill':
        'bg-[#121212] text-[#cbb0f7] border border-[#333333] font-mono text-xs px-3 py-1.5 rounded-[33px] hover:border-[#cbb0f7]',
      danger:
        'bg-[#ef4444]/15 text-[#fca5a5] border border-[#ef4444]/30 hover:bg-[#ef4444]/25',
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
