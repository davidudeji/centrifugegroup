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
            className="block text-[12px] font-normal text-[#b4b4b2] tracking-[-0.14px]"
          >
            {label}
            {props.required && <span className="text-[#ef4444] ml-1">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3 text-[#868684] pointer-events-none flex items-center">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={twMerge(
              clsx(
                'w-full bg-[#121212] text-[#faf9f6] text-[14px] placeholder:text-[#666469] border rounded-[7px] transition-colors duration-150 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#f0b66d] focus:border-[#f0b66d] disabled:bg-[#1e1e1d] disabled:text-[#666469] disabled:cursor-not-allowed tracking-[-0.14px]',
                leftIcon ? 'pl-9.5' : 'pl-3.5',
                rightIcon ? 'pr-9.5' : 'pr-3.5',
                error
                  ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[#ef4444]/30'
                  : 'border-[#333333] hover:border-[#868684]',
                className
              )
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 text-[#868684] flex items-center">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p className="text-[12px] text-[#f87171] font-normal flex items-center gap-1">
            <span>•</span> {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-[12px] text-[#666469]">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
