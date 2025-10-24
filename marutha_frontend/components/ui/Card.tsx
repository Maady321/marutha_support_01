import React, { ReactNode } from 'react'

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl p-4 card-shadow ${className}`}>
      {children}
    </div>
  )
}