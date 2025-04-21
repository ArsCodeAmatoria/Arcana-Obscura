import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { FlaskConical } from 'lucide-react';

export default function AlchemyPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-4">
            <FlaskConical className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Alchemy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An ancient practice combining elements of chemistry, metallurgy, physics, medicine, and mysticism,
            focused on the transmutation of matter and spiritual transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Core Principles</h2>
              <p className="mb-4">
                Alchemy operates on multiple levels simultaneously - physical, psychological, and spiritual. 
                While popularly known for the pursuit of transmuting base metals into gold, its deeper purpose
                was the transformation of the alchemist's own soul.
              </p>
              <p className="mb-4">
                The Philosopher's Stone, the ultimate goal of alchemical work, represents not just a material substance
                but a state of spiritual perfection. The alchemical process mirrors the inner journey of purification,
                dissolution of the ego, and ultimate reunion with the divine.
              </p>
              <p>
                The alchemical maxim "Solve et Coagula" (dissolve and coagulate) describes the fundamental process
                of breaking down matter into its constituent parts before reassembling it in a purified state -
                a process that applies equally to material substances and to the human psyche.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Processes</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FlaskConical className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">Calcination</span>
                  </li>
                  <li>
                    <span className="font-semibold">Dissolution</span>
                  </li>
                  <li>
                    <span className="font-semibold">Separation</span>
                  </li>
                  <li>
                    <span className="font-semibold">Conjunction</span>
                  </li>
                  <li>
                    <span className="font-semibold">Fermentation</span>
                  </li>
                  <li>
                    <span className="font-semibold">Distillation</span>
                  </li>
                  <li>
                    <span className="font-semibold">Coagulation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Notable Alchemists</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Paracelsus</span>
                  </li>
                  <li>
                    <span className="font-semibold">Nicolas Flamel</span>
                  </li>
                  <li>
                    <span className="font-semibold">Mary the Jewess</span>
                  </li>
                  <li>
                    <span className="font-semibold">Isaac Newton</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Great Work</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The central pursuit in alchemy is known as the <span className="italic text-accent">Magnum Opus</span> or "Great Work," 
                a multi-stage process of spiritual and material transformation. This work culminates in the creation of the Philosopher's 
                Stone, a substance believed to perfect any matter it touches—turning base metals into gold and bestowing immortality upon its possessor.
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The alchemical laboratory served as a microcosm where the alchemist could observe and participate in the same creative 
                processes operating in nature and the cosmos. The physical operations performed on metals and other substances were 
                understood to have parallel effects on the alchemist's own soul and consciousness.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                This connection between inner and outer transformation is reflected in the Hermetic axiom "As above, so below" and 
                illustrates how alchemy integrates the practical and the spiritual. In the alchemical laboratory, matter was not just 
                manipulated but elevated, much as the alchemist sought to elevate their own consciousness.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Historical Development</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-accent mb-1">Egyptian and Greek Origins</h3>
                  <p className="text-foreground/80">
                    Alchemy's earliest roots trace to Hellenistic Egypt, where Greek philosophical concepts merged with Egyptian metallurgical practices.
                    The legendary figure Hermes Trismegistus is credited with founding the art in this cultural melting pot.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Islamic Golden Age</h3>
                  <p className="text-foreground/80">
                    Arabian alchemists like Jabir ibn Hayyan (Geber) and Al-Razi advanced alchemical theory and practice, developing laboratory
                    techniques and equipment still used in modern chemistry. The Arabic word "al-kimiya" gave us the term "alchemy."
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Medieval and Renaissance Europe</h3>
                  <p className="text-foreground/80">
                    Translations of Arabic texts introduced alchemy to Europe, where it flourished despite church suspicion. Albertus Magnus,
                    Roger Bacon, and later Paracelsus integrated alchemy with medicine, creating the foundation for modern pharmacology.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Modern Interpretations</h3>
                  <p className="text-foreground/80">
                    Carl Jung reinterpreted alchemical symbolism as representations of psychological transformation, seeing the Philosopher's
                    Stone as symbolic of individuation—the integration of the conscious and unconscious mind.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-esoterica mb-6 text-primary">The Stages of The Great Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
              <div className="space-y-4 bg-black/20 p-4 rounded-lg border border-accent/20">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-black mr-3 flex items-center justify-center">
                    <FlaskConical className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-accent">Nigredo</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  The Blackening: The first stage involves decomposition, putrefaction, and breaking down of the raw material (and the self). 
                  Symbolized by ravens, crows, death, decay, and the color black, this represents confronting one's shadow and the dissolution of ego.
                </p>
              </div>
              
              <div className="space-y-4 bg-white/5 p-4 rounded-lg border border-white/20">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/90 mr-3 flex items-center justify-center">
                    <FlaskConical className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Albedo</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  The Whitening: After the darkness comes purification and washing away of impurities. Symbolized by white, the moon, doves, 
                  and silver, this represents purification of consciousness, insight, and the emergence of a new awareness.
                </p>
              </div>
              
              <div className="space-y-4 bg-amber-500/10 p-4 rounded-lg border border-amber-500/20">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-500 mr-3 flex items-center justify-center">
                    <FlaskConical className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-400">Citrinitas</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  The Yellowing: The solar phase where further transformation occurs. Symbolized by yellow, the morning sun, and the approach 
                  of gold, this represents the awakening of spiritual consciousness and wisdom within the individual.
                </p>
              </div>
              
              <div className="space-y-4 bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-500 mr-3 flex items-center justify-center">
                    <FlaskConical className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-400">Rubedo</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  The Reddening: The final stage where the matter reaches its perfect state. Symbolized by red, blood, the phoenix, gold, 
                  and the sun, this represents the achievement of enlightenment, wholeness, and the union of opposites.
                </p>
              </div>
            </div>
            
            <p className="text-foreground/90 leading-relaxed pt-4 border-t border-accent/20">
              These stages describe not only chemical processes but also the spiritual journey of the alchemist. The substances in the 
              alchemical vessel undergo transformations that mirror those experienced by the practitioner's soul on the path to 
              enlightenment. Each color change and phase represents a milestone in both material transmutation and personal development.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Alchemical Symbolism</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Alchemy developed a rich symbolic language to communicate its teachings while protecting them from the uninitiated. 
                Alchemical manuscripts are filled with enigmatic illustrations depicting serpents devouring their tails (ouroboros), 
                hermaphroditic figures (rebis), chemical weddings, dragons, kings and queens, and cosmic eggs—all representing various 
                aspects of the alchemical process and philosophical principles.
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The elements and planets held special significance in alchemy. Lead was associated with Saturn and represented the 
                heavy, dull starting material. Mercury was both a substance (quicksilver) and a principle of volatility and transformation. 
                Sulfur embodied the active, fiery principle while salt represented the fixed, physical body.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Laboratory equipment itself carried symbolic meaning: the alembic represented the womb where transformation occurs, 
                while the double pelican symbolized circulation and purification. The athanor (furnace) provided the steady heat of 
                intention and discipline required for the Great Work to succeed.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Modern Applications</h2>
              <ul className="space-y-4">
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Psychological Transformation</h3>
                  <p className="text-foreground/80">Carl Jung's analytical psychology draws heavily from alchemical symbolism to understand the process of individuation.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Artistic Inspiration</h3>
                  <p className="text-foreground/80">Surrealists, symbolists, and contemporary artists continue to draw on alchemical imagery for its transformative power.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Scientific History</h3>
                  <p className="text-foreground/80">Alchemy is now studied as a precursor to modern chemistry, with many alchemical processes recognized as valid chemical reactions.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Spiritual Practice</h3>
                  <p className="text-foreground/80">Contemporary esoteric groups continue to practice inner alchemy as a path of spiritual development and consciousness expansion.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <blockquote className="border-l-4 border-accent/50 pl-6 py-4 italic text-xl text-muted-foreground max-w-3xl mx-auto mb-12 bg-card/30 backdrop-blur-sm rounded-r-md">
          "Aurum nostrum non est aurum vulgi."<br/>
          (Our gold is not the common gold.)
          <span className="text-sm not-italic block mt-2 text-accent/80">— Alchemical axiom</span>
        </blockquote>
      </div>
    </MainLayout>
  );
} 