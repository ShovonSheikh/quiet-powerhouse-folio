/*
Add to global CSS for infinite scroll animation (if not already present):
.animate-infinite-scroll {
  animation: infinite-scroll 14s linear infinite;
}
@keyframes infinite-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
*/

import { 
  Palette, 
  Layers, 
  Zap,
  Shield,
  Sparkles,
  Cpu,
  Globe,
  Database,
  Code2,
  Rocket,
  GitBranch
} from 'lucide-react';
import { SiVercel, SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiSupabase, SiRender, SiNetlify, SiVite, SiGithub } from 'react-icons/si';
import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: SiReact, color: 'from-blue-400 to-blue-600' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'from-gray-600 to-gray-800' },
    { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-500 to-blue-700' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'from-green-500 to-green-700' },
    { name: 'Supabase', icon: SiSupabase, color: 'from-emerald-500 to-emerald-700' },
    { name: 'Vercel', icon: SiVercel, color: 'from-black to-gray-800' },
    { name: 'Render', icon: SiRender, color: 'from-purple-500 to-purple-700' },
    { name: 'Netlify', icon: SiNetlify, color: 'from-teal-500 to-teal-700' },
    { name: 'Vite', icon: SiVite, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Git & GitHub', icon: SiGithub, color: 'from-gray-700 to-gray-900' }
  ];

  // Enhanced: One seamless, perfectly looping row
  const seamlessRow = [...technologies, ...technologies];

  return (
    <section id="tech" className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 animate-slide-up mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-mono">
            <Zap className="w-4 h-4" />
            Technology stack
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Powered by
            <span className="text-gradient"> modern tech</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
            I work with cutting-edge technologies to build scalable, performant, and maintainable applications. 
            Here's my current tech arsenal.
          </p>
        </div>

        {/* Enhanced Sliding Technology Row - Blur Effects removed for edge-to-edge look */}
        <div className="mb-20 relative">
          {/* Fade overlays for edge fade-in/fade-out */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background via-background/80 to-transparent" />
          {/* Single Seamless Row - Professional Animation */}
          <div className="relative overflow-hidden">
            <div className="flex gap-16 whitespace-nowrap animate-infinite-scroll will-change-transform">
              {seamlessRow.map((tech, index) => (
                // Remove SpotlightCard from tech stack icons, use only div
                <div key={index} className="flex-shrink-0 group w-48 h-52 md:w-56 md:h-60 flex flex-col items-center justify-center">
                  <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${tech.color} p-5 flex items-center justify-center hover-lift hover-glow transition-all duration-300 shadow-xl`}>
                    <tech.icon className="w-16 h-16 md:w-20 md:h-20 text-white" />
                  </div>
                  <p className="text-center mt-5 font-mono text-lg md:text-xl text-muted-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-16 border-t border-primary/10">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-white">
              Ready to build something amazing?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto font-sans">
              Let's discuss how these technologies can bring your vision to life.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover-lift"
            >
              <span>Start a Project</span>
              <Zap className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
