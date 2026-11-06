import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import {
  profile,
  experience,
  projects,
  skillGroups,
  education,
} from './data/portfolioData.js';

export default function App() {
  return (
    <div className="min-h-screen text-[#1C1917] bg-[#FBF9F5]">
      <Navbar profile={profile} />
      <main className="max-w-6xl mx-auto px-6">
        <Hero profile={profile} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Skills skillGroups={skillGroups} />
        <Education education={education} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}