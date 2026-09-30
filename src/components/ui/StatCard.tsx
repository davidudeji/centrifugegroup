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
    <Card className="p-5 flex flex-col justify-between bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-[1px] text-[#868684]">
          {title}
        </span>
        {icon && (
          <div className="h-7 w-7 rounded-[4px] bg-[#121212] border border-[#333333] text-[#cbb0f7] flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
      </div>

      <div className="mt-3 flex items-baseline justify-between">
        <span className="text-[24px] font-normal tracking-[-0.29px] text-[#faf9f6] font-mono">
          {value}
        </span>
        {badgeText && (
          <span
            className={clsx(
              'text-[10px] font-mono uppercase tracking-[1px] px-2 py-0.5 rounded-[50px] border',
              badgeVariant === 'warning' && 'bg-[#f59e0b]/10 text-[#fbbf24] border-[#f59e0b]/30',
              badgeVariant === 'error' && 'bg-[#ef4444]/10 text-[#f87171] border-[#ef4444]/30',
              badgeVariant === 'success' && 'bg-[#10b981]/10 text-[#34d399] border-[#10b981]/30',
              badgeVariant === 'neutral' && 'bg-[#121212] text-[#868684] border-[#333333]'
            )}
          >
            {badgeText}
          </span>
        )}
      </div>

      {(change || description) && (
        <div className="mt-2 flex items-center gap-1.5 text-[12px] text-[#868684]">
          {change && (
            <span
              className={clsx(
                'font-mono font-medium',
                isPositive ? 'text-[#34d399]' : 'text-[#f87171]'
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
