import { doctors } from '../../../components/placeholders'
import Card from '../../../components/ui/Card'
import Button from '../../../components/ui/Button'
import Image from 'next/image'

export default function DoctorProfile({ params }: { params: { id: string } }) {
  const doc = doctors.find(d => d.id === params.id) || doctors[0]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        <Card>
          <div className="flex gap-4 items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden bg-slate-100">
              <Image src={doc.image} alt={doc.name} width={112} height={112} style={{objectFit:'cover'}} />
            </div>
            <div>
              <div className="text-2xl font-semibold">{doc.name}</div>
              <div className="text-slate-500">{doc.specialty}</div>
              <div className="mt-2">Available: {doc.available}</div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold">Reviews</h3>
          <div className="text-sm text-slate-500 mt-2">Patient reviews will appear here (placeholder).</div>
        </Card>
      </div>

      <div className="space-y-4">
        <Card>
          <div className="text-sm text-slate-500">Contact</div>
          <div className="mt-2"><Button>Book Appointment</Button></div>
        </Card>

        <Card>
          <h3 className="font-semibold">Availability</h3>
          <div className="text-sm text-slate-500 mt-2">{doc.available}</div>
        </Card>
      </div>
    </div>
  )
}