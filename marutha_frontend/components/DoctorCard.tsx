import Card from './ui/Card'
import Button from './ui/Button'
import Image from 'next/image'

export default function DoctorCard({ doctor }: { doctor: any }) {
  return (
    <Card className="flex gap-4 items-center">
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
        <Image src={doctor.image} alt={doctor.name} width={80} height={80} style={{objectFit:'cover'}} />
      </div>
      <div className="flex-1">
        <div className="font-semibold">{doctor.name}</div>
        <div className="text-sm text-slate-500">{doctor.specialty}</div>
        <div className="text-xs text-slate-400 mt-1">Available: {doctor.available}</div>
      </div>
      <div>
        <Button>Book</Button>
      </div>
    </Card>
  )
}