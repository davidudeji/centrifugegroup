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
            className="block text-[12px] font-semibold text-[#334155]"
          >
            {label}
            {props.required && <span className="text-[#DC2626] ml-1">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          <select
            id={selectId}
            ref={ref}
            className={twMerge(
              clsx(
                'w-full bg-white text-[#0F172A] text-[13px] border rounded-[6px] py-2.5 pl-3.5 pr-9 appearance-none transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-[#F27A22]/30 focus:border-[#F27A22] disabled:bg-[#F8FAFC] disabled:cursor-not-allowed',
                error
                  ? 'border-[#DC2626] focus:border-[#DC2626]'
                  : 'border-[#E2E8F0] hover:border-[#CBD5E1]',
                className
              )
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-white text-[#0F172A]">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 text-[#94A3B8] pointer-events-none flex items-center">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
        {error && (
          <p className="text-[12px] text-[#DC2626] font-normal flex items-center gap-1">
            <span>•</span> {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
