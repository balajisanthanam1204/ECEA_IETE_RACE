import { Button } from './ui/button';
import { Play, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface NavigationProps {
  onWatchReel: () => void;
}

export default function Navigation({ onWatchReel }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/50">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="font-display font-bold text-lg tracking-tight">ECEA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
            <Link to="/team" className="text-sm hover:text-primary transition-colors">Team</Link>
            <Link to="/projects" className="text-sm hover:text-primary transition-colors">Projects</Link>
            <Link to="/blog" className="text-sm hover:text-primary transition-colors">Blog</Link>
            <Link to="/events" className="text-sm hover:text-primary transition-colors">Events</Link>
            <Link to="/achive" className="text-sm hover:text-primary transition-colors">Achivements</Link>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onWatchReel}
              className="text-sm hover:text-primary transition-colors group"
            >
              <span>UPCOMMING EVENTS</span>
              <span className="ml-2 flex items-center gap-1">
                <Play className="w-3 h-3 group-hover:text-accent transition-colors" />
                <span className="text-xs text-muted-foreground">CLICK</span>
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-border/50 space-y-4">
            <Link 
              to="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm hover:text-primary transition-colors py-2"
            >
              Home
            </Link>
            <Link 
              to="/team" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm hover:text-primary transition-colors py-2"
            >
              Team
            </Link>
            <Link 
              to="/projects" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm hover:text-primary transition-colors py-2"
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm hover:text-primary transition-colors py-2"
            >
              Blog
            </Link>
            <Link 
              to="/events" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm hover:text-primary transition-colors py-2"
            >
              Events
            </Link>
            <Button
              variant="glass"
              size="sm"
              onClick={() => {
                onWatchReel();
                setIsMobileMenuOpen(false);
              }}
              className="w-full justify-center group"
            >
              <span>Watch our reel</span>
              <Play className="w-3 h-3 ml-2 group-hover:text-accent transition-colors" />
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
