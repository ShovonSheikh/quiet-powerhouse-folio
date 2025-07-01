
const About = () => {
  return (
    <section id="about" className="py-32 md:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-mono font-medium text-white">
            about me
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed mt-8">
            <p>
              I'm a developer who believes in the power of simplicity. While others are chasing the latest frameworks, 
              I'm focused on building things that just work—fast, clean, and reliable.
            </p>
            
            <p>
              My approach is straightforward: understand the problem, pick the right tools, and execute with precision. 
              I don't overcomplicate things, but I don't cut corners either.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new tech, optimizing workflows, or contributing to open source. 
              I believe great software should feel effortless to use, even when it's complex under the hood.
            </p>
          </div>
          
          <div className="pt-8">
            <div className="inline-block px-4 py-2 bg-secondary rounded-lg">
              <span className="font-mono text-primary">// currently available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
