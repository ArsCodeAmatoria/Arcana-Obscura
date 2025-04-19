import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, Calculator, Flame, Hash, Key } from 'lucide-react';

export default function GematriaPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Back navigation */}
        <div className="mb-8">
          <Link 
            href="/library" 
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Library</span>
          </Link>
        </div>
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <Calculator className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            Gematria
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Kabbalah
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Sacred Mathematics
            </span>
            <span className="text-xs bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full">
              Ancient - Present
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            The mystical practice of assigning numerical values to letters, revealing hidden connections and meanings within sacred texts.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Key className="w-5 h-5" />
                The Cosmic Language of Numbers
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Gematria is an alphanumerical system that assigns numerical values to letters, words, and phrases, revealing hidden layers of meaning in sacred texts. 
                  While most commonly associated with Hebrew in Kabbalah, similar systems exist in Greek (Isopsephy), Arabic (Abjad numerals), and other languages.
                </p>
                <p>
                  At its core, gematria is based on the premise that the universe is structured according to mathematical principles, and that these principles 
                  are embedded in the sacred language through which divine wisdom was transmitted. By revealing numerical patterns and correspondences between words, 
                  practitioners believe they can uncover concealed connections and esoteric truths.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "Numbers are the Universal language offered by the deity to humans as confirmation of the truth." — St. Augustine of Hippo
                </p>
              </div>
            </section>
            
            {/* Historical Context */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5" />
                Historical Development
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The origins of gematria can be traced to ancient Mesopotamian cultures, but it reached its fullest expression within Jewish mysticism. 
                  During the Second Temple period (516 BCE – 70 CE), gematria became an established method of Biblical exegesis, forming part of the 
                  interpretive tradition known as Pardes (Paradise), an acronym for four levels of scriptural interpretation:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="text-accent/80 font-medium">Peshat</span> - Simple or literal meaning</li>
                  <li><span className="text-accent/80 font-medium">Remez</span> - Allegorical meaning</li>
                  <li><span className="text-accent/80 font-medium">Derash</span> - Comparative meaning through exposition</li>
                  <li><span className="text-accent/80 font-medium">Sod</span> - Secret or mystical meaning often revealed through gematria</li>
                </ul>
                <p>
                  By the Middle Ages, gematria had become a central feature of Kabbalistic practice, particularly in works like the Sefer Yetzirah (Book of Formation) and 
                  the Zohar, which emphasized the creative power inherent in the Hebrew letters and their numerical values.
                </p>
              </div>
            </section>
            
            {/* Methods */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Hash className="w-5 h-5" />
                Primary Methods & Systems
              </h2>
              <div className="space-y-6 text-foreground/80">
                <div>
                  <h3 className="text-xl font-medium text-accent/80 mb-2">Hebrew Gematria Systems</h3>
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium mb-2">Mispar Hechrachi (Absolute Value)</h4>
                        <p className="text-sm text-foreground/70 mb-2">The standard method, assigning values 1-9, 10-90, and 100-900 to Hebrew letters.</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="bg-primary/5 p-2 rounded">א = 1</div>
                          <div className="bg-primary/5 p-2 rounded">י = 10</div>
                          <div className="bg-primary/5 p-2 rounded">ק = 100</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">Mispar Katan (Small Number)</h4>
                        <p className="text-sm text-foreground/70 mb-2">Reduces all letters to single digits (1-9).</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="bg-primary/5 p-2 rounded">א = 1</div>
                          <div className="bg-primary/5 p-2 rounded">י = 1</div>
                          <div className="bg-primary/5 p-2 rounded">ק = 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-accent/80 mb-2">Famous Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                      <h4 className="text-lg font-medium mb-2">Chai (חי) - "Life"</h4>
                      <p className="mb-2">ח (Chet) = 8, י (Yod) = 10</p>
                      <p className="text-accent font-medium text-lg">Total: 18</p>
                      <p className="text-sm text-foreground/70 mt-2">
                        The number 18 is considered particularly auspicious in Jewish tradition, 
                        and gifts or donations in multiples of 18 are common.
                      </p>
                    </div>
                    <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                      <h4 className="text-lg font-medium mb-2">Echad (אחד) - "One" & Ahava (אהבה) - "Love"</h4>
                      <p className="mb-1">אחד: א (1) + ח (8) + ד (4) = 13</p>
                      <p className="mb-2">אהבה: א (1) + ה (5) + ב (2) + ה (5) = 13</p>
                      <p className="text-accent font-medium text-lg">Both equal 13</p>
                      <p className="text-sm text-foreground/70 mt-2">
                        This equivalence is interpreted to mean "God is Love" or "The nature of Unity is Love."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Significance & Legacy */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4">Esoteric Significance</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Beyond mere wordplay, gematria represents a profound mystical approach to sacred texts, based on several key principles:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Divine Architecture</span>: Numbers are seen as the building blocks of creation, reflecting the divine order and intelligence behind the universe.
                  </li>
                  <li>
                    <span className="font-medium">Interconnectedness</span>: Words with the same numerical value are considered conceptually connected, revealing hidden relationships between seemingly unrelated concepts.
                  </li>
                  <li>
                    <span className="font-medium">Layers of Meaning</span>: Sacred texts are understood to contain multiple levels of meaning, with the numerical layer accessible only through gematria.
                  </li>
                  <li>
                    <span className="font-medium">Transformative Practice</span>: Engaging with gematria is considered a contemplative practice that can transform consciousness and deepen one's connection to divine wisdom.
                  </li>
                </ol>
                <p>
                  Today, gematria remains a vital practice within Kabbalistic study and has influenced various esoteric traditions, including Western ceremonial magic, 
                  Hermeticism, and certain branches of New Age spirituality. It continues to offer practitioners a unique lens through which to explore 
                  the mysterious relationship between language, mathematics, and spiritual truth.
                </p>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Key correspondences */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Hebrew Letter Values</h3>
              </div>
              <div className="p-4 text-foreground/70 space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Units (1-9)</h4>
                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="bg-primary/5 p-1 rounded">א = 1</div>
                    <div className="bg-primary/5 p-1 rounded">ב = 2</div>
                    <div className="bg-primary/5 p-1 rounded">ג = 3</div>
                    <div className="bg-primary/5 p-1 rounded">ד = 4</div>
                    <div className="bg-primary/5 p-1 rounded">ה = 5</div>
                    <div className="bg-primary/5 p-1 rounded">ו = 6</div>
                    <div className="bg-primary/5 p-1 rounded">ז = 7</div>
                    <div className="bg-primary/5 p-1 rounded">ח = 8</div>
                    <div className="bg-primary/5 p-1 rounded">ט = 9</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Tens (10-90)</h4>
                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="bg-primary/5 p-1 rounded">י = 10</div>
                    <div className="bg-primary/5 p-1 rounded">כ = 20</div>
                    <div className="bg-primary/5 p-1 rounded">ל = 30</div>
                    <div className="bg-primary/5 p-1 rounded">מ = 40</div>
                    <div className="bg-primary/5 p-1 rounded">נ = 50</div>
                    <div className="bg-primary/5 p-1 rounded">ס = 60</div>
                    <div className="bg-primary/5 p-1 rounded">ע = 70</div>
                    <div className="bg-primary/5 p-1 rounded">פ = 80</div>
                    <div className="bg-primary/5 p-1 rounded">צ = 90</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Hundreds (100-900)</h4>
                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="bg-primary/5 p-1 rounded">ק = 100</div>
                    <div className="bg-primary/5 p-1 rounded">ר = 200</div>
                    <div className="bg-primary/5 p-1 rounded">ש = 300</div>
                    <div className="bg-primary/5 p-1 rounded">ת = 400</div>
                    <div className="bg-primary/5 p-1 rounded">ך = 500</div>
                    <div className="bg-primary/5 p-1 rounded">ם = 600</div>
                    <div className="bg-primary/5 p-1 rounded">ן = 700</div>
                    <div className="bg-primary/5 p-1 rounded">ף = 800</div>
                    <div className="bg-primary/5 p-1 rounded">ץ = 900</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Practical application */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Practical Application</h3>
              </div>
              <div className="p-4 text-foreground/70 space-y-4">
                <p className="text-sm">
                  To practice basic gematria, follow these steps:
                </p>
                <ol className="text-sm list-decimal list-inside space-y-2">
                  <li>Choose a word or phrase from a sacred text</li>
                  <li>Convert each letter to its numerical value</li>
                  <li>Add the values to find the total</li>
                  <li>Search for other words or phrases with the same total</li>
                  <li>Contemplate the connections between these terms</li>
                </ol>
                <div className="bg-primary/5 p-3 rounded mt-4">
                  <h4 className="text-sm font-medium mb-2">Example Calculation:</h4>
                  <p className="text-sm"><strong>שלום</strong> (Shalom, "Peace")</p>
                  <p className="text-sm">ש (300) + ל (30) + ו (6) + ם (600) = 936</p>
                </div>
              </div>
            </div>
            
            {/* Related texts */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Related Texts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/library/sefer-yetzirah" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Sefer Yetzirah</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/zohar" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Zohar</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/corpus-hermeticum" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Corpus Hermeticum</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 