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
            className="block text-xs font-semibold text-[#1D242F] tracking-tight"
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
                'w-full bg-white text-[#111827] text-sm placeholder:text-[#94A3B8] border rounded-[8px] transition-all duration-150 py-2 focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/30 focus:border-[#16C7D9] disabled:bg-[#F3F4F6] disabled:text-[#9CA3AF] disabled:cursor-not-allowed',
                leftIcon ? 'pl-9.5' : 'pl-3.5',
                rightIcon ? 'pr-9.5' : 'pr-3.5',
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
          <p className="text-xs text-[#DC2626] font-medium flex items-center gap-1">
            <span>•</span> {error}
          </p>
        )}
        {!error && helperText && (
          <p className="text-xs text-[#64748B]">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
