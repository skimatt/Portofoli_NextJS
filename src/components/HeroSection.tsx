import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-hero.jpg';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 fade-in-up float">
            <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover shadow-glow border-4 border-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-6 fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
              {/* Nama telah diganti menjadi "Rahmat Mulia" */}
              <span className="gradient-text">Hello, I'm Rahmat Mulia</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
              {/* Deskripsi telah disesuaikan dengan profil Anda */}
              Informatics Student & AI Enthusiast
            </p>
          </div>

          {/* Tagline */}
          <div className="mb-8 fade-in-up">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {/* Tagline telah disesuaikan untuk mencerminkan minat Anda */}
              I'm passionate about exploring cutting-edge technology and artificial intelligence,
              currently pursuing a degree in Informatics to build a smarter future.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-up">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass hover:bg-primary/10 transition-all duration-300"
            >
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 fade-in-up">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="glass p-3 rounded-full hover:bg-primary/20 hover:shadow-glow transition-all duration-300 transform hover:scale-110 group"
                aria-label={label}
              >
                <Icon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
