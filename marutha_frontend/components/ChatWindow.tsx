import Card from './ui/Card'

export default function ChatWindow({ messages = [] }: { messages?: Array<{from: string; text: string}> }) {
  return (
    <Card className="flex flex-col h-[480px]">
      <div className="flex-1 overflow-auto space-y-3 p-3">
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[80%] p-2 rounded-lg ${m.from==='me' ? 'ml-auto bg-marutha-50' : 'bg-slate-100'}`}>
            <div className="text-sm">{m.text}</div>
          </div>
        ))}
      </div>

      <div className="border-t p-3">
        <form className="flex gap-2" onSubmit={(e)=>e.preventDefault()}>
          <input className="flex-1 rounded-md border px-3 py-2" placeholder="Type a message..." />
          <button className="px-4 py-2 rounded-md bg-marutha-500 text-white">Send</button>
        </form>
      </div>
    </Card>
  )
}