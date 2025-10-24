import Link from 'next/link'

export default function Sidebar({ role = 'patient' }: { role?: string }) {
  const items = {
    patient: [
      ['Overview', '/dashboard/patient'],
      ['Appointments', '/dashboard/patient#appointments'],
      ['Messages', '/dashboard/patient#messages']
    ],
    doctor: [
      ['Overview', '/dashboard/doctor'],
      ['Patients', '/dashboard/doctor#patients'],
      ['Schedule', '/dashboard/doctor#schedule']
    ],
    volunteer: [
      ['Tasks', '/dashboard/volunteer'],
      ['Assigned', '/dashboard/volunteer#assigned'],
      ['Activity', '/dashboard/volunteer#activity']
    ]
  }

  return (
    <aside className="w-64 hidden md:block">
      <div className="sticky top-24 space-y-2">
        {items[role as keyof typeof items].map(([label, href]) => (
          <Link key={label} href={href} className="block px-3 py-2 rounded-md hover:bg-slate-50">{label}</Link>
        ))}
      </div>
    </aside>
  )
}