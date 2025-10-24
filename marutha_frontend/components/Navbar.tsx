import Link from 'next/link'
import { HeartHandshake, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full bg-gradient-to-r from-marutha-50 to-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <HeartHandshake className="w-8 h-8 text-marutha-700" />
          <span className="font-semibold text-lg">Marutha Support</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/doctors">Doctors</Link>
          <Link href="/resources">Resources</Link>
          <Link
            href="/dashboard/patient"
            className="ml-4 px-3 py-2 rounded-md bg-marutha-500 text-white"
          >
            Dashboard
          </Link>
        </nav>

        <div className="md:hidden">
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </header>
  )
}
