import DoctorCard from '../../components/DoctorCard';
import { doctors } from '../../components/placeholders';

export default function Doctors() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Doctors</h1>
      <p className="text-slate-600">Filter by specialty, availability and more (placeholder).</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {doctors.map(d => (
          <DoctorCard key={d.id} doctor={d} />
        ))}
      </div>
    </div>
  );
}
