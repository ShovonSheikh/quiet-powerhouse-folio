
import { 
  Code, 
  Database, 
  Cloud, 
  Zap,
  Server,
  GitBranch
} from 'lucide-react';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: Code, color: 'from-blue-400 to-blue-600' },
    { name: 'Next.js', icon: Code, color: 'from-gray-600 to-gray-800' },
    { name: 'TypeScript', icon: Code, color: 'from-blue-500 to-blue-700' },
    { name: 'Tailwind CSS', icon: Code, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', icon: Server, color: 'from-green-500 to-green-700' },
    { name: 'Supabase', icon: Database, color: 'from-emerald-500 to-emerald-700' },
    { name: 'Vercel', icon: Cloud, color: 'from-black to-gray-800' },
    { name: 'Render', icon: Cloud, color: 'from-purple-500 to-purple-700' },
    { name: 'Netlify', icon: Cloud, color: 'from-teal-500 to-teal-700' },
    { name: 'Vite', icon: Zap, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Git & GitHub', icon: GitBranch, color: 'from-gray-700 to-gray-900' }
  ];

  // Split technologies into 3 rows
  const row1 = [...technologies, ...technologies]; // Duplicate for seamless loop
  const row2 = [...technologies.slice(4), ...technologies.slice(0, 4), ...technologies.slice(4), ...technologies.slice(0, 4)];
  const row3 = [...technologies.slice(2), ...technologies.slice(0, 2), ...technologies.slice(2), ...technologies.slice(0, 2)];

  return (
    <section id="tech" className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 animate-slide-up mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-mono">
            <Zap className="w-4 h-4" />
            Technology stack
          </div>
          
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white leading-tight">
            Powered by
            <span className="text-gradient"> modern tech</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I work with cutting-edge technologies to build scalable, performant, and maintainable applications. 
            Here's my current tech arsenal.
          </p>
        </div>

        {/* Sliding Technology Rows */}
        <div className="space-y-8 mb-20">
          {/* Row 1 - Moving Right */}
          <div className="relative">
            <div className="flex animate-slide-right gap-8 whitespace-nowrap">
              {row1.map((tech, index) => (
                <div 
                  key={`row1-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} p-4 flex items-center justify-center hover-lift hover-glow transition-all duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-center mt-3 font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moving Left */}
          <div className="relative">
            <div className="flex animate-slide-left gap-8 whitespace-nowrap">
              {row2.map((tech, index) => (
                <div 
                  key={`row2-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} p-4 flex items-center justify-center hover-lift hover-glow transition-all duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-center mt-3 font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Moving Right */}
          <div className="relative">
            <div className="flex animate-slide-right-slow gap-8 whitespace-nowrap">
              {row3.map((tech, index) => (
                <div 
                  key={`row3-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} p-4 flex items-center justify-center hover-lift hover-glow transition-all duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-center mt-3 font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
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
            <h3 className="text-2xl font-sans font-bold text-white">
              Ready to build something amazing?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
