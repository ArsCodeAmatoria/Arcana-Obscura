'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Eye, Compass, BookOpen, Clock, Map, Sparkles, KeyRound } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    { href: '/', label: 'The Living Grimoire', icon: <Sparkles className="w-4 h-4 mr-2" /> },
    { href: '/pillars', label: 'Pillars of Mystery', icon: <Eye className="w-4 h-4 mr-2" /> },
    { href: '/atlas', label: 'Esoteric Atlas', icon: <Map className="w-4 h-4 mr-2" /> },
    { href: '/timeline', label: 'Alchemical Timeline', icon: <Clock className="w-4 h-4 mr-2" /> },
    { href: '/library', label: 'The Secret Library', icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { href: '/chamber', label: 'The Inner Chamber', icon: <KeyRound className="w-4 h-4 mr-2" /> },
    { href: '/oracle', label: 'Daily Oracle', icon: <Compass className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-accent font-esoterica text-2xl">
          Arcana Obscura
        </Link>
        
        <div className="flex space-x-1 items-center">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={isActive(item.href) ? "default" : "ghost"}
              size="sm"
              asChild
              className={isActive(item.href) ? "mystical-glow" : ""}
            >
              <Link href={item.href} className="flex items-center">
                {item.icon}
                <span className="hidden md:inline-block">{item.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
} 