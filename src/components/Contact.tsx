
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-mono font-medium text-white">
            let's connect
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Got an interesting project or just want to chat about tech? 
              I'm always open to discussing new opportunities and ideas.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <a 
                href="mailto:hello@example.com"
                className="group p-6 bg-secondary rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono font-medium text-white">Email</h3>
                    <p className="text-muted-foreground">hello@example.com</p>
                  </div>
                </div>
              </a>
              
              <div className="flex gap-4">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex-1 p-6 bg-secondary rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-center">
                      <div className="inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mb-3">
                        <social.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="font-mono text-sm text-muted-foreground">
                        {social.label}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="pt-8 text-center">
              <p className="font-mono text-muted-foreground">
                // response time: usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
