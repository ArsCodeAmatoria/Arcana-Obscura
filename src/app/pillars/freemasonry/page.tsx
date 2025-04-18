import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer } from 'lucide-react';

export default function FreemasonryPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-4">
            <Hammer className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Freemasonry</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A fraternal organization that traces its origins to the local fraternities of stonemasons 
            that from the end of the 14th century regulated the qualifications of masons and their 
            interaction with authorities and clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Core Teachings</h2>
              <p className="mb-4">
                Freemasonry is a fraternal organization that employs symbolic tools and allegorical rituals to teach moral and 
                philosophical lessons. It promotes self-improvement, brotherhood, and service to humanity.
              </p>
              <p className="mb-4">
                This tradition evolved from medieval stonemasons' guilds into a philosophical system focused on ethics, 
                personal growth, and charitable work. It maintains a system of initiation rituals rich in symbolism derived 
                from architectural tools, ancient wisdom traditions, and biblical narratives.
              </p>
              <p>
                Coming soon: Full content on Masonic philosophy, degrees, and rituals.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Symbols</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Hammer className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">The Square and Compass</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Letter G</span>
                  </li>
                  <li>
                    <span className="font-semibold">The All-Seeing Eye</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Notable Figures</h2>
                <p className="text-muted-foreground">Coming soon...</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center text-muted-foreground">
          <p>Full content coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
} 