import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function TarotPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-4">
            <Sparkles className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Tarot</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A symbolic system of divination using a deck of 78 cards, each rich with archetypal imagery 
            that reflects the human experience and the journey of consciousness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Understanding Tarot</h2>
              <p className="mb-4">
                The Tarot deck is divided into two main parts: the Major Arcana (22 cards) and the Minor Arcana (56 cards). 
                The Major Arcana represents significant life events and spiritual lessons, while the Minor Arcana 
                addresses day-to-day situations and challenges.
              </p>
              <p className="mb-4">
                Rather than simply predicting the future, Tarot serves as a mirror to the unconscious mind, 
                helping to illuminate hidden patterns, untapped potential, and possible outcomes based on current trajectories. 
                It offers guidance through symbolic language that resonates with the collective unconscious.
              </p>
              <p>
                The practice of reading Tarot requires intuition, an understanding of symbolism, and the ability 
                to weave together narratives from the cards that appear in a spread. Each card's meaning is 
                influenced by its position, surrounding cards, and the specific question being addressed.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Major Arcana</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Sparkles className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">The Fool</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Magician</span>
                  </li>
                  <li>
                    <span className="font-semibold">The High Priestess</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Empress</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Emperor</span>
                  </li>
                  <li>
                    <span className="font-semibold">...</span>
                  </li>
                  <li>
                    <span className="font-semibold">The World</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Common Spreads</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Three-Card Spread</span>
                  </li>
                  <li>
                    <span className="font-semibold">Celtic Cross</span>
                  </li>
                  <li>
                    <span className="font-semibold">Horseshoe Spread</span>
                  </li>
                  <li>
                    <span className="font-semibold">Pentagram Spread</span>
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