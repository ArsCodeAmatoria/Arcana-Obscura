import MainLayout from '@/components/layout/MainLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, FlaskConical, Flower, Hammer, Trees, Star, Moon, Sparkles, Wand } from 'lucide-react';

const traditions = [
  {
    id: 'hermeticism',
    title: 'Hermeticism',
    description: 'The ancient Egyptian-Greek wisdom tradition attributed to Hermes Trismegistus, teaching that "as above, so below" and the principles of mental alchemy.',
    icon: <FlaskConical className="w-10 h-10 text-accent icon-glow" />,
  },
  {
    id: 'rosicrucianism',
    title: 'Rosicrucianism',
    description: 'A spiritual and cultural movement that emerged in Europe in the early 17th century combining Christian mysticism with esoteric traditions.',
    icon: <Flower className="w-10 h-10 text-accent icon-glow" />,
  },
  {
    id: 'freemasonry',
    title: 'Freemasonry',
    description: 'A fraternal organization that traces its origins to the local fraternities of stonemasons that from the end of the 14th century regulated the qualifications of masons and their interaction with authorities and clients.',
    icon: <Hammer className="w-10 h-10 text-accent icon-glow" />,
  },
  {
    id: 'druidry',
    title: 'Druidry',
    description: 'The ancient Celtic priesthood and wisdom tradition focused on nature reverence, divination, and ritual magic.',
    icon: <Trees className="w-10 h-10 text-accent icon-glow" />,
  },
  {
    id: 'kabbalah',
    title: 'Kabbalah',
    description: 'Jewish mystical tradition that offers a set of esoteric teachings meant to explain the relationship between the unchanging, eternal God and the mortal, finite universe.',
    icon: <Star className="w-10 h-10 text-accent icon-glow" />,
  },
  {
    id: 'sufism',
    title: 'Sufism',
    description: 'The mystical branch of Islam, focusing on direct personal experience of the divine through spiritual practices and devotion.',
    icon: <Moon className="w-10 h-10 text-accent icon-glow" />,
  },
  {
    id: 'gnosticism',
    title: 'Gnosticism',
    description: 'Various religious ideas and systems that emphasized personal spiritual knowledge (gnosis) over orthodox teachings, traditions, or ecclesiastical authority.',
    icon: <Sparkles className="w-10 h-10 text-accent icon-glow" />,
  },
  {
    id: 'witchcraft',
    title: 'Witchcraft',
    description: 'The ancient and evolving tradition of folk magic, nature wisdom, and feminine spiritual power that has persisted throughout history in various forms.',
    icon: <Wand className="w-10 h-10 text-accent icon-glow" />,
  },
];

export default function PillarsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-28 h-28 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M20 80 L50 20 L80 80 Z" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M35 80 L50 35 L65 80 Z" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" stroke="hsl(45 100% 60%)" strokeWidth="0.5" strokeDasharray="1 3" />
          </svg>
        </div>
        
        <div className="absolute bottom-40 right-10 w-32 h-32 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="45" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="15" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M5 50 L95 50" stroke="hsl(45 100% 60%)" strokeWidth="0.5" strokeDasharray="1 2" />
            <path d="M50 5 L50 95" stroke="hsl(45 100% 60%)" strokeWidth="0.5" strokeDasharray="1 2" />
          </svg>
        </div>

        <div className="text-center mb-16 relative">
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent inline-block relative">
            Pillars of Mystery
            <span className="absolute -bottom-3 left-1/2 w-1/2 h-px bg-accent/40 transform -translate-x-1/2"></span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the foundational esoteric traditions that have preserved hidden wisdom through the ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {traditions.map((tradition) => (
            <Link 
              key={tradition.id} 
              href={`/pillars/${tradition.id}`}
              className="group"
            >
              <Card className="pillar-card h-full transition-all duration-500 card-glow border border-border/50 overflow-visible">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-3 bg-card/80 rounded-full w-20 h-20 flex items-center justify-center group-hover:shadow-inner group-hover:shadow-accent/10 transition-all duration-300">
                    {tradition.icon}
                  </div>
                  <CardTitle className="text-2xl font-esoterica group-hover:text-gradient">
                    {tradition.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground/90 mt-2 leading-relaxed">
                    {tradition.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-4">
                  <span className="text-accent text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Tradition <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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