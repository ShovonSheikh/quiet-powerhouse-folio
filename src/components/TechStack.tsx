
const TechStack = () => {
  const technologies = [
    'React',
    'Next.js', 
    'Node.js',
    'Vite',
    'Tailwind CSS',
    'TypeScript',
    'MongoDB',
    'Express',
    'Git',
    'Docker'
  ];

  return (
    <section id="tech" className="py-32 md:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-mono font-medium text-white">
            tech stack
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-8">
            I work with modern tools that help me build fast, maintainable applications. 
            Here's what I reach for most often:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="tech-item p-6 bg-secondary rounded-xl text-center hover:bg-secondary/80 cursor-default"
              >
                <span className="font-mono font-medium text-secondary-foreground">
                  {tech}
                </span>
              </div>
            ))}
          </div>
          
          <div className="pt-12 text-center">
            <p className="font-mono text-muted-foreground">
              // always learning, always adapting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
