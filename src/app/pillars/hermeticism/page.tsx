import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Scroll } from 'lucide-react';

export default function HermeticismPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-4">
            <Scroll className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Hermeticism</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An ancient philosophical and spiritual tradition attributed to Hermes Trismegistus,
            offering profound insights into the nature of reality, consciousness, and the divine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Core Teachings</h2>
              <p className="mb-4">
                Hermeticism is based on the writings attributed to Hermes Trismegistus, particularly 
                the Corpus Hermeticum and the Emerald Tablet. These texts present a worldview that 
                synthesizes elements of Egyptian theology, Greek philosophy, and early alchemy.
              </p>
              <p className="mb-4">
                At the heart of Hermetic philosophy are seven principles, including the famous 
                "As above, so below," which suggests that the microcosm (the individual) reflects 
                the macrocosm (the universe). These principles outline a perspective that sees the 
                universe as mental, rhythmic, and governed by cause and effect.
              </p>
              <p>
                Coming soon: Detailed exploration of the Hermetic principles, practices, and historical influence.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Principles</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Scroll className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">The Principle of Mentalism</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Principle of Correspondence</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Principle of Vibration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Notable Texts</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">The Corpus Hermeticum</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Emerald Tablet</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Kybalion</span>
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