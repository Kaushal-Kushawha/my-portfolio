import React from 'react';
import { Code2, Layers, Database, Terminal } from 'lucide-react';

const iconsMap = {
  frontend: Code2,
  backend: Layers,
  database: Database,
  tools: Terminal,
};

export default function Skills({ skillGroups }) {
  return (
    <section id="skills" className="py-20 border-b border-[#E7E2DA]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-4">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C2593F] font-semibold block mb-2">
            Capabilities
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917]">
            Technical Proficiencies
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-base text-[#524E48] leading-relaxed font-light">
            Skills across frontend development, backend APIs, databases, and development tools.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, groupIdx) => {
          const IconComponent = iconsMap[group.category] || Code2;
          return (
            <div
              key={groupIdx}
              className="border border-[#E7E2DA] bg-[#F8F5EE] p-6 hover:border-[#D5CEC2] transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-4 text-[#C2593F]">
                <IconComponent className="w-5 h-5" />
                <h3 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#1C1917]">
                  {group.title}
                </h3>
              </div>
              <ul className="space-y-2 border-t border-[#E7E2DA] pt-4">
                {group.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="text-sm text-[#3E3A35] font-light flex items-center justify-between"
                  >
                    <span>{skill}</span>
                    <span className="w-1 h-1 bg-[#D5CEC2] rounded-full" />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}