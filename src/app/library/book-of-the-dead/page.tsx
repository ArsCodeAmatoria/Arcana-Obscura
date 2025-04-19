import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, Skull, Feather, Scroll, Moon } from 'lucide-react';

export default function BookOfTheDeadPage() {
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
            The Egyptian Book of the Dead
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Egyptian Mysticism
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Funerary Texts
            </span>
            <span className="text-xs bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full">
              c. 1550 BCE
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Ancient Egyptian funerary texts containing spells and instructions to guide the deceased through the underworld to the afterlife.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Scroll className="w-5 h-5" />
                The Book of Coming Forth by Day
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Egyptian Book of the Dead, known to the ancient Egyptians as "The Book of Coming Forth by Day" (or "Reu nu pert em hru" in Egyptian), 
                  is not a single book but a collection of funerary texts consisting of magic spells intended to assist the deceased in navigating the underworld, 
                  passing its trials, and reaching the afterlife successfully.
                </p>
                <p>
                  These texts evolved from earlier funerary literature, particularly the Pyramid Texts (inscriptions carved on the walls of pyramids) 
                  and the Coffin Texts (spells written on coffins). The Book of the Dead represents a more accessible evolution of these traditions,
                  written on papyrus scrolls that were placed in the tomb with the deceased.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "I have not committed sin. I have not committed robbery with violence. I have not stolen. I have not slain men or women.
                  I have not stolen food. I have not swindled offerings. I have not stolen from God..."
                  <br />— From the "Negative Confession" in Spell 125
                </p>
              </div>
            </section>
            
            {/* Historical Context */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Moon className="w-5 h-5" />
                Historical Development
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  While elements of the Book of the Dead can be traced to the Old Kingdom (c. 2686–2181 BCE) Pyramid Texts, 
                  the Book of the Dead as a distinct collection emerged during the Second Intermediate Period (c. 1650–1550 BCE). 
                  It reached its full standardized form during the New Kingdom (c. 1550–1070 BCE), particularly during the 18th Dynasty.
                </p>
                <p>
                  The content and organization of the Book of the Dead varied considerably from one copy to another, 
                  with wealthier individuals commissioning more elaborate and extensive versions. By the 26th Dynasty (c. 664–525 BCE), 
                  the texts became more standardized in content and organization, often including up to 192 distinct spells or "chapters."
                </p>
                <p>
                  The tradition continued through the Late, Ptolemaic, and Roman periods until the rise of Christianity in Egypt 
                  gradually displaced these ancient funerary practices. The last known examples date to around the 2nd century CE.
                </p>
              </div>
            </section>
            
            {/* Key Spells and Chapters */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Feather className="w-5 h-5" />
                Key Spells and Chapters
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  While the Book of the Dead contains numerous spells, several stand out for their spiritual significance and frequency of appearance:
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Spell 1: The Opening of the Mouth</h3>
                    <p className="mb-3">
                      This ritual spell was performed to symbolically restore the deceased's abilities to eat, drink, speak, and breathe in the afterlife. 
                      It was often performed by priests during the funeral ceremony.
                    </p>
                    <p className="text-sm text-foreground/70">
                      "O my heart which I had from my mother! O my heart of different ages! Do not stand up as a witness against me, 
                      do not be opposed to me in the tribunal, do not be hostile to me in the presence of the keeper of the balance..."
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Spell 17: Transformation</h3>
                    <p className="mb-3">
                      One of the longest and most complex spells, focusing on the deceased's identity with Ra and rebirth with the sun. 
                      It establishes the deceased as a divine being in the afterlife.
                    </p>
                    <p className="text-sm text-foreground/70">
                      "I am Atum when I was alone in Nun; I am Ra when he appeared in the beginning, when he began to rule that which he had made..."
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Spell 30B: The Heart Scarab</h3>
                    <p className="mb-3">
                      A crucial spell inscribed on a scarab amulet placed over the heart of the mummy. It prevented the heart from testifying against 
                      the deceased during the judgment of the dead.
                    </p>
                    <p className="text-sm text-foreground/70">
                      "My heart of my mother, my heart of my mother, my heart of my existence upon earth, do not rise up against me as a witness in the presence of the Lords of Eternity..."
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Spell 125: The Judgment/Weighing of the Heart</h3>
                    <p className="mb-3">
                      Perhaps the most iconic chapter, depicting the deceased's heart being weighed against the feather of Ma'at (truth/justice) before Osiris. 
                      It includes the famous "Negative Confession" in which the deceased denies having committed 42 specific sins.
                    </p>
                    <p className="text-sm text-foreground/70">
                      "Hail to thee, great God, Lord of Justice! I have come to thee, my Lord, that thou mayest bring me to see thy beauty. I know thee, I know thy name..."
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Spell 175: Not Dying a Second Death</h3>
                    <p className="mb-3">
                      This spell addressed the Egyptian fear of a "second death" in the afterlife, which would mean complete annihilation of the soul.
                    </p>
                    <p className="text-sm text-foreground/70">
                      "I shall not die again in the realm of the dead. I am Osiris, lord of eternity..."
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Spiritual Significance */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4">Spiritual Significance</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Book of the Dead provides profound insights into ancient Egyptian beliefs about the afterlife, the nature of the soul, and cosmic order:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Concept of the Soul</span>: The Egyptians believed in multiple spiritual elements that composed a person, 
                    including the Ka (life force), Ba (personality), Akh (transformed spirit), Shadow, and Name. The Book of the Dead addresses 
                    the journey and needs of these various aspects after death.
                  </li>
                  <li>
                    <span className="font-medium">Ma'at and Cosmic Balance</span>: Central to Egyptian spiritual thought was Ma'at, the concept of truth, 
                    justice, harmony, and cosmic order. The Weighing of the Heart ceremony illustrated that one's actions in life had direct consequences in the afterlife.
                  </li>
                  <li>
                    <span className="font-medium">Immortality Through Knowledge</span>: The Book of the Dead exemplifies the Egyptian belief that knowledge—specifically, 
                    knowing the right words, spells, and names—was essential for transcendence. By possessing this sacred knowledge, the deceased could overcome obstacles and achieve immortality.
                  </li>
                  <li>
                    <span className="font-medium">Magical Transformation</span>: Many spells in the Book of the Dead focus on the deceased's ability to transform into various 
                    entities—birds, lotus flowers, gods—symbolizing spiritual liberation and divine power in the afterlife.
                  </li>
                </ol>
                <p>
                  The text reveals a sophisticated understanding of human psychology and spirituality, addressing universal human concerns about death, judgment, 
                  and the possibility of continued existence beyond physical dissolution. Its influence extends beyond ancient Egypt, having impacted 
                  Western esoteric traditions, particularly Hermeticism and various mystical schools that drew inspiration from Egyptian wisdom.
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
                    <h4 className="font-medium text-accent/80">Duat (Underworld)</h4>
                    <p className="text-sm">The realm of the dead, a complex region with many obstacles and dangers that the deceased must navigate.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Hall of Two Truths</h4>
                    <p className="text-sm">Where the judgment of the dead took place before Osiris and 42 assessor deities.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Ammit</h4>
                    <p className="text-sm">The "Devourer of the Dead" – part crocodile, lion, and hippopotamus – who consumed hearts found impure.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Field of Reeds (Aaru)</h4>
                    <p className="text-sm">The Egyptian paradise, a perfect reflection of earthly life where the justified dead would dwell eternally.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Important deities */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Deities</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Osiris</h4>
                    <p className="text-sm">Lord of the underworld and judge of the dead, who embodied resurrection and eternal life.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Anubis</h4>
                    <p className="text-sm">Jackal-headed god who guided souls and presided over mummification and the weighing of the heart.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Thoth</h4>
                    <p className="text-sm">Ibis-headed god of wisdom and writing who recorded the judgment results.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Ma'at</h4>
                    <p className="text-sm">Goddess of truth, justice, and cosmic order, represented by the feather used in the heart weighing ceremony.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Vignettes and Illustrations */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Notable Vignettes</h3>
              </div>
              <div className="p-4 text-foreground/70 space-y-4">
                <p className="text-sm">
                  The Book of the Dead was richly illustrated with vignettes (scenes) that complemented the spells. Some of the most significant include:
                </p>
                <ul className="text-sm space-y-3">
                  <li className="border-l-2 border-accent/20 pl-2">
                    <strong className="text-accent/80">Weighing of the Heart</strong>: The deceased's heart balanced against Ma'at's feather, with Anubis supervising and Thoth recording.
                  </li>
                  <li className="border-l-2 border-accent/20 pl-2">
                    <strong className="text-accent/80">Solar Barque</strong>: The boat carrying Ra through the underworld, often accompanied by various deities.
                  </li>
                  <li className="border-l-2 border-accent/20 pl-2">
                    <strong className="text-accent/80">Field of Reeds</strong>: Illustrations of the paradise awaiting successful souls, showing agricultural scenes and abundant resources.
                  </li>
                  <li className="border-l-2 border-accent/20 pl-2">
                    <strong className="text-accent/80">The Final Judgment</strong>: Osiris seated on his throne, with the deceased being presented before him following the successful weighing of the heart.
                  </li>
                </ul>
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
                      href="/library/kybalion" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Kybalion</span>
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