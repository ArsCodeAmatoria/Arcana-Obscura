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
      icon: <Sparkles className="w-5 h-5 text-accent/90" /> 
    },
    { 
      href: '/pillars', 
      label: 'Pillars of Mystery', 
      description: 'Explore foundational esoteric traditions',
      icon: <Eye className="w-5 h-5 text-accent/90" /> 
    },
    { 
      href: '/atlas', 
      label: 'Esoteric Atlas', 
      description: 'Map of sacred sites and mystery schools',
      icon: <Map className="w-5 h-5 text-accent/90" /> 
    },
    { 
      href: '/timeline', 
      label: 'Alchemical Timeline', 
      description: 'Journey through the ages of wisdom',
      icon: <Clock className="w-5 h-5 text-accent/90" /> 
    },
    { 
      href: '/library', 
      label: 'The Secret Library', 
      description: 'Ancient and modern esoteric texts',
      icon: <BookOpen className="w-5 h-5 text-accent/90" /> 
    },
    { 
      href: '/chamber', 
      label: 'The Inner Chamber', 
      description: 'Advanced teachings for initiates',
      icon: <KeyRound className="w-5 h-5 text-accent/90" /> 
    },
    { 
      href: '/oracle', 
      label: 'Daily Oracle', 
      description: 'Wisdom from the ancient traditions',
      icon: <Compass className="w-5 h-5 text-accent/90" /> 
    },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-black/20' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top decorative line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-3"></div>
        
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="group relative">
            <span className="text-gradient font-esoterica text-2xl">
              Arcana Obscura
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-accent via-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-1 items-center mr-2 bg-card/40 backdrop-blur-md rounded-full border border-border/20 px-2 py-1">
              {navItems.slice(0, 3).map((item) => {
                const active = isActive(item.href) || (item.href !== '/' && pathname?.includes(item.href));
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className={`
                      px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all duration-300
                      ${active 
                        ? "bg-card/70 shadow-sm shadow-black/20" 
                        : "hover:bg-card/50"
                      }
                    `}
                  >
                    <span className={`${active ? "icon-glow" : ""}`}>
                      {item.icon}
                    </span>
                    <span className={`
                      ${active 
                        ? "text-gradient font-medium" 
                        : "text-foreground/80 hover:text-accent transition-colors"
                      }
                    `}>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-card/50 transition-all duration-300 text-foreground/80 hover:text-accent">
                    <span>More</span>
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-card/90 backdrop-blur-md border-border/30 shadow-lg shadow-black/30 rounded-lg overflow-hidden">
                  <div className="px-4 py-2 border-b border-border/20">
                    <div className="text-gradient font-esoterica">Arcane Paths</div>
                  </div>
                  {navItems.slice(3).map((item) => (
                    <DropdownMenuItem key={item.href} asChild className="cursor-pointer focus:bg-primary/10">
                      <Link href={item.href} className="flex items-start gap-3 py-3 px-4 hover:text-gradient transition-all duration-300">
                        <div className="shrink-0 mt-0.5 text-accent">
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
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 rounded-full bg-card/40 backdrop-blur-md border border-border/20 transition-all duration-300 hover:bg-card/70">
                  <Menu className="w-5 h-5 text-gradient" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 bg-card/90 backdrop-blur-md border-border/30 shadow-lg shadow-black/30 rounded-lg overflow-hidden">
                <div className="px-4 py-3 border-b border-border/20">
                  <div className="text-gradient font-esoterica text-lg">Arcana Obscura</div>
                  <div className="text-xs text-muted-foreground mt-1">Illuminating the Secret Teachings</div>
                </div>
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild className="cursor-pointer focus:bg-primary/10">
                    <Link 
                      href={item.href} 
                      className={`
                        flex items-start gap-3 py-3 px-4 transition-all duration-300
                        ${pathname === item.href || (item.href !== '/' && pathname?.includes(item.href))
                          ? "text-gradient" 
                          : "hover:text-gradient"
                        }
                      `}
                    >
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
        
        {/* Bottom decorative line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
    </nav>
  );
} 