import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowLeft, ExternalLink, GraduationCap } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';

export default function PythagoreanSchoolPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative elements */}
        <div className="absolute top-32 right-10 w-24 h-24 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M50 10 L90 90 L10 90 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M50 30 L70 70 L30 70 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M50 50 L60 60 L40 60 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="40" r="3" fill="currentColor" />
          </svg>
        </div>
        
        <Link href="/atlas" className="flex items-center text-muted-foreground hover:text-accent mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Esoteric Atlas</span>
        </Link>

        <div className="text-center mb-12">
          <div className="mb-4">
            <GraduationCap className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Pythagorean School</h1>
          <div className="flex items-center justify-center text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Croton, Southern Italy</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The first mystical-mathematical brotherhood in the Western tradition, revealing cosmic harmony through number 
            and establishing the foundations for sacred geometry, music theory, and initiatory esotericism.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6">
            <h2 className="text-2xl font-esoterica mb-4 text-primary">The Harmonic Brotherhood</h2>
            <p className="mb-4">
              In the 6th century BCE, Pythagoras of Samos founded what may be considered the Western world's first true 
              mystery school in the Greek colony of Croton in southern Italy. Far more than merely a mathematical 
              society, the Pythagorean community was a rigorously organized religious order with strict rules of conduct, 
              dietary practices, and a graded system of initiation into increasingly profound mysteries.
            </p>
            <p className="mb-4">
              The Pythagoreans lived communally, sharing possessions and devoting themselves to the study of mathematics, 
              music, astronomy, and philosophy—disciplines they viewed not as separate fields but as interconnected avenues 
              to understanding the divine ordering of the cosmos. Their central tenet, "All is number," expressed their 
              belief that numerical relationships form the underlying structure of reality.
            </p>
            <p>
              Members were divided into two main groups: the "Mathematikoi" (Learners), who lived in the community and had 
              access to all teachings, and the "Akousmatikoi" (Listeners), who lived externally and received only selected 
              doctrines. This hierarchical structure of knowledge transmission became a model for many later esoteric 
              organizations, from Neoplatonic schools to medieval guilds and modern Masonic orders.
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
                  <span>Origin of Western sacred geometry and mathematical mysticism</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span>Discovery of the mathematical basis of musical harmony</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span>Development of the tetraktys as a symbol of cosmic wholeness</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span>Template for later initiatory mystery traditions</span>
                </li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Facts</h2>
              <ul className="space-y-3 text-sm">
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Founded:</span>
                  <span className="col-span-2">Circa 530 BCE</span>
                </li>
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Founder:</span>
                  <span className="col-span-2">Pythagoras of Samos</span>
                </li>
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Peak Period:</span>
                  <span className="col-span-2">530-500 BCE</span>
                </li>
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Decline:</span>
                  <span className="col-span-2">Anti-Pythagorean uprising c. 500 BCE</span>
                </li>
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Coordinates:</span>
                  <span className="col-span-2">39.0809° N, 17.1271° E</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl border p-8">
            <h2 className="text-3xl font-esoterica mb-6 text-primary">The Music of the Spheres</h2>
            <p className="mb-4 text-foreground/90 leading-relaxed">
              One of the Pythagoreans' most profound discoveries was the mathematical basis of musical harmony. By 
              experimenting with a single-stringed instrument called the monochord, they found that pleasing musical 
              intervals correspond to simple numerical ratios: the octave to 2:1, the perfect fifth to 3:2, and the 
              perfect fourth to 4:3.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              This discovery led to their concept of the "Music of the Spheres" (Musica Universalis)—the belief that 
              the planets and stars, moving according to mathematical equations, create a celestial harmony inaudible 
              to human ears but detectable by the intellect. The same numerical relationships that governed music, 
              they believed, also ordered the cosmos and the human soul.
            </p>
            <p className="mt-4 text-foreground/90 leading-relaxed">
              This idea of cosmic resonance became central to Western esoteric thought, influencing Plato, medieval 
              cosmology, Renaissance music theory, and even finding echoes in modern physics. The Pythagorean insight 
              that vibrational patterns underlie both aesthetic beauty and cosmic order remains a cornerstone of esoteric 
              approaches to sound healing, sacred architecture, and ceremonial magic.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl border p-8">
            <h2 className="text-3xl font-esoterica mb-6 text-primary">Sacred Geometry</h2>
            <p className="mb-4 text-foreground/90 leading-relaxed">
              The Pythagoreans developed the study of geometry as a contemplative practice leading to spiritual insight. 
              For them, geometric forms were not mere abstractions but expressions of divine principles. The pentagram, 
              which embodies the golden ratio, became their secret symbol, representing health and harmony.
            </p>
            <p className="mb-4 text-foreground/90 leading-relaxed">
              Central to Pythagorean sacred geometry was the tetraktys—a triangular figure of ten points arranged in 
              four rows (1+2+3+4=10). This figure was considered so sacred that Pythagoreans would swear oaths upon it. 
              It represented the organization of space (point, line, surface, solid), the harmony of music (the ratios 
              mentioned above), and the quaternary nature of creation.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Through their exploration of regular solids (later known as Platonic solids), the golden ratio, and 
              geometric proportions, the Pythagoreans established principles that would inform sacred architecture for 
              millennia—from Greek temples to Gothic cathedrals, Islamic geometric patterns, and Renaissance art. Their 
              vision of geometry as revealing the mind of the Creator continues to inspire contemporary sacred geometry 
              and esoteric mathematical studies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className="bg-card/30 backdrop-blur-sm border-accent/10 rounded-xl border p-8">
            <h2 className="text-3xl font-esoterica mb-6 text-accent text-center">Transmigration and Purification</h2>
            <div className="max-w-4xl mx-auto">
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The Pythagoreans advocated what may be the earliest documented form of Western metempsychosis (soul 
                transmigration). They believed that the soul is immortal and undergoes a series of reincarnations as it 
                strives for purification. Pythagoras himself claimed to remember his previous lives, including one as a 
                Trojan War hero. This doctrine significantly influenced Plato and later Neoplatonism.
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The School developed specific practices to facilitate the soul's purification, including:
              </p>
              <ul className="list-disc pl-8 mb-4 space-y-2 text-foreground/90">
                <li>Strict vegetarianism, based on the belief in the kinship of all living beings</li>
                <li>Daily self-examination and recollection exercises to strengthen memory</li>
                <li>Mathematical contemplation as a form of mental purification</li>
                <li>Musical therapy to harmonize the soul's imbalances</li>
                <li>Silence (akousmata) — novices observed a five-year period of silence during their initial training</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed">
                These disciplines were designed to bring the initiate's soul into harmony with the mathematical order of the 
                cosmos, eventually liberating it from the cycle of rebirth. The emphasis on dietary restrictions, moral 
                discipline, and contemplative practice as pathways to spiritual development became a template for numerous 
                Western esoteric traditions, from Orphism to modern Theosophy.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 bg-card/30 backdrop-blur-sm rounded-xl border border-accent/10 p-6">
          <h2 className="text-2xl font-esoterica mb-4 text-primary">Pythagorean Symbols and Teachings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">The Tetraktys</h3>
              <p className="text-sm text-muted-foreground">
                The perfect triangle of ten points, symbolizing the organization of the cosmos and the harmony of creation. The sum (1+2+3+4=10) represents completion and return to unity.
              </p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">The Pentagram</h3>
              <p className="text-sm text-muted-foreground">
                A five-pointed star embodying the golden ratio, used as a secret recognition symbol among members and representing health and harmonious proportion.
              </p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">Odd and Even</h3>
              <p className="text-sm text-muted-foreground">
                Odd numbers were considered masculine, dynamic, and limited; even numbers feminine, static, and unlimited—reflecting the Pythagorean understanding of cosmic polarity.
              </p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">Akousmata</h3>
              <p className="text-sm text-muted-foreground">
                Cryptic sayings like "Do not stir fire with iron" or "Abstain from beans," containing hidden ethical and philosophical meanings revealed only to advanced initiates.
              </p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">The Monad</h3>
              <p className="text-sm text-muted-foreground">
                The number one, representing the principle of unity from which all multiplicity emerges—a concept that influenced later monotheistic mysticism and emanationist philosophies.
              </p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">The Golden Verse</h3>
              <p className="text-sm text-muted-foreground">
                A poem of moral and philosophical precepts attributed to Pythagoras, used for daily recitation and meditation by members to reinforce the school's ethical teachings.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-border/30 pt-8 mt-8">
          <Link href="/atlas" className="text-sm text-muted-foreground hover:text-accent flex items-center transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Atlas</span>
          </Link>
          <a href="https://plato.stanford.edu/entries/pythagoras/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent flex items-center transition-colors group">
            <span>External Resources</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </MainLayout>
  );
} 