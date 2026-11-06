import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon.jsx';

export default function Contact({ profile }) {
  return (
    <section className="py-24">
      <div className="border border-[#1C1917] bg-[#1C1917] text-[#FBF9F5] p-10 md:p-16 relative overflow-hidden">
        <div className="max-w-2xl space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C2593F]">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-snug">
           Let’s build something meaningful together.
          </h2>
          <p className="text-sm md:text-base text-[#D5CEC2] font-light leading-relaxed">
            Looking for a Full Stack MERN Developer or planning a web project?
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C2593F] text-[#FBF9F5] font-mono text-xs uppercase tracking-widest hover:bg-[#a84931] transition-colors"
            >
              <Mail className="w-4 h-4" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#524E48] hover:border-[#FBF9F5] text-xs uppercase tracking-widest font-mono text-[#FBF9F5] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub Profile
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D5CEC2]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}