import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, BookMarked, Star, Sparkles, Scroll, Scale } from 'lucide-react';

export default function AlbertPikePage() {
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
            Albert Pike
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Freemasonry
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Esoteric Philosophy
            </span>
            <span className="text-xs bg-accent/10 text-accent-foreground px-3 py-1 rounded-full">
              1809-1891
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Influential Masonic scholar, author of "Morals and Dogma," and reformer of Scottish Rite Freemasonry whose work bridged Western esoteric traditions.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Biographical Overview */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Scroll className="w-5 h-5" />
                Biographical Overview
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Albert Pike was born on December 29, 1809, in Boston, Massachusetts, to a modest family. A largely self-educated man with exceptional intellectual capacity, Pike worked as a teacher, frontiersman, journalist, lawyer, and poet before finding his most significant calling in Freemasonry. His life spanned much of the 19th century, allowing him to witness profound changes in American society from westward expansion to the Civil War and Reconstruction.
                </p>
                <p>
                  Pike's early years were marked by adventure and diverse pursuits. He journeyed through the Southwest as a trader and explorer, living among Native American tribes and learning several indigenous languages. After settling in Arkansas, he established himself as an attorney and newspaper editor, eventually becoming a prominent figure in territorial politics. His legal career included representing Native American tribes in claims against the federal government, demonstrating his complex relationship with the cultural tensions of his era.
                </p>
                <p>
                  During the Civil War, Pike served as a brigadier general in the Confederate Army, primarily organizing Native American units. This controversial chapter of his life has been the subject of much historical debate. After the war, he spent time in exile before receiving a pardon and establishing himself in Washington, D.C., where he focused on his legal practice and, increasingly, his Masonic and philosophical writings.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "What we have done for ourselves alone dies with us; what we have done for others and the world remains and is immortal."<br />
                  — Albert Pike
                </p>
              </div>
            </section>
            
            {/* Masonic Career */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Masonic Career and Influence
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Pike was initiated into Freemasonry in 1850 at Western Star Lodge No. 2 in Little Rock, Arkansas. His ascent within the fraternity was remarkably swift, reflecting both his intellectual capabilities and the transformative vision he brought to Masonic thought. Within Freemasonry, Pike found a framework that aligned with his interests in ancient wisdom, symbolism, comparative religion, and moral philosophy.
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Reformation of the Scottish Rite</h3>
                    <div className="space-y-4">
                      <p>
                        Pike's most significant contribution to Freemasonry was his comprehensive revision of the rituals and philosophical framework of the Scottish Rite's Southern Jurisdiction (United States). After being elected Sovereign Grand Commander in 1859—a position he would hold for thirty-two years until his death—Pike undertook the monumental task of rewriting the degree rituals of the Scottish Rite, expanding them from brief sketches into elaborate ceremonies rich with symbolism and philosophical content.
                      </p>
                      <p>
                        This work transformed the Scottish Rite from a relatively minor branch of Freemasonry into a coherent system of moral and spiritual instruction. Pike's revisions integrated elements from numerous esoteric traditions:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Kabbalah and Jewish mysticism</li>
                        <li>Hermetic philosophy and alchemy</li>
                        <li>Neoplatonism and Gnosticism</li>
                        <li>Zoroastrian and Egyptian symbolism</li>
                        <li>Medieval chivalric traditions</li>
                        <li>Vedic and Buddhist concepts</li>
                      </ul>
                      <p>
                        The resulting degree system formed a comprehensive initiatory journey through which Masonic candidates could explore profound philosophical questions while developing moral character. Pike saw the Scottish Rite as a "university" of Freemasonry, offering deeper insights into the symbolic foundations of craft Masonry.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Masonic Diplomacy</h3>
                    <div className="space-y-4">
                      <p>
                        Beyond his ritual revisions, Pike worked to establish and strengthen relationships between Masonic bodies worldwide. He maintained extensive correspondence with Masonic authorities in Europe and Latin America, helping to standardize practices and recognition across jurisdictions. His efforts toward Masonic unity faced significant challenges, including competing claims to authority and ritual differences, but his diplomatic work helped establish the Scottish Rite's Southern Jurisdiction as a respected Masonic power.
                      </p>
                      <p>
                        Pike's approach to Masonic diplomacy reflected his broader philosophical vision of Freemasonry as a universal brotherhood transcending national, religious, and cultural boundaries. He advocated for recognition across Masonic bodies based on adherence to fundamental principles rather than specific ritual practices, a progressive stance for his era.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Philosophical and Esoteric Work */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <BookMarked className="w-5 h-5" />
                Philosophical and Esoteric Contributions
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  Pike's intellectual legacy extends far beyond his organizational work within Freemasonry. As a scholar of esoteric traditions, comparative religion, and symbolism, he produced writings that continue to influence contemporary understanding of Western esotericism:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Morals and Dogma</h3>
                    <p className="text-sm text-foreground/70">
                      Pike's magnum opus, <em>Morals and Dogma of the Ancient and Accepted Scottish Rite of Freemasonry</em> (1871), stands as one of the most comprehensive works of Masonic philosophy ever produced. This massive tome (over 800 pages) provides detailed commentaries on each degree of the Scottish Rite, exploring their symbolic, historical, and philosophical dimensions. The book draws connections between Masonic symbolism and numerous ancient traditions, presenting Freemasonry as the inheritor of a prisca theologia or perennial wisdom tradition.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Lectures on Symbolism</h3>
                    <p className="text-sm text-foreground/70">
                      Pike developed a sophisticated theory of symbolism that distinguished between signs (arbitrary designations), emblems (natural resemblances), and true symbols (representations of abstract concepts that participate in the reality they represent). For Pike, symbols operated at multiple levels simultaneously, speaking to intuition and intellect while conveying truths that transcend direct expression. His approach to symbolism influenced not only Masonic thought but also anticipated aspects of 20th century semiotics and depth psychology.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Comparative Religious Studies</h3>
                    <p className="text-sm text-foreground/70">
                      Pike was among the first American scholars to seriously study Eastern religious traditions, including Hinduism, Buddhism, and Zoroastrianism. His approach, while limited by the resources and orientalist biases of his time, was remarkably open-minded for a 19th century writer. He sought to identify common spiritual principles underlying diverse religious expressions, seeing differing traditions as culturally specific manifestations of universal truths. This perspective informed his conception of Freemasonry as a non-sectarian space where men of different religions could find common ground.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Ethical Philosophy</h3>
                    <p className="text-sm text-foreground/70">
                      Central to Pike's thought was a comprehensive ethical system that emphasized personal responsibility, moral development, and duty to humanity. Influenced by Enlightenment thinking, particularly Kantian ethics, Pike articulated a vision of morality based on universal principles rather than sectarian dogmas. His ethical writings emphasized the development of character through self-discipline, contemplation, and active service to others—values reflected in the progressive degree structure of his revised Scottish Rite.
                    </p>
                  </div>
                </div>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                  <h3 className="text-xl font-medium text-accent/80 mb-3">The Quest for Light</h3>
                  <div className="space-y-4">
                    <p>
                      The central metaphor throughout Pike's work is the search for "Light," representing spiritual and intellectual enlightenment. For Pike, this quest proceeded through several stages:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><span className="font-medium">Symbolic Interpretation</span>: Understanding the outer forms of traditional wisdom through their allegorical meanings</li>
                      <li><span className="font-medium">Philosophical Reflection</span>: Engaging with the rational and ethical dimensions of these traditions</li>
                      <li><span className="font-medium">Mystical Contemplation</span>: Moving beyond rational understanding to intuitive spiritual insight</li>
                    </ol>
                    <p>
                      This progressive approach is reflected in Pike's organization of the Scottish Rite degrees, which move from symbolic lessons in the early degrees to increasingly abstract metaphysical concepts in the higher degrees. Pike viewed this journey as never truly complete, writing: "Masonry is a search after Light. That search leads us directly back, as you see, to the Kabalah."
                    </p>
                    <p>
                      What distinguishes Pike's approach from many contemporary esoteric systems was his insistence that the quest for light must be both intellectual and moral—that spiritual development required rigorous study and ethical practice, not merely mystical experience or ritual initiation.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Controversies and Misinterpretations */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5" />
                Controversies and Misinterpretations
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Few figures in American esoteric history have been subject to as many misrepresentations and fabrications as Albert Pike. His legacy has been complicated by both his Confederate military service and by numerous conspiracy theories that have attached to his name:
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-accent/80">Civil War Legacy</h3>
                  <p>
                    Pike's service as a Confederate brigadier general remains the most controversial aspect of his biography. His command of Native American troops at the Battle of Pea Ridge was particularly problematic, as these forces were accused of scalping Union soldiers. While historical evidence suggests Pike did not order such actions and condemned them, this episode has nonetheless tarnished his reputation. His monument in Washington, D.C.—the only outdoor statue of a Confederate general in the city—became a focal point for protests before being toppled in 2020.
                  </p>
                  <p>
                    Historians continue to debate Pike's motivations in joining the Confederacy, with some suggesting his advocacy for Native American rights against federal policies played a significant role in his decision. This complexity illustrates the challenge of evaluating 19th century figures through contemporary moral frameworks.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">The Lucifer Controversy</h3>
                  <p>
                    Perhaps the most persistent misrepresentation of Pike involves claims that he promoted Luciferian worship within Freemasonry. These allegations stem primarily from selective or fabricated quotations from <em>Morals and Dogma</em>, particularly regarding Pike's discussion of the symbolism of Light and its various representations across traditions.
                  </p>
                  <p>
                    In discussing the evolution of religious symbolism, Pike did mention Lucifer as a Latin name meaning "light-bearer" and traced connections to various light-associated deities in ancient religions. However, these academic discussions were descriptive rather than prescriptive, part of Pike's comparative approach to religious symbolism. His personal theological views, while unorthodox by contemporary standards, were broadly deistic rather than satanic, emphasizing the divine as an impersonal cosmic principle.
                  </p>
                  <p>
                    The mischaracterization of Pike as a Luciferian was popularized by anti-Masonic writer Léo Taxil (Gabriel Jogand-Pagès), who later admitted his writings were deliberate hoaxes designed to embarrass both Freemasonry and the Catholic Church. Despite Taxil's confession in 1897, his fabrications about Pike continue to circulate in anti-Masonic literature.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">The "Three World Wars" Letter</h3>
                  <p>
                    Another commonly circulated fabrication is a letter allegedly written by Pike to Giuseppe Mazzini in 1871, outlining plans for three world wars, including a detailed prediction of World War II and a future religious war between Jews and Muslims. This letter first appeared in a 1950s book without credible sourcing and contradicts both Pike's writing style and the historical context of his era. No original copy has ever been produced, and the letter's anachronistic references to events and concepts unknown in Pike's time reveal it as a 20th century fabrication.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Scholarly Reassessment</h3>
                  <p>
                    Modern scholarship on Pike has worked to separate the historical figure from both hagiography and conspiracy theories. Researchers like Arturo de Hoyos, S. Brent Morris, and Robert Cooper have provided more nuanced assessments of Pike's contributions to esoteric thought while acknowledging the problematic aspects of his life and career.
                  </p>
                  <p>
                    This scholarly reassessment places Pike within his proper historical context as an important but flawed figure in American intellectual history—neither the satanic mastermind of conspiracy literature nor the unblemished sage sometimes portrayed in Masonic publications.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Legacy and Influence */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Legacy and Contemporary Relevance
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Pike's death in 1891 marked the end of a remarkable career that transformed American Freemasonry and contributed significantly to Western esoteric thought. His legacy continues to resonate in several domains:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Masonic Education</span>: Pike's emphasis on Freemasonry as a vehicle for moral and intellectual development established a tradition of Masonic education that continues today. The Scottish Rite Research Society and similar organizations carry forward his commitment to scholarly exploration of Masonic symbolism and history.
                  </li>
                  <li>
                    <span className="font-medium">Ritual Practice</span>: Though modified over time, Pike's Scottish Rite rituals remain the foundation of practice in the Southern Jurisdiction of the United States. These ceremonies continue to provide initiatory experiences for thousands of Masons annually, making Pike's symbolic system one of the most widely experienced forms of Western esoteric initiation.
                  </li>
                  <li>
                    <span className="font-medium">Esoteric Literature</span>: Pike's writings significantly influenced subsequent generations of esoteric authors, including Manly P. Hall, Paul Foster Case, and Harold Voorhis. His synthetic approach to diverse traditions helped establish a template for comparative esoteric studies that continues to shape how Western esotericism is conceptualized and taught.
                  </li>
                  <li>
                    <span className="font-medium">American Intellectual History</span>: Recent scholarly interest in Pike places him within broader currents of American intellectual history, particularly the development of religious pluralism and comparative religious thought in 19th century America. His work provides a window into how Western thinkers began to engage seriously with global religious traditions during this period.
                  </li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80 mt-6">Contemporary Relevance</h3>
                <p>
                  Despite the dated aspects of Pike's language and certain conceptual limitations of his era, several elements of his thought remain relevant to contemporary discussions:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>His emphasis on finding common ethical ground across diverse religious traditions anticipates modern interfaith dialogue.</li>
                  <li>His integration of intellectual study with symbolic and contemplative practices offers a model for holistic approaches to spiritual development.</li>
                  <li>His work on the psychological function of symbols prefigures important developments in depth psychology and contemporary symbolic studies.</li>
                  <li>His vision of fraternal organizations as spaces for ethical development outside sectarian religious contexts speaks to ongoing questions about civic virtue and moral education.</li>
                </ul>
                
                <p>
                  Pike's legacy reminds us that the boundaries between philosophy, religion, symbolism, and social organization have not always been as rigid as modern categorizations might suggest. His synthetic approach—drawing from diverse traditions to construct a coherent ethical and philosophical system—represents an important current in American intellectual history that transcends easy classification as either conventional religion or secular philosophy.
                </p>
                <p>
                  Whatever one's assessment of Pike's personal character or specific ideas, his contributions to esoteric thought and fraternal practice secured him a place as one of the most influential American esoteric thinkers of the 19th century, whose shadow continues to fall across contemporary discussions of Western esotericism, comparative religion, and symbolic initiation.
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
                    <h4 className="font-medium text-accent/80">The Royal Secret</h4>
                    <p className="text-sm">Pike's interpretation of the culminating lesson of Scottish Rite Masonry, involving the balance of opposing forces and the recognition of unity within apparent duality.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Symbolic Degrees</h4>
                    <p className="text-sm">Pike's system of progressive spiritual instruction through ritual degrees, each conveying moral and philosophical lessons through allegory.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Equilibrium</h4>
                    <p className="text-sm">A central philosophical principle in Pike's thought, referring to the balance of opposing forces (mercy and severity, intellect and intuition) necessary for spiritual development.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">The Inner Sanctuary</h4>
                    <p className="text-sm">Pike's concept of an interior spiritual space cultivated through initiation, study, and contemplation, where higher wisdom becomes accessible.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Symbolic Transmission</h4>
                    <p className="text-sm">Pike's theory of how esoteric knowledge has been transmitted across cultures and eras through symbols that preserve meaning even when their interpretation evolves.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Key Works */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Works</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Morals and Dogma (1871)</h4>
                    <p className="text-sm">Pike's magnum opus exploring the philosophical, historical, and symbolic dimensions of Scottish Rite Freemasonry.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Liturgy of the Ancient and Accepted Scottish Rite</h4>
                    <p className="text-sm">Pike's revision of the Scottish Rite degree rituals, transforming them into a comprehensive system of moral instruction.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">The Book of the Words (1878)</h4>
                    <p className="text-sm">Pike's etymological study of key terms in Masonic ritual, exploring their origins and symbolic meanings.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Indo-Aryan Deities and Worship (1872)</h4>
                    <p className="text-sm">Pike's comparative study of Hindu deities and their symbolic significance, reflecting his interest in Eastern traditions.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Irano-Aryan Faith and Doctrine (1874)</h4>
                    <p className="text-sm">Pike's exploration of Zoroastrian religious concepts and their relationship to other spiritual traditions.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Related Topics */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Related Topics</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/pillars/freemasonry" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Freemasonry</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/scottish-rite" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Scottish Rite</span>
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
                      href="/pillars/hermeticism" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Hermeticism</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Quote Box */}
            <div className="bg-card/40 p-6 rounded-lg border border-border/50">
              <h3 className="font-esoterica text-accent/90 mb-3">Pike in His Own Words</h3>
              <p className="text-sm text-foreground/80 italic">
                "What we have done for ourselves alone dies with us; what we have done for others and the world remains and is immortal."
              </p>
              <p className="text-sm text-foreground/80 italic mt-4">
                "The word of a Mason, like the word of a knight in the times of chivalry, once given must be sacred; and the judgment of his brothers should be like the judgment of the gods."
              </p>
              <p className="text-sm text-foreground/80 italic mt-4">
                "The genuine Mason is a philosopher; he reads the great book of nature, and from every object he learns a moral lesson."
              </p>
              <p className="text-sm text-accent/70 mt-4 text-right">
                — From Pike's writings
              </p>
            </div>
            
            {/* Academic Note */}
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <BookMarked className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  This article presents Albert Pike from a historical and academic perspective, based on scholarly sources rather than either hagiographic Masonic accounts or conspiratorial anti-Masonic literature. Pike's legacy is complex and continues to be reassessed by historians of American intellectual history, Western esotericism, and Freemasonry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 