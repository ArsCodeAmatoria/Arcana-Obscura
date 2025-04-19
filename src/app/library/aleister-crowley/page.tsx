import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, BookMarked, Star, Sparkles, Scroll, Eye, FlaskConical } from 'lucide-react';

export default function AleisterCrowleyPage() {
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
            <Eye className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            Aleister Crowley
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Ceremonial Magic
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Thelema
            </span>
            <span className="text-xs bg-accent/10 text-accent-foreground px-3 py-1 rounded-full">
              1875-1947
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Self-proclaimed "Great Beast 666," ceremonial magician, poet, and founder of the religious and magical philosophy of Thelema.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Early Life */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Scroll className="w-5 h-5" />
                Early Life and Background
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Edward Alexander Crowley was born on October 12, 1875, in Leamington Spa, England, to a wealthy family who were devout members of the Plymouth Brethren, a fundamentalist Christian sect. This strict religious upbringing would later fuel his rebellion against conventional Christianity, leading to his self-identification as "The Beast 666" from the Book of Revelation—a deliberate inversion of his childhood indoctrination.
                </p>
                <p>
                  After the death of his father when Crowley was eleven, he inherited a considerable fortune. He attended Trinity College at Cambridge University, where he pursued his interests in mountaineering, chess, and poetry rather than focusing on academics. It was during this period that Crowley began exploring Western esotericism, reading widely on alchemy, mysticism, and the occult sciences.
                </p>
                <p>
                  In 1898, at the age of 23, Crowley was initiated into the Hermetic Order of the Golden Dawn, the preeminent magical society of the Victorian era. His involvement with this organization brought him into contact with luminaries of Western occultism such as S.L. MacGregor Mathers, Arthur Edward Waite, and W.B. Yeats. Crowley quickly advanced through the Order's grades but became embroiled in its internal politics and power struggles.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "I was in the death struggle with the Spiritual forces which make for the enslavement of humanity, and with those which make for its freedom. I was entering the lists against the established order of things, political, moral, and religious."
                  <br />— Aleister Crowley, <em>The Confessions of Aleister Crowley</em>
                </p>
              </div>
            </section>
            
            {/* Magical Career */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Magical Career and Innovations
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Crowley's magical trajectory was dramatically altered in 1904 during a trip to Egypt with his first wife, Rose Kelly. According to Crowley, Rose entered a trance state and delivered messages from a praeter-human intelligence called Aiwass. Over three days in Cairo (April 8-10), Crowley claimed to have received dictation from this entity, resulting in <em>The Book of the Law</em> (Liber AL vel Legis), the central sacred text of Thelema.
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Founding of Thelema</h3>
                    <div className="space-y-4">
                      <p>
                        <em>The Book of the Law</em> established the Law of Thelema, summarized in the phrase "Do what thou wilt shall be the whole of the Law. Love is the law, love under will." This axiom does not advocate hedonism, as often misinterpreted, but rather encourages individuals to discover and fulfill their true purpose or "True Will" in harmony with the universe's broader patterns.
                      </p>
                      <p>
                        Crowley declared that the reception of <em>The Book of the Law</em> marked the beginning of a new aeon—the Aeon of Horus—replacing the preceding Aeon of Osiris associated with patriarchal religions like Christianity. The new aeon would be characterized by self-determination, individual empowerment, and the transcendence of dualistic thinking.
                      </p>
                      <p>
                        Though Crowley initially set the book aside, he returned to it years later and dedicated the remainder of his life to promulgating its teachings and developing the philosophy of Thelema. This included creating or adapting magical rituals, writing extensive commentaries, and establishing organizations to transmit these teachings.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Magical Orders and Legacy</h3>
                    <div className="space-y-4">
                      <p>
                        After his departure from the Golden Dawn, Crowley joined and reformed several magical organizations:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-medium">A∴A∴ (Argenteum Astrum or Silver Star)</span>: Founded by Crowley in 1907, this order was structured as a teaching system with a series of graded initiations corresponding to the Kabbalistic Tree of Life.</li>
                        <li><span className="font-medium">Ordo Templi Orientis (O.T.O.)</span>: Crowley became involved with this fraternal organization around 1910 and eventually became its leader, reformulating its rituals to incorporate Thelemic principles and sexual magic.</li>
                        <li><span className="font-medium">Abbey of Thelema</span>: In 1920, Crowley established a commune in Cefalù, Sicily, as a "magical retirement" where students could study Thelemic principles and practices under his guidance. The experiment ended in 1923 when Crowley was expelled from Italy by Mussolini's government after negative publicity.</li>
                      </ul>
                      <p>
                        Crowley's approach to magic was intellectual, systematic, and eclectic. He integrated elements from diverse traditions—Western ceremonial magic, Eastern mysticism (particularly yoga and Tantra), Egyptian mythology, and Enochian magic—while subjecting them to rigorous experimentation and documentation. His emphasis on maintaining detailed magical diaries and the scientific verification of results represented a move toward a more empirical approach to occultism.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Literary Works */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <BookMarked className="w-5 h-5" />
                Literary and Magical Works
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  Crowley was extraordinarily prolific, producing works that ranged from technical magical treatises to poetry, fiction, plays, and autobiographical writings:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Core Magical Texts</h3>
                    <ul className="text-sm text-foreground/70 space-y-2">
                      <li><span className="font-medium">Liber AL vel Legis (The Book of the Law)</span>: The central scripture of Thelema, allegedly dictated by a praeter-human intelligence named Aiwass in 1904.</li>
                      <li><span className="font-medium">Magick in Theory and Practice</span>: Perhaps his most influential magical work, outlining the principles and practices of his system of "Magick" (spelled with a 'k' to distinguish it from stage magic).</li>
                      <li><span className="font-medium">The Book of Thoth</span>: Crowley's treatise on Tarot symbolism, accompanied by a deck designed by Lady Frieda Harris that integrates Kabbalistic, astrological, and alchemical symbolism.</li>
                      <li><span className="font-medium">777 and Other Qabalistic Writings</span>: A collection of detailed magical correspondences between diverse symbolic systems, serving as a practical reference for ritualists.</li>
                      <li><span className="font-medium">Liber ABA (Book Four)</span>: A comprehensive treatise on magical theory and practice, covering yoga, ceremonial magic, and the philosophy of Thelema.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Literary and Personal Works</h3>
                    <ul className="text-sm text-foreground/70 space-y-2">
                      <li><span className="font-medium">The Confessions of Aleister Crowley</span>: His sprawling autobiography providing insights into his life, magical development, and the historical context of Western esotericism.</li>
                      <li><span className="font-medium">Diary of a Drug Fiend</span>: A novel exploring addiction, recovery, and spiritual transformation through Thelemic principles.</li>
                      <li><span className="font-medium">Moonchild</span>: A fictional work blending occultism with a tale of magical war over an unborn child.</li>
                      <li><span className="font-medium">The Collected Works of Aleister Crowley</span>: His poetry, much of which contains veiled magical instruction and kabbalistic symbolism.</li>
                      <li><span className="font-medium">The Vision and the Voice</span>: Crowley's record of his scrying of the 30 Aethyrs of Enochian magic, containing profound mystical revelations.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Magical Innovations</h3>
                    <p className="text-sm text-foreground/70">
                      Beyond his writings, Crowley developed several distinctive magical practices and concepts:
                    </p>
                    <ul className="text-sm text-foreground/70 space-y-2 mt-2">
                      <li><span className="font-medium">The Holy Guardian Angel</span>: While adapted from earlier sources, Crowley emphasized communion with one's Holy Guardian Angel (higher self or personal genius) as the central operation of magic.</li>
                      <li><span className="font-medium">Scientific Illuminism</span>: His approach to magic as a practical science with the motto "The method of science, the aim of religion."</li>
                      <li><span className="font-medium">Thelemic Rituals</span>: New ceremonies like the Gnostic Mass (Ecclesiae Gnosticae Catholicae Canon Missae), which remains the central public ritual of the O.T.O.</li>
                      <li><span className="font-medium">Magical Diaries</span>: Systematic documentation of magical experiences, emphasizing empirical observation over subjective interpretation.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Drug Experimentation</h3>
                    <p className="text-sm text-foreground/70">
                      Crowley systematically experimented with a wide range of substances, documenting their effects on consciousness and magical practice:
                    </p>
                    <ul className="text-sm text-foreground/70 space-y-2 mt-2">
                      <li>He used hashish, cocaine, opium, mescaline, and other substances as tools for attaining altered states of consciousness.</li>
                      <li>His notes on these experiments influenced later psychedelic researchers and countercultural figures of the 1960s.</li>
                      <li>Despite his experimental approach, Crowley himself developed several addictions, documenting his struggles with dependency in works like <em>Diary of a Drug Fiend</em>.</li>
                      <li>He ultimately advocated for disciplined, ritual use of substances rather than recreational consumption.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Controversies */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4">Controversies and Cultural Impact</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Crowley deliberately cultivated a controversial public persona that continues to affect perceptions of his work:
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-accent/80">The "Wickedest Man in the World"</h3>
                  <p>
                    British tabloids dubbed Crowley "The Wickedest Man in the World," a title he embraced as part of his strategy to shock Victorian and Edwardian sensibilities. His deliberate transgressions included:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Writing sexually explicit poetry and incorporating sexual elements into magical practice</li>
                    <li>Rejecting conventional Christian morality and advocating self-determination</li>
                    <li>Performing "black magic" rituals designed to scandalize observers</li>
                    <li>Embracing his media portrayal as a Satanist, despite not subscribing to Satanism as commonly understood</li>
                  </ul>
                  <p>
                    This sensationalistic reputation has often overshadowed his genuine contributions to esoteric thought and practice. Critics have pointed to his misogyny, racial prejudices (typical of his era but nonetheless problematic), and narcissistic tendencies as reasons to question his moral authority.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Espionage and Political Connections</h3>
                  <p>
                    Evidence suggests Crowley worked as an intelligence agent for the British government during World War I, conducting counter-propaganda in the United States. He later claimed his outrageous behavior in America—including publicly tearing up a draft card and declaring support for the German cause—was designed to establish his cover as an anti-British agitator.
                  </p>
                  <p>
                    Throughout his life, Crowley moved in influential circles that included politicians, artists, and intellectuals. While he openly expressed admiration for aspects of fascism in the 1920s and 1930s (as did many intellectuals of the period), he later condemned Nazi Germany and rejected racial theories as incompatible with Thelemic universalism.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Literary and Cultural Legacy</h3>
                  <p>
                    Despite the controversy that surrounded him in life, Crowley's influence on modern culture has been extensive:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Rock musicians from The Beatles (who included him on the Sgt. Pepper album cover) to Jimmy Page of Led Zeppelin (who purchased Crowley's former residence, Boleskine House) have acknowledged his influence</li>
                    <li>Contemporary occult movements, from Chaos Magic to various Neo-pagan traditions, have incorporated elements of his system</li>
                    <li>His approach to sexuality and gender has influenced aspects of the sexual liberation movement and queer spirituality</li>
                    <li>Academic interest in his work has grown, with scholars recognizing his significance in the history of Western esotericism</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Last Years */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Final Years and Modern Assessment
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Crowley's last years were marked by physical decline, poverty, and continued dedication to his magical work:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Health Struggles</span>: Years of drug use and physical exertion left Crowley with chronic respiratory issues and other health problems. He became dependent on heroin, prescribed initially for his asthma, and struggled financially after depleting his inheritance.
                  </li>
                  <li>
                    <span className="font-medium">Continued Work</span>: Despite these challenges, he remained productive into his final years, working on commentaries to <em>The Book of the Law</em>, revising rituals for the O.T.O., and maintaining correspondence with students worldwide.
                  </li>
                  <li>
                    <span className="font-medium">Final Days</span>: Crowley died on December 1, 1947, at Netherwood boarding house in Hastings, England. His reputed last words—"I am perplexed" or, alternatively, "Sometimes I hate myself"—have been subjects of debate among biographers.
                  </li>
                  <li>
                    <span className="font-medium">Funeral Controversy</span>: His funeral service, conducted with Thelemic Gnostic Mass rituals, became the subject of sensationalistic reporting, with newspapers claiming it constituted a "Black Mass"—a final controversy that further cemented his notorious public image.
                  </li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80 mt-6">Contemporary Reassessment</h3>
                <p>
                  Modern evaluations of Crowley have become more nuanced as his work is studied in academic contexts and separated from sensationalistic accounts:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Scholars like Henrik Bogdan, Marco Pasi, and Richard Kaczynski have examined his contributions to Western esotericism, situating him within broader intellectual and cultural contexts.</li>
                  <li>Contemporary magical practitioners across various traditions acknowledge his systematization of magical knowledge and his emphasis on experimentation and record-keeping.</li>
                  <li>Feminist and postcolonial critiques have highlighted problematic aspects of his attitudes while also recognizing elements of his work that challenged Victorian conventions around sexuality and spirituality.</li>
                  <li>Biographers have worked to separate factual accounts of his life from self-mythologizing and tabloid exaggerations, revealing a more complex figure than either his admirers or detractors typically present.</li>
                </ul>
                <p>
                  Aleister Crowley remains one of the most influential—and controversial—figures in modern Western esotericism. His integration of diverse magical traditions, systematic approach to occult practice, and development of Thelema as a coherent magical philosophy continue to shape contemporary understanding of magic, regardless of one's assessment of his personal character or moral legacy.
                </p>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Key Concepts */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Thelemic Concepts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">True Will</h4>
                    <p className="text-sm">The essential purpose or path of an individual, distinct from momentary whims or societal expectations. Discovering and performing one's True Will is the central objective of Thelemic practice.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Every man and woman is a star</h4>
                    <p className="text-sm">A key phrase from <em>The Book of the Law</em> suggesting that each person has their own unique orbit or spiritual path, and that spiritual fulfillment comes from following this individual trajectory.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Aeons</h4>
                    <p className="text-sm">Crowley proposed that history unfolds in spiritual epochs: the Aeon of Isis (matriarchal paganism), Osiris (patriarchal monotheism), and now Horus (individualistic spiritual sovereignty).</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Magick</h4>
                    <p className="text-sm">Defined by Crowley as "the Science and Art of causing Change to occur in conformity with Will," encompassing everything from ritual practices to everyday acts performed with intent.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">93 Current</h4>
                    <p className="text-sm">The energy or spiritual force of Thelema, derived from the Greek numerical values of Thelema (Will) and Agape (Love), both of which equal 93.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Key Writings */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Essential Readings</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">For Beginners</h4>
                    <p className="text-sm"><em>The Law is for All</em> - Crowley's introduction to Thelema and explanation of The Book of the Law</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">For Practitioners</h4>
                    <p className="text-sm"><em>Magick in Theory and Practice</em> - His comprehensive system of ceremonial magic</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">For Scholars</h4>
                    <p className="text-sm"><em>The Confessions of Aleister Crowley</em> - His autobiography, providing historical context</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">For Diviners</h4>
                    <p className="text-sm"><em>The Book of Thoth</em> - His system of Tarot correspondences and symbolism</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">For All</h4>
                    <p className="text-sm"><em>Liber AL vel Legis</em> (The Book of the Law) - The central text of Thelema</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Related Figures */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Related Figures</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/library/jack-parsons" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Jack Parsons</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/golden-dawn" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Hermetic Order of the Golden Dawn</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/grimoires" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Grimoires & Black Books</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/enochian-magic" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Enochian Magic</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Quote Box */}
            <div className="bg-card/40 p-6 rounded-lg border border-border/50">
              <h3 className="font-esoterica text-accent/90 mb-3">Crowley in His Own Words</h3>
              <p className="text-sm text-foreground/80 italic">
                "Magick is the Science and Art of causing Change to occur in conformity with Will."
              </p>
              <p className="text-sm text-foreground/80 italic mt-4">
                "The ordinary man looking at a mountain is like an illiterate person confronted with a splendid poem."
              </p>
              <p className="text-sm text-foreground/80 italic mt-4">
                "The joy of life consists in the exercise of one's energies, continual growth, constant change, the enjoyment of every new experience. To stop means simply to die."
              </p>
              <p className="text-sm text-accent/70 mt-4 text-right">
                — Aleister Crowley
              </p>
            </div>
            
            {/* Academic Note */}
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <FlaskConical className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  This article presents Aleister Crowley from a historical and academic perspective. His controversial reputation and the nature of his teachings have been subject to misrepresentation both by followers and critics. Readers are encouraged to approach his works with critical thinking and historical context rather than either uncritical acceptance or dismissal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 