import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, ScrollText, Sparkles, Star, Moon, Shield, TreePine } from 'lucide-react';

export default function QliphothPage() {
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
            <Moon className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            The Qliphoth
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Dark Kabbalah
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Shadow Work
            </span>
            <span className="text-xs bg-accent/10 text-accent-foreground px-3 py-1 rounded-full">
              Medieval - Modern
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            The shadow side of the Kabbalistic Tree of Life, representing the dark forces and "shells" or "husks" left after the withdrawal of divine light.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Origins */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <ScrollText className="w-5 h-5" />
                Origins and Concept
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Qliphoth (or Klippot) represents the "other side" of the Kabbalistic Tree of Life. While the Sephiroth on the Tree of Life embody divine emanations and the path to spiritual ascent, the Qliphoth represent their negative, unbalanced counterparts—the "shells" or "husks" left after divine light withdrew during the cosmic process known as the "breaking of the vessels" (Shevirat ha-Kelim).
                </p>
                <p>
                  The concept of the Qliphoth emerged in medieval Kabbalistic texts, particularly in the Zohar, though earlier allusions exist in Talmudic and Midrashic literature. The term comes from the Hebrew "qelippah" (קליפה), meaning "husk," "shell," or "peel"—suggesting an empty exterior devoid of spiritual light.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "For all that is found on the side of holiness, there is also found its counterpart on the 'other side.'"
                  <br />— Zohar I, 47b
                </p>
              </div>
            </section>
            
            {/* Structure */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <TreePine className="w-5 h-5" />
                The Structure of Darkness
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Just as the Tree of Life has ten Sephiroth, the Tree of Death (as the Qliphothic structure is sometimes called) has ten anti-Sephiroth, or Qliphoth. Each Qliphoth corresponds to a Sephira but represents its distorted, imbalanced aspect:
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Ten Qliphoth</h3>
                    <div className="space-y-4">
                      <p><span className="font-semibold">1. Nehemoth (or Nahemoth)</span> - The "Whisperers," corresponding to Malkuth. They represent the howling chaos of physical matter without spiritual guidance.</p>
                      <p><span className="font-semibold">2. Gamaliel</span> - The "Obscene Ones," corresponding to Yesod. They represent polluted and profaned sexuality and illusions.</p>
                      <p><span className="font-semibold">3. Samael</span> - The "False Accuser," corresponding to Hod. They represent intellectual falsehood and deception.</p>
                      <p><span className="font-semibold">4. A'arab Zaraq</span> - The "Ravens of Death/Dispersion," corresponding to Netzach. They represent distorted, undirected passions and desires.</p>
                      <p><span className="font-semibold">5. Tagirion</span> - The "Disputers," corresponding to Tiphereth. They represent spiritual confusion and the void of emptiness at the center.</p>
                      <p><span className="font-semibold">6. Golachab</span> - The "Burning Ones," corresponding to Geburah. They represent destructive force without purpose or direction.</p>
                      <p><span className="font-semibold">7. Ga'ashekelah</span> - The "Breakers in Pieces," corresponding to Chesed. They represent excessive, misguided mercy that enables evil.</p>
                      <p><span className="font-semibold">8. Satariel</span> - The "Concealers," corresponding to Binah. They represent intellectual restriction and the inability to comprehend divine truth.</p>
                      <p><span className="font-semibold">9. Chaigidel</span> - The "Hinderers," corresponding to Chokmah. They represent the perversion of wisdom into confusion.</p>
                      <p><span className="font-semibold">10. Thaumiel</span> - The "Twins of God," corresponding to Kether. They represent duality where there should be unity, and are sometimes associated with Satan and Moloch.</p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Eleventh Qliphah</h3>
                    <p>
                      Some traditions speak of an eleventh Qliphah called Thaumiel or Da'ath (Knowledge), corresponding to the "hidden" Sephira on the Tree of Life. This represents the Abyss, a place of formlessness and chaos that the initiate must cross to attain higher consciousness. In its negative aspect, it is associated with madness, dissolution, and the loss of individual identity.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Interpretations */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Mystical Interpretations
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  The Qliphoth have been interpreted in various ways throughout Kabbalistic history:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Orthodox View</h3>
                    <p className="text-sm text-foreground/70">
                      In traditional Kabbalah, the Qliphoth are seen as wholly negative—forces to be avoided and guarded against. They represent sin, impurity, and spiritual impediments that distract from divine communion. Engaging with them is considered spiritually dangerous.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Hermetic View</h3>
                    <p className="text-sm text-foreground/70">
                      Western esoteric traditions incorporated the Qliphoth into their magical systems, seeing them as representing intense, powerful energies that, while dangerous, can be worked with by initiated adepts for spiritual development.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Psychological View</h3>
                    <p className="text-sm text-foreground/70">
                      Modern interpretations often view the Qliphoth as representing the Jungian "shadow"—rejected aspects of consciousness that must be integrated rather than suppressed for psychological wholeness. In this view, the Qliphoth are not inherently evil but represent potentials for both destruction and transformation.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Left-Hand Path View</h3>
                    <p className="text-sm text-foreground/70">
                      In some contemporary magical systems, particularly those of the Left-Hand Path, the Qliphoth are seen as gateways to antinomian knowledge and spiritual freedom, representing forces of individuation and liberation from cosmic restrictions.
                    </p>
                  </div>
                </div>
                
                <p>
                  These differing interpretations reflect the tension between spiritual traditions that emphasize transcendence of material existence versus those that seek to integrate and transform all aspects of existence, including the dark and chaotic.
                </p>
              </div>
            </section>
            
            {/* Working with the Qliphoth */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Working with the Shadows
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Approaches to the Qliphoth within esoteric practice vary widely by tradition and purpose:
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-accent/80">Traditional Cautions</h3>
                  <p>
                    Traditional Kabbalistic sources warn against direct work with the Qliphoth, viewing such practices as spiritually hazardous. Rabbi Isaac Luria, one of Kabbalah's most influential figures, taught that these energies should be "elevated" back to their divine source through prayer and mitzvot (commandments), not engaged with directly.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Hermetic Integration</h3>
                  <p>
                    Western mystery traditions adapted from figures like Éliphas Lévi and the Hermetic Order of the Golden Dawn incorporated the Qliphoth into their cosmology while still generally warning against direct engagement. Some teachings suggest that initiates must confront these forces as part of spiritual development but only after establishing firm grounding in balanced spiritual practice.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Left-Hand Path Exploration</h3>
                  <p>
                    Organizations like the Temple of Set and Dragon Rouge, as well as some Thelemic currents, have developed systems for directly working with Qliphothic forces. These typically involve:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pathworking through the "tunnels of Set" (the paths connecting the Qliphoth)</li>
                    <li>Evocation of the entities associated with specific Qliphoth</li>
                    <li>Meditation on the dark symbolism of each sphere</li>
                    <li>Confrontation with personal and transpersonal shadow aspects</li>
                  </ul>
                  
                  <p>
                    Practitioners of these approaches emphasize that such work requires careful preparation, protection, and integration—and is not appropriate for beginners in esoteric practice.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Historical Development */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4">Historical Development</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The concept of the Qliphoth has evolved through several distinct phases:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Early Allusions</span>: References to external "shells" and demonic forces appear in the Talmud and early mystical texts like the Sefer Yetzirah, though not yet systematized.
                  </li>
                  <li>
                    <span className="font-medium">Medieval Kabbalah</span>: The Zohar (13th century) develops the concept more fully, describing the "other side" (Sitra Achra) as a counterfeit of the divine realm.
                  </li>
                  <li>
                    <span className="font-medium">Lurianic Kabbalah</span>: Rabbi Isaac Luria (16th century) elaborated the system further, connecting the Qliphoth to the cosmic catastrophe of the "breaking of the vessels" during creation.
                  </li>
                  <li>
                    <span className="font-medium">Western Occultism</span>: In the 19th century, the concept was adopted and modified by Western esoteric systems, particularly through the works of Éliphas Lévi and later the Golden Dawn.
                  </li>
                  <li>
                    <span className="font-medium">Modern Transformations</span>: The 20th and 21st centuries have seen further reinterpretations, from Kenneth Grant's Typhonian Trilogies to Thomas Karlsson's work with Dragon Rouge, placing the Qliphoth at the center of certain magical systems rather than at their periphery.
                  </li>
                </ol>
                <p>
                  This evolution reflects broader shifts in esoteric thought, from dualistic conceptions of good and evil toward more integrative approaches to spiritual forces—though the debate continues about the spiritual and psychological implications of working with these energies.
                </p>
              </div>
            </section>
            
            {/* Contemporary Relevance */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Contemporary Relevance
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Beyond the realm of occult practice, the Qliphoth have influenced broader cultural and intellectual currents:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Depth Psychology</span>: Jungian and post-Jungian psychology have drawn parallels between the Qliphoth and the concept of the shadow, suggesting that confrontation with rejected aspects of the self is necessary for wholeness.
                  </li>
                  <li>
                    <span className="font-medium">Literary Influence</span>: The Qliphoth have appeared in esoteric fiction and horror, from the works of Kenneth Grant to comics like "Promethea" by Alan Moore, often representing primordial chaos or the dark unconscious.
                  </li>
                  <li>
                    <span className="font-medium">Art and Music</span>: Visual artists and musicians, particularly in dark ambient, industrial, and extreme metal genres, have drawn on Qliphothic imagery to explore themes of spiritual dissolution and chthonic transformation.
                  </li>
                  <li>
                    <span className="font-medium">Philosophical Discourse</span>: Some contemporary philosophers have engaged with the Qliphoth as a metaphor for examining the "negative theology" and the necessary role of disruption in systems of thought.
                  </li>
                </ul>
                <p>
                  Whether viewed as literal demonic entities, psychological archetypes, or metaphysical principles, the Qliphoth continue to offer a framework for exploring the darker, more challenging aspects of existence—a shadow complement to the orderly emanations of the Tree of Life.
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
                    <h4 className="font-medium text-accent/80">Sitra Achra</h4>
                    <p className="text-sm">The "Other Side" in Kabbalah, representing the demonic realms opposed to divine order.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Shells (Qelippot)</h4>
                    <p className="text-sm">The empty husks left after divine light withdrew, representing spiritual emptiness.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Breaking of the Vessels</h4>
                    <p className="text-sm">The cosmic catastrophe that scattered divine sparks and created the possibility of evil.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Tunnels of Set</h4>
                    <p className="text-sm">The 22 pathways between the Qliphothic spheres, corresponding to the Hebrew alphabet.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Nightside of Eden</h4>
                    <p className="text-sm">Kenneth Grant's term for the Qliphothic realm, drawing on Crowley's concept of the "Night of Pan."</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Associated Entities */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Associated Entities</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Lilith</h4>
                    <p className="text-sm">The primal female demon associated with Gamaliel, representing uncontrolled sexuality and rebellion.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Samael</h4>
                    <p className="text-sm">The "Poison of God," associated with false accusation and sometimes identified with Satan.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Belial</h4>
                    <p className="text-sm">Associated with lawlessness and the earth element among the Qliphoth.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Choronzon</h4>
                    <p className="text-sm">The "dweller in the abyss," associated with ego dissolution and madness at Da'ath.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Lucifuge Rofocale</h4>
                    <p className="text-sm">The "Flyer from the Light," a demonic entity associated with Satariel.</p>
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
                      href="/library/zohar" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Zohar</span>
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
                      href="/library/nightside-of-eden" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Nightside of Eden (Kenneth Grant)</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/liber-231" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Liber 231 (Aleister Crowley)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Warning Note */}
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  This article is presented for educational and historical context only. Traditional Kabbalistic sources warn against direct engagement with the Qliphoth without proper spiritual preparation and guidance. The material should be approached with appropriate scholarly detachment and respect for its origins in spiritual traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 