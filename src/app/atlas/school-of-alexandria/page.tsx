import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowLeft, ExternalLink, BookOpen } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';

export default function SchoolOfAlexandriaPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-24 h-24 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M30,50 L70,50 M50,30 L50,70" stroke="currentColor" strokeWidth="0.5" />
            <path d="M36,36 L64,64 M36,64 L64,36" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        
        <Link href="/atlas" className="flex items-center text-muted-foreground hover:text-accent mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Esoteric Atlas</span>
        </Link>

        <div className="text-center mb-12">
          <div className="mb-4">
            <BookOpen className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">School of Alexandria</h1>
          <div className="flex items-center justify-center text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Alexandria, Egypt</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The intellectual crucible where Hellenistic, Egyptian, and Near Eastern wisdom traditions converged,
            giving birth to Hermeticism, Neoplatonism, and the foundations of Western esoteric thought.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6">
            <h2 className="text-2xl font-esoterica mb-4 text-primary">The Intellectual Heart of the Ancient World</h2>
            <p className="mb-4">
              The School of Alexandria was not a single institution but rather an intellectual movement centered in the 
              cosmopolitan Egyptian city founded by Alexander the Great. From the 3rd century BCE to the 7th century CE, 
              Alexandria served as the preeminent center of learning in the Mediterranean world, home to the legendary 
              Library of Alexandria and the Mouseion (temple of the Muses and research center).
            </p>
            <p className="mb-4">
              What made Alexandria extraordinary was its unique position at the crossroads of civilizations. Greek 
              philosophy, Egyptian religion, Jewish mysticism, and Persian wisdom all flowed into this melting pot, 
              creating new syncretic traditions that would profoundly influence the development of Western esotericism.
            </p>
            <p>
              The School's approach to knowledge was notably holistic, refusing to separate science from spirituality or 
              rational inquiry from mystical revelation. Scholars moved fluidly between mathematics, astronomy, medicine, 
              alchemy, theology, and theurgy, seeing these as interconnected facets of a unified pursuit of wisdom.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Esoteric Significance</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span>Birthplace of Hermeticism and the Corpus Hermeticum</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span>Foundation of Neoplatonic philosophy and theurgy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span>Development of practical alchemy and early chemistry</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span>Synthesis of astrological traditions from multiple cultures</span>
                </li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Facts</h2>
              <ul className="space-y-3 text-sm">
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Active Period:</span>
                  <span className="col-span-2">3rd century BCE - 7th century CE</span>
                </li>
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Founded by:</span>
                  <span className="col-span-2">Ptolemy I Soter (Library & Mouseion)</span>
                </li>
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Notable Figures:</span>
                  <span className="col-span-2">Plotinus, Hypatia, Zosimos, Iamblichus</span>
                </li>
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Legacy:</span>
                  <span className="col-span-2">Hermetic and Alchemical traditions</span>
                </li>
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Coordinates:</span>
                  <span className="col-span-2">31.2001° N, 29.9187° E</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl border p-8">
            <h2 className="text-3xl font-esoterica mb-6 text-primary">The Hermetic Tradition</h2>
            <p className="mb-4 text-foreground/90 leading-relaxed">
              Alexandria's most enduring esoteric legacy is the Hermetic tradition, a body of writings attributed to the 
              legendary figure Hermes Trismegistus ("Thrice-Greatest Hermes"), a syncretic fusion of the Greek god Hermes 
              and the Egyptian god Thoth. The Corpus Hermeticum, a collection of Greek texts probably compiled between the 
              1st and 3rd centuries CE, expounds a mystical philosophy centered on the divine potential within humanity.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              The famous Hermetic maxim "As above, so below" encapsulates the tradition's belief in the correspondence 
              between the macrocosm (universe) and microcosm (human being). Hermeticism teaches that through knowledge 
              (gnosis), humans can achieve awareness of their divine nature and ascend through the celestial spheres 
              to reunite with the source of all being.
            </p>
            <p className="mt-4 text-foreground/90 leading-relaxed">
              When these texts were rediscovered and translated during the Renaissance, they catalyzed a revival of 
              esoteric studies that profoundly influenced Western culture, inspiring figures like Marsilio Ficino, 
              Giordano Bruno, and later Rosicrucian and Masonic traditions. Thus, Alexandria's intellectual legacy 
              continues to shape esoteric thought to this day.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl border p-8">
            <h2 className="text-3xl font-esoterica mb-6 text-primary">Neoplatonism and Theurgy</h2>
            <p className="mb-4 text-foreground/90 leading-relaxed">
              Alexandria played a crucial role in the development of Neoplatonism, a philosophical movement that 
              reinterpreted Plato's ideas through a more mystical lens. Plotinus, who studied in Alexandria before 
              establishing his school in Rome, articulated a system in which all reality emanates from the ineffable 
              One, with the human soul capable of ascending back to its divine source through contemplation.
            </p>
            <p className="mb-4 text-foreground/90 leading-relaxed">
              Later Neoplatonists like Iamblichus and Proclus developed theurgic practices—ritual techniques for 
              achieving direct contact with divine powers. Unlike purely philosophical contemplation, theurgy involved 
              practical methods including invocations, ceremonial use of symbols, and manipulation of sympathetic 
              correspondences between cosmic levels.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              The Alexandrian fusion of philosophy and practical spirituality created a template for Western esoteric 
              traditions: intellectual rigor combined with experiential practices for spiritual transformation. This 
              approach would later influence everything from Renaissance magic to modern occult orders.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className="bg-card/30 backdrop-blur-sm border-accent/10 rounded-xl border p-8">
            <h2 className="text-3xl font-esoterica mb-6 text-accent text-center">Alchemy: The Sacred Science</h2>
            <div className="max-w-4xl mx-auto">
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Alexandria was the birthplace of Western alchemy, where Egyptian metallurgical arts merged with Greek 
                philosophical concepts and Babylonian astrology. The earliest known alchemical texts come from this 
                milieu, including the works of Zosimos of Panopolis (c. 300 CE), who described elaborate laboratory 
                procedures alongside mystical visions and interpretations.
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Alexandrian alchemy operated on multiple levels simultaneously. On the practical level, it involved 
                laboratory procedures for transmuting metals and creating medicinal elixirs. On the symbolic level, 
                these operations corresponded to spiritual transformations within the alchemist—the purification and 
                perfection of the soul. This multilayered approach became the template for the Western alchemical 
                tradition that would flourish in the Islamic world and later in medieval and Renaissance Europe.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The concept of the Philosopher's Stone—the ultimate agent of transmutation, capable of perfecting any 
                substance—emerged from this tradition, as did the idea that the alchemist must undergo inner transformation 
                to achieve the Great Work. These concepts profoundly influenced later esoteric movements, including 
                Rosicrucianism and Freemasonry, and eventually found psychological expression in Jung's analytical psychology.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 bg-card/30 backdrop-blur-sm rounded-xl border border-accent/10 p-6">
          <h2 className="text-2xl font-esoterica mb-4 text-primary">Notable Figures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">Hypatia</h3>
              <p className="text-sm text-muted-foreground">
                Mathematician, astronomer, and philosopher who became the last librarian of Alexandria. Her murder in 415 CE symbolized the declining tolerance for pagan learning.
              </p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">Plotinus</h3>
              <p className="text-sm text-muted-foreground">
                Founder of Neoplatonism who studied in Alexandria before teaching in Rome. His Enneads describe the soul's mystical journey back to the One.
              </p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">Mary the Jewess</h3>
              <p className="text-sm text-muted-foreground">
                Legendary alchemist credited with inventing several laboratory devices, including the balneum Mariae (water bath) still used in chemistry today.
              </p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">Zosimos of Panopolis</h3>
              <p className="text-sm text-muted-foreground">
                Early alchemist whose writings blend practical laboratory instructions with mystical visions and allegories of spiritual transformation.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-border/30 pt-8 mt-8">
          <Link href="/atlas" className="text-sm text-muted-foreground hover:text-accent flex items-center transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Atlas</span>
          </Link>
          <a href="https://en.unesco.org/silkroad/content/alexandria" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent flex items-center transition-colors group">
            <span>External Resources</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </MainLayout>
  );
} 