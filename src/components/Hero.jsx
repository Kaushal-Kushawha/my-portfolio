import React from 'react';
import { Mail, FileText, ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon.jsx';

export default function Hero({ profile }) {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#E7E2DA]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
        <div className="lg:col-span-8 space-y-6">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C2593F] font-semibold block">
            Full Stack MERN Developer
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.12] text-[#1C1917] tracking-tight">
            Building full-stack MERN applications with responsive UIs and REST APIs.

          </h1>
          <p className="text-lg md:text-xl text-[#524E48] leading-relaxed max-w-2xl font-light">
           I am a Computer Science undergraduate with six months of MERN Stack internship experience. I build responsive React interfaces, develop REST APIs, and work with MongoDB to create practical full-stack web applications.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C1917] text-[#FBF9F5] text-xs uppercase tracking-widest font-mono hover:bg-[#C2593F] transition-colors"
            >
              <Mail className="w-4 h-4" />
              Initiate Conversation
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#D5CEC2] hover:border-[#1C1917] text-xs uppercase tracking-widest font-mono text-[#1C1917] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub Profile
              <ArrowUpRight className="w-3.5 h-3.5 text-[#736E65]" />
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#D5CEC2] hover:border-[#1C1917] text-xs uppercase tracking-widest font-mono text-[#1C1917] transition-colors"
            >
              <FileText className="w-4 h-4" />
              Review Resume
              <ArrowUpRight className="w-3.5 h-3.5 text-[#736E65]" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#E7E2DA] pt-8 lg:pt-0 lg:pl-10 space-y-6 text-sm">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#736E65] mb-2">
              Primary Focus
            </h3>
            <p className="text-[#1C1917] leading-relaxed">
              Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js, with a focus on REST API development, backend integration, and responsive Tailwind CSS interfaces.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#736E65] mb-2">
              Current Status
            </h3>
            <p className="text-[#1C1917] leading-relaxed">
              Open to full-time Full Stack MERN Developer opportunities, entry-level software engineering roles, and selected freelance projects.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#736E65] mb-2">
              Direct Line
            </h3>
            <a
              href={`mailto:${profile.email}`}
              className="text-[#C2593F] font-mono hover:underline break-all"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}