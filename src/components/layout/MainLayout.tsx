import Navbar from './Navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Mystical ornament top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 opacity-30 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" fill="none" className="w-full h-full">
          <path d="M50 5 L60 20 L50 35 L40 20 Z" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          <path d="M50 0 L65 25 L50 40 L35 25 Z" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          <circle cx="50" cy="20" r="3" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          <path d="M20 20 L40 20" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          <path d="M60 20 L80 20" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
        </svg>
      </div>
      
      <Navbar />
      
      <main className="flex-1 pt-24 relative">
        {/* Background gradient orbs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]"></div>
          <div className="absolute top-2/3 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div>
        </div>
        
        {children}
      </main>
      
      <footer className="py-8 border-t border-border/30 bg-card/30 backdrop-blur-sm relative">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 text-accent/80">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" fill="none" className="w-32 h-8 mx-auto">
              <path d="M10 10 L90 10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
              <path d="M20 5 L80 5" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
              <path d="M20 15 L80 15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
              <circle cx="50" cy="10" r="2" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="30" cy="10" r="1" fill="currentColor" />
              <circle cx="70" cy="10" r="1" fill="currentColor" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground">Arcana Obscura — Illuminating the Secret Teachings of All Ages</p>
          <p className="text-xs text-muted-foreground/60 mt-2">Wisdom is to the soul what light is to the path</p>
        </div>
      </footer>
    </div>
  );
} 