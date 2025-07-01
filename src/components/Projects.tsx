import { ExternalLink, Github, Star, Clock, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'TempMail Pro',
      description: 'Enterprise-grade temporary email service with advanced security features, real-time inbox management, and API integration. Handling 10M+ emails monthly.',
      longDescription: 'Built with microservices architecture, featuring automated email parsing, spam detection, and multi-tenant support.',
      tech: ['React', 'Node.js', 'Redis', 'MongoDB', 'Docker', 'AWS'],
      features: [
        'Real-time email synchronization',
        'Advanced spam filtering',
        'RESTful API with rate limiting',
        'Multi-language support'
      ],
      metrics: {
        users: '50K+',
        uptime: '99.9%',
        emails: '10M+'
      },
      status: 'Live',
      featured: true,
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop'
    },
    {
      title: 'CloudDrive Telegram',
      description: 'Revolutionary cloud storage solution leveraging Telegram infrastructure. Unlimited storage with military-grade encryption and instant file sharing.',
      longDescription: 'Innovative approach to cloud storage using Telegram Bot API, featuring client-side encryption and distributed file management.',
      tech: ['Next.js', 'Telegram Bot API', 'TypeScript', 'Prisma', 'PostgreSQL'],
      features: [
        'Unlimited file storage',
        'End-to-end encryption',
        'Instant file sharing',
        'Cross-platform sync'
      ],
      metrics: {
        users: '25K+',
        storage: '500TB+',
        files: '2M+'
      },
      status: 'Beta',
      featured: true,
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
    },
    {
      title: 'DevTools Suite',
      description: 'Comprehensive development toolkit with code generators, API testing, and performance monitoring. Used by 1000+ developers worldwide.',
      longDescription: 'All-in-one developer productivity suite with intelligent code generation and advanced debugging capabilities.',
      tech: ['Vue.js', 'Express', 'SQLite', 'WebSockets', 'Docker'],
      features: [
        'Smart code generation',
        'API endpoint testing',
        'Performance profiling',
        'Team collaboration tools'
      ],
      metrics: {
        users: '1K+',
        tools: '50+',
        saves: '10K hrs'
      },
      status: 'Live',
      featured: false,
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop'
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 animate-slide-up mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-mono">
            <Star className="w-4 h-4" />
            Featured work
          </div>
          
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white leading-tight">
            Projects that
            <span className="text-gradient"> drive impact</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of my most impactful work, from startup MVPs to enterprise solutions 
            serving millions of users worldwide.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={index} className="animate-slide-up animate-stagger-2">
              <div className="project-card p-8 md:p-12 rounded-3xl hover-lift">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <h3 className="text-3xl md:text-4xl font-sans font-bold text-white">
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-mono rounded-full ${
                          project.status === 'Live' 
                            ? 'bg-primary/20 text-primary border border-primary/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      <p className="text-muted-foreground/80 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="font-mono text-sm text-primary uppercase tracking-wider">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-secondary/50 text-secondary-foreground font-mono text-sm rounded-lg border border-primary/10 hover:border-primary/30 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/30 rounded-xl border border-primary/10">
                      {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="font-mono font-bold text-primary text-lg">{value}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a 
                        href={project.github}
                        className="group flex items-center gap-2 px-6 py-3 border border-primary/30 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 hover-glow"
                      >
                        <Github className="w-4 h-4 group-hover:text-primary transition-colors" />
                        <span className="font-mono text-sm group-hover:text-primary transition-colors">View Code</span>
                      </a>
                      <a 
                        href={project.demo}
                        className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover-lift"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-mono text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-video rounded-2xl overflow-hidden border border-primary/20 hover-glow">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="space-y-12">
            <h3 className="text-2xl md:text-3xl font-sans font-bold text-white text-center">
              More Projects
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div key={index} className="project-card p-6 rounded-2xl hover-lift animate-scale-in animate-stagger-3">
                  <div className="space-y-6">
                    <div className="aspect-video rounded-lg overflow-hidden border border-primary/10">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-sans font-bold text-white text-lg">{project.title}</h4>
                        <span className={`px-2 py-1 text-xs font-mono rounded ${
                          project.status === 'Live' 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-secondary/50 text-secondary-foreground font-mono text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 text-muted-foreground font-mono text-xs">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-3 pt-2">
                        <a 
                          href={project.github}
                          className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span className="font-mono text-xs">Code</span>
                        </a>
                        <a 
                          href={project.demo}
                          className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="font-mono text-xs">Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
