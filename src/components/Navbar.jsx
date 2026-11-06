import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export default function Navbar({ profile }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [ 
    { label: 'About', href: '#about' }, 
    { label: 'Experience', href: '#experience' }, 
    { label: 'Projects', href: '#projects' }, 
    { label: 'Skills', href: '#skills' }, 
    { label: 'Education', href: '#education' }, 
    { label: 'Contact', href: '#contact' }, 
  ];

  return (
    <>
      {/* Top Editorial Masthead Bar */}
      <div className="border-b border-[#E7E2DA] bg-[#F8F5EE] px-4 py-2 text-xs tracking-wider uppercase text-[#736E65]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 font-mono">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C2593F]" />
            {profile.location}
          </span>
          <span className="text-[#C2593F] font-semibold tracking-normal">
            {profile.status}
          </span>
          <span>Portfolio Vol. {new Date().getFullYear()}</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="border-b border-[#E7E2DA] sticky top-0 bg-[#FBF9F5]/95 backdrop-blur-xs z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <a
              href="#home"
              className="font-serif text-2xl tracking-tight text-[#1C1917] hover:text-[#C2593F] transition-colors"
            >
              {profile.name}
            </a>
            <p className="text-xs uppercase tracking-widest text-[#736E65] font-mono mt-0.5">
              {profile.role}
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-[#C2593F] transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-[#C2593F] transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-[#C2593F] transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-[#C2593F] transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-[#C2593F] transition-colors">
              Education
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="px-4 py-2 bg-[#1C1917] text-[#FBF9F5] hover:bg-[#C2593F] transition-colors text-xs uppercase tracking-widest font-mono"
            >
              Get in Touch
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1C1917]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E7E2DA] bg-[#F8F5EE] px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C2593F]"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C2593F]"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C2593F]"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C2593F]"
            >
              Skills
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C2593F]"
            >
              Education
            </a>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block text-center py-2 bg-[#1C1917] text-[#FBF9F5] uppercase font-mono text-xs tracking-widest mt-2"
            >
              Contact Direct
            </a>
          </div>
        )}
      </header>
    </>
  );
}