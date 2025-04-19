import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, ScrollText, Sun, Moon, Sparkles, Star, BookOpen } from 'lucide-react';

export default function CorpusHermeticumPage() {
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
            The Corpus Hermeticum
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Hermeticism
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Divine Wisdom
            </span>
            <span className="text-xs bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full">
              c. 100-300 CE
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A collection of Egyptian-Greek wisdom texts from the 2nd and 3rd centuries AD, foundational to the Hermetic tradition and Western esoteric philosophy.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Origins */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <ScrollText className="w-5 h-5" />
                Origins and Discovery
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Corpus Hermeticum is a collection of seventeen Greek wisdom texts dating from the 2nd and 3rd centuries CE, though they claim to be much older. These texts are attributed to Hermes Trismegistus ("Thrice-Greatest Hermes"), a syncretization of the Greek god Hermes and the Egyptian god Thoth, both deities associated with wisdom, writing, and magic.
                </p>
                <p>
                  While the texts present themselves as ancient Egyptian wisdom, modern scholarship places their composition in Hellenistic Egypt during the early Christian era. They reflect a blend of Greek philosophy (particularly Platonism and Stoicism), Jewish thought, and Egyptian religious concepts, representing the cultural melting pot of Alexandria during this period.
                </p>
                <p>
                  The texts were lost to the Western world during the Middle Ages, though parts of the Hermetic tradition survived through Arab scholars. The Corpus was rediscovered in the Byzantine Empire and brought to Florence in 1460 by agents of Cosimo de' Medici, who commanded the scholar Marsilio Ficino to immediately translate them from Greek into Latin, even postponing his work on Plato to do so.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "If thou dost not make thyself equal to God, thou canst not understand God; for like is known by like."<br />
                  — Corpus Hermeticum, Libellus XI
                </p>
              </div>
            </section>
            
            {/* Content */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Structure and Content
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Corpus Hermeticum consists of seventeen distinct texts (called libelli or "little books"), each exploring different aspects of spiritual and philosophical wisdom. The most significant texts include:
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Poimandres (Book I)</h3>
                    <div className="space-y-4">
                      <p>
                        Perhaps the most famous text in the collection, the Poimandres (or "Shepherd of Men") describes a vision in which the divine Nous (Mind) appears to the narrator and reveals the secrets of creation, the nature of reality, and the path to spiritual liberation. It introduces core Hermetic concepts such as the divine light, the descent of the soul into matter, and its eventual return to the divine.
                      </p>
                      <p>
                        The text describes how the primordial Man, made in God's image, leaned down through the planetary spheres and united with Nature, thus becoming entrapped in the material world. This explains humanity's dual nature—both divine and material—and establishes the central Hermetic goal of spiritual ascent back to the divine realm.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Sacred Discourse on the Eighth and Ninth (Book XIII)</h3>
                    <div className="space-y-4">
                      <p>
                        This text describes an initiation ritual in which a spiritual teacher guides a disciple through mystical experiences that transcend the seven planetary spheres to reach the Eighth and Ninth celestial realms. These higher realms represent transcendent spiritual states beyond ordinary perception.
                      </p>
                      <p>
                        The dialogue culminates in the disciple experiencing a direct vision of the divine, accompanied by a hymn of praise and mystical syllables. This text provides one of the clearest descriptions of Hermetic spiritual practice and its ultimate aims.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Crater or Monad (Book IV)</h3>
                    <div className="space-y-4">
                      <p>
                        This text introduces the concept of the "mixing bowl" (crater) filled with Nous (divine Mind) that God sent to Earth. Those who immerse themselves in this crater achieve gnosis (direct knowledge of the divine), while those who ignore it remain merely mortal. The text emphasizes that spiritual knowledge is available to all who seek it but requires dedicated effort and divine grace.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Key (Book X)</h3>
                    <div className="space-y-4">
                      <p>
                        An exploration of the nature of good and evil, beauty, and the divine. This text emphasizes that true knowledge of God comes from understanding the created world correctly, seeing past the material appearances to the divine reality behind them. It contains the famous Hermetic teaching that humans are "mortal gods" with the potential to realize their divine nature.
                      </p>
                    </div>
                  </div>
                </div>
                
                <p>
                  While each text stands alone, together they form a comprehensive spiritual philosophy that addresses cosmology (the nature of the universe), anthropology (the nature of humanity), theology (the nature of God), and soteriology (the path to salvation or spiritual liberation).
                </p>
              </div>
            </section>
            
            {/* Core Teachings */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Core Hermetic Teachings
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  The Corpus Hermeticum presents several key philosophical and spiritual principles that have become fundamental to the Hermetic tradition:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Divine Unity</h3>
                    <p className="text-sm text-foreground/70">
                      Despite references to multiple gods, the Corpus ultimately teaches a form of monotheism, with one supreme divine principle from which all else emanates. This supreme divinity is described as transcendent (beyond the universe) yet simultaneously immanent (present throughout creation).
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">As Above, So Below</h3>
                    <p className="text-sm text-foreground/70">
                      The famous Hermetic principle of correspondence states that there is a direct relationship between macrocosm (the universe) and microcosm (the human being). The celestial order is reflected in human consciousness, and the patterns of the cosmos operate on all levels of reality.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Gnosis as Salvation</h3>
                    <p className="text-sm text-foreground/70">
                      The texts emphasize that salvation comes through direct knowledge (gnosis) of divine reality rather than through faith alone. This spiritual knowledge transforms the individual, allowing them to recognize their true divine nature beneath the material surface.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Cosmic Sympathy</h3>
                    <p className="text-sm text-foreground/70">
                      All parts of the cosmos are interconnected through invisible bonds of sympathy. This principle forms the theoretical basis for astrological influence, natural magic, and the practice of correspondences that became central to later Western esoteric traditions.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Spiritual Ascent</h3>
                    <p className="text-sm text-foreground/70">
                      The central soteriological myth describes the soul's descent from the divine realm through the planetary spheres (taking on their qualities) and its eventual return journey. This ascent requires shedding material attachments and vices associated with each planetary sphere.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Divine Anthropology</h3>
                    <p className="text-sm text-foreground/70">
                      Humans possess a divine spark and are potentially "mortal gods" who can achieve immortality through spiritual knowledge. The material body is not inherently evil but is a temporary vehicle that can either hinder or facilitate spiritual development depending on how one relates to it.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Historical Influence */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4">Historical Influence</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The impact of the Corpus Hermeticum on Western thought has been profound, especially after its Renaissance rediscovery:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Renaissance Revival</span>: When Ficino translated the Corpus in 1463, it was believed to be the work of an ancient Egyptian sage who predated Moses. This supposed antiquity gave the texts tremendous authority and contributed to the Renaissance revival of magic, alchemy, and astrology as legitimate fields of study.
                  </li>
                  <li>
                    <span className="font-medium">Alchemy</span>: Hermetic principles became the philosophical foundation for alchemical practice throughout Europe. The emphasis on the transformation of base materials into gold paralleled the spiritual transformation of the practitioner.
                  </li>
                  <li>
                    <span className="font-medium">Secret Societies</span>: From the Rosicrucian manifestos to Freemasonry, many esoteric brotherhoods incorporated Hermetic teachings into their symbolic systems and initiatory practices.
                  </li>
                  <li>
                    <span className="font-medium">19th Century Occult Revival</span>: Organizations like the Hermetic Order of the Golden Dawn reinterpreted the Corpus through the lens of ceremonial magic, Kabbalah, and comparative religion, creating influential synthesis that continues to shape modern esoteric practice.
                  </li>
                  <li>
                    <span className="font-medium">Modern Esotericism</span>: The New Age movement, transpersonal psychology, and contemporary magical practices continue to draw inspiration from Hermetic concepts like correspondence, vibration, and divine potential.
                  </li>
                </ol>
                <p>
                  Even after scholars like Isaac Casaubon demonstrated in 1614 that the texts could not possibly date to ancient Egypt, their philosophical and spiritual significance remained undiminished for those attracted to the Hermetic worldview.
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
                  The Corpus Hermeticum continues to resonate with modern seekers for several reasons:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Non-Dogmatic Spirituality</span>: The texts present spiritual teachings without requiring adherence to a specific religious institution or dogma, appealing to those seeking direct spiritual experience outside traditional religious structures.
                  </li>
                  <li>
                    <span className="font-medium">Ecological Consciousness</span>: The Hermetic view of the cosmos as alive and interconnected resonates with ecological and holistic thinking, offering spiritual foundations for environmental ethics.
                  </li>
                  <li>
                    <span className="font-medium">Psychological Depth</span>: Jungian psychology and transpersonal approaches have recognized parallels between Hermetic teachings about spiritual transformation and modern concepts of psychological integration and self-realization.
                  </li>
                  <li>
                    <span className="font-medium">Science and Spirituality</span>: Some see in the Hermetic tradition a potential bridge between scientific understanding and spiritual wisdom, particularly in concepts like quantum entanglement that seem to echo the principle of cosmic sympathy.
                  </li>
                </ul>
                <p>
                  New translations and commentaries continue to appear, making these ancient texts accessible to contemporary readers seeking wisdom from one of Western esotericism's most influential sources. The Corpus Hermeticum's emphasis on direct knowledge, personal transformation, and the divine potential within humanity continues to inspire those on spiritual paths of many kinds.
                </p>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Key Concepts */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Concepts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Nous (Divine Mind)</h4>
                    <p className="text-sm">The divine intelligence that permeates all things and is available to those who seek inner knowledge.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Logos (Word)</h4>
                    <p className="text-sm">The creative principle through which the divine manifests the cosmos, similar to the concept in Greek philosophy and Christian theology.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Henosis (Union)</h4>
                    <p className="text-sm">The mystical experience of unity with the divine, achieved through contemplation and spiritual practice.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Planetary Spheres</h4>
                    <p className="text-sm">The celestial layers through which the soul descends into embodiment and must later ascend to return to its divine source.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">The Mixing Bowl (Crater)</h4>
                    <p className="text-sm">A divine vessel filled with Nous that allows those who immerse themselves in it to achieve spiritual knowledge and immortality.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Philosophical Parallels */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Philosophical Parallels</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Platonism</h4>
                    <p className="text-sm">Shares concepts of the immaterial Forms, the immortality of the soul, and the imperative to overcome the limitations of physical existence.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Stoicism</h4>
                    <p className="text-sm">Echoes the Stoic concepts of the Logos as a divine organizing principle and the emphasis on aligning oneself with cosmic order.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Gnosticism</h4>
                    <p className="text-sm">Similar emphasis on knowledge (gnosis) as the path to salvation, though generally more positive about the material world than many Gnostic texts.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Egyptian Religion</h4>
                    <p className="text-sm">Incorporates Egyptian concepts like the divine nature of knowledge, magical practices, and the identification of Hermes with Thoth.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Early Christianity</h4>
                    <p className="text-sm">Contains some parallels with Christian mysticism and theology, particularly in its concepts of divine Logos and spiritual rebirth.</p>
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
                      href="/library/emerald-tablet" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Emerald Tablet</span>
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
                      <span>Asclepius</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Historical Note */}
            <div className="bg-card/40 p-6 rounded-lg border border-border/50">
              <h3 className="font-esoterica text-accent/90 mb-3">Historical Note</h3>
              <p className="text-sm text-foreground/80">
                While Renaissance scholars believed the Corpus Hermeticum contained ancient Egyptian wisdom predating Moses, modern scholarship dates the texts to the 2nd-3rd centuries CE. Despite this later dating, the texts remain invaluable for understanding the spiritual and philosophical climate of Hellenistic Egypt and have exerted enormous influence on Western esoteric thought for centuries.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Sun className="w-4 h-4 text-accent/70" />
                <Moon className="w-4 h-4 text-accent/70" />
                <span className="text-xs text-accent/70 italic">The hidden is made manifest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 