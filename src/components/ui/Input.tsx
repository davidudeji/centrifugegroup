import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-[12px] font-semibold text-[#334155]"
          >
            {label}
            {props.required && <span className="text-[#DC2626] ml-1">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3 text-[#94A3B8] pointer-events-none flex items-center">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={twMerge(
              clsx(
                'w-full bg-white text-[#0F172A] text-[13px] placeholder:text-[#94A3B8] border rounded-[6px] transition-colors duration-150 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#F27A22]/30 focus:border-[#F27A22] disabled:bg-[#F8FAFC] disabled:text-[#94A3B8] disabled:cursor-not-allowed',
                leftIcon ? 'pl-9' : 'pl-3.5',
                rightIcon ? 'pr-9' : 'pr-3.5',
                error
                  ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/20'
                  : 'border-[#E2E8F0] hover:border-[#CBD5E1]',
                className
              )
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 text-[#94A3B8] flex items-center">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p className="text-[12px] text-[#DC2626] font-normal flex items-center gap-1">
            <span>•</span> {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-[12px] text-[#94A3B8]">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
