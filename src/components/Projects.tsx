import { ExternalLink, Github, Star, Clock, Users } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Projects = () => {
  const projects = [
    {
      title: 'Temp Box',
      description: 'A fast, no-BS tool to generate and manage temporary email addresses. Privacy-first and easy to use with instant email generation.',
      longDescription: 'Built with React and Node.js, featuring real-time inbox management, auto-cleanup, and no registration required.',
      tech: ['React', 'Node.js', 'Tailwind CSS'],
      features: [
        'Instant email generation',
        'Real-time inbox updates',
        'Auto-cleanup system',
        'No registration required'
      ],
      metrics: {
        status: 'Live',
        type: 'Privacy Tool',
        build: 'Solo'
      },
      status: 'Live',
      featured: true,
      github: 'https://github.com/ShovonSheikh/temp-box',
      demo: 'https://tempbox.netlify.app',
      images: [
        'https://i.ibb.co/yc5V470R/temp-box-1.png',
        'https://i.ibb.co/yc5V470R/temp-box-2.png'
      ]
    },
    {
      title: 'Tele Drive',
      description: 'A cloud storage system powered by a Telegram channel. Works like a lightweight Google Drive with unlimited storage.',
      longDescription: 'Innovative cloud storage solution using Telegram Bot API, featuring file upload, folder management, and direct file links.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Telegram Bot API'],
      features: [
        'Upload & manage files',
        'Folder organization system',
        'Direct file links',
        'Unlimited Telegram storage'
      ],
      metrics: {
        status: 'Private',
        type: 'Cloud Storage',
        build: 'Solo'
      },
      status: 'Private',
      featured: true,
      github: '#',
      demo: '#',
      images: [
        'https://i.ibb.co/ZznwLr2B/tele-drive-1.png',
        'https://i.ibb.co/ZznwLr2B/tele-drive-2.png'
      ]
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 animate-slide-up mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-mono">
            <Star className="w-4 h-4" />
            Solo projects
          </div>
          
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white leading-tight">
            Projects that
            <span className="text-gradient"> solve problems</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of my solo projects built with modern technologies. 
            Each project focuses on solving real-world problems with clean, minimal design.
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
                          <div className="font-mono font-bold text-primary text-sm">{value}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {project.github !== '#' && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 px-6 py-3 border border-primary/30 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 hover-glow"
                        >
                          <Github className="w-4 h-4 group-hover:text-primary transition-colors" />
                          <span className="font-mono text-sm group-hover:text-primary transition-colors">View Code</span>
                        </a>
                      )}
                      {project.demo !== '#' && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover-lift"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="font-mono text-sm">Live Demo</span>
                        </a>
                      )}
                      {project.github === '#' && project.demo === '#' && (
                        <div className="flex items-center gap-2 px-6 py-3 bg-secondary/50 rounded-xl border border-primary/10">
                          <span className="font-mono text-sm text-muted-foreground">Private Repository</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.images.map((image, imageIndex) => (
                            <CarouselItem key={imageIndex}>
                              <div className="aspect-video rounded-2xl overflow-hidden border border-primary/20 hover-glow">
                                <img 
                                  src={image} 
                                  alt={`${project.title} screenshot ${imageIndex + 1}`}
                                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 bg-black/50 border-primary/30 hover:bg-primary/20" />
                        <CarouselNext className="right-4 bg-black/50 border-primary/30 hover:bg-primary/20" />
                      </Carousel>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground font-mono">
                        Scroll to preview • Click buttons below to visit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center pt-16 border-t border-primary/10">
          <div className="glass-strong p-12 rounded-3xl animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4">
              More projects coming soon
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm constantly learning and building new projects. Follow my journey on GitHub 
              to see what I'm working on next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/ShovonSheikh"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-primary text-primary-foreground font-mono font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover-lift inline-flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span>Follow on GitHub</span>
              </a>
              <a 
                href="#contact"
                className="group px-8 py-4 border border-primary/30 text-primary font-mono font-medium rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 hover-glow inline-flex items-center justify-center gap-2"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
