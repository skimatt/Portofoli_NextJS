import { Code, Palette, Rocket, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with modern technologies like React, Node.js, and TypeScript.'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'UI/UX design with focus on user-centered design principles and modern aesthetics.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimized applications with fast loading times and smooth user interactions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong communication skills and experience working in agile development teams.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that make a difference. I specialize in building scalable web applications with 
            beautiful, intuitive user interfaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-display font-semibold mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Started coding in college and quickly fell in love with the endless possibilities 
                of web development. Since then, I've worked with startups and established companies, 
                helping them bring their ideas to life through code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community through 
                blog posts and mentoring.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating products that not only 
                work well but also provide delightful user experiences.
              </p>
            </div>
            
            <div className="mt-8">
              <Button 
                variant="outline" 
                size="lg"
                className="glass hover:bg-primary/10 transition-all duration-300"
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-up">
            {skills.map((skill, index) => (
              <Card key={skill.title} className="glass hover:shadow-glow transition-all duration-300 border-primary/10">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-4">
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center fade-in-up">
          <h3 className="text-2xl font-display font-semibold mb-8">
            Technologies I Love
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 
              'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'GraphQL'
            ].map((tech) => (
              <span
                key={tech}
                className="glass px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/10 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;