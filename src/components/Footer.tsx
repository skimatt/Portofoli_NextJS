import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-primary/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-muted-foreground">
              © {currentYear} Alex Smith. Made with
            </span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span className="text-muted-foreground">
              and lots of coffee.
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 animated-underline"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 animated-underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;