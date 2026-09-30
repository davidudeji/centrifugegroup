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
        <div className="w-8 h-8 border-2 border-[#333333] border-t-[#cbb0f7] rounded-full animate-spin" />
      </div>
      <p className="mt-4 text-[12px] font-mono text-[#868684]">{message}</p>
    </div>
  )
}
