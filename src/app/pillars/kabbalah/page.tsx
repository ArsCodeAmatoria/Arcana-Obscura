import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { TreePine } from 'lucide-react';

export default function KabbalahPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-4">
            <TreePine className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Kabbalah</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An esoteric method, discipline, and school of thought in Jewish mysticism that seeks to explain 
            the relationship between the unchanging, eternal, and mysterious Ein Sof (infinity) and the mortal 
            and finite universe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Core Teachings</h2>
              <p className="mb-4">
                Kabbalah is a set of esoteric teachings meant to explain the relationship between an unchanging, 
                eternal, and mysterious Ein Sof (infinity) and the mortal and finite universe (God's creation). 
                It forms the foundation of mystical religious interpretation in Judaism.
              </p>
              <p className="mb-4">
                At the heart of Kabbalistic cosmology is the Tree of Life, a diagram composed of ten interconnected 
                nodes called Sephirot, which represent different divine attributes and emanations. These emanations 
                offer a conceptual framework for understanding the nature of God, creation, and human consciousness.
              </p>
              <p>
                Coming soon: Full content on Kabbalistic principles, the Tree of Life, and mystical practices.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Symbols</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <TreePine className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">The Tree of Life (Sephirot)</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Four Worlds</span>
                  </li>
                  <li>
                    <span className="font-semibold">The 22 Paths</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Notable Texts</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Sefer Yetzirah (Book of Formation)</span>
                  </li>
                  <li>
                    <span className="font-semibold">Zohar (Book of Splendor)</span>
                  </li>
                  <li>
                    <span className="font-semibold">Sefer Bahir (Book of Brightness)</span>
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