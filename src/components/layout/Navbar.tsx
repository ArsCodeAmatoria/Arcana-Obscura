'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Eye, Compass, BookOpen, Clock, Map, Sparkles, KeyRound } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    { href: '/', label: 'The Living Grimoire', icon: <Sparkles className={`w-4 h-4 mr-2 ${isActive('/') ? 'icon-glow' : ''}`} /> },
    { href: '/pillars', label: 'Pillars of Mystery', icon: <Eye className={`w-4 h-4 mr-2 ${isActive('/pillars') || pathname?.includes('/pillars/') ? 'icon-glow' : ''}`} /> },
    { href: '/atlas', label: 'Esoteric Atlas', icon: <Map className={`w-4 h-4 mr-2 ${isActive('/atlas') ? 'icon-glow' : ''}`} /> },
    { href: '/timeline', label: 'Alchemical Timeline', icon: <Clock className={`w-4 h-4 mr-2 ${isActive('/timeline') ? 'icon-glow' : ''}`} /> },
    { href: '/library', label: 'The Secret Library', icon: <BookOpen className={`w-4 h-4 mr-2 ${isActive('/library') ? 'icon-glow' : ''}`} /> },
    { href: '/chamber', label: 'The Inner Chamber', icon: <KeyRound className={`w-4 h-4 mr-2 ${isActive('/chamber') ? 'icon-glow' : ''}`} /> },
    { href: '/oracle', label: 'Daily Oracle', icon: <Compass className={`w-4 h-4 mr-2 ${isActive('/oracle') ? 'icon-glow' : ''}`} /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-black/20' 
          : 'bg-background/80 backdrop-blur-sm'
      } border-b border-border/40`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="group relative">
          <span className="text-gradient font-esoterica text-2xl">
            Arcana Obscura
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <div className="flex space-x-1 items-center">
          {navItems.map((item) => {
            const active = isActive(item.href) || (item.href !== '/' && pathname?.includes(item.href));
            return (
              <Button
                key={item.href}
                variant={active ? "default" : "ghost"}
                size="sm"
                asChild
                className={`transition-all duration-300 ${active ? "mystical-glow border border-primary/20" : "hover:border-accent/20 border border-transparent"}`}
              >
                <Link href={item.href} className="flex items-center">
                  {item.icon}
                  <span className="hidden md:inline-block">{item.label}</span>
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 