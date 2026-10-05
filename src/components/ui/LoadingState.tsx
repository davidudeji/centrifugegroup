import React from 'react'

export interface LoadingStateProps {
  message?: string
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading platform telemetry & records...',
}) => {
  return (
    <div className="py-16 flex flex-col items-center justify-center text-center">
      <div className="relative">
        <div className="w-8 h-8 border-2 border-[#E2E8F0] border-t-[#008DDA] rounded-full animate-spin" />
      </div>
      <p className="mt-3.5 text-[12px] font-medium text-[#64748B] tracking-wide">{message}</p>
    </div>
  )
}
export default LoadingState
