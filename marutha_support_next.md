# Marutha Support — Frontend (Next.js 14 App Router, TypeScript, Tailwind v4)

This single-file project contains a minimal but complete frontend scaffold with placeholder data for Marutha Support. Copy files into your project root and install dependencies listed in package.json.

---

# package.json

```json
{
  "name": "marutha-support-frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "4.0.0",
    "@shadcn/ui": "*",
    "lucide-react": "^0.263.0",
    "clsx": "^1.2.1"
  },
  "devDependencies": {
    "typescript": "5.5.2",
    "postcss": "8.4.24",
    "autoprefixer": "10.4.14",
    "eslint": "8.45.0",
    "eslint-config-next": "14.0.0"
  }
}
```

---

# tailwind.config.ts

```ts
import { type Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        marutha: {
          50: '#f4fbff',
          100: '#eaf7ff',
          200: '#cfeeff',
          300: '#b4e6ff',
          400: '#7fd1ff',
          500: '#3fbfff',
          600: '#2f9fe6',
          700: '#247ab8',
          800: '#1b5b8a',
          900: '#123b59'
        },
        healing: '#8fd3bd',
        lavender: '#cdb4db'
      }
    }
  },
  plugins: []
} as Config
```

---

# postcss.config.cjs

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

---

# tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

---

# File tree (recommended)

```
/app
  /globals.css
  /layout.tsx
  /page.tsx             <-- Home
  /about/page.tsx
  /services/page.tsx
  /doctors/page.tsx
  /doctors/[id]/page.tsx
  /resources/page.tsx
  /(dashboard)
    /layout.tsx         <-- dashboard common layout
    /patient/page.tsx
    /doctor/page.tsx
    /volunteer/page.tsx
/components
  /ui
    Button.tsx
    Card.tsx
  Navbar.tsx
  Footer.tsx
  Sidebar.tsx
  DoctorCard.tsx
  ChatWindow.tsx
  StatsGrid.tsx
  placeholders.ts
/tailwind.config.ts
/package.json
/postcss.config.cjs
/tsconfig.json
/README.md
```

---

# app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #__next {
  height: 100%;
}

body {
  @apply bg-white text-slate-800 antialiased;
  font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
}

/* small utility for the subtle cards */
.card-shadow {
  box-shadow: 0 6px 18px rgba(16,24,40,0.06);
}
```

---

# app/layout.tsx (root layout)

```tsx
import './globals.css'
import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Marutha Support',
  description: 'Palliative care coordination platform'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
```

---

# components/Navbar.tsx

```tsx
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
          <Link href="/dashboard/patient" className="ml-4 px-3 py-2 rounded-md bg-marutha-500 text-white">Dashboard</Link>
        </nav>

        <div className="md:hidden">
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </header>
  )
}
```

---

# components/Footer.tsx

```tsx
export default function Footer() {
  return (
    <footer className="border-t mt-8 py-6 bg-white">
      <div className="container mx-auto px-4 text-sm text-slate-600 flex flex-col md:flex-row justify-between items-center">
        <div>© {new Date().getFullYear()} Marutha Support</div>
        <div className="mt-2 md:mt-0">Built with care • Serene blue • Healing green • Lavender</div>
      </div>
    </footer>
  )
}
```

---

# components/ui/Button.tsx

```tsx
import React from 'react'
import clsx from 'clsx'

export default function Button({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx('px-4 py-2 rounded-lg font-medium shadow-sm focus:outline-none',
        'bg-marutha-500 text-white hover:bg-marutha-600',
        className)}
    >
      {children}
    </button>
  )
}
```

---

# components/ui/Card.tsx

```tsx
import React, { ReactNode } from 'react'

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl p-4 card-shadow ${className}`}>
      {children}
    </div>
  )
}
```

---

# components/DoctorCard.tsx

```tsx
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
```

---

# components/Sidebar.tsx

```tsx
import Link from 'next/link'

export default function Sidebar({ role = 'patient' }: { role?: string }) {
  const items = {
    patient: [
      ['Overview', '/dashboard/patient'],
      ['Appointments', '/dashboard/patient#appointments'],
      ['Messages', '/dashboard/patient#messages']
    ],
    doctor: [
      ['Overview', '/dashboard/doctor'],
      ['Patients', '/dashboard/doctor#patients'],
      ['Schedule', '/dashboard/doctor#schedule']
    ],
    volunteer: [
      ['Tasks', '/dashboard/volunteer'],
      ['Assigned', '/dashboard/volunteer#assigned'],
      ['Activity', '/dashboard/volunteer#activity']
    ]
  }

  return (
    <aside className="w-64 hidden md:block">
      <div className="sticky top-24 space-y-2">
        {items[role as keyof typeof items].map(([label, href]) => (
          <Link key={label} href={href} className="block px-3 py-2 rounded-md hover:bg-slate-50">{label}</Link>
        ))}
      </div>
    </aside>
  )
}
```

---

# components/ChatWindow.tsx

```tsx
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
```

---

# components/StatsGrid.tsx

```tsx
import Card from './ui/Card'

export default function StatsGrid() {
  const stats = [
    { label: 'Active Patients', value: 124 },
    { label: 'Volunteers', value: 42 },
    { label: 'Upcoming appointments', value: 7 },
    { label: 'Resources', value: 58 }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(s => (
        <Card key={s.label} className="p-4">
          <div className="text-sm text-slate-500">{s.label}</div>
          <div className="text-2xl font-semibold mt-2">{s.value}</div>
        </Card>
      ))}
    </div>
  )
}
```

---

# components/placeholders.ts

```ts
export const doctors = [
  { id: 'd1', name: 'Dr. Asha Menon', specialty: 'Palliative Medicine', available: 'Mon, Wed - 10:00–12:00', image: '/images/doc1.jpg' },
  { id: 'd2', name: 'Dr. Rohit Kumar', specialty: 'Pain Specialist', available: 'Tue, Thu - 14:00–16:00', image: '/images/doc2.jpg' },
  { id: 'd3', name: 'Dr. Leena Rao', specialty: 'Palliative Care', available: 'Fri - 09:00–11:00', image: '/images/doc3.jpg' }
]

export const sampleMessages = [
  { from: 'doctor', text: 'Hello, how are you feeling today?' },
  { from: 'me', text: 'A bit tired, pain level 3/10.' }
]
```

---

# app/page.tsx (Home)

```tsx
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
```

---

# ... (rest of scaffold omitted here for brevity in the markdown file)

---

*End of file*
