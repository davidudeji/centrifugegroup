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
  highlightFlash?: boolean
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
  highlightFlash = false,
}) => {
  return (
    <Card className="p-6 flex flex-col justify-between bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-fin shadow-none">
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-medium uppercase tracking-[0.5px] text-[#64748B]">
          {title}
        </span>
        {icon && (
          <div className="h-8 w-8 rounded-[4px] bg-[#F5F7FA] border border-[#E2E8F0] text-[#008DDA] flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <span
          className={clsx(
            'text-[24px] font-bold tracking-tight text-[#1A1A1A] transition-colors rounded-[2px] px-1 -mx-1',
            highlightFlash && 'animate-data-flash'
          )}
        >
          {value}
        </span>
        {badgeText && (
          <span
            className={clsx(
              'text-[11px] font-semibold uppercase tracking-[0.5px] px-2 py-0.5 rounded-[4px] border',
              badgeVariant === 'warning' && 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]',
              badgeVariant === 'error' && 'bg-[#FEE2E2] text-[#B91C1C] border-[#FECACA]',
              badgeVariant === 'success' && 'bg-[#D1FAE5] text-[#065F46] border-[#A7F3D0]',
              badgeVariant === 'neutral' && 'bg-[#F1F5F9] text-[#475569] border-[#E2E8F0]'
            )}
          >
            {badgeText}
          </span>
        )}
      </div>

      {(change || description) && (
        <div className="mt-2.5 flex items-center gap-1.5 text-[12px] text-[#64748B]">
          {change && (
            <span
              className={clsx(
                'font-semibold flex items-center gap-0.5',
                isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'
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
export default StatCard
