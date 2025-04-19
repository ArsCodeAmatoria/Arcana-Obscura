'use client';

import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, Radio, Dna, Brain, LayoutGrid, Asterisk, AlertTriangle, Database } from 'lucide-react';
import { Database as PlanetIcon } from 'lucide-react';

export default function SaturnMatrixPage() {
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
            <PlanetIcon className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            The Saturn Matrix
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Conspiracy Theory
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Occult Cosmology
            </span>
            <span className="text-xs bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full">
              Contemporary
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A contemporary esoteric belief system proposing that humanity exists within a simulated reality controlled by Saturn and maintained by interdimensional entities.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Origins */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Radio className="w-5 h-5" />
                Origins & Development
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Saturn Matrix theory emerged in the early 21st century as an amalgamation of various conspiracy theories, science fiction narratives, ancient mythology, and alternative cosmological interpretations. Unlike more traditional conspiratorial thinking that focuses on human agencies like governments or secret societies, the Saturn Matrix theory proposes a cosmic or interdimensional control system.
                </p>
                <p>
                  While no single originator can be definitively identified, the concept gained traction through alternative media platforms, particularly after the mainstream success of films like "The Matrix" (1999), which popularized the idea of humanity living within a simulated reality. The theory synthesizes elements from diverse sources including Gnostic texts, David Icke's writings on "archontic" entities, ancient Saturn worship, and modern technological concepts like simulated realities.
                </p>
                <p>
                  The narrative has evolved over time, incorporating interpretations of Saturnian symbolism in corporate logos, entertainment media, and religious iconography as evidence of what proponents call "Saturn worship" or "Saturn programming." The proliferation of internet platforms in the 2010s allowed these ideas to spread quickly among communities interested in alternative cosmologies, hidden history, and conspiracy analysis.
                </p>
              </div>
            </section>
            
            {/* Core Claims */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <LayoutGrid className="w-5 h-5" />
                Core Claims & Concepts
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Saturn Matrix theory encompasses a constellation of interrelated claims about the nature of reality and humanity's place within it. While variations exist among different proponents, several core concepts remain relatively consistent:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">The Matrix Reality</h3>
                    <p className="text-sm">
                      Proponents argue that our perceived reality is a sophisticated simulation or projection—a matrix—designed to trap human consciousness. This simulation allegedly limits humanity's perceptual range, concealing the true nature of existence and our own potential. Some versions suggest this matrix is electromagnetic in nature, a frequency fence that keeps consciousness bound to lower vibrational states.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Saturn as Broadcaster</h3>
                    <p className="text-sm">
                      The theory posits that Saturn functions as a transmitter or projector of the matrix reality. Adherents point to Saturn's unique properties—its hexagonal north pole, its powerful electromagnetic field, and its prominent rings—as evidence of artificial modifications designed to broadcast reality-altering frequencies to Earth. Some versions claim that Saturn works in conjunction with the Moon as a receiver/amplifier system.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Archontic Control</h3>
                    <p className="text-sm">
                      Drawing from Gnostic texts, particularly the concept of Archons (interdimensional entities that feed on human energy), the theory suggests that non-human intelligences manage the matrix. These entities are variously described as interdimensional beings, artificial intelligences, or extraterrestrial species that harvest human emotional and spiritual energy, particularly fear, suffering, and conflict.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Saturn Symbolism</h3>
                    <p className="text-sm">
                      The theory emphasizes the prominence of Saturnian symbols in human culture—the hexagon/cube, the black cube, the rings, and time-related imagery—as evidence of the planet's central role in controlling human perception. Proponents identify these symbols in corporate logos, religious structures, entertainment, and government iconography as conditioning tools or signals revealing the control system.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-accent/80 mt-8">Time Manipulation & Saturn</h3>
                <p>
                  A significant aspect of Saturn Matrix theory connects the planet with time control. This association stems from Saturn's mythological identity as Chronos (God of Time) and extends to claims that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The matrix imposes artificial time constraints to limit human development</li>
                  <li>Saturn's frequencies create a perception of linear time, preventing access to higher-dimensional awareness</li>
                  <li>The seven-day week and other time-keeping systems are "Saturnian constructs" designed to entrain human consciousness</li>
                  <li>Calendrical systems serve as a form of ritual magic that binds humanity to recurring cycles</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">The Black Cube</h3>
                <p>
                  Central to Saturn Matrix symbolism is the black cube, which proponents identify as a representation of:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Saturn's hexagonal polar storm when viewed from a three-dimensional perspective</li>
                  <li>The material reality (three dimensions) that constrains human consciousness</li>
                  <li>An interdimensional portal or technology used to maintain the matrix</li>
                  <li>A hypercube or tesseract representing higher-dimensional control mechanisms</li>
                </ul>
                <p>
                  Adherents point to religious artifacts like the Kaaba in Mecca, the Tefillin used in Jewish prayer, or black cube sculptures in various cities as evidence of widespread Saturn worship or acknowledgment of the control system.
                </p>
                
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4 mt-6">
                  "As above, so below. The macrocosmic Saturn Matrix mirrors the microcosmic prison of human perception. The rings that appear to encircle the planet symbolize the bands of frequency that encircle human consciousness."
                  <br />— Common phrase in Saturn Matrix discussions
                </p>
              </div>
            </section>
            
            {/* Interpretations of Ancient Mythology */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Dna className="w-5 h-5" />
                Reinterpreting Ancient Mythology
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Saturn Matrix theory reinterprets ancient mythology through a technological lens, proposing that ancient cultures were describing actual cosmic technologies or interdimensional phenomena in the only terms available to them. This revisionist approach to mythology focuses particularly on Saturn-related deities and their symbolism:
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-accent/80">Kronos/Chronos</h3>
                  <p>
                    In Greek mythology, Kronos (often conflated with Chronos, the personification of time) was the Titan who devoured his children to prevent them from overthrowing him. Saturn Matrix theory interprets this as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>An allegory for the matrix consuming human potential and creativity</li>
                    <li>A representation of time (Saturn's domain) consuming all things</li>
                    <li>A metaphor for the control system feeding on each new generation</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-accent/80">Saturn's Golden Age</h3>
                  <p>
                    Many ancient traditions speak of a "Golden Age" ruled by Saturn/Kronos before the current cosmic order. Saturn Matrix theory suggests alternative interpretations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>A reference to a time before the current matrix was fully implemented</li>
                    <li>A period when humanity had greater access to higher consciousness</li>
                    <li>A control system narrative designed to create nostalgia for Saturn's reign</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-accent/80">Saturn's Associations</h3>
                  <p>
                    Across multiple traditions, Saturn was associated with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Lead and the color black - interpreted as density and material limitation</li>
                    <li>Agriculture and harvest - seen as references to energy harvesting from humanity</li>
                    <li>Limitations and boundaries - viewed as evidence of consciousness restriction</li>
                    <li>The sixth day (Saturday) - connected to the six-pointed star/hexagram and cube symbolism</li>
                  </ul>
                </div>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30 mt-6">
                  <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Comparative Mythology</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-accent/80">Babylonian El/Enlil</h4>
                      <p className="text-sm mt-1">Portrayed as a controlling deity who sought to limit human advancement; associated with Saturn and the bull symbolism.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-accent/80">Egyptian Set/Seth</h4>
                      <p className="text-sm mt-1">God of chaos, disorder, and foreigners; some versions of the theory connect his red coloration with the earlier appearance of Saturn.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-accent/80">Hindu Shani</h4>
                      <p className="text-sm mt-1">Deity associated with Saturn; delivers justice and retribution, and is known for limitation and delay—interpreted as the restricting force of the matrix.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-accent/80">Norse Loki</h4>
                      <p className="text-sm mt-1">Trickster god who was bound with the entrails of his son—seen as a metaphor for the binding of consciousness through familial/genetic lineages.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Scientific Analysis */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Scientific Analysis and Critique
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  From a scientific perspective, the Saturn Matrix theory conflicts with established understanding in multiple disciplines. Mainstream scientific analysis of these claims generally highlights several key issues:
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Astronomical Inconsistencies</h3>
                <p>
                  Planetary scientists note that the features of Saturn cited by theory proponents have well-documented natural explanations:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The hexagonal storm at Saturn's north pole results from complex fluid dynamics in the planet's atmosphere, similar to standing wave patterns observed in laboratory experiments</li>
                  <li>Saturn's rings consist primarily of ice particles, rocks, and dust in orbital patterns explained by gravitational mechanics</li>
                  <li>Saturn's electromagnetic field is consistent with models of planetary magnetospheres generated by metallic hydrogen in its interior</li>
                  <li>No mechanism has been identified that could transmit "reality-altering frequencies" across the vast distances between Saturn and Earth</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Psychological Analysis</h3>
                <p>
                  Psychologists and cognitive scientists offer several perspectives on the appeal of such theories:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pattern recognition: Humans have evolved to identify patterns even when they may not exist (apophenia), potentially explaining the perceived ubiquity of Saturnian symbols</li>
                  <li>Agency detection: Humans naturally attribute events to conscious agents rather than complex systems or chance, particularly under conditions of uncertainty</li>
                  <li>Meaning-making: These narratives provide comprehensive explanatory frameworks that address existential concerns about control, purpose, and suffering</li>
                  <li>Psychological projection: The external "control system" may represent projected internal psychological structures or societal constraints</li>
                </ul>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30 mt-6">
                  <h3 className="text-xl font-medium text-accent/80 mb-3">Simulation Hypothesis Distinction</h3>
                  <p>
                    It's important to distinguish the Saturn Matrix theory from legitimate scientific discussions around simulation theory:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>The simulation hypothesis, as discussed by philosophers and physicists like Nick Bostrom, proposes that reality could be a computer simulation created by a technologically advanced civilization</li>
                    <li>Unlike the Saturn Matrix theory, the simulation hypothesis doesn't specify particular planetary bodies as technological controllers</li>
                    <li>The scientific simulation hypothesis is presented as a philosophical thought experiment with some potentially testable implications, rather than a revealed truth about cosmic controllers</li>
                    <li>The simulation hypothesis doesn't typically involve claims about energy harvesting or malevolent interdimensional entities</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Contemporary Context */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Asterisk className="w-5 h-5" />
                Contemporary Context
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Saturn Matrix theory exists within a broader landscape of contemporary alternative belief systems that challenge mainstream scientific and religious worldviews. The theory's development and spread can be understood in several contexts:
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Digital Age Gnosticism</h3>
                <p>
                  Many scholars of religion and digital culture identify Saturn Matrix beliefs as a modern form of Gnosticism—a set of ancient religious ideas centered on hidden knowledge, cosmic imprisonment, and transcendence through awareness. In this analysis:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The material world as illusion or prison parallels Gnostic cosmology</li>
                  <li>The focus on hidden knowledge as salvation mirrors Gnostic soteriology</li>
                  <li>Archontic entities resemble the Archons of Gnostic texts</li>
                  <li>Digital technology provides new metaphors for ancient concepts of reality manipulation</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Information Age Anxiety</h3>
                <p>
                  The theory's emergence coincides with widespread technological and social changes that have created new forms of uncertainty and alienation:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Increasing technological mediation of experience and relationships</li>
                  <li>The rise of surveillance capitalism and data harvesting</li>
                  <li>Growing income inequality and perceived powerlessness</li>
                  <li>Declining trust in traditional institutions and authority</li>
                </ul>
                <p>
                  In this context, the Saturn Matrix narrative provides an explanatory framework for feelings of manipulation and control in contemporary society, projecting these anxieties onto cosmic scales.
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Community and Identity</h3>
                <p>
                  For adherents, belief in the Saturn Matrix often functions as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A marker of special knowledge or "awakening" that distinguishes them from the "unaware" majority</li>
                  <li>A community-building narrative that creates strong in-group bonds</li>
                  <li>A framework for personal identity as a "truth seeker" or "reality hacker"</li>
                  <li>A source of meaning that positions personal struggles within a cosmic context</li>
                </ul>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30 mt-6">
                  <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Cultural Expressions</h3>
                  <p>
                    The Saturn Matrix concept has influenced various forms of creative expression:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>Music videos and lyrics, particularly in underground hip-hop and electronic music scenes</li>
                    <li>Independent films exploring simulation theories and cosmic control systems</li>
                    <li>Digital art depicting Saturnian symbolism and matrix-breaking imagery</li>
                    <li>Fiction that incorporates elements of the theory into its worldbuilding</li>
                    <li>Fashion and jewelry featuring anti-Saturn or anti-matrix symbolism</li>
                  </ul>
                </div>
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
                    <h4 className="font-medium text-accent/80">The Black Cube</h4>
                    <p className="text-sm">The three-dimensional projection of Saturn's hexagonal storm, symbolizing material reality and the constraints of the matrix.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Archons</h4>
                    <p className="text-sm">Interdimensional entities that allegedly manage the matrix and harvest human emotional energy.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Frequency Fence</h4>
                    <p className="text-sm">The electromagnetic barrier said to limit human perception and consciousness to a narrow band of awareness.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Moon-Saturn Amplifier</h4>
                    <p className="text-sm">The proposed system whereby Saturn broadcasts the matrix reality and the Moon amplifies/focuses it onto Earth.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Saturn Time Lock</h4>
                    <p className="text-sm">The concept that Saturn's influence creates the illusion of linear time, trapping consciousness in temporal perception.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Saturn Symbolism */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Claimed Saturn Symbolism</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <h4 className="font-medium text-accent/80">Geometric Forms</h4>
                    <ul className="list-disc list-inside text-sm pl-2 space-y-1">
                      <li>Hexagons and hexagrams (six-pointed stars)</li>
                      <li>Cubes, especially black cubes</li>
                      <li>Rings and halos in religious iconography</li>
                      <li>Cross within a circle (planet symbol for Saturn)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Religious Structures</h4>
                    <ul className="list-disc list-inside text-sm pl-2 space-y-1">
                      <li>The Kaaba in Mecca</li>
                      <li>Tefillin in Jewish practice</li>
                      <li>Saturn-associated temples and monuments</li>
                      <li>Cubic or hexagonal architectural elements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Corporate Logos</h4>
                    <ul className="list-disc list-inside text-sm pl-2 space-y-1">
                      <li>Rings, cubes, and hexagons in corporate branding</li>
                      <li>Black cube structures in corporate headquarters</li>
                      <li>Time-related imagery in media company logos</li>
                      <li>Eye symbols interpreted as Saturn references</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* "Breaking the Matrix" */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Claimed Methods of "Breaking the Matrix"</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Awareness Practices</h4>
                    <p className="text-sm">Meditation, mindfulness, and consciousness expansion techniques said to "see beyond" matrix limitations.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Frequency Shifting</h4>
                    <p className="text-sm">Sound healing, binaural beats, and vibrational practices believed to counter Saturn's frequency broadcast.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Symbol Avoidance</h4>
                    <p className="text-sm">Avoiding or countering Saturnian symbols in daily life to reduce their subconscious influence.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Alternative Calendars</h4>
                    <p className="text-sm">Adopting time-keeping systems not based on the seven-day Saturnian week to break time control.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Saturn Opposition</h4>
                    <p className="text-sm">Ritual practices specifically designed to counter Saturn's influence, often using opposing planetary energies.</p>
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
                      href="/library/universalism" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Universalism</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/archon-theory" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Archon Theory</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/simulation-hypothesis" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Simulation Hypothesis</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/gnosticism" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Gnosticism</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Academic Note */}
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  This article presents the Saturn Matrix theory from an academic and cultural studies perspective. The contents are provided for educational purposes to understand contemporary esoteric beliefs. The theory is not supported by scientific evidence and conflicts with established understanding in astronomy, physics, and other disciplines. This entry should be understood as documentation of a belief system rather than an endorsement of its claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 