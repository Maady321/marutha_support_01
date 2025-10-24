export default function VolunteerDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Volunteer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-4 card-shadow">
          <div className="font-semibold">Tasks</div>
          <div className="text-sm text-slate-500 mt-2">No tasks assigned (placeholder)</div>
        </div>
        <div className="bg-white rounded-2xl p-4 card-shadow">
          <div className="font-semibold">Activity Log</div>
          <div className="text-sm text-slate-500 mt-2">Recent activity will appear here.</div>
        </div>
      </div>
    </div>
  )
}