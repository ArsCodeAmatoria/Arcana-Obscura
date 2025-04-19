import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, ScrollText, Sparkles, Hammer, Star, Skull, Book } from 'lucide-react';

export default function GolemPage() {
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
            <Skull className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            The Golem
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Jewish Mysticism
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Kabbalah
            </span>
            <span className="text-xs bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full">
              16th Century CE
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            An animated anthropomorphic being created from inanimate matter, brought to life through sacred Hebrew incantations and mystical rituals.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Origins */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <ScrollText className="w-5 h-5" />
                Origins and Mythology
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The golem is a creature of Jewish folklore and mysticism—a humanoid entity created from clay or mud and brought to life through sacred rituals and Hebrew incantations. The concept emerges from ancient Jewish mystical texts and traditions, particularly within the medieval Kabbalistic schools.
                </p>
                <p>
                  While golem-like creatures appear in early Talmudic literature (as early as the 3rd century CE), the golem as we know it today rose to prominence in medieval European Jewish communities. The most famous golem story involves Rabbi Judah Loew ben Bezalel, the 16th century chief rabbi of Prague, who allegedly created a golem to protect the Jewish community from antisemitic attacks.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "The Maharal of Prague made a golem out of clay and put the ineffable Name in its mouth... and the golem became alive and could talk and do everything a person can do, except speak."
                  <br />— From <em>Niflaot Maharal</em>, 19th century account
                </p>
              </div>
            </section>
            
            {/* Creation Process */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Hammer className="w-5 h-5" />
                The Creation Process
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  According to Kabbalistic traditions, the creation of a golem involves several mystical elements and precise ritual procedures:
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Clay Form</h3>
                    <p className="mb-3">
                      First, a form must be shaped from virgin soil, ideally gathered from a place where no human has ever dug. The clay is molded into human form, paying careful attention to proportions, though often leaving certain features unrefined, as a perfect representation would violate the prohibition against graven images.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Sacred Inscriptions</h3>
                    <p className="mb-3">
                      The Hebrew word "אמת" (emet, meaning "truth") is inscribed on the golem's forehead or placed on a parchment in its mouth. Alternatively, the Shem HaMephorash (the ineffable name of God) may be written on parchment and placed within the golem's mouth or attached to its forehead.
                    </p>
                    <p className="text-sm text-foreground/70">
                      To deactivate the golem, the first letter of emet (א, aleph) is erased, changing the word to "מת" (met, meaning "death").
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Ritual Circles and Incantations</h3>
                    <p className="mb-3">
                      The rabbi and his assistants would circumambulate the clay form seven times while reciting specific combinations of Hebrew letters derived from the Sefer Yetzirah (Book of Creation), a foundational Kabbalistic text that describes how God created the universe through letter combinations.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Animation</h3>
                    <p className="mb-3">
                      The final step involved the transference of divine spark—a portion of the creator's life force—into the clay form. This was achieved through extended meditation, prayer, and the mystical understanding of divine names. The creature would then open its eyes and await commands.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Kabbalistic Significance */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Kabbalistic Significance
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  Beyond its practical purpose as a protector, the golem represents profound mystical concepts within Kabbalistic thought:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Divine Emulation</h3>
                    <p className="text-sm text-foreground/70">
                      The creation of a golem mimics God's creation of Adam from dust (Genesis 2:7). Through this act, the mystic seeks to understand divine creation by emulating it—albeit producing an imperfect, mute being without true consciousness.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Word and Creation</h3>
                    <p className="text-sm text-foreground/70">
                      The golem demonstrates the Kabbalistic principle that letters and words are not merely symbolic but contain actual creative power. Just as God created the world through speech, Hebrew letters and divine names can impart life.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Limited Creation</h3>
                    <p className="text-sm text-foreground/70">
                      The golem's limitations (inability to speak, procreate, or possess true intelligence) illustrate the gap between divine and human creative power. Even the greatest mystic can only produce an imperfect reflection of true life.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Moral Warning</h3>
                    <p className="text-sm text-foreground/70">
                      Many golem stories end with the creature running amok or growing beyond control, serving as a cautionary tale about the dangers of hubris and attempting to usurp divine creative power.
                    </p>
                  </div>
                </div>
                
                <p>
                  The creation of a golem is not considered true creation <em>ex nihilo</em> (from nothing), which remains the sole province of God. Rather, it represents <em>yesh m'yesh</em> (something from something)—transformation of existing matter through mystical knowledge and divine names.
                </p>
              </div>
            </section>
            
            {/* Famous Golem Accounts */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4">Historical Accounts</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Several historical accounts of golem creation exist in Jewish literature:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">The Golem of Chelm</span>: Rabbi Eliyahu of Chelm (1550-1583) was reportedly the first historical figure to create a golem using the Sefer Yetzirah. The golem grew larger until Rabbi Eliyahu removed the divine name, causing the golem to crumble and crush the rabbi.
                  </li>
                  <li>
                    <span className="font-medium">The Golem of Prague</span>: The most famous golem story involves Rabbi Judah Loew ben Bezalel (Maharal of Prague, c. 1520-1609). According to legend, he created a golem to protect the Jewish community from antisemitic attacks during the reign of Rudolf II. This golem, named Josef, allegedly served the community on the Sabbath and performed physical labor.
                  </li>
                  <li>
                    <span className="font-medium">The Vilna Gaon's Attempt</span>: Rabbi Elijah ben Solomon Zalman (1720-1797), known as the Vilna Gaon, was said to have begun creating a golem but stopped midway through the ritual when he received a message that such knowledge was too dangerous for his generation.
                  </li>
                </ol>
                <p>
                  While these accounts contain mythological elements and were often recorded centuries after the purported events, they reflect the profound significance of the golem concept in Jewish mystical thought and community memory.
                </p>
              </div>
            </section>
            
            {/* Cultural Impact */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Book className="w-5 h-5" />
                Cultural Impact
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The golem has transcended its origins in Jewish mysticism to become a significant figure in world literature, art, and popular culture:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Literature</span>: From Gustav Meyrink's 1915 novel <em>Der Golem</em> to later works by Jorge Luis Borges, Isaac Bashevis Singer, and Michael Chabon, the golem has served as a powerful literary symbol exploring themes of creation, power, free will, and the consequences of technology.
                  </li>
                  <li>
                    <span className="font-medium">Film</span>: The 1920 German expressionist film <em>Der Golem, wie er in die Welt kam</em> (The Golem: How He Came into the World) established the golem as a cinematic figure, influencing the portrayal of artificial beings from Frankenstein's monster to robots and AI.
                  </li>
                  <li>
                    <span className="font-medium">Modern Science</span>: The golem has become a metaphor in discussions about artificial intelligence, bioengineering, and synthetic life—representing both the promise and peril of creating conscious entities.
                  </li>
                  <li>
                    <span className="font-medium">Fantasy and Gaming</span>: Golems appear as creatures in numerous fantasy settings, role-playing games, and video games, typically portrayed as magically animated constructs made from various materials.
                  </li>
                </ul>
                <p>
                  The enduring fascination with the golem stems from its exploration of fundamental questions about creation, consciousness, and the boundaries between human and divine power—questions that remain relevant across cultures and time periods.
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
                    <h4 className="font-medium text-accent/80">Emet (אמת)</h4>
                    <p className="text-sm">Hebrew for "truth," inscribed on the golem's forehead to animate it.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Shem HaMephorash</h4>
                    <p className="text-sm">The ineffable name of God, used in mystical activation rituals.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Sefer Yetzirah</h4>
                    <p className="text-sm">The "Book of Creation," containing mystical letter combinations used in golem creation.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Maharal of Prague</h4>
                    <p className="text-sm">Rabbi Judah Loew, the 16th-century mystic most famously associated with golem creation.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Homunculus</h4>
                    <p className="text-sm">A Western alchemical parallel to the golem concept—an artificially created miniature human.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Symbolic Interpretation */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Symbolic Interpretations</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Technological Hubris</h4>
                    <p className="text-sm">The golem as a precursor to modern concerns about technology outpacing our ability to control it.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Jewish Self-Defense</h4>
                    <p className="text-sm">A symbol of Jewish communities' desire for protection during periods of persecution.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Creative Power</h4>
                    <p className="text-sm">Represents humanity's yearning to emulate divine creative powers.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">The Unconscious Mind</h4>
                    <p className="text-sm">In psychological interpretations, the golem represents repressed aspects of the psyche given form.</p>
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
                      href="/library/sefer-yetzirah" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Sefer Yetzirah</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/kabbalah" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Kabbalah Traditions</span>
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
                </ul>
              </div>
            </div>
            
            {/* Future Content Note */}
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  Our scholars are currently analyzing additional accounts of golem creation and comparing them with similar artificial life concepts from other mystical traditions. Check back soon for expanded content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 