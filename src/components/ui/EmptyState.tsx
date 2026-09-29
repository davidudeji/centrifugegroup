import React from 'react'
import { FolderOpen } from 'lucide-react'
import { Button } from './Button'

export interface EmptyStateProps {
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
  icon?: React.ReactNode
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionLabel,
  onAction,
  icon,
}) => {
  return (
    <div className="py-14 px-4 flex flex-col items-center justify-center text-center border border-dashed border-[#CBD5E1] rounded-[12px] bg-[#F8FAFC]">
      <div className="h-12 w-12 rounded-[10px] bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-center text-[#64748B] mb-3">
        {icon || <FolderOpen className="h-6 w-6 text-[#94A3B8]" />}
      </div>
      <h3 className="text-sm font-semibold text-[#111827]">{title}</h3>
      <p className="mt-1 text-xs text-[#64748B] max-w-sm">{description}</p>
      {actionLabel && onAction && (
        <div className="mt-4">
          <Button variant="secondary" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  )
}
