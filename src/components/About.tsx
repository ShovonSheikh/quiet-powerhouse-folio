
import { Code, Zap, Target, Award } from 'lucide-react';

const About = () => {
  const principles = [
    {
      icon: Code,
      title: "Clean Architecture",
      description: "I believe in writing code that's not just functional, but elegant and maintainable."
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Every line of code is optimized for speed, efficiency, and exceptional user experience."
    },
    {
      icon: Target,
      title: "Solution Focused",
      description: "I don't just build features—I solve problems and create meaningful digital experiences."
    },
    {
      icon: Award,
      title: "Continuous Growth",
      description: "Always learning, always evolving, staying ahead of the technology curve."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-mono">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                About me
              </div>
              
              <h2 className="text-4xl md:text-6xl font-sans font-bold text-white leading-tight">
                Crafting digital experiences that 
                <span className="text-gradient"> matter</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                With over 5 years of experience in full-stack development, I specialize in creating 
                high-performance web applications that scale. I've had the privilege of working with 
                both innovative startups and established enterprises, delivering solutions that drive real business value.
              </p>
              
              <p>
                My expertise spans modern React ecosystems, Node.js backends, and cloud architecture. 
                I'm passionate about developer experience, performance optimization, and creating tools 
                that make complex problems simple.
              </p>
              
              <p>
                When I'm not coding, you'll find me contributing to open source projects, mentoring 
                upcoming developers, or exploring the latest in AI and web technologies.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 bg-secondary/50 rounded-lg border border-primary/20">
                <span className="font-mono text-primary font-medium">50+ Projects Delivered</span>
              </div>
              <div className="px-6 py-3 bg-secondary/50 rounded-lg border border-primary/20">
                <span className="font-mono text-primary font-medium">99.9% Uptime</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Principles Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className={`glass p-6 rounded-xl hover-lift hover-glow group animate-scale-in animate-stagger-${index + 1}`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="font-mono font-medium text-white text-lg mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Stats Section */}
        <div className="mt-24 pt-16 border-t border-primary/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "25+", label: "Happy Clients" },
              { number: "99.9%", label: "Uptime Record" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2 animate-fade-in animate-stagger-2">
                <div className="text-3xl md:text-4xl font-mono font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
