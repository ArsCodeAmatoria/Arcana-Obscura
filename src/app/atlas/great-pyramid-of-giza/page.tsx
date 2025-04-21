import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, ArrowLeft, ExternalLink, Triangle } from 'lucide-react';
import Link from 'next/link';

export default function GreatPyramidPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-20 h-20 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M50 0 L100 100 L0 100 Z" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50 20 L80 100 L20 100 Z" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50 40 L70 100 L30 100 Z" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        
        <Link href="/atlas" className="flex items-center text-muted-foreground hover:text-accent mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Esoteric Atlas</span>
        </Link>

        <div className="text-center mb-12">
          <div className="mb-4">
            <Triangle className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Great Pyramid of Giza</h1>
          <div className="flex items-center justify-center text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Giza Plateau, Egypt</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Repository of ancient wisdom encoded in sacred geometry and astronomical alignments,
            considered one of the most significant initiatory sites in esoteric history.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">The Great Enigma</h2>
              <p className="mb-4">
                The Great Pyramid of Giza stands as humanity's most enduring architectural marvel and 
                one of its most profound mysteries. Built during the Fourth Dynasty of the Old Kingdom 
                of Egypt (c. 2580–2560 BCE), it was the tallest man-made structure on Earth for over 
                3,800 years. Beyond its impressive physical dimensions, the pyramid embodies a sophisticated 
                understanding of mathematics, astronomy, and sacred principles that continue to astonish researchers.
              </p>
              <p className="mb-4">
                While conventional Egyptology attributes its construction to Pharaoh Khufu as a monumental tomb, 
                esoteric traditions hold that the Great Pyramid served a much more profound purpose—operating as 
                a temple of initiation and repository of ancient wisdom. The precision of its construction, with 
                stones weighing up to 80 tons fitted with submillimeter accuracy, challenges our understanding of 
                ancient capabilities.
              </p>
              <p>
                Numerous mathematical constants are encoded in its proportions, including pi (π) and the golden ratio (φ). 
                Its location at the barycenter of Earth's landmasses and its perfect alignment to true north (with an 
                accuracy of 0.05 degrees) suggest a knowledge of global geography that should have been impossible 
                for its time. These elements have led many esoteric scholars to propose that the pyramid represents 
                the physical embodiment of primordial knowledge preserved from an even earlier civilization.
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
                    <span>Embodiment of sacred geometry and mathematical constants</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Astronomical alignments with Orion's belt and other celestial markers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Chamber system designed for ritual initiation and spiritual transformation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Preservation of hermetic knowledge in architectural form</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Facts</h2>
                <ul className="space-y-3 text-sm">
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Original Height:</span>
                    <span className="col-span-2">146.6 meters (481 feet)</span>
                  </li>
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Base Length:</span>
                    <span className="col-span-2">230.4 meters (756 feet)</span>
                  </li>
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Stone Blocks:</span>
                    <span className="col-span-2">Approximately 2.3 million</span>
                  </li>
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Dating:</span>
                    <span className="col-span-2">c. 2580–2560 BCE (conventional)</span>
                  </li>
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Coordinates:</span>
                    <span className="col-span-2">29.9792° N, 31.1342° E</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Chamber System of Initiation</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The internal chambers of the Great Pyramid are believed by esoteric traditions to represent 
                stages of spiritual initiation. The descending passage leading to the subterranean chamber 
                symbolizes the descent into matter and the underworld. The Queen's Chamber, associated with 
                feminine energies, represents the middle stage of initiation.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The Grand Gallery, with its precise acoustic properties, served as a place of sound 
                harmonics and preparation for the highest mysteries. Finally, the King's Chamber, with 
                its remarkable resonance qualities and precise geometric proportions, represents the 
                culmination of the initiate's journey—enlightenment and spiritual resurrection.
              </p>
              <p className="mt-4 text-foreground/90 leading-relaxed">
                The enormous granite sarcophagus in the King's Chamber, carved from a single block of 
                stone and too large to have been brought through the passages, is seen not merely as a 
                coffin but as a regenerative device—a symbolic womb for spiritual rebirth during the 
                highest levels of initiation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Hermetic Connections</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The Great Pyramid is central to Hermetic tradition, which attributes its design to Thoth 
                (known to the Greeks as Hermes Trismegistus), the god of wisdom and writing. According 
                to these traditions, the pyramid preserves in stone the principles later recorded in 
                the Emerald Tablet and Corpus Hermeticum.
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Medieval alchemists and Renaissance magi viewed the pyramid as a key to understanding 
                the principles of material and spiritual transformation. Its geometric proportions were 
                seen to embody the Hermetic axiom "As above, so below"—a perfect reflection of cosmic 
                order on Earth.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The structure's ability to concentrate electromagnetic energy within its chambers, 
                verified by modern scientific studies, aligns with Hermetic concepts of focusing 
                and channeling universal life force (sometimes called prana, qi, or vril in different 
                traditions). This scientific validation of ancient claims has renewed esoteric interest 
                in the pyramid's potential role as an instrument of consciousness expansion.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <Card className="bg-card/30 backdrop-blur-sm border-accent/10">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-accent text-center">Modern Investigations</h2>
              <div className="max-w-4xl mx-auto">
                <p className="mb-4 text-foreground/90 leading-relaxed">
                  Recent scientific investigations have revealed aspects of the Great Pyramid that align with 
                  esoteric claims about its function. In 2018, physicists discovered that the pyramid can 
                  concentrate electromagnetic energy in its internal chambers, potentially explaining the 
                  reports of altered consciousness experienced by sensitive individuals within the structure.
                </p>
                <p className="mb-4 text-foreground/90 leading-relaxed">
                  The "Scan Pyramids" project, using cosmic ray muon detectors and infrared thermography, 
                  has discovered previously unknown voids within the pyramid, including a large cavity above 
                  the Grand Gallery. These findings suggest our understanding of the pyramid's internal 
                  structure remains incomplete, with potential hidden chambers yet to be discovered.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Acoustic studies have confirmed the remarkable sound properties of the King's Chamber and 
                  Grand Gallery, which appear designed to amplify and sustain specific frequencies associated 
                  with altered states of consciousness. These findings provide scientific context for the 
                  pyramid's reputed role in ritual sound healing and consciousness expansion during ancient 
                  initiation ceremonies.
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
          <a href="https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent flex items-center transition-colors group">
            <span>External Resources</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </MainLayout>
  );
} 