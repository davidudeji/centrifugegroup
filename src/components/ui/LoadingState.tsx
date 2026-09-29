import React from 'react'

export interface LoadingStateProps {
  message?: string
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading platform data...',
}) => {
  return (
    <div className="py-16 flex flex-col items-center justify-center text-center">
      <div className="relative">
        <div className="w-10 h-10 border-2 border-[#E2E8F0] border-t-[#16C7D9] rounded-full animate-spin" />
      </div>
      <p className="mt-4 text-xs font-medium text-[#64748B]">{message}</p>
    </div>
  )
}
