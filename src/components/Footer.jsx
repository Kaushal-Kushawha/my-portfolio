import React from 'react';

export default function Footer({ profile }) {
  return (
    <footer className="border-t border-[#E7E2DA] bg-[#F8F5EE] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#736E65]">
        <div>
          &copy; {new Date().getFullYear()} {profile.name}. Lucknow, Uttar Pradesh.
        </div>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-[#1C1917] transition-colors">
            Back to Top
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[#1C1917] transition-colors"
          >
            Email Directly
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1C1917] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}