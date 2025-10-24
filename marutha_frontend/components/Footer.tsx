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