import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon.jsx';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-20 border-b border-[#E7E2DA]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-4">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C2593F] font-semibold block mb-2">
            Selected Works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917]">
            Featured Projects
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-base text-[#524E48] leading-relaxed font-light">
            A selection of full-stack applications built with the MERN stack.
             </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="border border-[#E7E2DA] bg-[#F8F5EE] p-8 md:p-12 hover:border-[#D5CEC2] transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-[#E7E2DA] pb-6 mb-6">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917]">
                    {project.title}
                  </h3>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 border ${
                      project.status === 'Shipped'
                        ? 'border-[#C2593F] text-[#C2593F]'
                        : 'border-[#736E65] text-[#736E65]'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-[#736E65] mt-1 font-mono">
                  {project.type}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#D5CEC2] hover:border-[#1C1917] text-xs font-mono tracking-wider uppercase text-[#1C1917] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  Repository
                  <ArrowUpRight className="w-3 h-3 text-[#736E65]" />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1C1917] text-[#FBF9F5] hover:bg-[#C2593F] text-xs font-mono tracking-wider uppercase transition-colors"
                  >
                    Live Demo
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-base text-[#3E3A35] leading-relaxed mb-6 font-light max-w-3xl">
              {project.description}
            </p>

            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#736E65] mb-3">
                Key Features & Contributions
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {project.contributions.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="text-sm text-[#3E3A35] leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2593F] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#E7E2DA]">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#736E65] mb-3">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="font-mono text-xs px-3 py-1 bg-[#FBF9F5] border border-[#E7E2DA] text-[#3E3A35]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}