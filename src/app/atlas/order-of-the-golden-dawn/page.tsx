import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowLeft, ExternalLink, FlaskConical } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';

export default function GoldenDawnPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-24 h-24 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
            <path d="M24 24 L76 76 M24 76 L76 24" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        
        <Link href="/atlas" className="flex items-center text-muted-foreground hover:text-accent mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Esoteric Atlas</span>
        </Link>

        <div className="text-center mb-12">
          <div className="mb-4">
            <FlaskConical className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">The Hermetic Order of the Golden Dawn</h1>
          <div className="flex items-center justify-center text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span>London, England</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The preeminent magical order of the modern era, synthesizing ancient wisdom into a comprehensive system 
            of ceremonial magic that revitalized Western esotericism and continues to influence magical practice today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6">
            <h2 className="text-2xl font-esoterica mb-4 text-primary">The Victorian Magical Renaissance</h2>
            <p className="mb-4">
              Founded in London in 1888 by William Wynn Westcott, Samuel Liddell MacGregor Mathers, and William Robert Woodman, 
              the Hermetic Order of the Golden Dawn emerged during a period of renewed interest in occultism and ancient mysteries. 
              At a time when rationalism and industrialization dominated Western society, the Golden Dawn offered an alternative 
              path of spiritual development through the study and practice of ritual magic.
            </p>
            <p className="mb-4">
              The Order claimed lineage from an older German Rosicrucian society through a mysterious cipher manuscript, though 
              modern scholars debate the authenticity of this connection. Regardless of its origins, the Golden Dawn rapidly 
              became the most influential esoteric organization of its time, attracting notable members including poet W.B. Yeats, 
              actress Florence Farr, and occultist Aleister Crowley.
            </p>
            <p>
              What distinguished the Golden Dawn from previous occult societies was its systematic approach to magical training. 
              The Order developed a comprehensive curriculum that integrated elements from Hermetic Qabalah, Enochian magic, 
              alchemy, astrology, tarot, and Egyptian symbolism into a coherent system. This synthesis of diverse traditions 
              created what many consider the definitive framework for Western ceremonial magic.
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
                  <span>Formulation of the complete Western magical tradition</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span>Development of modern magical tools and correspondences</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span>Integration of Qabalistic Tree of Life with tarot and astrology</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span>Reinvigoration of initiatic traditions in the modern era</span>
                </li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Facts</h2>
              <ul className="space-y-3 text-sm">
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Founded:</span>
                  <span className="col-span-2">1888</span>
                </li>
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Founders:</span>
                  <span className="col-span-2">Westcott, Mathers, Woodman</span>
                </li>
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Original Temple:</span>
                  <span className="col-span-2">Isis-Urania, London</span>
                </li>
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Schism:</span>
                  <span className="col-span-2">1900</span>
                </li>
                <li className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground col-span-1">Legacy Groups:</span>
                  <span className="col-span-2">A∴A∴, Stella Matutina, many others</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl border p-8">
            <h2 className="text-3xl font-esoterica mb-6 text-primary">The Grade System</h2>
            <p className="mb-4 text-foreground/90 leading-relaxed">
              The Golden Dawn structured its teachings through an elaborate system of grades corresponding to the 
              Qabalistic Tree of Life. Initiates progressed through a series of degrees, each associated with specific 
              elements, planets, and spiritual lessons. The curriculum was divided into three orders:
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2 text-foreground/90">
              <li>
                <span className="font-medium">The Outer Order</span> consisted of the elemental grades (Neophyte 0=0 through 
                Portal 4=7), teaching foundational knowledge and practices.
              </li>
              <li>
                <span className="font-medium">The Second Order</span> (Rosae Rubeae et Aureae Crucis) began with the Adeptus 
                Minor 5=6 grade, where members learned practical magic and created their own magical tools.
              </li>
              <li>
                <span className="font-medium">The Third Order</span> consisted of the Secret Chiefs, spiritual entities who 
                supposedly guided the order from beyond the physical plane.
              </li>
            </ul>
            <p className="text-foreground/90 leading-relaxed">
              This grade structure, mapping spiritual progress to the Tree of Life, became the template for numerous later 
              magical orders and remains influential in contemporary Western esoteric practice. Each grade involved specific 
              examinations, rituals, and the memorization of complex correspondences and visualizations.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl border p-8">
            <h2 className="text-3xl font-esoterica mb-6 text-primary">Magical Techniques</h2>
            <p className="mb-4 text-foreground/90 leading-relaxed">
              The Golden Dawn's most enduring contribution to modern esotericism is its sophisticated repertoire of magical 
              techniques. The Order developed or refined numerous practices that remain fundamental to Western ceremonial magic:
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2 text-foreground/90">
              <li>
                <span className="font-medium">The Lesser Banishing Ritual of the Pentagram</span>, a protective practice for 
                clearing negative energies and establishing sacred space.
              </li>
              <li>
                <span className="font-medium">The Middle Pillar Exercise</span>, a visualization technique for activating and 
                balancing the subtle energy centers along the central column of the Tree of Life.
              </li>
              <li>
                <span className="font-medium">Tattwas</span>, elemental symbols used for scrying and astral projection.
              </li>
              <li>
                <span className="font-medium">Godform Assumption</span>, the practice of taking on the form and consciousness 
                of a deity through visualization and vibration of divine names.
              </li>
              <li>
                <span className="font-medium">Enochian Chess</span>, a four-dimensional game incorporating elements of chess 
                and divination based on Enochian principles.
              </li>
            </ul>
            <p className="text-foreground/90 leading-relaxed">
              These techniques were designed to develop the practitioner's control over subtle energies, refine psychic 
              abilities, and facilitate spiritual development through conscious engagement with archetypal forces.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className="bg-card/30 backdrop-blur-sm border-accent/10 rounded-xl border p-8">
            <h2 className="text-3xl font-esoterica mb-6 text-accent text-center">Legacy and Influence</h2>
            <div className="max-w-4xl mx-auto">
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Though the original Golden Dawn fractured around 1900 due to internal conflicts and leadership struggles, 
                its influence extends far beyond its brief official existence. The Order's teachings were carried forward 
                through numerous successor organizations and publications, shaping virtually every aspect of modern Western 
                occultism.
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The Golden Dawn's integration of different esoteric streams created a standardized symbolic framework that 
                continues to inform contemporary magical practice. Its version of the Qabalistic Tree of Life, with specific 
                attributions and correspondences, has become the de facto standard in Western esotericism. The Order's 
                approach to tarot, linking the cards to astrological, elemental, and Qabalistic symbols, revolutionized 
                tarot interpretation and spawned numerous modern decks.
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Members of the Golden Dawn went on to found important esoteric movements, including Aleister Crowley's 
                Thelema and Dion Fortune's Society of the Inner Light. The Order's papers, published by Israel Regardie in 
                the 1930s, became foundational texts for the modern magical revival, influencing movements as diverse as 
                Wicca, Chaos Magic, and the New Age.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Perhaps most significantly, the Golden Dawn demonstrated that ancient wisdom traditions could be 
                successfully adapted to modern sensibilities, creating a viable spiritual alternative to both 
                conventional religion and secular materialism. Its emphasis on personal spiritual development through 
                systematic practice rather than blind faith anticipated many contemporary approaches to spirituality.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 bg-card/30 backdrop-blur-sm rounded-xl border border-accent/10 p-6">
          <h2 className="text-2xl font-esoterica mb-4 text-primary">Notable Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">W.B. Yeats</h3>
              <p className="text-sm text-muted-foreground">
                The Nobel Prize-winning poet who incorporated Golden Dawn symbolism into his literary works, particularly in collections like "The Wind Among the Reeds" and "A Vision."
              </p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">Aleister Crowley</h3>
              <p className="text-sm text-muted-foreground">
                The controversial occultist who later founded Thelema, publishing many of the Order's secrets in his magazine "The Equinox" after breaking with Mathers.
              </p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">Florence Farr</h3>
              <p className="text-sm text-muted-foreground">
                Actress, composer, and women's rights activist who served as Chief Adept of the London temple and experimented with magical sound vibration.
              </p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">Arthur Edward Waite</h3>
              <p className="text-sm text-muted-foreground">
                Occult scholar who co-created the Rider-Waite-Smith tarot deck and later formed the Fellowship of the Rosy Cross, emphasizing mysticism over magic.
              </p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">Dion Fortune</h3>
              <p className="text-sm text-muted-foreground">
                Initiated into Alpha et Omega (a Golden Dawn offshoot), she later founded the Society of the Inner Light and authored influential works like "The Mystical Qabalah."
              </p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg bg-background/30">
              <h3 className="font-medium text-accent mb-1">Israel Regardie</h3>
              <p className="text-sm text-muted-foreground">
                Crowley's former secretary who later joined Stella Matutina and published "The Golden Dawn," preserving the Order's teachings for future generations.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-border/30 pt-8 mt-8">
          <Link href="/atlas" className="text-sm text-muted-foreground hover:text-accent flex items-center transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Atlas</span>
          </Link>
          <a href="https://www.golden-dawn.com/eu/index.aspx" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent flex items-center transition-colors group">
            <span>External Resources</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </MainLayout>
  );
} 