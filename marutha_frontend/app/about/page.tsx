import Card from '../../components/ui/Card'

export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">About Marutha Support</h1>
      <p className="text-slate-600">Short description about mission and team.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card>
          <h3 className="font-semibold">Our Team</h3>
          <p className="text-sm text-slate-500 mt-2">Clinicians, volunteers, and builders.</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Why it matters</h3>
          <p className="text-sm text-slate-500 mt-2">Compassionate care is a right.</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Get involved</h3>
          <p className="text-sm text-slate-500 mt-2">Volunteer, donate, or refer a patient.</p>
        </Card>
      </div>
    </div>
  )
}