import StatsGrid from '../../../components/StatsGrid'

export default function DoctorDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Doctor Dashboard</h1>
      <StatsGrid />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-4 card-shadow">
          <div className="font-semibold">Today's Schedule</div>
          <div className="text-sm text-slate-500 mt-2">No items (placeholder)</div>
        </div>
        <div className="bg-white rounded-2xl p-4 card-shadow">
          <div className="font-semibold">Assigned Patients</div>
          <div className="text-sm text-slate-500 mt-2">Placeholder list</div>
        </div>
      </div>
    </div>
  )
}