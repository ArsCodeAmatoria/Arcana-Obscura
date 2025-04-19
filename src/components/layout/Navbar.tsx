'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  Compass, 
  BookOpen, 
  Clock, 
  Map, 
  Sparkles, 
  KeyRound, 
  Menu,
  ChevronDown
} from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { 
      href: '/', 
      label: 'The Living Grimoire', 
      description: 'Begin your journey into the esoteric realm',
      icon: <Sparkles className={`w-5 h-5 ${isActive('/') ? 'icon-glow text-accent' : 'text-primary/80'}`} /> 
    },
    { 
      href: '/pillars', 
      label: 'Pillars of Mystery', 
      description: 'Explore foundational esoteric traditions',
      icon: <Eye className={`w-5 h-5 ${isActive('/pillars') || pathname?.includes('/pillars/') ? 'icon-glow text-accent' : 'text-primary/80'}`} /> 
    },
    { 
      href: '/atlas', 
      label: 'Esoteric Atlas', 
      description: 'Map of sacred sites and mystery schools',
      icon: <Map className={`w-5 h-5 ${isActive('/atlas') ? 'icon-glow text-accent' : 'text-primary/80'}`} /> 
    },
    { 
      href: '/timeline', 
      label: 'Alchemical Timeline', 
      description: 'Journey through the ages of wisdom',
      icon: <Clock className={`w-5 h-5 ${isActive('/timeline') ? 'icon-glow text-accent' : 'text-primary/80'}`} /> 
    },
    { 
      href: '/library', 
      label: 'The Secret Library', 
      description: 'Ancient and modern esoteric texts',
      icon: <BookOpen className={`w-5 h-5 ${isActive('/library') ? 'icon-glow text-accent' : 'text-primary/80'}`} /> 
    },
    { 
      href: '/chamber', 
      label: 'The Inner Chamber', 
      description: 'Advanced teachings for initiates',
      icon: <KeyRound className={`w-5 h-5 ${isActive('/chamber') ? 'icon-glow text-accent' : 'text-primary/80'}`} /> 
    },
    { 
      href: '/oracle', 
      label: 'Daily Oracle', 
      description: 'Wisdom from the ancient traditions',
      icon: <Compass className={`w-5 h-5 ${isActive('/oracle') ? 'icon-glow text-accent' : 'text-primary/80'}`} /> 
    },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-black/20' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="group relative">
          <span className="text-gradient font-esoterica text-2xl">
            Arcana Obscura
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          {navItems.slice(0, 3).map((item) => {
            const active = isActive(item.href) || (item.href !== '/' && pathname?.includes(item.href));
            return (
              <Button
                key={item.href}
                variant={active ? "default" : "ghost"}
                size="sm"
                asChild
                className={`transition-all duration-300 ${active ? "mystical-glow border border-primary/10" : "hover:border-accent/20 border border-transparent"}`}
              >
                <Link href={item.href} className="flex items-center">
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </Button>
            );
          })}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="flex items-center hover:border-accent/20 border border-transparent transition-all duration-300"
                size="sm"
              >
                <span>More</span>
                <ChevronDown className="ml-1 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card/90 backdrop-blur-sm border-border/30">
              {navItems.slice(3).map((item) => (
                <DropdownMenuItem key={item.href} asChild className="cursor-pointer">
                  <Link href={item.href} className="flex items-start gap-3 py-2">
                    <div className="shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block font-medium">{item.label}</span>
                      <span className="block text-xs text-muted-foreground mt-0.5">{item.description}</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="border border-transparent"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 bg-card/90 backdrop-blur-sm border-border/30">
              <DropdownMenuLabel className="text-accent font-esoterica">Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild className="cursor-pointer">
                  <Link href={item.href} className="flex items-start gap-3 py-3">
                    <div className="shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block font-medium">{item.label}</span>
                      <span className="block text-xs text-muted-foreground mt-0.5">{item.description}</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
} 