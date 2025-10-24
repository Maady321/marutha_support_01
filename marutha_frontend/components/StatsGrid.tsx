import Card from './ui/Card'

export default function StatsGrid() {
  const stats = [
    { label: 'Active Patients', value: 124 },
    { label: 'Volunteers', value: 42 },
    { label: 'Upcoming appointments', value: 7 },
    { label: 'Resources', value: 58 }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(s => (
        <Card key={s.label} className="p-4">
          <div className="text-sm text-slate-500">{s.label}</div>
          <div className="text-2xl font-semibold mt-2">{s.value}</div>
        </Card>
      ))}
    </div>
  )
}