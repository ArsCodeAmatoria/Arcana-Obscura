import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, BookMarked, Scale, Sparkles, Star, Sun, Moon } from 'lucide-react';

export default function KybalionPage() {
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
            The Kybalion
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Hermeticism
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Modern Esoteric
            </span>
            <span className="text-xs bg-accent/10 text-accent-foreground px-3 py-1 rounded-full">
              1908
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A study of Hermetic Philosophy of Ancient Egypt and Greece, outlining seven fundamental Hermetic principles that govern the universe and human experience.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Origins */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <BookMarked className="w-5 h-5" />
                Origins and Authorship
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Kybalion was first published in 1908 by the Yogi Publication Society in Chicago, Illinois. The book purports to be based upon ancient Hermetic teachings, though it was written in the early 20th century. The authors identified themselves only as "the Three Initiates," maintaining anonymity that contributed to the text's mystique.
                </p>
                <p>
                  Most scholars today attribute the work primarily to William Walker Atkinson (1862-1932), a prolific writer on occult topics who wrote under various pseudonyms. Atkinson was a lawyer, merchant, publisher, and author, as well as an occultist and a pioneer of the New Thought movement in the United States.
                </p>
                <p>
                  While the book claims to be expounding ancient Hermetic philosophy, it's actually a modern interpretation that synthesizes Hermetic ideas with concepts from New Thought, Theosophy, and other esoteric systems popular in the late 19th and early 20th centuries. The title "Kybalion" itself appears to be a neologism rather than a historical term.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "The lips of wisdom are closed, except to the ears of Understanding."<br />
                  — The Kybalion, Introduction
                </p>
              </div>
            </section>
            
            {/* Seven Principles */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5" />
                The Seven Hermetic Principles
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The core of The Kybalion consists of explanations of seven fundamental principles that the authors claim underlie all of Hermetic philosophy. These principles are presented as universal laws that govern reality at all levels:
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">1. The Principle of Mentalism</h3>
                    <div className="space-y-4">
                      <p className="italic">"THE ALL is MIND; The Universe is Mental."</p>
                      <p>
                        This principle posits that the universe is essentially mental in nature—a creation of THE ALL (the absolute, ultimate reality, or God-concept in Hermetic thought). Everything that exists is thought within the mind of THE ALL. This means that all manifestation and physical reality is ultimately mental, and that matter is simply condensed thought or energy.
                      </p>
                      <p>
                        The practical implication is that by understanding the mental nature of the universe, adepts can learn to transform their reality through mental processes, since matter, energy, and thought are all manifestations of the same underlying substance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">2. The Principle of Correspondence</h3>
                    <div className="space-y-4">
                      <p className="italic">"As above, so below; as below, so above."</p>
                      <p>
                        This is perhaps the most famous Hermetic axiom, suggesting that there is always a correspondence between the different planes of existence: the physical, the mental, and the spiritual. Patterns repeat across different scales and contexts.
                      </p>
                      <p>
                        This principle allows one to reason from the known to the unknown. By understanding the laws operating in physical reality, one can deduce the laws of the mental and spiritual realms. It establishes the framework for analogical thinking that is central to esoteric practice.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">3. The Principle of Vibration</h3>
                    <div className="space-y-4">
                      <p className="italic">"Nothing rests; everything moves; everything vibrates."</p>
                      <p>
                        This principle recognizes that everything is in constant motion at varying rates of vibration. The differences between manifestations of matter, energy, mind, and spirit are primarily the result of different vibration rates. Even seemingly solid matter is vibrating at some level.
                      </p>
                      <p>
                        Higher vibrations dominate lower ones, so by raising one's mental vibrations, the adept can control lower vibrations in themselves and in external events—a basis for many magical practices and meditation techniques.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">4. The Principle of Polarity</h3>
                    <div className="space-y-4">
                      <p className="italic">"Everything is dual; everything has poles; everything has its pair of opposites; like and unlike are the same; opposites are identical in nature, but different in degree; extremes meet; all truths are but half-truths; all paradoxes may be reconciled."</p>
                      <p>
                        This principle embodies the idea that everything has its opposite, and that opposites are really the same thing but at different degrees. Hot and cold, light and dark, love and hate—these are not truly opposed but are varying degrees of the same thing, with many gradations between them.
                      </p>
                      <p>
                        This understanding enables mental transmutation, the art of changing one's polarity. By mentally rising above the pairs of opposites, the adept gains a broader perspective and can transform negative states into positive ones.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">5. The Principle of Rhythm</h3>
                    <div className="space-y-4">
                      <p className="italic">"Everything flows, out and in; everything has its tides; all things rise and fall; the pendulum-swing manifests in everything; the measure of the swing to the right is the measure of the swing to the left; rhythm compensates."</p>
                      <p>
                        This principle recognizes that in everything there is a measured motion: a swing forward and backward, a rise and fall. This rhythm manifests between the two poles established by the Principle of Polarity. Nothing escapes this law—periods of activity are followed by periods of rest.
                      </p>
                      <p>
                        The Hermetic adept learns to use the Law of Neutralization to overcome the negative effects of this principle—rather than being carried away by the pendulum swing of rhythm, they rise to a higher plane of consciousness and avoid being swept along by the emotional tides.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">6. The Principle of Cause and Effect</h3>
                    <div className="space-y-4">
                      <p className="italic">"Every cause has its effect; every effect has its cause; everything happens according to Law; chance is but a name for Law not recognized; there are many planes of causation, but nothing escapes the Law."</p>
                      <p>
                        This principle encapsulates the idea that nothing happens by chance or outside the Universal Laws. Every action generates a reaction; every effect can be traced to a cause. But causation operates on multiple planes, not just the physical.
                      </p>
                      <p>
                        By understanding this law, Hermetic students aim to rise from being mere effects of causes set in motion by others to becoming causes themselves—conscious initiators of new causal chains rather than unconscious recipients of external influences.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">7. The Principle of Gender</h3>
                    <div className="space-y-4">
                      <p className="italic">"Gender is in everything; everything has its Masculine and Feminine Principles; Gender manifests on all planes."</p>
                      <p>
                        This final principle states that gender (understood not just biologically but as complementary energetic principles) exists in everything. The Masculine aspect is direction, projection, and active creation, while the Feminine aspect is reception, nurturing, and generation.
                      </p>
                      <p>
                        This principle operates on all planes: physical, mental, and spiritual. Understanding and balancing these inner energies is essential for personal development and magical work. The Kybalion suggests that mental creation follows a pattern analogous to physical procreation—requiring both masculine and feminine aspects of the mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Historical Context */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Sun className="w-5 h-5" />
                Historical Context
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  To understand The Kybalion's significance, it must be placed in the historical context of early 20th century America's spirituality:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">The New Thought Movement</h3>
                    <p className="text-sm text-foreground/70">
                      The late 19th and early 20th centuries saw the flourishing of New Thought, a spiritual movement emphasizing the power of the mind, positive thinking, and the ability of thought to directly influence reality. The Kybalion's Principle of Mentalism strongly reflects these ideas, though presenting them in Hermetic garb.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Theosophy and Eastern Influence</h3>
                    <p className="text-sm text-foreground/70">
                      Helena Blavatsky's Theosophical Society had popularized Eastern philosophical concepts in the West. The Kybalion shows this influence in its approach to mental transmutation and transcendence of opposites, concepts paralleling aspects of Hindu and Buddhist thought.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Golden Dawn and Occult Revival</h3>
                    <p className="text-sm text-foreground/70">
                      The Hermetic Order of the Golden Dawn had spurred renewed interest in Western esoteric traditions, including Hermeticism. The Kybalion capitalized on this interest while presenting Hermetic principles in a more accessible, less ritual-focused format than formal magical orders.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Early Psychology</h3>
                    <p className="text-sm text-foreground/70">
                      The emerging field of psychology, particularly William James' Principles of Psychology (1890), was bringing scientific attention to the power of the mind. The Kybalion's focus on mental states and their manipulation parallels these scientific investigations, though framed in esoteric terms.
                    </p>
                  </div>
                </div>
                
                <p>
                  The Kybalion thus represents a modernization of Hermetic philosophy for the 20th century. While claiming ancient Egyptian origins, it actually synthesizes classical Hermetic concepts with New Thought principles, presenting them in a systematic, accessible format for a modern audience interested in self-development through mind power.
                </p>
              </div>
            </section>
            
            {/* Influence and Legacy */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4">Influence and Legacy</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Despite its relatively recent origins, The Kybalion has had a profound influence on modern esoteric thought and practice:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Law of Attraction</span>: The book's emphasis on mental causation and the power of directed thought foreshadowed the popular "Law of Attraction" as promoted in works like The Secret. Many modern manifestation techniques can be traced to principles outlined in The Kybalion.
                  </li>
                  <li>
                    <span className="font-medium">Self-Help Movement</span>: The book's practical approach to mental transmutation influenced the development of self-help literature throughout the 20th century. Its focus on mental mastery as the key to changing one's life circumstances remains central to many personal development programs.
                  </li>
                  <li>
                    <span className="font-medium">Modern Occultism</span>: The Kybalion helped bridge classical Hermeticism with modern magical practice. Its seven principles are often incorporated into contemporary magical systems and are referenced by various occult schools.
                  </li>
                  <li>
                    <span className="font-medium">New Age Spirituality</span>: Many core concepts of New Age thought—the mental nature of reality, the primacy of consciousness, the interconnectedness of all things—echo principles from The Kybalion, making it an important precursor to the New Age movement.
                  </li>
                  <li>
                    <span className="font-medium">Quantum Mysticism</span>: Some proponents of quantum mysticism (the attempt to connect quantum physics with consciousness and spirituality) have drawn parallels between quantum concepts and principles like Vibration and Mentalism from The Kybalion.
                  </li>
                </ol>
                <p>
                  The Kybalion's enduring popularity stems partly from its accessibility. Unlike many classical Hermetic texts, which are often obscure and couched in allegorical language, The Kybalion presents its ideas in a systematic, relatively straightforward manner that appeals to modern readers. Its principles are presented as practical tools for personal transformation rather than merely theoretical concepts, making them immediately applicable to readers' lives.
                </p>
              </div>
            </section>
            
            {/* Contemporary Perspectives */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Contemporary Perspectives
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Modern scholars and practitioners offer varying perspectives on The Kybalion:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Historical Critique</span>: Scholars of Western esotericism like Wouter Hanegraaff have noted that The Kybalion has little connection to historical Hermetic texts like the Corpus Hermeticum. Its principles, while valuable, represent a modern American interpretation rather than authentic ancient teachings.
                  </li>
                  <li>
                    <span className="font-medium">Psychological Value</span>: Many practitioners value The Kybalion not for its historical authenticity but for its psychological insights. Its principles can be seen as tools for navigating the human psyche and understanding cognitive patterns.
                  </li>
                  <li>
                    <span className="font-medium">Practical Application</span>: Contemporary magical practitioners often incorporate The Kybalion's principles into their work, finding them effective regardless of their historical origins. The emphasis on correspondence, polarity, and rhythm remains relevant to various magical systems.
                  </li>
                  <li>
                    <span className="font-medium">Scientific Parallels</span>: Some proponents highlight parallels between The Kybalion's principles and concepts from quantum physics, systems theory, and consciousness studies, suggesting that these ancient-inspired teachings anticipated certain scientific discoveries.
                  </li>
                </ul>
                <p>
                  In the end, The Kybalion's continuing relevance lies in its practical philosophy that bridges Eastern and Western concepts, ancient wisdom and modern psychology. Even if its claim to ancient Egyptian origins is dubious, its distillation of universal principles offers a framework for understanding reality and the human mind that many find valuable in their spiritual and personal development.
                </p>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Key Terms */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Terms</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">THE ALL</h4>
                    <p className="text-sm">The Kybalion's term for the absolute ultimate reality, the source of all manifestation and being—similar to concepts of God or the Absolute in other traditions.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Mental Transmutation</h4>
                    <p className="text-sm">The art of changing or transforming one mental state into another, considered the "greatest power of the Masters."</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">The Planes of Correspondence</h4>
                    <p className="text-sm">The various levels of existence—physical, mental, and spiritual—which mirror each other according to the Principle of Correspondence.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Law of Paradox</h4>
                    <p className="text-sm">The recognition that many apparent contradictions can be reconciled by understanding them as different degrees of the same thing (related to the Principle of Polarity).</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Law of Use</h4>
                    <p className="text-sm">The Kybalion's emphasis that knowledge without practical application is useless and that principles must be lived to be truly understood.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Application */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Practical Applications</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Mental Alchemy</h4>
                    <p className="text-sm">Using the principles to transform negative mental states into positive ones, particularly through understanding and applying the Principle of Polarity.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Manifestation</h4>
                    <p className="text-sm">Applying the Principle of Mentalism to create desired outcomes by properly directing mental energy and aligning conscious and subconscious thought.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Emotional Balance</h4>
                    <p className="text-sm">Neutralizing the effects of Rhythm and Polarity to maintain emotional stability amid life's natural cycles of rise and fall.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Higher Consciousness</h4>
                    <p className="text-sm">Using the principles as a framework for rising above normal consciousness to more expansive awareness and direct perception of reality.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Inner Integration</h4>
                    <p className="text-sm">Balancing the Masculine and Feminine aspects within oneself to achieve greater wholeness and creative power.</p>
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
                      href="/library/emerald-tablet" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Emerald Tablet</span>
                    </Link>
                  </li>
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
                    <div className="flex items-center gap-2 text-accent">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Science of Mind (Ernest Holmes)</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Publication Note */}
            <div className="bg-card/40 p-6 rounded-lg border border-border/50">
              <h3 className="font-esoterica text-accent/90 mb-3">Publication Note</h3>
              <p className="text-sm text-foreground/80">
                While The Kybalion claims to present ancient Hermetic wisdom passed down through the ages, scholarly consensus attributes its authorship primarily to William Walker Atkinson, writing under the pseudonym "Three Initiates" in 1908. Despite its modern origins, many practitioners find great value in its clear exposition of universal principles and practical approach to mental transmutation.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Moon className="w-4 h-4 text-accent/70" />
                <Sun className="w-4 h-4 text-accent/70" />
                <span className="text-xs text-accent/70 italic">The universe is mental</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 