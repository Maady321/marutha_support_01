import StatsGrid from '../../../components/StatsGrid'
import ChatWindow from '../../../components/ChatWindow'
import { sampleMessages } from '../../../components/placeholders'

export default function PatientDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Patient Dashboard</h1>
      <StatsGrid />

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold mb-2">Messages</h2>
          <ChatWindow messages={sampleMessages} />
        </div>
        <div>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 card-shadow">
              <div className="font-semibold">Upcoming Appointments</div>
              <div className="text-sm text-slate-500 mt-2">No appointments (placeholder)</div>
            </div>

            <div className="bg-white rounded-2xl p-4 card-shadow">
              <div className="font-semibold">Health Updates</div>
              <div className="text-sm text-slate-500 mt-2">Add daily logs to track symptoms.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}