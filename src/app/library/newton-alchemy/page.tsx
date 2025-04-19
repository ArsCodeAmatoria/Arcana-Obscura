import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, FlaskConical, BookMarked, Star, Sparkles, Atom } from 'lucide-react';

export default function NewtonAlchemyPage() {
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
            <FlaskConical className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            Newton's Alchemical Pursuits
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Scientific Alchemy
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Hermeticism
            </span>
            <span className="text-xs bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full">
              1642-1727
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            The hidden world of Sir Isaac Newton's extensive alchemical experiments and writings that ran parallel to his revolutionary scientific discoveries.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <BookMarked className="w-5 h-5" />
                The Hidden Newton
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Sir Isaac Newton (1642-1727), celebrated for his revolutionary work in physics, mathematics, and optics, harbored a profound, lifelong fascination with alchemy that he deliberately concealed from the public. After his death, nearly a million words of his alchemical writings were discovered, revealing that Newton had dedicated approximately 30 years to intensive alchemical research—more time than he spent on the mathematical and physical sciences that secured his historical reputation.
                </p>
                <p>
                  Newton's alchemical interests remained largely unknown until the 20th century, when his private manuscripts were auctioned by his descendants in 1936. These papers revealed the stunning extent of his esoteric pursuits and their surprising influence on his scientific thought. For a man celebrated as a founder of rational, empirical science, this "mystical" aspect of Newton presented a conundrum that historians have only recently begun to reconcile.
                </p>
                <p>
                  Far from being a side interest, alchemy was central to Newton's worldview—a pursuit of knowledge about nature's fundamental processes that he did not separate from his other scientific inquiries. His alchemical work illuminates a complex figure who straddled the ancient and modern worlds, seeking unified knowledge that embraced both spiritual and material dimensions of reality.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "Nature and Nature's laws lay hid in night:<br />
                  God said, Let Newton be! and all was light."<br />
                  — Alexander Pope
                </p>
              </div>
            </section>
            
            {/* Newton's Alchemical Laboratory */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <FlaskConical className="w-5 h-5" />
                The Laboratory and Experiments
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Newton established a sophisticated alchemical laboratory at Trinity College, Cambridge, where he conducted thousands of experiments over decades. Chemical analysis of his hair after death revealed unusually high levels of mercury, arsenic, lead, and other metals associated with alchemical work, suggesting the intensity of his practical involvement.
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Experimental Approach</h3>
                    <div className="space-y-4">
                      <p>
                        Unlike many of his contemporaries who approached alchemy purely as a theoretical or mystical pursuit, Newton was methodical and empirical in his alchemical work. His laboratory notes reveal:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Meticulously documented experiments, often repeated multiple times with slight variations</li>
                        <li>Precise measurements of materials, temperatures, and reaction times</li>
                        <li>Careful observations of color changes, consistencies, and other physical transformations</li>
                        <li>Development of specialized equipment and techniques for various processes</li>
                        <li>Systematic categorization of substances based on their properties and behaviors</li>
                      </ul>
                      <p>
                        This rigorous approach mirrored the methodologies he pioneered in his better-known scientific work, suggesting that Newton did not distinguish between his alchemical pursuits and other scientific investigations. For him, alchemy was not pseudoscience but rather an extension of natural philosophy into domains that had not yet yielded to quantitative analysis.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Key Experimental Focuses</h3>
                    <div className="space-y-4">
                      <p>
                        Newton's alchemical experiments centered on several interconnected areas:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-medium">The Vegetation of Metals</span>: Newton was particularly interested in processes that seemed to show metals "growing" or "vegetating" in solution, which he viewed as evidence of vital principles within matter itself.</li>
                        <li><span className="font-medium">Mercury and Antimony</span>: These two substances featured prominently in his work as key components in transmutation processes and as embodiments of fundamental philosophical principles.</li>
                        <li><span className="font-medium">The "Green Lion"</span>: Newton devoted considerable attention to preparing and working with this mysterious substance mentioned in alchemical texts, believed by some scholars to be a form of antimony ore.</li>
                        <li><span className="font-medium">The Philosopher's Stone</span>: While Newton certainly sought this ultimate alchemical achievement, he conceived of it less as a material for creating gold than as a substance embodying principles that could illuminate nature's deepest secrets.</li>
                        <li><span className="font-medium">Fermentation Processes</span>: Newton studied fermentation as a model for understanding transformation in matter, seeing parallels between biological processes and mineral transmutations.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Alchemical Writings and Research */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Alchemical Writings and Sources
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  Newton was an obsessive collector and analyst of alchemical texts, compiling one of the most extensive alchemical libraries of his time. His approach to these sources was both scholarly and practical:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Textual Analysis</h3>
                    <p className="text-sm text-foreground/70">
                      Newton developed sophisticated methods for deciphering the deliberately obscure language of alchemical texts. He created extensive indices, cross-references, and concordances to trace terms and concepts across multiple authors. His manuscripts include "dictionaries" of alchemical symbols and terminology, showing his systematic approach to decoding the tradition's secretive language.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Key Influences</h3>
                    <p className="text-sm text-foreground/70">
                      Newton's alchemical thinking was particularly influenced by Paracelsus, Michael Maier, Robert Boyle, and the pseudonymous Eirenaeus Philalethes (likely George Starkey, a Harvard-educated chemist). He also studied Hermetic texts, the works of Raymond Lull, and medieval alchemical classics. This wide range of sources reflects Newton's belief that ancient wisdom contained truths that had been obscured over time but could be recovered through careful study.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Prisca Sapientia</h3>
                    <p className="text-sm text-foreground/70">
                      Newton subscribed to the concept of <em>prisca sapientia</em> (ancient wisdom), believing that profound knowledge about nature had been known to ancient civilizations (particularly the Egyptians, Babylonians, and early Hebrews) but had become corrupted or lost. He viewed alchemy as preserving fragments of this ancient knowledge, and his studies of ancient chronology, theology, and prophecy were interconnected with his alchemical pursuits in an attempt to reconstruct this lost wisdom.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Original Compositions</h3>
                    <p className="text-sm text-foreground/70">
                      Beyond his annotations of existing works, Newton composed original alchemical treatises, including "Praxis," "The Vegetation of Metals," and "Ripley Explained." These works reveal his evolving understanding of alchemical processes and his attempts to synthesize diverse traditions into a coherent framework. Notably, Newton rarely published his alchemical writings, treating them as private research and possibly as knowledge too powerful or easily misunderstood to share widely.
                    </p>
                  </div>
                </div>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                  <h3 className="text-xl font-medium text-accent/80 mb-3">Index Chemicus</h3>
                  <div className="space-y-4">
                    <p>
                      One of Newton's most significant alchemical manuscripts is his <em>Index Chemicus</em>, a massive compilation of alchemical knowledge that included:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Extracts from over 100 alchemical works</li>
                      <li>A comprehensive index of alchemical substances and processes</li>
                      <li>Cross-references between different authors and traditions</li>
                      <li>Newton's own experimental notes integrated with textual knowledge</li>
                      <li>Attempts to standardize alchemical terminology and procedures</li>
                    </ul>
                    <p>
                      This work represents Newton's attempt to bring systematic order to the often chaotic and contradictory alchemical tradition, reflecting the same organizational genius that he applied to physics and mathematics. In creating this index, Newton was effectively attempting to codify alchemy as a coherent body of knowledge—a project that paralleled his more famous work in systematizing physical laws.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Connection to Scientific Work */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Atom className="w-5 h-5" />
                Alchemy and Newton's Scientific Theories
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Recent scholarship has begun to reveal intricate connections between Newton's alchemical research and his groundbreaking scientific theories, suggesting that the traditional division between "Newton the rational scientist" and "Newton the alchemist" is fundamentally misleading:
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-accent/80">Forces and Attraction</h3>
                  <p>
                    Newton's revolutionary concept of gravity as an attractive force acting at a distance—a notion that his contemporaries often criticized as introducing "occult" or magical elements into science—may have been influenced by his alchemical studies of sympathies and antipathies between substances. In alchemy, Newton observed materials that seemed to "attract" or "repel" one another without obvious mechanical contact, prefiguring his later mathematical formulation of gravitational attraction.
                  </p>
                  <p>
                    The alchemical concept of "active principles" that could operate through space resonates strongly with Newton's concept of forces, suggesting that his alchemical work provided conceptual models for his physics. In his own words from <em>Opticks</em>:
                  </p>
                  <blockquote className="italic border-l-2 border-accent/30 pl-4 my-4">
                    "The Vis inertiae is a passive Principle by which Bodies persist in their Motion or Rest... Besides this passive Principle, I should need an active Principle, such as is the Cause of Gravity..."
                  </blockquote>
                  <p>
                    This language of "active principles" is deeply rooted in alchemical literature rather than mechanical philosophy.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Particulate Matter</h3>
                  <p>
                    Newton's conceptions of atomic particles and the forces between them drew on alchemical ideas about the structure of matter. His unpublished manuscript "De Natura Acidorum" describes chemical bonds in terms that blend mechanical and alchemical thinking, proposing that particles could be arranged in hierarchical structures with different properties at different scales—a sophisticated model that transcended the simple mechanical atomism of his contemporaries.
                  </p>
                  <p>
                    In passages from the <em>Opticks</em> that discuss the structure of matter, Newton proposes that "God in the Beginning formed Matter in solid, massy, hard, impenetrable, moveable Particles" with "certain active Principles, such as is that of Gravity." This integration of mechanical particles with non-mechanical "active principles" reflects the influence of his alchemical investigations into matter's transformative capabilities.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Optics and Light</h3>
                  <p>
                    Newton's alchemical quest for the "vegetable spirit" or vital force in matter parallels his optical investigations into light's properties. In both domains, Newton sought fundamental principles that animated and transformed the material world. His experiments with various "sulfurs" (alchemical substances thought to embody light-like principles) informed his understanding of light's behavior and composition.
                  </p>
                  <p>
                    The concept of "spiritus" that appears throughout Newton's alchemical writings—a subtle medium that carries active principles—bears striking resemblance to his speculations in later editions of the <em>Opticks</em> about an aetherial medium that might explain optical phenomena. Both concepts served as frameworks for understanding how forces could act through apparently empty space.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Divine Action in Nature</h3>
                  <p>
                    Perhaps most fundamentally, Newton's alchemy provided a framework for understanding God's continuing activity in the natural world. While his physics described a universe operating according to mathematical laws, his alchemy explored how divine power might operate within and through those laws to maintain cosmic order.
                  </p>
                  <p>
                    In both his scientific and alchemical writings, Newton repeatedly invoked God as not merely the creator of the universe but as an active, sustaining presence. The transmutations observed in alchemy demonstrated to Newton that matter itself was not inert but infused with transformative capacities that reflected divine intelligence and purpose.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Historical Context and Legacy */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Historical Context and Legacy
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  To understand Newton's alchemical pursuits properly, they must be placed in their historical context and traced through their complex legacy:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Transitional Era</span>: Newton lived during a period of profound transition in natural philosophy. Alchemy was not yet clearly distinguished from chemistry, and many leading natural philosophers (including Robert Boyle and John Locke) maintained serious interest in alchemical processes while simultaneously developing what we now recognize as modern scientific approaches.
                  </li>
                  <li>
                    <span className="font-medium">Theological Dimensions</span>: For Newton, alchemy was intimately connected to his unorthodox theological views. He rejected Trinitarian doctrine and was drawn to alchemy partly because it offered a framework for understanding divine action in nature that aligned with his conception of God as an absolute, singular force rather than a trinity.
                  </li>
                  <li>
                    <span className="font-medium">Secrecy and Publication</span>: Newton's decision not to publish his alchemical work reflects both the tradition of secrecy in alchemical practice and the increasingly skeptical attitude toward alchemy in scientific circles during his lifetime. By the early 18th century, alchemy was becoming marginalized in mainstream natural philosophy, and Newton may have recognized that public association with it could damage his scientific reputation.
                  </li>
                  <li>
                    <span className="font-medium">Rediscovery</span>: The rediscovery and reassessment of Newton's alchemical manuscripts in the 20th century has transformed our understanding of both Newton himself and the historical relationship between science and esoteric traditions. Scholars like B.J.T. Dobbs, Richard Westfall, and William Newman have demonstrated that alchemy was not peripheral to Newton's intellectual development but central to his entire worldview.
                  </li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80 mt-6">Historiographic Impact</h3>
                <p>
                  The recognition of Newton's deep engagement with alchemy has had profound implications for the history of science:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>It has challenged simplistic narratives about the "Scientific Revolution" as a straightforward triumph of rationalism over mysticism or superstition.</li>
                  <li>It has illuminated the complex relationships between empirical observation, mathematical formulation, and metaphysical frameworks in the development of modern science.</li>
                  <li>It has encouraged more nuanced understanding of how religious and philosophical commitments shape scientific inquiry, even in figures celebrated for their empiricism.</li>
                  <li>It has spurred reconsideration of alchemy itself as a sophisticated tradition with legitimate contributions to the development of chemistry and other sciences.</li>
                </ul>
                
                <p>
                  Newton's alchemical pursuits ultimately reveal the limitations of modern disciplinary categories when applied to early modern natural philosophy. For Newton, mathematics, physics, chemistry, alchemy, theology, and biblical chronology were not separate fields but interconnected approaches to understanding God's creation. His integration of these domains—now often artificially separated in both education and research—reminds us that the greatest scientific insights often emerge from synthetic thinking that transcends conventional boundaries.
                </p>
                <p>
                  As Newton himself wrote in a draft of the <em>Opticks</em>: "Would not the phenomena of nature be more complex if they resulted from a single principle operating in diverse ways rather than from several principles?" This quest for underlying unity animated both his mathematical physics and his alchemical investigations, suggesting that these apparently divergent pursuits shared a common philosophical foundation.
                </p>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Key Alchemical Concepts */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Alchemical Concepts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Vegetable Spirit</h4>
                    <p className="text-sm">The animating force Newton believed existed within matter, enabling transmutation and growth in both organic and mineral substances.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Active Principles</h4>
                    <p className="text-sm">Forces that operate within and between particles of matter, producing chemical reactions and physical attractions—a concept that informed Newton's theory of gravity.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Mercurial Earth</h4>
                    <p className="text-sm">A fundamental substance that Newton sought to isolate, believed to be a universal seed capable of generating metals when properly activated.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Fermentation</h4>
                    <p className="text-sm">The process by which Newton believed matter could be broken down and reconstituted in higher forms, applicable to both biological and mineral transformations.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Philosophical Mercury</h4>
                    <p className="text-sm">Not ordinary quicksilver but a purified substance capable of dissolving metals to their essential nature—a key component in Newton's transmutation experiments.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Key Alchemical Works */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Alchemical Works</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Keynes MS. 18</h4>
                    <p className="text-sm">Newton's own compilation of processes for preparing the Philosopher's Stone, with his annotations and experimental notes.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Index Chemicus</h4>
                    <p className="text-sm">A massive reference work Newton compiled, systematically organizing alchemical knowledge from dozens of sources.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Praxis</h4>
                    <p className="text-sm">Newton's original alchemical treatise describing key processes and theoretical frameworks for transmutation.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Clavis</h4>
                    <p className="text-sm">His "key" to interpreting alchemical symbolism and terminology, showing his systematic approach to decoding alchemical texts.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Ripley Expounded</h4>
                    <p className="text-sm">Newton's detailed commentary on George Ripley's alchemical works, revealing his method of interpreting canonical alchemical literature.</p>
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
                      href="/pillars/alchemy" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Alchemy</span>
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
                    <Link 
                      href="/library/royal-society" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Royal Society</span>
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
                </ul>
              </div>
            </div>
            
            {/* Newton's Apparatus */}
            <div className="bg-card/40 p-6 rounded-lg border border-border/50">
              <h3 className="font-esoterica text-accent/90 mb-3">Newton's Laboratory Equipment</h3>
              <p className="text-sm text-foreground/80">
                Newton's alchemical laboratory at Trinity College contained sophisticated equipment for his time, including:
              </p>
              <ul className="text-sm text-foreground/80 list-disc pl-6 mt-2 space-y-1">
                <li>Athanors (slow-burning furnaces for maintaining constant heat)</li>
                <li>Crucibles of various compositions for different reactions</li>
                <li>Alembics and distillation apparatus for separating substances</li>
                <li>Specially designed glassware for observing color changes</li>
                <li>Precision scales for measuring materials</li>
                <li>Custom-made tools for handling dangerous substances</li>
              </ul>
              <p className="text-sm text-foreground/80 mt-4">
                Archaeological excavations at his family home at Woolsthorpe Manor uncovered evidence of chemical apparatus and traces of mercury, sulfur, and other materials associated with his experiments.
              </p>
            </div>
            
            {/* Academic Note */}
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <BookMarked className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  This article is based on scholarly research into Newton's alchemical manuscripts, particularly the work of B.J.T. Dobbs, William Newman, and Lawrence Principe. While Newton's alchemical work was extensive and systematic, interpretations of its relationship to his scientific theories continue to evolve as historians gain deeper understanding of early modern natural philosophy and its cultural contexts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 