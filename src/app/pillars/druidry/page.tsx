import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Trees } from 'lucide-react';

export default function DruidryPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-4">
            <Trees className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Druidry</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The ancient Celtic spiritual tradition focused on nature reverence, wisdom, 
            and the cultivation of a harmonious relationship with the natural world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Core Principles</h2>
              <p className="mb-4">
                Druidry represents the indigenous spiritual tradition of the Celtic peoples, with its origins 
                reaching back into pre-Roman Europe. At its heart is a profound reverence for nature and 
                the belief that the natural world is inherently sacred and alive with spirit.
              </p>
              <p className="mb-4">
                The ancient Druids served as the priests, judges, healers, and wisdom-keepers of their 
                communities. They preserved knowledge through oral tradition, studied natural philosophy, 
                astronomy, and herbalism, and maintained the sacred relationship between people and the land.
              </p>
              <p>
                Modern Druidry draws inspiration from historical accounts and archaeological evidence while 
                adapting practices to contemporary contexts. It emphasizes ecological awareness, the cultivation 
                of wisdom, and the celebration of seasonal cycles through eight major festivals that mark the 
                turning of the wheel of the year.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Elements</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Trees className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">Sacred Groves</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Three Realms: Land, Sea, Sky</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Wheel of the Year</span>
                  </li>
                  <li>
                    <span className="font-semibold">Ogham (Celtic Tree Alphabet)</span>
                  </li>
                  <li>
                    <span className="font-semibold">Awen (Divine Inspiration)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Festivals</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Samhain</span> - Celtic New Year
                  </li>
                  <li>
                    <span className="font-semibold">Imbolc</span> - Beginning of Spring
                  </li>
                  <li>
                    <span className="font-semibold">Beltane</span> - Fire Festival
                  </li>
                  <li>
                    <span className="font-semibold">Lughnasadh</span> - Harvest Celebration
                  </li>
                </ul>
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