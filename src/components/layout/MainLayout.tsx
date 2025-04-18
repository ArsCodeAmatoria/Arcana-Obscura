import Navbar from './Navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <footer className="py-6 border-t border-border bg-card/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">Arcana Obscura — Illuminating the Secret Teachings of All Ages</p>
        </div>
      </footer>
    </div>
  );
} 