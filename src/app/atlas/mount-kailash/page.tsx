import React from 'react';
import { MapPin, ArrowLeft, ExternalLink, Mountain } from 'lucide-react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function MountKailashPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 pb-16 pt-4 relative min-h-screen">
        {/* Decorative SVG element */}
        <div className="absolute top-20 right-20 opacity-10 hidden lg:block">
          <svg width="240" height="240" viewBox="0 0 240 240">
            <path d="M120 10 L10 230 L230 230 Z" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
            <path d="M120 80 L40 210 L200 210 Z" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
            <path d="M120 40 L60 190 L180 190 Z" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
            <circle cx="120" cy="140" r="5" fill="hsl(var(--accent))" />
          </svg>
        </div>

        {/* Navigation link */}
        <Link href="/atlas" className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Return to Esoteric Atlas
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Mountain className="w-16 h-16 inline-block text-accent" />
            <h1 className="text-4xl font-bold font-esoterica text-accent ml-4">Mount Kailash</h1>
          </div>

          <div className="mb-6 text-lg text-foreground/80">
            The cosmic axis and sacred mountain venerated by four religions, Mount Kailash stands as 
            one of the most powerful yet least physically accessible spiritual centers on Earth.
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-esoterica text-primary mb-4">The Cosmic Mountain</h2>
            <p className="mb-4">
              Rising to 6,638 meters (21,778 ft) in the Transhimalayan region of Tibet, Mount Kailash's distinctive symmetrical peak has never been climbed—not due to technical difficulty, but out of religious respect. This pyramidal mountain is considered sacrosanct by Hindus, Buddhists, Jains, and the indigenous Bön tradition, each with their own understanding of its cosmic significance.
            </p>
            <p className="mb-4">
              What makes Kailash extraordinary is not just its striking appearance but its position as perhaps the world's greatest natural mandala—a geomantically perfect formation representing the center of all creation. The mountain is believed to be the physical manifestation of Mount Meru, the cosmic mountain that stands at the center of the universe in Hindu and Buddhist cosmology.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-esoterica text-primary mb-4">Esoteric Significance</h2>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><span className="font-medium">Axis Mundi</span>: Considered the central axis connecting heaven and earth, the navel of the world.</li>
              <li><span className="font-medium">Dwelling of Deities</span>: Abode of Lord Shiva in Hindu tradition and the Buddha Demchok in Tibetan Buddhism.</li>
              <li><span className="font-medium">Sacred Geography</span>: Center of a vast mandala with the surrounding landscape forming a natural yantra.</li>
              <li><span className="font-medium">Energetic Vortex</span>: Said to emanate powerful spiritual energies accessible through circumambulation.</li>
              <li><span className="font-medium">Akashic Records</span>: Some esotericists believe the mountain contains accessible records of Earth's spiritual history.</li>
            </ul>
          </section>

          <section className="bg-card/20 p-6 rounded-xl border border-accent/10 mb-8">
            <h2 className="text-2xl font-esoterica text-primary mb-4">Key Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-accent">Elevation</h3>
                <p className="text-muted-foreground">6,638 meters (21,778 feet)</p>
              </div>
              <div>
                <h3 className="font-medium text-accent">Sacred Circuit</h3>
                <p className="text-muted-foreground">The Kora (53 km/33 mi)</p>
              </div>
              <div>
                <h3 className="font-medium text-accent">Nearby Sacred Lake</h3>
                <p className="text-muted-foreground">Lake Manasarovar</p>
              </div>
              <div>
                <h3 className="font-medium text-accent">Coordinates</h3>
                <p className="text-muted-foreground">31.07°N, 81.31°E</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-esoterica text-primary mb-4">The Kora: Sacred Circumambulation</h2>
            <p className="mb-4">
              The most profound spiritual practice associated with Mount Kailash is the kora—the ritual circumambulation of the mountain. Pilgrims travel from across Asia to walk the 53-kilometer path around the base of the mountain, typically completed in a single day by Tibetans but usually taking three days for visitors. The clockwise circuit (following Buddhist and Hindu practice) or counterclockwise circuit (following the Bön tradition) is believed to erase the sins of a lifetime.
            </p>
            <p className="mb-4">
              Completing 108 circumambulations is said to lead to full enlightenment in a single lifetime. The kora passes through the cardinal points, each associated with one face of the mountain and specific deities or energies. During the journey, pilgrims encounter numerous sacred sites, caves used by yogis for meditation, and stone formations believed to hold special powers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-esoterica text-primary mb-4">Mythological Dimensions</h2>
            <p className="mb-4">
              In Hindu cosmology, Mount Kailash is the abode of Lord Shiva and his consort Parvati. Shiva sits atop the mountain in eternal meditation, forming the ultimate archetype of the ascetic yogi. The mountain's peak resembles a lingam (the phallic symbol representing Shiva's generative power), while the surrounding landscape represents the yoni (feminine creative principle).
            </p>
            <p className="mb-4">
              Buddhist texts identify Kailash with Mount Meru and consider it the home of Buddha Demchok (Chakrasamvara), who represents supreme bliss. In Jainism, it is where Rishabhanatha, the first Tirthankara, attained liberation. For the pre-Buddhist Bön religion of Tibet, the mountain is the "nine-story swastika mountain" and the seat of spiritual power.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-esoterica text-primary mb-4">The Four Rivers Mystery</h2>
            <p className="mb-4">
              One of the most remarkable features of Mount Kailash is that four major rivers originate near its base: the Indus, the Brahmaputra, the Sutlej, and the Karnali (a major tributary of the Ganges). This geographical phenomenon corresponds to ancient cosmological texts that describe four rivers flowing from Mount Meru toward the four cardinal directions.
            </p>
            <p className="mb-4">
              This hydrological reality adds to the mountain's significance as a cosmic center and has led some researchers to suggest connections between Kailash and other sacred mountains or "world navels" across different cultures—from Olympus to Zion. The four rivers create a natural swastika pattern (an ancient symbol of auspiciousness and the sun's movement) when viewed from above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-esoterica text-primary mb-4">Modern Esoteric Perspectives</h2>
            <p className="mb-4">
              Contemporary esoteric researchers have noted several intriguing aspects of Mount Kailash. Its position appears to align with certain global sacred geometry patterns. Some have suggested it may be part of an ancient global grid system of energy points. Others propose that the mountain's unique shape might not be entirely natural—with speculation ranging from it being an artificially modified peak to theories about its role as a "spiritual antenna."
            </p>
            <p className="mb-4">
              Russian researchers have pointed out unusual features, including its perfect pyramid shape with angles matching those of the Great Pyramid of Giza. The region around Kailash has been described as a "psychic energy center" or chakra of the Earth, accessible through specific meditative practices conducted in its vicinity.
            </p>
          </section>

          <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Tibet Autonomous Region, China</span>
              </div>
            </div>
            <Link 
              href="https://whc.unesco.org/en/tentativelists/5812/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              UNESCO Information
              <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 