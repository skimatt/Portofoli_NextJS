import { Link } from 'react-router-dom'; // Import Link
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Data projects tetap di sini, atau idealnya di-fetch dari API
const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, responsive e-commerce platform built with React and Node.js. Features include user authentication, payment processing, and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop&crop=center',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'tRPC'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with detailed forecasts, interactive maps, and personalized weather insights for multiple locations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Chart.js'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Comprehensive social media analytics platform with real-time data visualization, competitor analysis, and automated reporting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center',
      technologies: ['React', 'Python', 'FastAPI', 'Redis'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

const ProjectsSection = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={project.id} className="group glass hover:shadow-glow transition-all duration-500 border-primary/10 overflow-hidden fade-in-up">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/10">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/10">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center fade-in-up">
          {/* Mengganti Button menjadi Link */}
          <Link to="/projects">
            <Button 
              variant="outline" 
              size="lg"
              className="glass hover:bg-primary/10 transition-all duration-300"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;