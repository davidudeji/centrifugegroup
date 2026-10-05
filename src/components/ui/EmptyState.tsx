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
    <div className="py-14 px-4 flex flex-col items-center justify-center text-center border border-dashed border-[#CBD5E1] rounded-[8px] bg-[#FFFFFF]">
      <div className="h-11 w-11 rounded-[4px] bg-[#008DDA]/10 border border-[#008DDA]/30 flex items-center justify-center text-[#008DDA] mb-3">
        {icon || <FolderOpen className="h-5 w-5 text-[#008DDA]" />}
      </div>
      <h3 className="text-[15px] font-bold text-[#0F2C59] tracking-tight">{title}</h3>
      <p className="mt-1 text-[13px] text-[#64748B] max-w-sm leading-relaxed">{description}</p>
      {actionLabel && onAction && (
        <div className="mt-5">
          <Button variant="secondary" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  )
}
export default EmptyState
