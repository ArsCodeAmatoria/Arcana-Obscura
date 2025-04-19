import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, ScrollText, Sparkles, Scale, Beaker, Compass, FlaskConical } from 'lucide-react';

export default function EmeraldTabletPage() {
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
            <ScrollText className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            The Emerald Tablet
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Hermeticism
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Alchemy
            </span>
            <span className="text-xs bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full">
              c. 600-800 CE
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A cryptic text said to contain the secrets of the universe, attributed to Hermes Trismegistus and foundational to alchemical and hermetic traditions.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <ScrollText className="w-5 h-5" />
                Origins and History
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Emerald Tablet (Tabula Smaragdina) is one of the most revered texts in the Western esoteric tradition. 
                  Despite its brevity—consisting of just a few paragraphs—its impact on alchemical and hermetic thought has been profound and enduring.
                </p>
                <p>
                  While traditionally attributed to Hermes Trismegistus, the legendary figure who embodies the convergence of the Greek god Hermes and the Egyptian god Thoth, 
                  the historical origins of the text remain shrouded in mystery. The earliest known written records date to Arabic sources from the 8th-9th centuries CE, 
                  with the text claiming to describe an ancient emerald slab found in the tomb of Hermes.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "True, without falsehood, certain and most true, that which is above is as that which is below, and that which is below is as that which is above, 
                  for the performance of the miracles of the One Thing."
                  <br />— Opening lines of the Emerald Tablet
                </p>
              </div>
            </section>
            
            {/* The Text */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                The Text in Translation
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Emerald Tablet has been translated numerous times throughout history, with slight variations. 
                  One of the most influential renditions is Isaac Newton's translation from the 17th century. 
                  Here is the complete text in a modern English translation:
                </p>
                <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                  <ol className="list-decimal list-inside space-y-3 ml-4">
                    <li>True, without falsehood, certain and most true.</li>
                    <li>That which is above is as that which is below, and that which is below is as that which is above, for the performance of the miracles of the One Thing.</li>
                    <li>And as all things were from One, by the mediation of One, so all things arose from this One Thing by adaptation.</li>
                    <li>Its father is the Sun, its mother is the Moon; the Wind carries it in its belly, its nurse is the Earth.</li>
                    <li>It is the father of all works of wonder in the world.</li>
                    <li>Its power is perfect if it is converted into Earth.</li>
                    <li>Separate the Earth from the Fire, the subtle from the gross, gently and with great ingenuity.</li>
                    <li>It ascends from Earth to Heaven and descends again to Earth, thereby combining within itself the powers of both the Above and the Below.</li>
                    <li>Thus you will possess the glory of the brightness of the whole world, and all obscurity will fly far from you.</li>
                    <li>This is the strong force of all forces, overcoming every subtle thing and penetrating every solid thing.</li>
                    <li>Thus was the world created.</li>
                    <li>From this will be, and will emerge, admirable adaptations of which the means is here.</li>
                    <li>And for this reason I am called Hermes Trismegistus, having three parts of the philosophy of the whole world.</li>
                    <li>What I have said of the operation of the Sun is accomplished and ended.</li>
                  </ol>
                </div>
                <p>
                  This cryptic text has been interpreted in countless ways over the centuries, with alchemists, hermeticists, and esoteric philosophers each finding 
                  different layers of meaning within its concise verses.
                </p>
              </div>
            </section>
            
            {/* Esoteric Significance */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Beaker className="w-5 h-5" />
                Esoteric Significance
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  The Emerald Tablet holds immense significance in various esoteric traditions:
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Hermetic Axiom</h3>
                    <p className="mb-3">
                      The famous phrase "As above, so below" encapsulates the Hermetic principle of correspondence—the idea that the macrocosm (universe) is reflected in the microcosm (human being), 
                      and that earthly phenomena mirror celestial ones. This principle establishes the fundamental interconnectedness of all levels of reality.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Alchemical Blueprint</h3>
                    <p className="mb-3">
                      For alchemists, the Tablet provided the philosophical foundation for their work. It was interpreted as a coded description of the Great Work (Magnum Opus)—the process of creating 
                      the Philosopher's Stone, which could transmute base metals into gold and perhaps grant immortality.
                    </p>
                    <p className="text-sm text-foreground/70">
                      The Tablet's references to separation, ascension, and recombination mirror the alchemical stages of solve et coagula (dissolve and coagulate), 
                      and its mention of Sun (sulfur), Moon (mercury), and Earth (salt) reflect the three primal alchemical substances.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Prima Materia</h3>
                    <p className="mb-3">
                      The "One Thing" mentioned in the Tablet is often interpreted as the prima materia—the primordial, undifferentiated substance from which all matter is derived. 
                      Understanding and working with this substance was a central goal of alchemical practice.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Spiritual Transformation</h3>
                    <p className="mb-3">
                      Beyond material alchemy, the Tablet has been read as a guide to spiritual transformation and enlightenment. The process described—of 
                      separation, purification, and reunification—can be interpreted as stages in the evolution of consciousness.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Sacred Geometry */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5" />
                Sacred Geometry
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  The principles expressed in the Emerald Tablet are intimately connected to sacred geometry—the study of geometric patterns and proportions considered to be the blueprints of creation. These geometric forms represent the fundamental patterns that govern the universe, from the microscopic to the cosmic scale.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <div className="flex justify-center mb-4">
                      <svg viewBox="0 0 100 100" className="w-20 h-20 text-accent" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">The Circle</h3>
                    <p className="text-sm text-foreground/70">
                      Representing unity, wholeness, and the infinite nature of the universe, the circle embodies the "One Thing" mentioned in the Tablet. The relationship between the center point and the circumference mirrors the connection between the source and manifestation.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <div className="flex justify-center mb-4">
                      <svg viewBox="0 0 100 100" className="w-20 h-20 text-accent" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="50,10 90,90 10,90" stroke="currentColor" fill="none" strokeWidth="1.5" />
                        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2" />
                        <line x1="10" y1="90" x2="50" y2="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2" />
                        <line x1="90" y1="90" x2="50" y2="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">The Triangle</h3>
                    <p className="text-sm text-foreground/70">
                      Symbolizing the trinity of body, mind, and spirit, the triangle reflects the Emerald Tablet's reference to the Sun (masculine), Moon (feminine), and Mercury (unifying agent). In alchemy, it represents the three essential elements: sulfur, mercury, and salt.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <div className="flex justify-center mb-4">
                      <svg viewBox="0 0 100 100" className="w-20 h-20 text-accent" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="25" y1="25" x2="75" y2="75" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="75" y1="25" x2="25" y2="75" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">The Square</h3>
                    <p className="text-sm text-foreground/70">
                      Representing the physical world and the four elements (earth, air, fire, water), the square connects to the Tablet's instruction to "Separate the Earth from the Fire." It symbolizes stability and manifestation in the material realm.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <div className="flex justify-center mb-4">
                      <svg viewBox="0 0 100 100" className="w-20 h-20 text-accent" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M50,10 A40,40 0 0,1 90,50" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                        <path d="M50,10 A40,40 0 0,0 10,50" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                        <path d="M90,50 A40,40 0 0,1 50,90" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                        <path d="M10,50 A40,40 0 0,1 50,90" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">The Vesica Piscis</h3>
                    <p className="text-sm text-foreground/70">
                      Formed by the intersection of two circles, this shape represents the union of opposites and the space of creation where dualities merge. It reflects the Tablet's principle that "all things were from One" yet manifest as apparent dualities.
                    </p>
                  </div>
                </div>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                  <h3 className="text-xl font-medium text-accent/80 mb-3">The Golden Ratio & Spiral</h3>
                  <div className="flex flex-wrap md:flex-nowrap items-center gap-6">
                    <div className="flex justify-center">
                      <svg viewBox="0 0 100 100" className="w-20 h-20 text-accent" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <rect x="10" y="10" width="49.5" height="49.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <rect x="59.5" y="10" width="30.5" height="30.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <rect x="59.5" y="40.5" width="18.9" height="18.9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <rect x="78.4" y="40.5" width="11.6" height="11.6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M10,90 C10,59.5 40.5,59.5 40.5,29 C40.5,10 59.5,10 90,10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="2" />
                      </svg>
                    </div>
                    <p className="text-sm text-foreground/70">
                      The golden ratio (1:1.618...) appears throughout nature and is considered a mathematical expression of harmony and divine proportion. The golden spiral, derived from this ratio, echoes the Tablet's description of the cyclical process of ascension and descension—"It ascends from Earth to Heaven and descends again to Earth"—representing the alchemical process of evolution and involution.
                    </p>
                  </div>
                </div>
                
                <p>
                  These geometric principles were not merely abstract concepts to Hermetic practitioners but practical tools for understanding and working with the universe's fundamental patterns. The geometric forms were seen as keys to the "strong force of all forces" mentioned in the Tablet—universal principles that, once mastered, allowed the adept to "possess the glory of the brightness of the whole world."
                </p>
              </div>
            </section>
            
            {/* Historical Influence */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4">Historical Influence</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Emerald Tablet's influence extends across diverse traditions and time periods:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Medieval Alchemy</span>: The Tablet was a foundational text for European alchemists from the 12th century onward, serving as both philosophical justification and practical guide.
                  </li>
                  <li>
                    <span className="font-medium">Renaissance Hermeticism</span>: During the Renaissance, the recovery of Hermetic texts, including the Emerald Tablet, sparked renewed interest in ancient wisdom and contributed to the development of Renaissance Neoplatonism.
                  </li>
                  <li>
                    <span className="font-medium">Rosicrucianism</span>: The Rosicrucian movement incorporated Hermetic principles from the Tablet, particularly the idea of correspondence between macrocosm and microcosm.
                  </li>
                  <li>
                    <span className="font-medium">Modern Occultism</span>: 19th and 20th century occult orders, including the Hermetic Order of the Golden Dawn, drew heavily on the principles outlined in the Tablet, incorporating them into their magical systems.
                  </li>
                  <li>
                    <span className="font-medium">Contemporary Esotericism</span>: The Tablet continues to influence modern esoteric thought, with its principles remaining central to contemporary Hermetic practice and study.
                  </li>
                </ol>
                <p>
                  Beyond esoteric circles, the ideas contained in the Emerald Tablet have permeated Western culture, appearing in literature, art, music, and even aspects of popular philosophy. Its concise expression of the unity and interconnectedness of all things resonates with contemporary holistic and integral approaches to reality.
                </p>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Key concepts */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Concepts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">As Above, So Below</h4>
                    <p className="text-sm">The principle of correspondence between different planes of existence.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">The One Thing</h4>
                    <p className="text-sm">The prima materia or first substance from which all creation emerges.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Solve et Coagula</h4>
                    <p className="text-sm">The alchemical process of dissolution and recombination reflected in the Tablet's instructions.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Quintessence</h4>
                    <p className="text-sm">The fifth element or spiritual essence often associated with the "One Thing" mentioned in the text.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Sacred Geometry</h4>
                    <p className="text-sm">The study of geometric patterns that underlie and express the fundamental structure of creation.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Historical versions */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Notable Translations</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Arabic Balinas</h4>
                    <p className="text-sm">The earliest known written version from the 8th century, attributed to Balinas (the Arabic name for Apollonius of Tyana).</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Latin Versions</h4>
                    <p className="text-sm">12th-century Latin translations that made the text accessible to European alchemists and scholars.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Isaac Newton's Translation</h4>
                    <p className="text-sm">The famed scientist's personal translation from the 17th century, found among his alchemical papers.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Aleister Crowley's Version</h4>
                    <p className="text-sm">The occultist's interpretation, which emphasized the magical and transformative aspects of the text.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Related Texts */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Related Texts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/library/corpus-hermeticum" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Corpus Hermeticum</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/kybalion" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Kybalion</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/book-of-the-dead" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Egyptian Book of the Dead</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Future Content Note */}
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  Our scholars are currently analyzing additional historical contexts and interpretations of the Emerald Tablet. 
                  Check back soon for expanded content on this foundational hermetic text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 