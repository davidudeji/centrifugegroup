import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ChevronDown } from 'lucide-react'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: SelectOption[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-[12px] font-normal text-[#b4b4b2] tracking-[-0.14px]"
          >
            {label}
            {props.required && <span className="text-[#ef4444] ml-1">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          <select
            id={selectId}
            ref={ref}
            className={twMerge(
              clsx(
                'w-full bg-[#121212] text-[#faf9f6] text-[14px] border rounded-[7px] py-2.5 pl-3.5 pr-9 appearance-none transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-[#f0b66d] focus:border-[#f0b66d] disabled:bg-[#1e1e1d] disabled:cursor-not-allowed tracking-[-0.14px]',
                error
                  ? 'border-[#ef4444] focus:border-[#ef4444]'
                  : 'border-[#333333] hover:border-[#868684]',
                className
              )
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#121212] text-[#faf9f6]">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 text-[#868684] pointer-events-none flex items-center">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
        {error && (
          <p className="text-[12px] text-[#f87171] font-normal flex items-center gap-1">
            <span>•</span> {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
