import { Code, Zap, Target, Award } from 'lucide-react';

const About = () => {
  const principles = [
    {
      icon: Code,
      title: "Clean & Minimal",
      description: "I believe in building fast, functional apps with clean UI and straightforward UX."
    },
    {
      icon: Zap,
      title: "Real-World Solutions",
      description: "Every project I build solves actual problems without unnecessary complexity."
    },
    {
      icon: Target,
      title: "Solo Development",
      description: "I love working independently and building things from the ground up."
    },
    {
      icon: Award,
      title: "Always Learning",
      description: "Currently a student, constantly experimenting with new technologies and approaches."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-mono">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                About me
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                Crafting digital experiences that 
                <span className="text-gradient"> just work</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
              <p>
                Hi, I'm <strong className="text-white">MD. Shahariar Ahmmed Shovon</strong>, but you can call me 
                <strong className="text-primary"> Vibe Coder</strong>. I'm a passionate full-stack developer 
                from Bangladesh who specializes in building fast, functional, and minimal web applications.
              </p>
              
              <p>
                As a student developer, I'm constantly learning and experimenting with modern technologies 
                like React, Next.js, and Node.js. I love working solo on projects that solve real-world 
                problems without unnecessary complexity.
              </p>
              
              <p>
                My approach is simple: clean UI, straightforward UX, and code that just works. 
                I focus on shipping projects that provide value while maintaining simplicity and performance.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 bg-secondary/50 rounded-lg border border-primary/20">
                <span className="font-mono text-primary font-medium">Student Developer</span>
              </div>
              <div className="px-6 py-3 bg-secondary/50 rounded-lg border border-primary/20">
                <span className="font-mono text-primary font-medium">Solo Builder</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image with Frame */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Decorative frame background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-sm"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
              
              {/* Main image container */}
              <div className="relative w-[28rem] h-[32rem] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                <img 
                  src="https://i.ibb.co/Y7nhqV28/photo-2025-07-01-10-24-29.jpg" 
                  alt="MD. Shahariar Ahmmed Shovon - Vibe Coder"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/60 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/60 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/60 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/60 rounded-br-lg"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Principles Cards - Moved Below */}
        <div className="mt-20">
          <h3 className="text-2xl font-display font-bold text-white text-center mb-12">
            My Development Principles
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <h4 className="font-display font-semibold text-white text-lg mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
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
              { number: "Learning", label: "Always Growing" },
              { number: "Solo", label: "Project Builder" },
              { number: "BD", label: "Based in Bangladesh" },
              { number: "UTC+6", label: "Timezone" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2 animate-fade-in animate-stagger-2">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">
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
