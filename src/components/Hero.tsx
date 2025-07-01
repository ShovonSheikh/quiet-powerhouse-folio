
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'vibe coder';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-32 md:py-40">
      <div className="text-center space-y-6 animate-fade-in" style={{ marginTop: '120px' }}>
        <div className="space-y-2">
          <h1 className="text-6xl md:text-8xl font-mono font-light text-white">
            hey, i'm a
          </h1>
          <div className="text-6xl md:text-8xl font-mono font-medium text-primary animate-glow">
            {displayText}
            <span className="animate-pulse">_</span>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed mt-8">
          I build clean, fast web apps that actually work. 
          <br />
          No fluff, just solid engineering with style.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            view my work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-primary text-primary font-mono font-medium rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            get in touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-float">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
