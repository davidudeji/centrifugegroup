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
            className="block text-[12px] font-medium text-[#475569] tracking-[-0.1px]"
          >
            {label}
            {props.required && <span className="text-[#EF4444] ml-1">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3 text-[#64748B] pointer-events-none flex items-center">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={twMerge(
              clsx(
                'w-full bg-[#FFFFFF] text-[#1A1A1A] text-[14px] placeholder:text-[#94A3B8] border rounded-[4px] transition-colors duration-150 py-2 focus:outline-none focus:ring-2 focus:ring-[#008DDA]/20 focus:border-[#008DDA] disabled:bg-[#F8FAFC] disabled:text-[#94A3B8] disabled:cursor-not-allowed',
                leftIcon ? 'pl-9.5' : 'pl-3.5',
                rightIcon ? 'pr-9.5' : 'pr-3.5',
                error
                  ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]/20'
                  : 'border-[#CBD5E1] hover:border-[#94A3B8]',
                className
              )
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 text-[#64748B] flex items-center">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p className="text-[12px] text-[#EF4444] font-medium flex items-center gap-1">
            <span>•</span> {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-[12px] text-[#64748B]">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
