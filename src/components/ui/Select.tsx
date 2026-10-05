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
            className="block text-[12px] font-medium text-[#475569] tracking-[-0.1px]"
          >
            {label}
            {props.required && <span className="text-[#EF4444] ml-1">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          <select
            id={selectId}
            ref={ref}
            className={twMerge(
              clsx(
                'w-full bg-[#FFFFFF] text-[#1A1A1A] text-[14px] border rounded-[4px] py-2 pl-3.5 pr-9 appearance-none transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#008DDA]/20 focus:border-[#008DDA] disabled:bg-[#F8FAFC] disabled:cursor-not-allowed',
                error
                  ? 'border-[#EF4444] focus:border-[#EF4444]'
                  : 'border-[#CBD5E1] hover:border-[#94A3B8]',
                className
              )
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-white text-[#1A1A1A]">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 text-[#64748B] pointer-events-none flex items-center">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
        {error && (
          <p className="text-[12px] text-[#EF4444] font-medium flex items-center gap-1">
            <span>•</span> {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
export default Select
