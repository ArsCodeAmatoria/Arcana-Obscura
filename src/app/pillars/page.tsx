import MainLayout from '@/components/layout/MainLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const traditions = [
  {
    id: 'hermeticism',
    title: 'Hermeticism',
    description: 'The ancient Egyptian-Greek wisdom tradition attributed to Hermes Trismegistus, teaching that "as above, so below" and the principles of mental alchemy.',
    symbol: '☿',
  },
  {
    id: 'rosicrucianism',
    title: 'Rosicrucianism',
    description: 'A spiritual and cultural movement that emerged in Europe in the early 17th century combining Christian mysticism with esoteric traditions.',
    symbol: '🌹✝️',
  },
  {
    id: 'freemasonry',
    title: 'Freemasonry',
    description: 'A fraternal organization that traces its origins to the local fraternities of stonemasons that from the end of the 14th century regulated the qualifications of masons and their interaction with authorities and clients.',
    symbol: '🔨🧭',
  },
  {
    id: 'druidry',
    title: 'Druidry',
    description: 'The ancient Celtic priesthood and wisdom tradition focused on nature reverence, divination, and ritual magic.',
    symbol: '🌳🌿',
  },
  {
    id: 'kabbalah',
    title: 'Kabbalah',
    description: 'Jewish mystical tradition that offers a set of esoteric teachings meant to explain the relationship between the unchanging, eternal God and the mortal, finite universe.',
    symbol: '🌟',
  },
  {
    id: 'sufism',
    title: 'Sufism',
    description: 'The mystical branch of Islam, focusing on direct personal experience of the divine through spiritual practices and devotion.',
    symbol: '☪️',
  },
  {
    id: 'gnosticism',
    title: 'Gnosticism',
    description: 'Various religious ideas and systems that emphasized personal spiritual knowledge (gnosis) over orthodox teachings, traditions, or ecclesiastical authority.',
    symbol: '⭐',
  },
];

export default function PillarsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Pillars of Mystery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the foundational esoteric traditions that have preserved hidden wisdom through the ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traditions.map((tradition) => (
            <Link 
              key={tradition.id} 
              href={`/pillars/${tradition.id}`}
              className="group"
            >
              <Card className="pillar-card h-full transition-all duration-300 group-hover:translate-y-[-5px]">
                <CardHeader>
                  <div className="text-4xl mb-2">{tradition.symbol}</div>
                  <CardTitle className="text-xl font-esoterica">{tradition.title}</CardTitle>
                  <CardDescription>{tradition.description}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-2">
                  <span className="text-accent text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore Tradition <ArrowRight className="w-4 h-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
} 