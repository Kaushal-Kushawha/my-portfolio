import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education({ education }) {
  return (
    <section id="education" className="py-20 border-b border-[#E7E2DA]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-4">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C2593F] font-semibold block mb-2">
            Background
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917]">
            Education & Credentials
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-base text-[#524E48] leading-relaxed font-light">
            Academic foundation in computer science principles complemented by specialized industry training certificates.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 border border-[#E7E2DA] bg-[#F8F5EE] p-8">
          <div className="flex items-center gap-2 text-[#C2593F] mb-3">
            <GraduationCap className="w-5 h-5" />
            <span className="font-mono text-xs uppercase tracking-widest font-semibold text-[#1C1917]">
              Degree Program
            </span>
          </div>
          <h3 className="font-serif text-2xl text-[#1C1917] mb-1">
            {education.degree}
          </h3>
          <p className="text-sm font-medium text-[#736E65] mb-4">
            {education.institution}
          </p>
          <div className="inline-block font-mono text-xs uppercase tracking-widest text-[#736E65] bg-[#FBF9F5] border border-[#E7E2DA] px-3 py-1">
            Academic Timeline: {education.period}
          </div>
        </div>

        <div className="lg:col-span-5 border border-[#E7E2DA] bg-[#F8F5EE] p-8">
          <div className="flex items-center gap-2 text-[#C2593F] mb-3">
            <Award className="w-5 h-5" />
            <span className="font-mono text-xs uppercase tracking-widest font-semibold text-[#1C1917]">
              Verified Certifications
            </span>
          </div>
          <div className="space-y-4 pt-2">
            {education.certifications.map((cert, certIdx) => (
              <div
                key={certIdx}
                className="border-b border-[#E7E2DA] last:border-b-0 pb-3 last:pb-0"
              >
                <h4 className="text-sm font-serif text-[#1C1917]">
                  {cert.title}
                </h4>
                <p className="font-mono text-xs text-[#736E65] mt-0.5">
                  Issued by {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}