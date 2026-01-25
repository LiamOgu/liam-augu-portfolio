import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Mon Portfolio
          </Link>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                À propos
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                Projets
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">
                Compétences
              </Link>
            </li>
            <li>
              <Link href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">
                Expérience
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-700 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
