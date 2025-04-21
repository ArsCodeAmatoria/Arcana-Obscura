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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Historical Development</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Hermeticism emerged in Hellenistic Egypt during the first centuries CE, at the crossroads of Greek, Egyptian, and early 
                Jewish mystical thought. The tradition is named after Hermes Trismegistus ("Thrice-Greatest Hermes"), a syncretic 
                figure combining aspects of the Greek god Hermes and the Egyptian god Thoth.
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                While traditionally dated to ancient Egypt, most scholars now believe the Hermetic texts were written between 100-300 CE. 
                These writings were rediscovered during the Renaissance when, in 1460, a monk brought manuscripts of the Corpus Hermeticum 
                to Cosimo de' Medici in Florence, who had them translated from Greek to Latin by Marsilio Ficino.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                This translation sparked a revival of Hermetic thought that profoundly influenced Renaissance culture, art, and science. 
                Figures like Giordano Bruno, John Dee, and Paracelsus incorporated Hermetic principles into their work, creating a bridge 
                between ancient wisdom and emerging scientific thought.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Seven Hermetic Principles</h2>
              <ul className="space-y-4">
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">1. The Principle of Mentalism</h3>
                  <p className="text-foreground/80">"THE ALL is MIND; The Universe is Mental." The universe exists in the mind of THE ALL; all is mental creation.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">2. The Principle of Correspondence</h3>
                  <p className="text-foreground/80">"As above, so below; as below, so above." What happens on one level of reality also happens on all others.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">3. The Principle of Vibration</h3>
                  <p className="text-foreground/80">"Nothing rests; everything moves; everything vibrates." All things are in constant motion at different rates.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">4. The Principle of Polarity</h3>
                  <p className="text-foreground/80">"Everything is dual; everything has poles; everything has its pair of opposites." All things contain their opposite.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">5. The Principle of Rhythm</h3>
                  <p className="text-foreground/80">"Everything flows, out and in; everything has its tides." All things rise and fall in a measured motion.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">6. The Principle of Cause and Effect</h3>
                  <p className="text-foreground/80">"Every cause has its effect; every effect has its cause." Nothing happens by chance; there is a causal relationship in all things.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">7. The Principle of Gender</h3>
                  <p className="text-foreground/80">"Gender is in everything; everything has its Masculine and Feminine Principles." Creative energy contains both masculine and feminine aspects.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-esoterica mb-6 text-primary">Hermetic Practices</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent">Meditation & Visualization</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Hermetic meditation focuses on awakening inner knowledge and ascending through different levels of consciousness. 
                  Practitioners use visualization techniques to work with divine forces and archetypes, often visualizing symbols, 
                  divine names, or cosmic patterns to align with their vibrational qualities.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent">Theurgy</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Theurgic practices involve ritual operations designed to purify the soul and establish contact with divine beings. 
                  These include invocations, the use of divine names, ritual purifications, and ceremonial magic. The ultimate goal 
                  is divine communion and the elevation of consciousness toward the divine mind.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent">Alchemy</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Hermetic alchemy goes beyond material transmutation to focus on spiritual transformation. The alchemical processes 
                  of calcination, dissolution, separation, etc., are understood as stages in the purification of consciousness. 
                  The philosopher's stone represents the achievement of spiritual illumination.
                </p>
              </div>
            </div>
            
            <p className="text-foreground/90 leading-relaxed">
              These practices aim to awaken the divine spark within the practitioner, facilitating a remembrance of humanity's divine 
              origin and ultimate reunification with THE ALL. Hermetic practice is not merely theoretical but deeply experiential, 
              encouraging direct gnosis through disciplined spiritual work.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Modern Hermetic Movements</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The 19th and 20th centuries saw a revival of Hermetic thought through organizations like the Hermetic Order of the 
                Golden Dawn, founded in 1888, which synthesized Hermeticism with Kabbalah, astrology, and ceremonial magic. 
                This influential order included members like W.B. Yeats, Aleister Crowley, and Arthur Edward Waite.
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                In 1912, the publication of <span className="italic">The Kybalion</span> by "Three Initiates" reinterpreted Hermetic principles 
                for a modern audience, becoming one of the most accessible entry points to Hermetic philosophy. Later organizations like 
                the Builders of the Adytum (B.O.T.A.) and the Rosicrucian Order continued to preserve and develop Hermetic teachings.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Today, Hermeticism continues to influence contemporary spiritual movements, depth psychology, and integrative approaches 
                to consciousness. Scholars like Wouter Hanegraaff have brought academic attention to the historical importance of 
                Hermeticism, while practitioners continue to find relevance in its principles for addressing modern philosophical and 
                spiritual questions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Related Traditions</h2>
              <ul className="space-y-4">
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Gnosticism</h3>
                  <p className="text-foreground/80">Shares with Hermeticism the concept of divine knowledge (gnosis) and the idea that humans contain a divine spark.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Neoplatonism</h3>
                  <p className="text-foreground/80">Philosophical system with significant overlap in cosmology and ideas about the divine mind and emanation.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Rosicrucianism</h3>
                  <p className="text-foreground/80">Mystery tradition that incorporated Hermetic principles into its framework of spiritual development.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Kabbalah</h3>
                  <p className="text-foreground/80">Jewish mystical tradition that became intertwined with Hermeticism in Renaissance occultism and later magical orders.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-muted-foreground">
          <p className="inline-block border border-border/30 px-4 py-2 rounded-full text-sm bg-card/30 backdrop-blur-sm">Full content coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
} 