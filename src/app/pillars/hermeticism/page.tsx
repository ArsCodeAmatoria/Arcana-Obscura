import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Scroll } from 'lucide-react';

export default function HermeticismPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-20 h-20 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M50 10 L50 90" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M10 50 L90 50" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="5" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="absolute bottom-32 right-10 w-24 h-24 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M20 20 L80 80" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M20 80 L80 20" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="text-center mb-12 relative">
          <div className="relative inline-block mb-4">
            <Scroll className="w-20 h-20 inline-block text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-esoterica mb-4 text-accent relative inline-block">
            Hermeticism
            <span className="absolute -bottom-2 left-1/2 w-1/2 h-px bg-accent/40 transform -translate-x-1/2"></span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            An ancient philosophical and spiritual tradition attributed to Hermes Trismegistus,
            offering profound insights into the nature of reality, consciousness, and the divine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Core Teachings</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Hermeticism is based on the writings attributed to Hermes Trismegistus, particularly 
                the Corpus Hermeticum and the Emerald Tablet. These texts present a worldview that 
                synthesizes elements of Egyptian theology, Greek philosophy, and early alchemy.
              </p>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                At the heart of Hermetic philosophy are seven principles, including the famous 
                "<span className="text-accent font-semibold">As above, so below</span>," which suggests that the microcosm (the individual) reflects 
                the macrocosm (the universe). These principles outline a perspective that sees the 
                universe as mental, rhythmic, and governed by cause and effect.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Coming soon: Detailed exploration of the Hermetic principles, practices, and historical influence.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-accent/5 card-glow">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-6 text-primary">Key Principles</h2>
                <ul className="space-y-4">
                  <li className="flex items-center group">
                    <div className="mr-3 p-1.5 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                      <Scroll className="w-5 h-5 text-accent icon-glow" />
                    </div>
                    <span className="font-semibold group-hover:text-accent transition-colors duration-300">The Principle of Mentalism</span>
                  </li>
                  <li className="flex items-center group pl-10">
                    <span className="font-semibold group-hover:text-primary/90 transition-colors duration-300">The Principle of Correspondence</span>
                  </li>
                  <li className="flex items-center group pl-10">
                    <span className="font-semibold group-hover:text-primary/90 transition-colors duration-300">The Principle of Vibration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/5 card-glow">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-6 text-primary">Notable Texts</h2>
                <ul className="space-y-4">
                  <li className="group">
                    <span className="font-semibold text-foreground/90 group-hover:text-accent transition-colors duration-300 pl-2 border-l-2 border-accent/50 block">The Corpus Hermeticum</span>
                  </li>
                  <li className="group">
                    <span className="font-semibold text-foreground/90 group-hover:text-accent transition-colors duration-300 pl-2 border-l-2 border-accent/50 block">The Emerald Tablet</span>
                  </li>
                  <li className="group">
                    <span className="font-semibold text-foreground/90 group-hover:text-accent transition-colors duration-300 pl-2 border-l-2 border-accent/50 block">The Kybalion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <blockquote className="border-l-4 border-accent/50 pl-6 py-4 italic text-xl text-muted-foreground max-w-3xl mx-auto mb-12 bg-card/30 backdrop-blur-sm rounded-r-md">
          "As above, so below; as below, so above. As within, so without; as without, so within."
          <span className="text-sm not-italic block mt-2 text-accent/80">— The Emerald Tablet</span>
        </blockquote>

        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-esoterica mb-6 text-primary">The Shem HaMephorash</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-6 text-foreground/90 leading-relaxed">
                  The Shem HaMephorash, or "the explicit name," is a powerful concept in Hermetic Kabbalah derived from the 72 names of God. 
                  These names are extracted from three verses in Exodus (14:19-21), each containing 72 letters in the original Hebrew.
                </p>
                <p className="mb-6 text-foreground/90 leading-relaxed">
                  In Hermetic tradition, each of the 72 names corresponds to a specific angel with unique powers and attributes. 
                  These angels are seen as emanations of divine energy that can be invoked for spiritual work, transformation, and communion 
                  with higher realms of consciousness.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Practitioners of Hermeticism often incorporate the Shem HaMephorash into talismans, rituals, and meditative practices 
                  to harness specific energies or qualities associated with each angelic name.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="100" cy="100" r="98" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="70" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="40" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                    
                    {/* 72 divisions around the circle */}
                    {Array.from({ length: 72 }).map((_, i) => (
                      <path
                        key={i}
                        d={`M 100 100 L ${100 + 98 * Math.cos(i * Math.PI / 36)} ${100 + 98 * Math.sin(i * Math.PI / 36)}`}
                        stroke="hsl(45 100% 60%)"
                        strokeWidth="0.2"
                        opacity="0.5"
                      />
                    ))}
                    
                    {/* Hebrew-inspired letters */}
                    <text x="96" y="30" fill="hsl(45 100% 60%)" fontSize="8" fontFamily="serif">א</text>
                    <text x="170" y="100" fill="hsl(45 100% 60%)" fontSize="8" fontFamily="serif">ל</text>
                    <text x="96" y="175" fill="hsl(45 100% 60%)" fontSize="8" fontFamily="serif">ה</text>
                    <text x="25" y="100" fill="hsl(45 100% 60%)" fontSize="8" fontFamily="serif">י</text>
                    
                    {/* Central element */}
                    <path d="M 100 60 L 120 120 L 80 120 Z" stroke="hsl(45 100% 60%)" strokeWidth="0.5" fill="none" />
                    <path d="M 100 140 L 120 80 L 80 80 Z" stroke="hsl(45 100% 60%)" strokeWidth="0.5" fill="none" />
                  </svg>
                  <div className="absolute inset-0 bg-accent/5 rounded-full blur-2xl -z-10"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-muted-foreground">
          <p className="inline-block border border-border/30 px-4 py-2 rounded-full text-sm bg-card/30 backdrop-blur-sm">Full content coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
} 