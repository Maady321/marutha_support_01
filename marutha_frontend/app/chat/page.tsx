import ChatWindow from '../../components/ChatWindow'
import { sampleMessages } from '../../components/placeholders'

export default function ChatPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <aside className="lg:col-span-1">
        <div className="bg-white p-4 rounded-2xl card-shadow">
          <div className="font-semibold">Doctors</div>
          <div className="mt-2 text-sm text-slate-500">List of doctors (placeholder)</div>
        </div>
      </aside>

      <div className="lg:col-span-3">
        <ChatWindow messages={sampleMessages} />
      </div>
    </div>
  )
}