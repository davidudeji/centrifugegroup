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
    <div className="py-14 px-4 flex flex-col items-center justify-center text-center border border-dashed border-[#333333] rounded-[20px] bg-[#121212]">
      <div className="h-10 w-10 rounded-[4px] bg-[#1e1e1d] border border-[#333333] flex items-center justify-center text-[#f0b66d] mb-3">
        {icon || <FolderOpen className="h-5 w-5 text-[#f0b66d]" />}
      </div>
      <h3 className="text-[14px] font-semibold text-[#faf9f6] tracking-[-0.14px]">{title}</h3>
      <p className="mt-1 text-[13px] text-[#868684] max-w-sm">{description}</p>
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
