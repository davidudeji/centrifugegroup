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
    <Card className="p-5 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[1px] text-[#94A3B8]">
          {title}
        </span>
        {icon && (
          <div className="h-8 w-8 rounded-[8px] bg-[#FFF7ED] border border-[#FDBA74]/30 text-[#F27A22] flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
      </div>

      <div className="mt-3 flex items-baseline justify-between">
        <span className="text-[26px] font-bold tracking-[-0.025em] text-[#0F172A]">
          {value}
        </span>
        {badgeText && (
          <span
            className={clsx(
              'text-[10px] font-semibold uppercase tracking-[1px] px-2 py-0.5 rounded-[4px] border',
              badgeVariant === 'warning' && 'bg-[#FFFBEB] text-[#D97706] border-[#FCD34D]/30',
              badgeVariant === 'error' && 'bg-[#FEF2F2] text-[#DC2626] border-[#FCA5A5]/30',
              badgeVariant === 'success' && 'bg-[#F0FDF4] text-[#16A34A] border-[#86EFAC]/30',
              badgeVariant === 'neutral' && 'bg-[#F8FAFC] text-[#64748B] border-[#E2E8F0]'
            )}
          >
            {badgeText}
          </span>
        )}
      </div>

      {(change || description) && (
        <div className="mt-2 flex items-center gap-1.5 text-[12px] text-[#94A3B8]">
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
