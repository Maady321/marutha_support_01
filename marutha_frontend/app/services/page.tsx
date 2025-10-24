import Card from '../../components/ui/Card'

const services = [
  { title: 'Home Visits', desc: 'Nursing and medical checkups at home.' },
  { title: 'Medication Support', desc: 'Help managing prescriptions.' },
  { title: 'Counselling', desc: 'Emotional support for patients and families.' },
  { title: 'Volunteer Assistance', desc: 'Transport, errands and companionship.' }
]

export default function Services() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(s => (
          <Card key={s.title}>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-slate-500 mt-2">{s.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}