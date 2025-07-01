
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe, 
  Zap,
  Server,
  GitBranch,
  Layers,
  Shield
} from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: 'React', level: 95, years: '5+' },
        { name: 'Next.js', level: 90, years: '3+' },
        { name: 'TypeScript', level: 95, years: '4+' },
        { name: 'Tailwind CSS', level: 90, years: '3+' }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: 'Node.js', level: 90, years: '4+' },
        { name: 'Express', level: 85, years: '4+' },
        { name: 'Python', level: 80, years: '3+' },
        { name: 'GraphQL', level: 75, years: '2+' }
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: 'MongoDB', level: 90, years: '4+' },
        { name: 'PostgreSQL', level: 85, years: '3+' },
        { name: 'Redis', level: 80, years: '2+' },
        { name: 'Supabase', level: 85, years: '2+' }
      ]
    },
    {
      title: "Deployment",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: 'Vercel', level: 90, years: '3+' },
        { name: 'Netlify', level: 85, years: '3+' },
        { name: 'Render', level: 80, years: '2+' },
        { name: 'Docker', level: 75, years: '2+' }
      ]
    }
  ];

  const tools = [
    { icon: GitBranch, name: 'Git & GitHub', desc: 'Version control & collaboration' },
    { icon: Zap, name: 'Vite', desc: 'Build tools & optimization' },
    { icon: Shield, name: 'TypeScript', desc: 'Type safety & development' },
    { icon: Code, name: 'VS Code', desc: 'Development environment' }
  ];

  return (
    <section id="tech" className="py-24 md:py-32 px-6">
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

        {/* Technology Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`glass-strong p-8 rounded-3xl hover-lift animate-scale-in animate-stagger-${index + 1}`}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} p-3 flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-white text-2xl">{category.title}</h3>
                    <p className="text-muted-foreground text-sm">Core expertise</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono font-medium text-white">{tech.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-primary font-mono text-sm">{tech.level}%</span>
                          <span className="text-muted-foreground font-mono text-xs">{tech.years}</span>
                        </div>
                      </div>
                      <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Workflow */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4">
              Tools & Workflow
            </h3>
            <p className="text-muted-foreground">
              Essential tools that power my development workflow
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="group glass p-6 rounded-2xl text-center hover-lift hover-glow tech-item animate-scale-in animate-stagger-2"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-mono font-medium text-white mb-1">{tool.name}</h4>
                    <p className="text-muted-foreground text-sm">{tool.desc}</p>
                  </div>
                </div>
              </div>
            ))}
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
