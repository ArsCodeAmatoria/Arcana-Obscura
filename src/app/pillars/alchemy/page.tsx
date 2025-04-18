import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { FlaskConical } from 'lucide-react';

export default function AlchemyPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-4">
            <FlaskConical className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Alchemy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An ancient practice combining elements of chemistry, metallurgy, physics, medicine, and mysticism,
            focused on the transmutation of matter and spiritual transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Core Principles</h2>
              <p className="mb-4">
                Alchemy operates on multiple levels simultaneously - physical, psychological, and spiritual. 
                While popularly known for the pursuit of transmuting base metals into gold, its deeper purpose
                was the transformation of the alchemist's own soul.
              </p>
              <p className="mb-4">
                The Philosopher's Stone, the ultimate goal of alchemical work, represents not just a material substance
                but a state of spiritual perfection. The alchemical process mirrors the inner journey of purification,
                dissolution of the ego, and ultimate reunion with the divine.
              </p>
              <p>
                The alchemical maxim "Solve et Coagula" (dissolve and coagulate) describes the fundamental process
                of breaking down matter into its constituent parts before reassembling it in a purified state -
                a process that applies equally to material substances and to the human psyche.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Processes</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FlaskConical className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">Calcination</span>
                  </li>
                  <li>
                    <span className="font-semibold">Dissolution</span>
                  </li>
                  <li>
                    <span className="font-semibold">Separation</span>
                  </li>
                  <li>
                    <span className="font-semibold">Conjunction</span>
                  </li>
                  <li>
                    <span className="font-semibold">Fermentation</span>
                  </li>
                  <li>
                    <span className="font-semibold">Distillation</span>
                  </li>
                  <li>
                    <span className="font-semibold">Coagulation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Notable Alchemists</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Paracelsus</span>
                  </li>
                  <li>
                    <span className="font-semibold">Nicolas Flamel</span>
                  </li>
                  <li>
                    <span className="font-semibold">Mary the Jewess</span>
                  </li>
                  <li>
                    <span className="font-semibold">Isaac Newton</span>
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