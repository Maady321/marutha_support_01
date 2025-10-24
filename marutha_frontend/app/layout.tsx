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