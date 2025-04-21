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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Tree of Life</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="mb-4 text-foreground/90 leading-relaxed">
                    The Tree of Life (Etz Hayyim) is the central symbolic system in Kabbalah, representing the process of divine manifestation. 
                    It consists of ten Sephirot (singular: Sephirah), divine emanations that together form the structure of all creation.
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    The Sephirot are arranged in three columns (pillars) representing different qualities:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-accent/80 mr-2"></div>
                      <span><span className="font-semibold">Pillar of Severity:</span> (Left) Binah, Geburah, Hod – Feminine, restrictive energy</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-white/80 mr-2"></div>
                      <span><span className="font-semibold">Pillar of Mercy:</span> (Right) Chokmah, Chesed, Netzach – Masculine, expansive energy</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-amber-500/80 mr-2"></div>
                      <span><span className="font-semibold">Pillar of Equilibrium:</span> (Middle) Kether, Tiphereth, Yesod, Malkuth – Balance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:w-1/2 flex justify-center items-center">
                  <div className="relative w-64 h-80">
                    <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      {/* Simple Tree of Life diagram */}
                      {/* Circles for Sephirot */}
                      <circle cx="100" cy="20" r="12" stroke="hsl(0 0% 100%)" strokeWidth="1" className="glow"/>
                      <circle cx="60" cy="60" r="12" stroke="hsl(45 100% 60%)" strokeWidth="1" className="glow"/>
                      <circle cx="140" cy="60" r="12" stroke="hsl(45 100% 60%)" strokeWidth="1" className="glow"/>
                      <circle cx="100" cy="100" r="12" stroke="hsl(0 0% 100%)" strokeWidth="1" className="glow"/>
                      <circle cx="60" cy="140" r="12" stroke="hsl(45 100% 60%)" strokeWidth="1" className="glow"/>
                      <circle cx="140" cy="140" r="12" stroke="hsl(45 100% 60%)" strokeWidth="1" className="glow"/>
                      <circle cx="100" cy="180" r="12" stroke="hsl(0 0% 100%)" strokeWidth="1" className="glow"/>
                      <circle cx="60" cy="220" r="12" stroke="hsl(45 100% 60%)" strokeWidth="1" className="glow"/>
                      <circle cx="140" cy="220" r="12" stroke="hsl(45 100% 60%)" strokeWidth="1" className="glow"/>
                      <circle cx="100" cy="260" r="12" stroke="hsl(0 0% 100%)" strokeWidth="1" className="glow"/>
                      
                      {/* Connecting lines */}
                      <path d="M100 32 L60 48" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M100 32 L140 48" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M60 72 L140 72" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M60 72 L100 88" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M140 72 L100 88" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M100 112 L60 128" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M100 112 L140 128" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M60 152 L140 152" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M60 152 L100 168" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M140 152 L100 168" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M100 192 L60 208" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M100 192 L140 208" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M60 232 L140 232" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M60 232 L100 248" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M140 232 L100 248" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      
                      {/* Vertical paths */}
                      <path d="M100 32 L100 88" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M100 112 L100 168" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M100 192 L100 248" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M60 72 L60 128" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M60 152 L60 208" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M140 72 L140 128" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                      <path d="M140 152 L140 208" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                    </svg>
                    <div className="absolute inset-0 bg-accent/5 rounded-lg blur-2xl -z-10"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Historical Development</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-accent mb-1">Early Origins (1st-5th centuries CE)</h3>
                  <p className="text-foreground/80">
                    The earliest Kabbalistic texts include Sefer Yetzirah (Book of Formation), which describes how God created the universe 
                    through the 22 letters of the Hebrew alphabet and the ten Sephirot. This period saw the development of Merkabah mysticism, 
                    focused on visions of God's heavenly throne-chariot (the Merkabah).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Medieval Flowering (12th-13th centuries)</h3>
                  <p className="text-foreground/80">
                    Kabbalah flourished in Provence and Spain. The Sefer ha-Bahir appeared around 1176, introducing many concepts central to 
                    Kabbalah. The Zohar, written by Moses de León (attributed to the 2nd-century rabbi Shimon bar Yochai), emerged in 13th-century 
                    Spain and became the most influential Kabbalistic text.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Safed Period (16th century)</h3>
                  <p className="text-foreground/80">
                    Following the expulsion of Jews from Spain in 1492, a community of Kabbalists formed in Safed, Israel. Rabbi Isaac Luria 
                    (the Ari) developed Lurianic Kabbalah, introducing concepts like tzimtzum (divine contraction), shevirat ha-kelim 
                    (breaking of the vessels), and tikkun (cosmic repair).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Modern Interpretations</h3>
                  <p className="text-foreground/80">
                    In the 18th century, Hasidic Judaism popularized Kabbalistic ideas for wider audiences. The 20th century saw Kabbalah 
                    entering Western esotericism through figures like Aleister Crowley and Dion Fortune. Contemporary interest has brought 
                    Kabbalah to mainstream awareness, though often in simplified or syncretized forms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Four Worlds</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Kabbalistic cosmology describes four distinct "worlds" or levels of reality through which divine energy flows from its 
                infinite source (Ein Sof) down to our physical universe. Each world represents a different level of manifestation:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">Atziluth (אֲצִילוּת) - World of Emanation</h3>
                  <p className="text-foreground/80">
                    The highest world, closest to Ein Sof, containing only the pure divine light. This is the realm of pure divinity, 
                    beyond human comprehension. Associated with the Yod of the Tetragrammaton and the element of Fire.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">Beriah (בְּרִיאָה) - World of Creation</h3>
                  <p className="text-foreground/80">
                    The world where creation begins in its purest form. This is the realm of the archangels and highest spiritual entities. 
                    Associated with the first Heh of the Tetragrammaton and the element of Air.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">Yetzirah (יְצִירָה) - World of Formation</h3>
                  <p className="text-foreground/80">
                    The world where archetypal forms take shape. This is the realm of angels and astral energies. Associated with the 
                    Vau of the Tetragrammaton and the element of Water.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">Assiah (עֲשִׂיָּה) - World of Making</h3>
                  <p className="text-foreground/80">
                    The material world we inhabit, where divine energy manifests in physical form. This is our universe of physical 
                    experience. Associated with the final Heh of the Tetragrammaton and the element of Earth.
                  </p>
                </div>
              </div>
              
              <p className="mt-6 text-foreground/90 leading-relaxed">
                These four worlds correspond to different aspects of human consciousness: intuition (Atziluth), intellect (Beriah), 
                emotions (Yetzirah), and physical action (Assiah). The spiritual journey in Kabbalah involves ascending through these 
                worlds to achieve closer communion with the divine source.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Kabbalistic Practices</h2>
              <ul className="space-y-4">
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Gematria</h3>
                  <p className="text-foreground/80">Numerical analysis of Hebrew words to reveal hidden connections between concepts. Each Hebrew letter has a numerical value, allowing texts to be interpreted on multiple levels.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Meditation on Divine Names</h3>
                  <p className="text-foreground/80">Contemplation of the names of God, especially the Tetragrammaton (YHVH) and its permutations, to connect with divine energies.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Kavvanah</h3>
                  <p className="text-foreground/80">Focused intention during prayer and ritual, directing consciousness toward the divine and specific Sephirot.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Devekut</h3>
                  <p className="text-foreground/80">"Cleaving to God" - a state of mystical communion achieved through contemplative practices and ethical living.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Hebrew Letter Visualization</h3>
                  <p className="text-foreground/80">Meditation on the shapes, sounds, and energies of Hebrew letters as channels for divine creative power.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <blockquote className="border-l-4 border-accent/50 pl-6 py-4 italic text-xl text-muted-foreground max-w-3xl mx-auto mb-12 bg-card/30 backdrop-blur-sm rounded-r-md">
          "As above, so below; as below, so above. By understanding the one, you comprehend the other."
          <span className="text-sm not-italic block mt-2 text-accent/80">— Kabbalistic teaching</span>
        </blockquote>
      </div>
    </MainLayout>
  );
} 