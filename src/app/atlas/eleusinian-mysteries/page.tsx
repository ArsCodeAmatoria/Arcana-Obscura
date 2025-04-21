import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowLeft, ExternalLink, Flower } from 'lucide-react';

export default function EleusinianMysteriesPage() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M175,0 A175,175 0 1,1 0,175 A175,175 0 1,1 175,0" stroke="currentColor" fill="none" strokeWidth="2" />
          <path d="M175,50 A125,125 0 1,1 50,175 A125,125 0 1,1 175,50" stroke="currentColor" fill="none" strokeWidth="1.5" />
          <path d="M175,100 A75,75 0 1,1 100,175 A75,75 0 1,1 175,100" stroke="currentColor" fill="none" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/atlas" className="btn btn-ghost gap-2">
            <ArrowLeft size={20} />
            <span>Return to Esoteric Atlas</span>
          </Link>
        </div>

        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">The Eleusinian Mysteries</h1>
          <div className="flex justify-center items-center gap-2 text-xl">
            <Flower className="w-16 h-16 inline-block text-accent" />
          </div>
          <p className="text-xl mt-4 max-w-3xl mx-auto">
            Ancient Greece's most revered and secretive religious rites dedicated to Demeter and Persephone, promising initiates a blessed afterlife and divine wisdom.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 border-b border-accent pb-2">The Sacred Rites</h2>
              <p className="mb-4">
                The Eleusinian Mysteries were annual initiation ceremonies for the cult of Demeter and Persephone, performed in the ancient town of Eleusis near Athens. Dating back to the Mycenaean period (1600-1100 BCE), these ceremonies became the most important of all religious festivals in ancient Greece, continuing for nearly two millennia until their suppression by the Christian Emperor Theodosius I in 392 CE.
              </p>
              <p>
                The Mysteries represented the myth of Demeter, goddess of agriculture, and her daughter Persephone, who was abducted by Hades to become queen of the underworld. Demeter's grief and search for her daughter, followed by Persephone's partial return, symbolized the cycle of death and rebirth - both in nature through the seasons and in the spiritual transformation of the initiates.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 border-b border-accent pb-2">Esoteric Significance</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Cycle of Life, Death, and Rebirth:</span> The central myth provided initiates with a new relationship to mortality, offering hope for a blessed afterlife.
                </li>
                <li>
                  <span className="font-semibold">Secret Knowledge:</span> The dramatically enacted rituals imparted revelatory experiences that could not be communicated to non-initiates.
                </li>
                <li>
                  <span className="font-semibold">Spiritual Transformation:</span> Through ceremonial purification, fasting, and sacred drama, initiates experienced a symbolic death and rebirth.
                </li>
                <li>
                  <span className="font-semibold">Cosmic Unity:</span> The rites connected participants to the divine, breaking down barriers between the human and sacred realms.
                </li>
                <li>
                  <span className="font-semibold">Agrarian Symbolism:</span> The transformation of grain into bread during the ceremonies symbolized spiritual transformation and the cycle of life.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 border-b border-accent pb-2">The Initiatory Process</h2>
              <p className="mb-4">
                The Mysteries consisted of two parts: the Lesser Mysteries held in spring at Agrae near Athens, and the Greater Mysteries celebrated annually in September at Eleusis.
              </p>
              <p className="mb-4">
                <span className="font-semibold">Lesser Mysteries (Myesis):</span> Served as a prerequisite purification for the Greater Mysteries. Initiates underwent ritual cleansing in the River Ilissos and received preliminary instructions.
              </p>
              <p className="mb-4">
                <span className="font-semibold">Greater Mysteries (Epopteia):</span> Lasted nine days and included:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>The ceremonial procession from Athens to Eleusis along the Sacred Way</li>
                <li>Day-long fasting in commemoration of Demeter's grief</li>
                <li>Drinking of the kykeon, a sacred beverage potentially containing psychoactive ingredients</li>
                <li>Secret night-time ceremonies in the Telesterion (initiation hall)</li>
                <li>The revelation of sacred objects and the enactment of the sacred drama</li>
                <li>The climactic revelation, possibly involving a harvested ear of grain symbolizing rebirth</li>
              </ul>
              <p>
                What exactly happened in the final revelation remains unknown, as initiates were bound by a vow of secrecy, the breaking of which was punishable by death. Nevertheless, accounts suggest they experienced visions of profound beauty that transformed their understanding of life and death.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 border-b border-accent pb-2">Legacy and Influence</h2>
              <p className="mb-4">
                The Eleusinian Mysteries influenced numerous later mystical and esoteric traditions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Early Gnostic and Hermetic teachings incorporated similar concepts of illumination through sacred knowledge</li>
                <li>Renaissance Neoplatonists revived interest in the Mysteries as part of recovering ancient wisdom</li>
                <li>Modern esoteric orders like the Rosicrucians and Theosophical Society drew inspiration from the graduated initiation pattern</li>
                <li>Contemporary Pagan and Wiccan traditions often incorporate elements of the Eleusinian ritual cycle</li>
                <li>The concept of "mystery" itself in Western esoteric traditions derives largely from these ancient rites</li>
              </ul>
            </section>
          </div>

          {/* Sidebar - 1 column on large screens */}
          <div className="space-y-8">
            <section className="bg-base-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-accent">Key Facts</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold block">Peak Period:</span>
                  <span>600 BCE - 392 CE</span>
                </div>
                <div>
                  <span className="font-semibold block">Location:</span>
                  <span>Eleusis (modern-day Elefsina), Greece</span>
                </div>
                <div>
                  <span className="font-semibold block">Sacred Deities:</span>
                  <span>Demeter, Persephone, Triptolemus, Iacchos</span>
                </div>
                <div>
                  <span className="font-semibold block">Focal Point:</span>
                  <span>The Telesterion (initiation hall)</span>
                </div>
                <div>
                  <span className="font-semibold block">Coordinates:</span>
                  <span>38.0386° N, 23.5414° E</span>
                </div>
                <div>
                  <span className="font-semibold block">Sacred Drink:</span>
                  <span>Kykeon (barley, water, mint, possibly ergot)</span>
                </div>
              </div>
            </section>

            <section className="bg-base-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-accent">Sacred Symbols</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold block">Sheaf of Wheat:</span>
                  <span>Symbolizing rebirth and transformation</span>
                </div>
                <div>
                  <span className="font-semibold block">Poppy:</span>
                  <span>Associated with Demeter, symbolizing sleep, forgetting, and the afterlife</span>
                </div>
                <div>
                  <span className="font-semibold block">Torch:</span>
                  <span>Representing Demeter's search for Persephone and spiritual illumination</span>
                </div>
                <div>
                  <span className="font-semibold block">Cornucopia:</span>
                  <span>The horn of plenty, symbolizing abundance</span>
                </div>
                <div>
                  <span className="font-semibold block">Pomegranate:</span>
                  <span>The fruit Persephone ate in the underworld, binding her to return</span>
                </div>
              </div>
            </section>

            <section className="bg-base-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-accent">Modern Connections</h3>
              <p className="mb-4">
                The archaeological site of Eleusis is now a UNESCO World Heritage site and contains ruins of the ancient sanctuary.
              </p>
              <div className="flex">
                <Link 
                  href="https://whc.unesco.org/en/tentativelists/5857/" 
                  className="btn btn-outline btn-accent gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>UNESCO Information</span>
                  <ExternalLink size={16} />
                </Link>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  <span className="font-medium">Elefsina, Greece</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 