import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, ArrowLeft, ExternalLink, Building } from 'lucide-react';
import Link from 'next/link';

export default function TempleOfApolloPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-20 h-20 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
            <path d="M30 30 L70 70" stroke="currentColor" strokeWidth="0.5" />
            <path d="M30 70 L70 30" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        
        <Link href="/atlas" className="flex items-center text-muted-foreground hover:text-accent mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Esoteric Atlas</span>
        </Link>

        <div className="text-center mb-12">
          <div className="mb-4">
            <Building className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Temple of Apollo at Delphi</h1>
          <div className="flex items-center justify-center text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Mount Parnassus, Greece</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The omphalos or navel of the world, where the Pythia delivered oracles from the gods,
            serving as the foremost sanctuary for divination in the ancient world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">The Oracle's Sanctuary</h2>
              <p className="mb-4">
                Perched on the slopes of Mount Parnassus, the Temple of Apollo at Delphi was the epicenter 
                of spirituality in ancient Greece from the 8th century BCE to the 4th century CE. Far more than 
                a mere religious site, Delphi functioned as the cosmic axis connecting heaven and earth—a place where 
                mortals could communicate with divine forces through the enigmatic pronouncements of the Pythia, 
                Apollo's oracle.
              </p>
              <p className="mb-4">
                The sanctuary held unparalleled significance in the ancient world as the site of the Omphalos, 
                a sacred stone marking what the Greeks considered the center or "navel" of the world. This 
                cosmic centrality wasn't merely symbolic—the unique electromagnetic properties of the area, 
                combined with fault lines releasing ethylene gas, created conditions that may have facilitated 
                altered states of consciousness in those who sought divine communion.
              </p>
              <p>
                Inscribed at the entrance to the temple were the maxims "Know Thyself" and "Nothing in Excess"—
                esoteric principles that would later resonate with mystery traditions throughout history. These 
                simple yet profound directives encapsulated the essence of the Delphic wisdom tradition: that 
                true spiritual understanding begins with self-knowledge, balanced by moderation in all things. 
                The interplay between these principles formed the foundation for much of Western philosophical 
                and mystical thought.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Esoteric Significance</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Cosmic center where multiple worlds converge</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Voice of divination through the enigmatic Pythia</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Site of the original Apollonian mystery tradition</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Manifestation of the balance between Apollo (order) and Dionysus (chaos)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Facts</h2>
                <ul className="space-y-3 text-sm">
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Peak Activity:</span>
                    <span className="col-span-2">8th century BCE - 4th century CE</span>
                  </li>
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Oracle Days:</span>
                    <span className="col-span-2">The 7th day of each month (Apollo's sacred day)</span>
                  </li>
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Sacred Stone:</span>
                    <span className="col-span-2">The Omphalos ("navel of the world")</span>
                  </li>
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Coordinates:</span>
                    <span className="col-span-2">38.4824° N, 22.5011° E</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Pythia's Oracle</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                At the heart of Delphi's spiritual significance was the Pythia—Apollo's high priestess 
                and the most powerful woman in the ancient world. Selected from among local women of virtuous 
                character, the Pythia would descend into the adyton (inner sanctum) of the temple, where she 
                sat upon a tripod over a chasm in the earth, inhaling vapors that rose from below.
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Modern geological studies have confirmed that the temple was built over the intersection of two 
                fault lines, from which ethylene gas—a sweet-smelling substance with mild psychoactive properties—would 
                have escaped. These vapors, combined with the Pythia's intensive preparation through fasting and 
                ritual purification, likely induced the trance state from which she delivered her oracles.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The Pythia's pronouncements were often ambiguous, delivered in riddles or cryptic verses that 
                required interpretation by the temple priests. This ambiguity served multiple purposes: protecting 
                the oracle from accusations of error, preserving the mystery of divine communication, and forcing 
                those seeking guidance to engage in deeper reflection about their questions and the potential answers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Apollonian Current</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The spiritual current embodied at Delphi represents what later esoteric traditions would identify 
                as the Apollonian principle—the force of light, order, reason, and divine harmony. This stands in 
                contrast to the Dionysian current of ecstatic release, divine madness, and dissolution of boundaries.
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Intriguingly, Delphi contained elements of both currents. While dedicated to Apollo, the site 
                was originally sacred to Gaia and later to Dionysus, with the latter's worship continuing at 
                Delphi during the winter months when Apollo was said to depart for the land of the Hyperboreans. 
                This seasonal alternation between the two divine energies represents a profound understanding of 
                cosmic balance that would later influence numerous mystery traditions.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The influence of the Delphic tradition can be traced through Western esoteric history—from 
                the Orphic and Eleusinian mysteries to Neoplatonism, and later to Renaissance Hermeticism, 
                Rosicrucianism, and beyond. The maxim "Know Thyself" became central to esoteric philosophy, 
                alchemical transformation, and modern psychological approaches to spirituality, establishing 
                Delphi as a cornerstone of Western initiatory tradition.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <Card className="bg-card/30 backdrop-blur-sm border-accent/10">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-accent text-center">Historical Significance</h2>
              <div className="max-w-4xl mx-auto">
                <p className="mb-4 text-foreground/90 leading-relaxed">
                  Beyond its spiritual functions, Delphi served as a political and cultural nexus in the ancient 
                  Mediterranean world. Major decisions—from founding colonies to initiating wars—were rarely made 
                  without first consulting the Oracle. Through this mechanism, the site exerted remarkable influence 
                  over the development of Greek civilization and, by extension, Western culture.
                </p>
                <p className="mb-4 text-foreground/90 leading-relaxed">
                  The sanctuary was also home to the Pythian Games, athletic and musical competitions second in 
                  importance only to the Olympic Games. These contests celebrated the triumph of Apollo over Python, 
                  the serpent-dragon that originally guarded the sacred site. This mythic victory symbolized the 
                  imposition of cosmic order (logos) over primordial chaos—a theme that resonates through esoteric 
                  traditions concerned with conscious evolution and spiritual refinement.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Delphi maintained its status as a spiritual center until 393 CE, when Emperor Theodosius I closed 
                  it as part of his campaign against pagan practices. However, its influence never truly ceased—the 
                  principles and wisdom transmitted through the Delphic Oracle were preserved in philosophical 
                  schools and mystery traditions, continuing to shape esoteric thought into modern times.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center border-t border-border/30 pt-8 mt-8">
          <Link href="/atlas" className="text-sm text-muted-foreground hover:text-accent flex items-center transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Atlas</span>
          </Link>
          <a href="https://en.wikipedia.org/wiki/Delphi" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent flex items-center transition-colors group">
            <span>External Resources</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </MainLayout>
  );
} 