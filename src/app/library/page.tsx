import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { BookOpen, ExternalLink, BookMarked, ScrollText, Calculator, Skull } from 'lucide-react';
import Link from 'next/link';

const books = [
  {
    id: 'corpus-hermeticum',
    title: 'The Corpus Hermeticum',
    author: 'Hermes Trismegistus',
    description: 'A collection of Egyptian-Greek wisdom texts from the 2nd and 3rd centuries AD, foundational to the Hermetic tradition.',
    category: 'Hermeticism',
    year: 'c. 100-300 CE',
    icon: <ScrollText className="w-8 h-8 text-accent" />
  },
  {
    id: 'kybalion',
    title: 'The Kybalion',
    author: 'Three Initiates',
    description: 'A study of Hermetic Philosophy of Ancient Egypt and Greece, outlining seven fundamental Hermetic principles.',
    category: 'Hermeticism',
    year: '1908',
    icon: <BookMarked className="w-8 h-8 text-accent" />
  },
  {
    id: 'book-of-the-dead',
    title: 'The Egyptian Book of the Dead',
    author: 'Ancient Egyptian Priests',
    description: 'A collection of funerary texts containing spells to assist the deceased in the afterlife, essential to understanding Egyptian spiritual beliefs.',
    category: 'Egyptian Mysticism',
    year: 'c. 1550 BCE',
    icon: <Skull className="w-8 h-8 text-accent" />
  },
  {
    id: 'sefer-yetzirah',
    title: 'Sefer Yetzirah',
    author: 'Unknown',
    description: 'The Book of Formation - one of the earliest extant books on Jewish esotericism, key to understanding the Kabbalistic tradition.',
    category: 'Kabbalah',
    year: 'c. 200 CE',
    icon: <ScrollText className="w-8 h-8 text-accent" />
  },
  {
    id: 'gematria',
    title: 'Gematria: The Cosmic Science',
    author: 'Various Kabbalistic Scholars',
    description: 'An exploration of the alphanumerical code of assigning numbers to letters, revealing hidden meanings and connections in sacred texts.',
    category: 'Kabbalah',
    year: 'Ancient - Present',
    icon: <Calculator className="w-8 h-8 text-accent" />
  },
  {
    id: 'zohar',
    title: 'The Zohar',
    author: 'Moses de León (attributed)',
    description: 'The foundational work of Kabbalistic thought, containing mystical commentaries on the Torah.',
    category: 'Kabbalah',
    year: 'c. 1280 CE',
    icon: <BookMarked className="w-8 h-8 text-accent" />
  },
  {
    id: 'emerald-tablet',
    title: 'The Emerald Tablet',
    author: 'Hermes Trismegistus (attributed)',
    description: 'A cryptic text said to contain the secret of the prima materia and its transmutation, foundational to alchemy.',
    category: 'Alchemy',
    year: 'c. 600-800 CE',
    icon: <ScrollText className="w-8 h-8 text-accent" />
  },
  {
    id: 'rosicrucian-manifestos',
    title: 'The Rosicrucian Manifestos',
    author: 'Johann Valentin Andreae (attributed)',
    description: 'The Fama and Confessio Fraternitatis - anonymous manifestos announcing a mysterious esoteric order.',
    category: 'Rosicrucianism',
    year: '1614-1615',
    icon: <BookMarked className="w-8 h-8 text-accent" />
  }
];

export default function LibraryPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-28 h-28 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="20" y="20" width="60" height="60" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <rect x="30" y="30" width="40" height="40" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <rect x="40" y="40" width="20" height="20" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="absolute bottom-32 right-10 w-32 h-32 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M30 50 L70 50" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M50 30 L50 70" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="text-center mb-12 relative">
          <div className="relative inline-block mb-4">
            <BookOpen className="w-20 h-20 inline-block text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-esoterica mb-4 text-accent relative inline-block">
            The Secret Library
            <span className="absolute -bottom-2 left-1/2 w-1/2 h-px bg-accent/40 transform -translate-x-1/2"></span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Explore the essential texts that have preserved and transmitted esoteric knowledge through the ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {books.map((book) => (
            <Card key={book.id} className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow h-full">
              <CardHeader className="pb-2">
                <div className="mb-4 p-3 bg-card/80 rounded-full w-16 h-16 flex items-center justify-center">
                  {book.icon}
                </div>
                <CardTitle className="text-xl font-esoterica text-accent">{book.title}</CardTitle>
                <CardDescription className="text-foreground/70">
                  {book.author} • {book.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{book.description}</p>
                <div className="mt-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {book.category}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Link 
                  href={`/library/${book.id}`} 
                  className="text-accent text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Explore Text <ExternalLink className="w-3 h-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-accent/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-esoterica text-accent mb-4">Curator's Note</h2>
            <p className="text-muted-foreground">
              Our collection continues to grow as we uncover and restore ancient manuscripts. 
              Return often to discover newly added texts from the vast repository of esoteric knowledge.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 