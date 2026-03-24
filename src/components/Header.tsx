'use client';

export function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Test Figma Front</h1>
        <ul className="flex gap-6">
          <li>
            <a href="/" className="hover:text-blue-100 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-100 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-100 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
