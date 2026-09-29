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
            className="block text-xs font-semibold text-[#1D242F] tracking-tight"
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
                'w-full bg-white text-[#111827] text-sm border rounded-[8px] py-2 pl-3.5 pr-9 appearance-none transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/30 focus:border-[#16C7D9] disabled:bg-[#F3F4F6] disabled:cursor-not-allowed',
                error
                  ? 'border-[#DC2626] focus:border-[#DC2626]'
                  : 'border-[#E2E8F0] hover:border-[#CBD5E1]',
                className
              )
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 text-[#64748B] pointer-events-none flex items-center">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
        {error && (
          <p className="text-xs text-[#DC2626] font-medium flex items-center gap-1">
            <span>•</span> {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
