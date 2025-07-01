
import { useState, useEffect } from 'react';
import { ChevronDown, Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'elite developer';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
        // Cursor blink effect
        const cursorTimer = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorTimer);
      }
    }, 120);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code2 className="w-8 h-8 text-primary/30" />
      </div>
      <div className="absolute top-32 right-16 animate-float animate-stagger-2">
        <Sparkles className="w-6 h-6 text-primary/20" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float animate-stagger-3">
        <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse-glow"></div>
      </div>
      
      <div className="text-center space-y-8 animate-fade-in max-w-5xl mx-auto">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-mono mb-6 animate-scale-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Available for projects
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-black text-white leading-tight">
            Building the
            <br />
            <span className="text-gradient text-glow">future</span> of web
          </h1>
          
          <div className="text-4xl md:text-6xl lg:text-7xl font-mono font-light text-primary/90 mt-6">
            {displayText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed mt-12">
          I craft exceptional digital experiences using cutting-edge technologies. 
          <br className="hidden md:block" />
          From concept to deployment, I deliver solutions that perform and inspire.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-16">
          <a 
            href="#projects" 
            className="group px-10 py-4 bg-primary text-primary-foreground font-mono font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover-lift relative overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a 
            href="#contact" 
            className="group px-10 py-4 border-2 border-primary/30 text-primary font-mono font-medium rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 hover-glow relative"
          >
            <span className="relative z-10">Let's Connect</span>
          </a>
        </div>
        
        <div className="pt-16 space-y-4">
          <p className="text-sm text-muted-foreground font-mono">
            Trusted by startups and enterprises worldwide
          </p>
          <div className="flex justify-center gap-8 opacity-40">
            <div className="w-24 h-8 bg-muted-foreground/20 rounded"></div>
            <div className="w-24 h-8 bg-muted-foreground/20 rounded"></div>
            <div className="w-24 h-8 bg-muted-foreground/20 rounded"></div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-12 animate-bounce-gentle hover:text-primary transition-colors duration-300 group"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      </button>
    </section>
  );
};

export default Hero;
