'use client';

import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, Users, FileText, AlertTriangle, Orbit, BookOpen, Sparkles } from 'lucide-react';

export default function BookOfAlienRacesPage() {
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
            <Users className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            Book of Alien Races
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Controversial Document
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Extraterrestrial Theory
            </span>
            <span className="text-xs bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full">
              1995 - Present
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A controversial document allegedly containing secret Russian KGB information about 82 extraterrestrial species that have visited Earth.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Origin and Background */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Origin and Background
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The "Book of Alien Races: Secret Russian KGB Book of Alien Species" first appeared in the public domain around 2004, but claims to be based on classified KGB documents from the Soviet era. According to the narrative presented in the book, it was compiled by a secret KGB division called "Special Department 13," which allegedly collected information about extraterrestrial contacts spanning thousands of years of Earth's history.
                </p>
                
                <p>
                  The document purportedly came to light after the collapse of the Soviet Union when a high-ranking KGB officer named "Dimitri Masao" supposedly smuggled it out of Russia. The book was later allegedly translated and published by a man named "Dante Santori," who claimed to be a former member of the special forces of the Italian military.
                </p>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                  <h3 className="text-xl font-medium text-accent/80 mb-3">Publication History</h3>
                  <p className="text-sm">
                    While various versions of the document have circulated in UFO and conspiracy theory communities since the early 2000s, it gained more mainstream attention after being formally published as a book in 2014. Multiple editions exist with varying content and claims, making it difficult to identify a definitive "original" version. The document has been translated into several languages and distributed through various channels, primarily online and through small, independent publishers specializing in fringe or alternative content.
                  </p>
                </div>
                
                <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-lg mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-medium text-red-400 mb-1">Critical Context</h4>
                      <p className="text-sm text-foreground/80">
                        There is no credible evidence supporting the authenticity of this document. No verifiable sources have confirmed the existence of "Special Department 13," and no former KGB officials have acknowledged the document's authenticity. The identities of "Dimitri Masao" and "Dante Santori" remain unverified, with no independent confirmation of their existence or claimed roles. The document exhibits numerous historical inaccuracies, scientific impossibilities, and inconsistencies that undermine its credibility as a genuine intelligence document.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Content Overview */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Content Overview
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The "Book of Alien Races" claims to document 82 different extraterrestrial species that have allegedly visited Earth. For each purported alien race, the document provides details about their appearance, origin, technological capabilities, and interaction history with humans. The document presents this information as factual intelligence gathered by Soviet operatives and from classified international sources.
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Key Claims</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Extraterrestrial species have been visiting Earth for thousands of years and have influenced human development</li>
                  <li>Various governments, particularly the United States and Russia, have been aware of and in contact with alien civilizations</li>
                  <li>Secret agreements exist between world governments and certain alien species</li>
                  <li>Advanced alien technology has been recovered and reverse-engineered by government agencies</li>
                  <li>Different alien races have competing agendas regarding Earth and humanity</li>
                  <li>Evidence of extraterrestrial contact has been systematically concealed from the public</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Notable Alleged Species</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h4 className="font-medium text-accent/80 mb-2">The Greys</h4>
                    <p className="text-sm">
                      Described as small beings with gray skin, large heads, and black almond-shaped eyes. According to the document, they originate from the Zeta Reticuli star system and have been involved in genetic experiments with humans. The book claims they have signed treaties with various Earth governments allowing limited abduction of humans in exchange for technology.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h4 className="font-medium text-accent/80 mb-2">The Anunnaki</h4>
                    <p className="text-sm">
                      Described as tall, humanoid beings from the planet Nibiru. The document claims they created humans through genetic engineering of primitive hominids approximately 300,000 years ago to serve as a slave race for mining gold. It asserts that they are mentioned in ancient Sumerian texts as gods and are responsible for various ancient megalithic structures.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h4 className="font-medium text-accent/80 mb-2">The Nordics</h4>
                    <p className="text-sm">
                      Described as tall, blonde, human-like beings with advanced spiritual and technological development. The document claims they come from the Pleiades star cluster and have been monitoring Earth for thousands of years, occasionally intervening to guide human development. They are portrayed as benevolent and concerned about humanity's spiritual evolution.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h4 className="font-medium text-accent/80 mb-2">The Reptilians</h4>
                    <p className="text-sm">
                      Described as reptile-like humanoids with advanced shapeshifting abilities. The book claims they originate from the Alpha Draconis star system and have infiltrated human power structures, with many world leaders allegedly being reptilians in disguise. It suggests they feed on negative human emotions and seek to keep humanity in a state of fear and conflict.
                    </p>
                  </div>
                </div>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30 mt-6">
                  <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Claimed Technological Information</h3>
                  <p className="text-sm mb-4">
                    The document contains numerous claims about advanced alien technologies allegedly known to government agencies:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Faster-than-light propulsion systems using gravity manipulation</li>
                    <li>Interdimensional travel capabilities through artificial wormholes</li>
                    <li>Advanced energy generation from zero-point or vacuum energy</li>
                    <li>Mind control and telepathic communication technologies</li>
                    <li>Weather manipulation and climate control systems</li>
                    <li>Life extension and advanced medical technologies</li>
                    <li>Bases on Earth, the Moon, Mars, and other locations in our solar system</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Analysis and Criticism */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Analysis and Criticism
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The "Book of Alien Races" has been extensively criticized by scholars, historians, scientists, and even UFO researchers. Several key issues undermine its credibility:
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Historical Inaccuracies</h3>
                <p>
                  The document contains numerous historical errors and anachronisms that are inconsistent with a genuine intelligence document:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>References to KGB divisions and Soviet structures that never existed</li>
                  <li>Incorrect descriptions of Soviet intelligence procedures and protocols</li>
                  <li>Anachronistic terminology and concepts not used during the Soviet era</li>
                  <li>Misrepresentations of historical events and their chronology</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Scientific Inconsistencies</h3>
                <p>
                  Many of the claims in the document directly contradict established scientific principles:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Descriptions of alien biology that violate basic principles of evolutionary biology</li>
                  <li>Technologies that contradict fundamental laws of physics</li>
                  <li>Star systems incorrectly described or placed in the wrong locations</li>
                  <li>Implausible timelines for interstellar travel given the vast distances involved</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Source Material Recycling</h3>
                <p>
                  Analysis of the document reveals that much of its content appears to be recycled from:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Popular science fiction works, including TV shows and films</li>
                  <li>Previously published UFO literature and conspiracy theories</li>
                  <li>Ancient astronaut theories popularized by authors like Erich von Däniken</li>
                  <li>New Age spiritual concepts repackaged as alien intelligence</li>
                </ul>
                
                <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-medium text-accent/80 mb-3">Cultural Significance</h3>
                  <p>
                    Despite its dubious authenticity, the "Book of Alien Races" represents an interesting artifact in the study of contemporary mythology and conspiracy culture. It exemplifies how various elements from science fiction, ancient mythology, conspiracy theories, and fringe science can merge into an elaborate narrative that resonates with certain audiences.
                  </p>
                  <p className="mt-3">
                    The document's persistence and popularity reflect broader cultural anxieties about government secrecy, technological change, human origins, and our place in the cosmos. In this sense, it functions as a modern mythology that attempts to provide answers to profound questions about human existence and the nature of reality, even as it lacks scientific or historical validity.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Cultural Impact and Legacy */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Orbit className="w-5 h-5" />
                Cultural Impact and Legacy
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Despite its lack of credibility in scientific and historical circles, the "Book of Alien Races" has had a notable impact on UFO and conspiracy communities:
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Influence on UFO Discourse</h3>
                <p>
                  The document has contributed to and reinforced several narratives within UFO communities:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The concept of multiple alien species visiting Earth with different agendas</li>
                  <li>The idea of secret government knowledge about extraterrestrial contact</li>
                  <li>Theories about alien involvement in human evolution and history</li>
                  <li>Speculation about hidden alien bases and ongoing monitoring of Earth</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Internet Distribution and Evolution</h3>
                <p>
                  The digital age has significantly impacted how the document has spread and evolved:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Various versions have proliferated online, each with different additions and modifications</li>
                  <li>Social media has accelerated its distribution among interested communities</li>
                  <li>The content has been incorporated into YouTube videos, podcasts, and websites</li>
                  <li>Elements have been merged with other conspiracy theories, creating more complex narratives</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Lessons in Media Literacy</h3>
                <p>
                  The document's reception offers valuable insights into contemporary information challenges:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The difficulty in distinguishing between fact, fiction, and speculation in digital media</li>
                  <li>How appealing narratives can spread despite lack of credible evidence</li>
                  <li>The role of pre-existing beliefs in determining what information people accept</li>
                  <li>The importance of critical thinking and source evaluation in the digital age</li>
                </ul>
                
                <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-lg mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-medium text-red-400 mb-1">Ethical Considerations</h4>
                      <p className="text-sm text-foreground/80">
                        It's important to approach the "Book of Alien Races" as a cultural artifact rather than a factual document. While examining its contents and influence can provide insights into contemporary mythology and belief systems, presenting its claims as factual would be misleading and potentially harmful. The document represents an interesting case study in how misinformation spreads and evolves, and how fictional narratives can take on the appearance of authority through elaborate presentation and appeals to secret knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Publication Info */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Publication Information</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">First Appearance</h4>
                    <p className="text-sm">Circulated online around 2004-2005 in various formats</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Published Editions</h4>
                    <p className="text-sm">Formally published as a book in 2014 with subsequent editions</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Claimed Author</h4>
                    <p className="text-sm">"Dante Santori" (unverified identity)</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Claimed Source</h4>
                    <p className="text-sm">Allegedly from "Special Department 13" of the KGB (no evidence of such department exists)</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Authenticity Status</h4>
                    <p className="text-sm">No credible evidence supporting authenticity; widely considered a hoax or work of fiction</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Key Claimed Species */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Claimed Species</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <h4 className="font-medium text-accent/80">Greys (Zeta Reticulans)</h4>
                    <p className="text-sm">Small beings with gray skin and large black eyes, allegedly from Zeta Reticuli</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Anunnaki</h4>
                    <p className="text-sm">Tall humanoids from "Nibiru," claimed to have created humans through genetic engineering</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Nordics/Pleiadians</h4>
                    <p className="text-sm">Human-like beings with blonde hair, allegedly from the Pleiades star cluster</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Reptilians/Draconians</h4>
                    <p className="text-sm">Reptile-like beings allegedly from Alpha Draconis with shapeshifting abilities</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Tall Whites</h4>
                    <p className="text-sm">Pale, tall humanoids allegedly working with the US military at Nevada Test Site</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key Concepts */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Concepts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Government Coverup</h4>
                    <p className="text-sm">Claims that governments worldwide have concealed evidence of extraterrestrial contact</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Ancient Astronaut Theory</h4>
                    <p className="text-sm">The notion that aliens visited Earth in antiquity and influenced human development</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Genetic Intervention</h4>
                    <p className="text-sm">Claims that human DNA was manipulated by aliens to create modern humans</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Secret Agreements</h4>
                    <p className="text-sm">Alleged treaties between governments and alien races exchanging technology for other privileges</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Interdimensional Beings</h4>
                    <p className="text-sm">Concept that some "aliens" come from other dimensions rather than distant planets</p>
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
                      href="/library/ufology" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Ufology</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/ancient-astronaut-theory" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Ancient Astronaut Theory</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/conspiracy-theories" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Conspiracy Theories</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/saturn-matrix" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Saturn Matrix</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Critical Context */}
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  The "Book of Alien Races" represents a fascinating case study in contemporary mythology creation. While lacking factual basis, it demonstrates how digital media, popular culture influences, and pre-existing UFO narratives can combine to create elaborate belief systems that resonate with certain audiences searching for alternative explanations about human origins and cosmic questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 