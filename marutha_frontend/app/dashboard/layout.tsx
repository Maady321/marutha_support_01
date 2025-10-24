import Sidebar from '../../components/Sidebar'
import type { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-6">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  )
}