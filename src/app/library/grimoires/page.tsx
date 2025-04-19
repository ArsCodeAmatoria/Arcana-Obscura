import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, BookMarked, Flame, Sparkles, Scroll, Wand, Key } from 'lucide-react';

export default function GrimoiresPage() {
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
            <BookMarked className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            Grimoires & Black Books
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Ceremonial Magic
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Demonology
            </span>
            <span className="text-xs bg-accent/10 text-accent-foreground px-3 py-1 rounded-full">
              Medieval - Renaissance
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            The forbidden manuscripts of ritual magic that claim to grant power over spirits, demons, and the forces of nature.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Origins */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Scroll className="w-5 h-5" />
                Origins & Evolution
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Grimoires—books of magical knowledge, rituals, and incantations—emerged at the intersection of various traditions: Greco-Egyptian magical papyri, Jewish mysticism, Arabic occultism, and European folk magic. The term "grimoire" derives from the Old French "grammaire," originally referring to any book written in Latin (a language few could read), but later specifically denoting books of magic.
                </p>
                <p>
                  While magical texts have existed since antiquity, grimoires as a distinct genre flourished in Europe from the Middle Ages through the Renaissance, a period when literacy was limited and the Church held substantial power. This created the perfect conditions for these texts to be both feared and coveted—they represented access to forbidden knowledge and potentially supernatural power outside ecclesiastical control.
                </p>
                <p>
                  Many grimoires claimed ancient or divine authorship to enhance their credibility and mystique. The attribution of texts to biblical figures like Solomon or legendary scholars like Albertus Magnus granted these works an air of authenticity and power, regardless of their actual (typically much later) origins.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "Guard well this book of secret arts, for therein lies power beyond mortal comprehension, to be used with wisdom or to one's peril."
                  <br />— Opening warning from the Grand Grimoire
                </p>
              </div>
            </section>
            
            {/* Famous Grimoires */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <BookMarked className="w-5 h-5" />
                Famous Grimoires
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The most influential and notorious grimoires have shaped magical practice across centuries:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Key of Solomon</h3>
                    <p className="text-sm">
                      Attributed to the biblical King Solomon, this grimoire exists in various manuscripts dating primarily from the 14th-15th centuries. It focuses on ceremonial magic, describing elaborate rituals for summoning angels and demons, creating magical tools, and crafting talismans for various purposes. The text emphasizes purification and proper timing according to planetary hours.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Lesser Key of Solomon</h3>
                    <p className="text-sm">
                      Also known as the Lemegeton, this 17th-century grimoire comprises five books, the most famous being the Ars Goetia, which catalogs 72 demons with their sigils, attributes, and methods of evocation. Other sections cover planetary spirits (Theurgia Goetia), angel magic (Ars Paulina), ritual observations (Almadel), and more practical magic (Ars Notoria).
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Book of Abramelin</h3>
                    <p className="text-sm">
                      Dating to the 14th or 15th century, this grimoire describes an elaborate 18-month magical operation to contact one's "Holy Guardian Angel." It contains a comprehensive system of magical squares used for various purposes after achieving this contact. The text emphasizes ethical preparation and the spiritual development of the magician.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Grand Grimoire</h3>
                    <p className="text-sm">
                      A notorious 18th-century text also known as "The Red Dragon," this grimoire contains instructions for summoning Lucifuge Rofocale, the prime minister of Hell. It includes details on creating a "bloodless pact" with demons and using a "blasting rod" for commanding spirits. It represents the darker strand of grimoire tradition focused on diabolic magic.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Sworn Book of Honorius</h3>
                    <p className="text-sm">
                      Purportedly written by Honorius of Thebes, this 13th-century text claims to preserve the magic of Solomon against Church persecution. It contains elaborate prayers and conjurations for summoning spirits and achieving mystical visions, merging Christian elements with ritual magic.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Sixth and Seventh Books of Moses</h3>
                    <p className="text-sm">
                      Despite claiming ancient Hebrew origins, this text emerged in the 18th-19th centuries, becoming particularly influential in American folk magic traditions like hoodoo. It presents magical seals and incantations allegedly given to Moses along with the conventional biblical commandments, blending Jewish mysticism with European magical concepts.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Common Elements */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Wand className="w-5 h-5" />
                Common Elements of Ritual Magic
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Despite their diversity, most grimoires share certain fundamental elements and assumptions about magical practice:
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-accent/80">The Magician's Preparation</h3>
                  <p>
                    Grimoires typically emphasize the practitioner's preparation through purification rituals, fasting, prayer, sexual abstinence, and specific clothing requirements. These preparations acknowledge the dangerous nature of the work and the need for the magician to attain a state of ritual purity.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Magical Implements</h3>
                  <p>
                    Detailed instructions for creating tools such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The wand or rod for directing energy and commanding spirits</li>
                    <li>The ritual knife (athame) for tracing circles and inscribing symbols</li>
                    <li>The magic circle for protection from summoned entities</li>
                    <li>Special parchment, inks, and quills for creating talismans</li>
                    <li>Censers for burning incense appropriate to specific operations</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-accent/80">Timing and Correspondences</h3>
                  <p>
                    Operations are typically tied to astrological timing—specific days, planetary hours, and moon phases most conducive to different types of magic. These correspondences reflect a cosmos where earthly operations can align with cosmic forces.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Spirit Hierarchies</h3>
                  <p>
                    Most grimoires present elaborate hierarchies of spirits with specific powers, domains, and methods of approach. These hierarchies often blend elements from various religious traditions, reflecting the syncretic nature of Western esoteric thought.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Words of Power</h3>
                  <p>
                    Sacred names, barbarous words of evocation, and divine names from various traditions (particularly Hebrew, Greek, and Latin) feature prominently. The proper pronunciation and use of these names was considered essential to effective magic.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Magical Symbols</h3>
                  <p>
                    Sigils, seals, pentacles, and magical alphabets serve as interfaces between the mundane and spiritual realms. These visual elements were believed to channel specific energies or bind particular spirits.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Historical Context */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5" />
                Historical Context
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The grimoire tradition flourished in specific historical contexts that shaped their development:
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">The Church and Forbidden Knowledge</h3>
                <p>
                  Grimoires existed in a complex relationship with Christianity. While the Church officially condemned magic as demonic, many grimoires incorporated Christian prayers, angels, and symbols. Some even claimed to be "white magic" compatible with Christianity, despite prohibitions. Many grimoires were written by clergy themselves, who had the necessary literacy and access to esoteric texts.
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Law and Persecution</h3>
                <p>
                  Possession of grimoires could be dangerous, as magic was often criminalized. The infamous "Witchfinder General" Matthew Hopkins and similar witch hunters viewed grimoires as evidence of diabolic pacts. Accused witches were frequently found with pages from grimoires or crude adaptations of their instructions.
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Social Functions</h3>
                <p>
                  Despite dangers, grimoires served important social functions in pre-modern societies: they provided hope for healing when medicine was primitive, offered protection in uncertain times, and promised access to wealth and power for those excluded from traditional pathways to advancement.
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Transmission and Adaptation</h3>
                <p>
                  Grimoires spread through complex networks of copying, translation, and adaptation. A text might begin in learned Latin, be translated into French, then simplified into a chapbook for semi-literate audiences, picking up local folklore elements along the way. This process created numerous variants of core texts, adapted to different contexts.
                </p>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30 mt-6">
                  <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Grimoire Boom of the 18th-19th Centuries</h3>
                  <p>
                    The 18th and 19th centuries saw an explosion in grimoire publication and circulation, particularly in France. Factors contributing to this boom included:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>Rising literacy rates among the working classes</li>
                    <li>Cheaper printing technology</li>
                    <li>Social upheaval that increased demand for magical solutions</li>
                    <li>The weakening hold of the Church after the French Revolution</li>
                    <li>Romantic interest in the occult among educated classes</li>
                  </ul>
                  <p className="mt-3">
                    This period produced influential texts like <span className="italic">The Grand Grimoire</span>, <span className="italic">The Dragon Rouge</span>, and <span className="italic">The Grimoire of Pope Honorius</span>, which would later influence modern occultism.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Modern Legacy */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Modern Legacy
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The grimoire tradition has continued to evolve and influence modern magical and cultural movements:
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">19th-Century Revival</h3>
                <p>
                  The occult revival of the late 19th century saw figures like Éliphas Lévi and S.L. MacGregor Mathers reinterpret grimoires through the lens of emerging esoteric systems. The Hermetic Order of the Golden Dawn synthesized grimoire materials with Hermeticism, Kabbalah, and Tarot to create a comprehensive magical system that continues to influence modern practice.
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Scholarly Rediscovery</h3>
                <p>
                  Academic interest in grimoires has grown substantially since the late 20th century. Scholars like Owen Davies, Richard Kieckhefer, and Claire Fanger have studied these texts as important historical documents that reveal much about pre-modern worldviews, religious attitudes, and relationships between elite and popular culture.
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">The Digital Grimoire Age</h3>
                <p>
                  Once rare and difficult to access, grimoires are now widely available through digital repositories, translations, and reprints. This democratization of access has transformed what was once highly secretive knowledge into openly available material, changing how contemporary practitioners engage with these texts.
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">New Grimoire Traditions</h3>
                <p>
                  The 20th and 21st centuries have seen the creation of new grimoires and magical systems that draw on the traditional format while incorporating modern influences:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Chaos magic texts that adapt traditional techniques to postmodern philosophical frameworks</li>
                  <li>Thelemic grimoires influenced by Aleister Crowley's received text, The Book of the Law</li>
                  <li>Neo-shamanic magical systems that blend grimoire techniques with indigenous practices</li>
                  <li>Contemporary grimoires that incorporate quantum theory, psychology, and other modern disciplines</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Cultural Impact</h3>
                <p>
                  Beyond occult practice, grimoires have influenced literature, film, gaming, and pop culture. From H.P. Lovecraft's fictional <span className="italic">Necronomicon</span> (which has inspired actual grimoires) to the grimoires featured in TV shows like "Supernatural" and "Charmed," these magical books continue to captivate the imagination and represent access to hidden knowledge and power.
                </p>
                
                <p className="mt-6">
                  While modern practitioners may approach grimoires with different philosophical frameworks than their medieval counterparts, the essential dream remains similar: accessing hidden forces and knowledge beyond ordinary reality through specialized techniques, preparation, and mysterious correspondences between words, symbols, and cosmic powers.
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
                    <h4 className="font-medium text-accent/80">Evocation</h4>
                    <p className="text-sm">The practice of summoning spirits into visible appearance, typically within a triangle outside the magic circle.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Conjuration</h4>
                    <p className="text-sm">The recitation of specific formulas, names, and incantations to compel spiritual entities to appear and obey.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Planetary Hours</h4>
                    <p className="text-sm">Divisions of day and night governed by different planetary influences, determining optimal timing for magical operations.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Sigils</h4>
                    <p className="text-sm">Symbolic representations of entities or intentions, used to establish magical connections or manifest specific outcomes.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Talismans</h4>
                    <p className="text-sm">Objects inscribed with symbols and consecrated to hold specific magical properties or attract particular influences.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Grimoire Categories */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Grimoire Categories</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Solomonic Grimoires</h4>
                    <p className="text-sm">Texts attributed to King Solomon, focusing on angelic and demonic magic with elaborate ceremonies.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Faustian Grimoires</h4>
                    <p className="text-sm">Books allegedly used by or associated with Dr. Johann Faustus, often emphasizing demonic pacts.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Folk Grimoires</h4>
                    <p className="text-sm">Practical magic texts like <span className="italic">The Long Lost Friend</span> or <span className="italic">Romanus-Büchlein</span>, focusing on healing and everyday concerns.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Angelic Grimoires</h4>
                    <p className="text-sm">Works like <span className="italic">The Enochian Diaries</span> of John Dee, focusing on communication with angelic beings.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Modern Synthesis Grimoires</h4>
                    <p className="text-sm">19th-20th century works like <span className="italic">The Book of the Sacred Magic of Abra-Melin</span> that synthesize earlier traditions.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Related Traditions */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Related Traditions</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/pillars/hermeticism" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Hermeticism</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/pillars/kabbalah" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Kabbalah</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/pillars/rosicrucianism" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Rosicrucianism</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/pillars/alchemy" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Alchemy</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Notable Figures */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Notable Figures</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">King Solomon</h4>
                    <p className="text-sm">Biblical figure to whom numerous grimoires are attributed, renowned for his wisdom and supposed mastery over spirits.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Albertus Magnus</h4>
                    <p className="text-sm">13th-century Dominican friar and scholar whose name was attached to several grimoires on natural and celestial magic.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">John Dee</h4>
                    <p className="text-sm">16th-century mathematician and court astrologer who, with Edward Kelley, developed Enochian magic through angelic communications.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">S.L. MacGregor Mathers</h4>
                    <p className="text-sm">Co-founder of the Golden Dawn who translated and popularized several grimoires, including <span className="italic">The Key of Solomon</span> and <span className="italic">The Book of Abramelin</span>.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Historical Note */}
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Key className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  This article explores grimoires from a historical and cultural studies perspective. Many grimoires contain operations considered dangerous or unethical by modern standards. The material is presented for educational purposes only, within its historical context. Any practical applications should be approached with appropriate caution, ethical consideration, and respect for the original traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 