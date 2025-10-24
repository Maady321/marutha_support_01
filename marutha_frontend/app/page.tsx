import Link from 'next/link'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl font-bold">Marutha Support</h1>
          <p className="mt-4 text-slate-600">Connecting palliative care patients, families, doctors, and volunteers for seamless support and compassionate coordination.</p>

          <div className="mt-6 flex gap-3">
            <Link href="/doctors"><Button>Find a Doctor</Button></Link>
            <Link href="/services"><Button className="bg-white text-marutha-600 border">Explore Services</Button></Link>
          </div>
        </div>

        <div>
          <Card>
            <div className="h-56 flex items-center justify-center text-slate-400">[Hero image / illustration here]</div>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-2 text-slate-600">We aim to make palliative care coordination simple and humane — connecting the right people, at the right time.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <h3 className="font-semibold">Care Coordination</h3>
          <p className="text-sm text-slate-500 mt-2">Simplify appointments, tasks, and messages.</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Volunteer Support</h3>
          <p className="text-sm text-slate-500 mt-2">Match volunteers to patients for practical help.</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Resource Library</h3>
          <p className="text-sm text-slate-500 mt-2">Articles, videos and care guidelines curated by experts.</p>
        </Card>
      </section>
    </div>
  )
}