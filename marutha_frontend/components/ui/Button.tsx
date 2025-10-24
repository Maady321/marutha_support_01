import React from 'react'
import clsx from 'clsx'

export default function Button({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx('px-4 py-2 rounded-lg font-medium shadow-sm focus:outline-none',
        'bg-marutha-500 text-white hover:bg-marutha-600',
        className)}
    >
      {children}
    </button>
  )
}