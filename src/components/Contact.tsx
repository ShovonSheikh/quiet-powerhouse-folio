
import { Mail, Github, Linkedin, Twitter, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Primary contact',
      value: 'hello@elitedev.com',
      href: 'mailto:hello@elitedev.com',
      description: 'Best for project inquiries and detailed discussions'
    },
    {
      icon: MessageCircle,
      title: 'Discord',
      subtitle: 'Quick chat',
      value: '@elitedev',
      href: '#',
      description: 'Perfect for quick questions and real-time communication'
    },
    {
      icon: MapPin,
      title: 'Location',
      subtitle: 'Based in',
      value: 'San Francisco, CA',
      href: '#',
      description: 'Available for local meetups and collaborations'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', followers: '2.5K' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', followers: '5K+' },
    { icon: Twitter, label: 'Twitter', href: '#', followers: '1.2K' }
  ];

  const availability = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST', available: true },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM PST', available: true },
    { day: 'Sunday', hours: 'Emergency only', available: false }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 pb-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 animate-slide-up mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-mono">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for projects
          </div>
          
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white leading-tight">
            Let's create
            <span className="text-gradient"> something amazing</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Whether you're a startup looking to build 
            your MVP or an enterprise needing to scale, let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.href}
                className="group block glass-strong p-8 rounded-3xl hover-lift hover-glow transition-all duration-300 animate-scale-in animate-stagger-1"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-sans font-bold text-white text-xl">{method.title}</h3>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-mono rounded">
                        {method.subtitle}
                      </span>
                    </div>
                    <p className="font-mono text-primary text-lg mb-2 group-hover:text-primary/80 transition-colors">
                      {method.value}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                  <Send className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                </div>
              </a>
            ))}
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Availability */}
            <div className="glass p-6 rounded-2xl animate-scale-in animate-stagger-2">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-mono font-medium text-white">Availability</h3>
              </div>
              <div className="space-y-4">
                {availability.map((slot, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono text-white">{slot.day}</span>
                      <div className={`w-2 h-2 rounded-full ${slot.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">{slot.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-2xl animate-scale-in animate-stagger-3">
              <h3 className="font-mono font-medium text-white mb-6">Connect with me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <social.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-mono text-white group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">
                      {social.followers}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="glass p-6 rounded-2xl text-center animate-scale-in animate-stagger-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-mono font-medium text-white mb-2">Quick Response</h3>
              <p className="text-sm text-muted-foreground">
                Usually within <span className="text-primary font-mono">2-4 hours</span> during business hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-16 border-t border-primary/10">
          <div className="glass-strong p-12 rounded-3xl animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you have a detailed brief or just an idea, I'm here to help bring your vision to life. 
              Let's schedule a call to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@elitedev.com?subject=Project Inquiry"
                className="group px-8 py-4 bg-primary text-primary-foreground font-mono font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover-lift inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Project Brief</span>
              </a>
              <a 
                href="#"
                className="group px-8 py-4 border border-primary/30 text-primary font-mono font-medium rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 hover-glow inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Schedule a Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
