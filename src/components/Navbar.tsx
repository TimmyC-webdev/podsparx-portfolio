import { useEffect, useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../assets/podsparx-logo.png'

function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="fixed top-0 w-full z-50 bg-base-100/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-[90px] w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          <button onClick={toggleTheme} className="btn btn-ghost btn-circle btn-sm text-lg">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Mobile Right Side */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="btn btn-ghost btn-circle btn-sm text-lg">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button onClick={() => setMenuOpen(prev => !prev)} className="btn btn-ghost btn-circle btn-sm text-xl">
            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 border-t border-base-200 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            <a href="#about" onClick={closeMenu} className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#projects" onClick={closeMenu} className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
            <a href="#skills" onClick={closeMenu} className="text-sm font-medium hover:text-primary transition-colors">Skills</a>
            <a href="#contact" onClick={closeMenu} className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar