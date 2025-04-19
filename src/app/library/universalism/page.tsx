import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, Globe, History, Book, BrainCircuit, Sparkles, Scale } from 'lucide-react';

export default function UniversalismPage() {
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
            <Globe className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            Universalism
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Spiritual Philosophy
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Theological Doctrine
            </span>
            <span className="text-xs bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full">
              Ancient - Present
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            The philosophical and religious doctrine that emphasizes universal reconciliation and the ultimate harmony of all beings with the divine or cosmic order.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Historical Overview */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <History className="w-5 h-5" />
                Historical Overview
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Universalism has roots stretching back to ancient philosophical and religious traditions. While the term itself is relatively modern, the concept of universal salvation or cosmic unity appears across many cultures throughout history.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Ancient Origins</h3>
                    <p className="text-sm">
                      Elements of universalist thought appear in several ancient traditions. In Zoroastrianism (c. 1500-1000 BCE), all souls would eventually be purified through fire. Hindu and Buddhist concepts of cosmic cycles suggest that all beings ultimately achieve liberation. Greek philosophers like Pythagoras and later Stoics emphasized the unity of all things within a divine order.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Early Christian Universalism</h3>
                    <p className="text-sm">
                      Several influential early Christian theologians, including Origen of Alexandria (185-254 CE) and Gregory of Nyssa (335-395 CE), advocated apokatastasis—the ultimate restoration of all souls to harmony with God. They interpreted biblical passages such as 1 Corinthians 15:22 ("As in Adam all die, so in Christ all will be made alive") as evidence for universal salvation.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Medieval and Reformation Era</h3>
                    <p className="text-sm">
                      During the Medieval period, universalist ideas were largely suppressed as heretical, though they persisted in mystical and esoteric traditions. The concept resurged during the Reformation, with figures like Hans Denck (1500-1527) and later Jakob Böhme (1575-1624) incorporating universalist elements into their theology, often facing significant persecution.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Modern Development</h3>
                    <p className="text-sm">
                      Universalism emerged as a formal religious movement in 18th-century Europe and America. The Universalist Church of America was founded in 1793, advocating universal salvation. Similarly, Unitarian movements emphasized divine unity and universal ethics. These traditions merged in 1961 to form the Unitarian Universalist Association, which embraces a pluralistic approach to spirituality.
                    </p>
                  </div>
                </div>
                
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4 mt-6">
                  "I am not only the friend of eleven sects, but of all. Which is to say, I am concerned with the wheat, and I care nothing about the tares. If the Indian has preserved the image of the Deity upon the altar of his heart, this is the wheat. The tares are the images and the animals which fear has placed upon his temple."
                  <br />— Voltaire, expressing universalist sentiments
                </p>
              </div>
            </section>
            
            {/* Key Concepts */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5" />
                Key Concepts
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  While universalism manifests differently across various traditions, several core concepts emerge consistently:
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Universal Salvation</h3>
                <p>
                  In theological universalism, all souls will eventually achieve reconciliation with the divine, regardless of their actions or beliefs in mortal life. This stands in contrast to exclusivist traditions that limit salvation to adherents of specific beliefs or practices. Universalists interpret religious texts through this lens, often emphasizing passages about divine love, mercy, and the eventual restoration of all things.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Rejection of eternal punishment or damnation</li>
                  <li>Belief in the temporary nature of spiritual suffering as purification</li>
                  <li>Faith in the ultimate triumph of divine love over all resistance</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Cosmic Unity</h3>
                <p>
                  Philosophical universalism emphasizes the fundamental interconnectedness of all existence. This concept appears in Western traditions like Neoplatonism, Eastern philosophies such as Advaita Vedanta, and modern scientific holism. Key aspects include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Recognition of a unified underlying reality behind apparent diversity</li>
                  <li>Understanding individual beings as expressions of a greater whole</li>
                  <li>Emphasis on the dissolution of artificial boundaries between self and other</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Ethical Universalism</h3>
                <p>
                  Universalism often extends to ethics, proposing moral principles that apply universally across cultures, times, and circumstances. This approach appears in both religious and secular contexts:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kant's categorical imperative: act only according to maxims that could become universal law</li>
                  <li>The Golden Rule, appearing across diverse religious traditions</li>
                  <li>Contemporary human rights frameworks based on universal dignity</li>
                  <li>Utilitarianism's equal consideration of all beings capable of suffering</li>
                </ul>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30 mt-6">
                  <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Common Universalist Interpretations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-accent/80">Apocatastasis</h4>
                      <p className="text-sm mt-1">The restoration of all things to their original state of purity and harmony with the divine, after a period of purification.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-accent/80">Universal Consciousness</h4>
                      <p className="text-sm mt-1">The concept that all individual consciousness is part of a greater unified awareness or divine mind.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-accent/80">Spiritual Evolution</h4>
                      <p className="text-sm mt-1">The idea that all souls progress through spiritual development across multiple lifetimes toward ultimate perfection.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-accent/80">Perennial Philosophy</h4>
                      <p className="text-sm mt-1">The view that all major religious traditions share a single, universal truth at their core, with differences being merely cultural expressions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Universalism Across Traditions */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Book className="w-5 h-5" />
                Universalism Across Traditions
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Universalist themes appear across a wide spectrum of religious and philosophical traditions, though they manifest in distinct ways:
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-accent/80">Christianity</h3>
                  <p>
                    Christian universalism interprets scripture through the lens of God's boundless love and Christ's universal redemption. Key scriptures cited include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>1 Timothy 2:4: God "wants all people to be saved and to come to a knowledge of the truth"</li>
                    <li>1 John 2:2: Christ is "the atoning sacrifice for our sins, and not only for ours but also for the sins of the whole world"</li>
                    <li>Romans 5:18: "Just as one trespass resulted in condemnation for all people, so also one righteous act resulted in justification and life for all people"</li>
                  </ul>
                  <p>
                    Modern Christian universalists include theologians like Thomas Talbott, Robin Parry, and David Bentley Hart, who argue that eternal hell contradicts divine love and justice.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Eastern Traditions</h3>
                  <p>
                    Universalist elements in Eastern traditions manifest through concepts of ultimate unity:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Advaita Vedanta's principle of non-duality (all is Brahman)</li>
                    <li>Mahayana Buddhism's bodhisattva ideal of working for the liberation of all beings</li>
                    <li>The Upanishadic declaration "Tat Tvam Asi" (Thou Art That), recognizing the universal Self</li>
                    <li>Chinese philosophical concepts of Dao as the universal principle underlying all existence</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-accent/80">Western Esoteric Traditions</h3>
                  <p>
                    Western esoteric and mystical traditions frequently incorporate universalist principles:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Hermeticism's principle of correspondence: "As above, so below"</li>
                    <li>Theosophy's emphasis on the essential unity of all religions and the universal brotherhood of humanity</li>
                    <li>Various mystical traditions emphasizing the direct experience of unity with the divine</li>
                    <li>Modern New Age spirituality drawing from multiple traditions to emphasize universal spiritual truths</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Contemporary Relevance */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5" />
                Contemporary Relevance
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Universalism continues to evolve and influence contemporary thought in several domains:
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Religious Pluralism</h3>
                <p>
                  Modern universalist approaches often embrace religious pluralism—the view that multiple religious traditions offer valid paths to truth. This manifests in several ways:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Interfaith dialogue emphasizing shared values across traditions</li>
                  <li>Syncretistic spiritual movements drawing from multiple religious sources</li>
                  <li>Theological frameworks that accommodate the validity of diverse religious experiences</li>
                  <li>Recognition of the cultural and historical contexts that shape religious expression</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Scientific and Philosophical Influences</h3>
                <p>
                  Certain scientific developments have reinforced universalist perspectives:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Quantum physics and systems theory emphasizing interconnectedness</li>
                  <li>Ecological understanding of the biosphere as an integrated system</li>
                  <li>Cosmological models suggesting the fundamental unity of energy and matter</li>
                  <li>Evolutionary psychology proposing universal moral intuitions across cultures</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Ethical Applications</h3>
                <p>
                  Universalist ethics inform contemporary movements for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Global human rights frameworks based on universal dignity</li>
                  <li>Environmental ethics recognizing the intrinsic value of all life</li>
                  <li>Animal rights movements extending moral consideration beyond humans</li>
                  <li>Global solidarity initiatives addressing shared human challenges</li>
                </ul>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30 mt-6">
                  <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Critiques and Challenges</h3>
                  <p>
                    Universalism faces several critiques from various perspectives:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li><span className="font-medium">Religious Exclusivism</span>: Many religious traditions maintain that salvation or liberation is available only through specific paths or beliefs</li>
                    <li><span className="font-medium">Cultural Relativism</span>: Critics argue that universalism often imposes Western or dominant cultural values under the guise of universal principles</li>
                    <li><span className="font-medium">Postmodern Critique</span>: Suspicion of "grand narratives" that claim universal application, preferring local and contextual understandings</li>
                    <li><span className="font-medium">Theological Objections</span>: Concerns about diminishing the significance of personal moral responsibility if all are ultimately saved</li>
                    <li><span className="font-medium">Empirical Challenges</span>: Recognition of the real and persistent divisions between cultures, traditions, and worldviews</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Key figures */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Figures</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Origen of Alexandria (185-254 CE)</h4>
                    <p className="text-sm">Early Christian theologian who taught apokatastasis—the ultimate restoration of all souls to God.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">John Murray (1741-1815)</h4>
                    <p className="text-sm">Founder of organized Universalism in America, preaching universal salvation through Christ.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Hosea Ballou (1771-1852)</h4>
                    <p className="text-sm">Influential American Universalist theologian who rejected the concept of eternal punishment.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Swami Vivekananda (1863-1902)</h4>
                    <p className="text-sm">Hindu monk who brought Vedantic universalism to the West, emphasizing the unity of all religions.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Aldous Huxley (1894-1963)</h4>
                    <p className="text-sm">Author who articulated the concept of the "perennial philosophy"—the universal mystical core of religions.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Key Terms */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Terms</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <h4 className="font-medium text-accent/80">Apokatastasis</h4>
                    <p className="text-sm">Greek term meaning "restoration" or "restitution of all things" to their original harmonious state with God.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Universalism</h4>
                    <p className="text-sm">The theological doctrine that all human beings will eventually be saved or restored to a right relationship with God.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Perennial Philosophy</h4>
                    <p className="text-sm">The perspective that all world religions share a single universal truth or origin.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Religious Pluralism</h4>
                    <p className="text-sm">The view that multiple religions or secular worldviews are legitimate and valid.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Non-Dualism</h4>
                    <p className="text-sm">The philosophical and spiritual perspective that reality is fundamentally one, rejecting the perception of duality or separation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Important Texts */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Important Texts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">De Principiis (On First Principles)</h4>
                    <p className="text-sm">Origen's foundational text laying out early Christian universalist theology.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Treatise on Atonement</h4>
                    <p className="text-sm">Hosea Ballou's 1805 work arguing for universal salvation through God's love rather than satisfaction of divine justice.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">The Perennial Philosophy</h4>
                    <p className="text-sm">Aldous Huxley's 1945 book exploring the common mystical elements across world religions.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Universalism: A Theology for the 21st Century</h4>
                    <p className="text-sm">John Cobb's contemporary theological defense of universalism.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Universal Salvation?: The Current Debate</h4>
                    <p className="text-sm">A collection of essays edited by Robin Parry exploring modern Christian universalist arguments.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Related Concepts */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Related Concepts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/library/gnosticism" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Gnosticism</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/hermeticism" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Hermeticism</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/theosophy" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Theosophy</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/neoplatonism" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Neoplatonism</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contemporary Expressions */}
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  Contemporary expressions of universalism include the Unitarian Universalist Association, religious pluralism movements, interfaith organizations like Parliament of the World's Religions, philosophical perspectives like Ken Wilber's Integral Theory, and scientific frameworks emphasizing universal interconnection, such as systems theory and deep ecology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 