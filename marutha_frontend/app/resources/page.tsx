import Card from '../../components/ui/Card'

const resources = [
  { id: 1, title: 'Managing pain at home', type: 'article' },
  { id: 2, title: 'How to talk to children about illness', type: 'video' },
  { id: 3, title: 'Medication checklist', type: 'article' }
]

export default function Resources() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {resources.map(r => (
          <Card key={r.id}>
            <div className="font-semibold">{r.title}</div>
            <div className="text-sm text-slate-500">{r.type}</div>
          </Card>
        ))}
      </div>
    </div>
  )
}