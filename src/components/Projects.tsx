
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Temp Mail Service',
      description: 'A fast, no-BS tool to generate and manage temporary email addresses. Built for privacy and speed.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      features: [
        'Instant email generation',
        'Real-time inbox updates',
        'Auto-cleanup system',
        'Zero registration required'
      ],
      status: 'Live',
      github: '#',
      demo: '#'
    },
    {
      title: 'Telegram Storage Drive',
      description: 'Smart utility that turns a Telegram channel into cloud storage. Like Google Drive, but simpler and more private.',
      tech: ['Next.js', 'Telegram Bot API', 'TypeScript', 'Tailwind'],
      features: [
        'File upload & management',
        'Folder organization',
        'Direct download links',
        'Unlimited storage'
      ],
      status: 'Beta',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-mono font-medium text-white">
            selected work
          </h2>
          
          <div className="grid gap-8 md:gap-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card p-8 rounded-2xl border border-border">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <h3 className="text-2xl md:text-3xl font-mono font-medium text-white">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 text-xs font-mono rounded-full ${
                        project.status === 'Live' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground font-mono text-sm rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 pt-2">
                      <a 
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-primary transition-colors duration-300 group"
                      >
                        <Github className="w-4 h-4 group-hover:text-primary transition-colors" />
                        <span className="font-mono text-sm group-hover:text-primary transition-colors">code</span>
                      </a>
                      <a 
                        href={project.demo}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-mono text-sm">live demo</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-mono text-lg text-white">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
