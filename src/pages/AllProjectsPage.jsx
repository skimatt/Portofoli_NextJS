import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  // Masukkan semua data proyek di sini, atau ambil dari lokasi sentral.
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern, responsive e-commerce platform built with React and Node.js. Features include user authentication, payment processing, and real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
    image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop&crop=center',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'tRPC'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with detailed forecasts, interactive maps, and personalized weather insights for multiple locations.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center',
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Chart.js'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Comprehensive social media analytics platform with real-time data visualization, competitor analysis, and automated reporting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center',
    technologies: ['React', 'Python', 'FastAPI', 'Redis'],
    demoUrl: '#',
    githubUrl: '#',
  }
];

const AllProjectsPage = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            A complete list of my professional and personal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group glass hover:shadow-glow transition-all duration-500 border-primary/10 overflow-hidden">
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
      </div>
    </div>
  );
};

export default AllProjectsPage;