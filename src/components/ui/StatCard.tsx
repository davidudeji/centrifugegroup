import React from 'react'
import { Card } from './Card'
import { clsx } from 'clsx'

export interface StatCardProps {
  title: string
  value: string | number
  change?: string
  isPositive?: boolean
  icon?: React.ReactNode
  description?: string
  badgeText?: string
  badgeVariant?: 'success' | 'warning' | 'error' | 'neutral'
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon,
  description,
  badgeText,
  badgeVariant = 'neutral',
}) => {
  return (
    <Card className="p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
          {title}
        </span>
        {icon && (
          <div className="h-8 w-8 rounded-[8px] bg-[#F1F5F9] text-[#0B1F33] flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
      </div>

      <div className="mt-3 flex items-baseline justify-between">
        <span className="text-2xl font-bold tracking-tight text-[#111827] font-heading">
          {value}
        </span>
        {badgeText && (
          <span
            className={clsx(
              'text-[11px] font-medium px-2 py-0.5 rounded-[4px]',
              badgeVariant === 'warning' && 'bg-[#FEF3C7] text-[#92400E]',
              badgeVariant === 'error' && 'bg-[#FEE2E2] text-[#991B1B]',
              badgeVariant === 'success' && 'bg-[#DCFCE7] text-[#166534]',
              badgeVariant === 'neutral' && 'bg-[#F1F5F9] text-[#475569]'
            )}
          >
            {badgeText}
          </span>
        )}
      </div>

      {(change || description) && (
        <div className="mt-2 flex items-center gap-1.5 text-xs text-[#64748B]">
          {change && (
            <span
              className={clsx(
                'font-semibold',
                isPositive ? 'text-[#16A34A]' : 'text-[#DC2626]'
              )}
            >
              {isPositive ? '↑' : '↓'} {change}
            </span>
          )}
          {description && <span>{description}</span>}
        </div>
      )}
    </Card>
  )
}
