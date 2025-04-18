import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { KeyRound, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ChamberPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-24 h-24 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="30" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M50 20 L50 80" stroke="hsl(45 100% 60%)" strokeWidth="0.5" strokeDasharray="1 2" />
            <path d="M20 50 L80 50" stroke="hsl(45 100% 60%)" strokeWidth="0.5" strokeDasharray="1 2" />
          </svg>
        </div>
        
        <div className="absolute bottom-32 right-10 w-32 h-32 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M30 30 L70 30 L70 70 L30 70 Z" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="20" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M40 40 L60 60" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M40 60 L60 40" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="text-center mb-12 relative">
          <div className="relative inline-block mb-4">
            <KeyRound className="w-20 h-20 inline-block text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-esoterica mb-4 text-accent relative inline-block">
            The Inner Chamber
            <span className="absolute -bottom-2 left-1/2 w-1/2 h-px bg-accent/40 transform -translate-x-1/2"></span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            A sanctuary for advanced initiates to explore the deeper mysteries of esoteric traditions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 z-0"></div>
            <CardContent className="p-10 relative z-10">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-card/80 flex items-center justify-center mb-6 shadow-inner">
                  <Lock className="w-8 h-8 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-esoterica text-primary mb-4">Chamber Access Restricted</h2>
                <p className="text-muted-foreground mb-8">
                  The Inner Chamber contains advanced teachings reserved for those who have 
                  demonstrated understanding of the fundamental principles. Complete your studies 
                  of the primary pillars to gain access.
                </p>
                <Button variant="outline" className="border-accent/20 text-accent">
                  Return to the Pillars of Mystery
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-10 text-center">
            <p className="text-xs text-muted-foreground/60 italic">
              "Knowledge is sacred, and the path to true understanding requires patience."
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 