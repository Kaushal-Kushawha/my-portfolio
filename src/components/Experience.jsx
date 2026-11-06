import React from 'react';
import { Building2, Calendar } from 'lucide-react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="py-20 border-b border-[#E7E2DA]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-4">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C2593F] font-semibold block mb-2">
            Work History
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917]">
            MERN Stack Experience
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-base text-[#524E48] leading-relaxed font-light">
            Six months of internship experience building web applications using React.js, Node.js, Express.js, and MongoDB.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {experience.map((item, index) => (
          <article
            key={index}
            className="border border-[#E7E2DA] bg-[#F8F5EE] p-8 md:p-10 transition-colors hover:border-[#D5CEC2]"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-[#E7E2DA] pb-6 mb-6">
              <div>
                <h3 className="font-serif text-2xl text-[#1C1917]">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-[#736E65] flex items-center gap-2 mt-1">
                  <Building2 className="w-4 h-4 text-[#C2593F]" />
                  {item.company}
                </p>
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#736E65] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C2593F]" />
                {item.period}
              </div>
            </div>

            <p className="text-sm md:text-base text-[#3E3A35] leading-relaxed mb-6 font-light">
              {item.summary}
            </p>

            <h4 className="font-mono text-xs uppercase tracking-widest text-[#736E65] mb-3">
              Key Contributions
            </h4>
            <ul className="space-y-2.5">
              {item.bullets.map((bullet, bulletIdx) => (
                <li
                  key={bulletIdx}
                  className="text-sm text-[#3E3A35] leading-relaxed flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C2593F] mt-2 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}