import MainLayout from '@/components/layout/MainLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

export default function HermeticismPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">☿</div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Hermeticism</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The ancient Egyptian-Greek wisdom tradition attributed to Hermes Trismegistus,
            teaching that "as above, so below" and the principles of mental alchemy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Core Teachings</h2>
              <p className="mb-4">
                Hermeticism is an ancient philosophical and spiritual tradition said to be founded by the mythical figure Hermes Trismegistus, 
                recognized as a combination of the Greek god Hermes and the Egyptian god Thoth. It emerged in Hellenistic Egypt during the 
                first centuries CE and has had a profound influence on Western esotericism.
              </p>
              <p className="mb-4">
                The foundational Hermetic text is the Corpus Hermeticum, a collection of dialogues that discuss the divine, the cosmos, 
                mind, nature, and the spiritual rebirth of humanity. Another key text is the Emerald Tablet, which contains the famous 
                axiom "As above, so below" - a principle suggesting the microcosm reflects the macrocosm.
              </p>
              <p>
                The Kybalion, a more modern text published in 1908, outlines seven Hermetic principles: Mentalism, Correspondence, 
                Vibration, Polarity, Rhythm, Cause and Effect, and Gender. These principles form a framework for understanding the nature 
                of reality and one's place within it.
              </p>

              <h3 className="text-xl font-esoterica mt-8 mb-4 text-secondary">The Seven Hermetic Principles</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="mentalism">
                  <AccordionTrigger>The Principle of Mentalism</AccordionTrigger>
                  <AccordionContent>
                    "THE ALL is MIND; The Universe is Mental." This principle explains that the Universe is a mental 
                    creation of THE ALL (God, Divine Mind). Everything that exists is thought, and reality is subjective.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="correspondence">
                  <AccordionTrigger>The Principle of Correspondence</AccordionTrigger>
                  <AccordionContent>
                    "As above, so below; as below, so above." This principle embodies the harmony between the physical, 
                    mental, and spiritual realms. What happens on one level of reality also happens on all other levels.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="vibration">
                  <AccordionTrigger>The Principle of Vibration</AccordionTrigger>
                  <AccordionContent>
                    "Nothing rests; everything moves; everything vibrates." This principle explains that all things 
                    are in constant motion at varying rates of vibration, from the physical to the spiritual.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="polarity">
                  <AccordionTrigger>The Principle of Polarity</AccordionTrigger>
                  <AccordionContent>
                    "Everything is dual; everything has poles; everything has its pair of opposites." All manifest things have two sides, 
                    two aspects, or two poles. Opposites are identical in nature but different in degree.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rhythm">
                  <AccordionTrigger>The Principle of Rhythm</AccordionTrigger>
                  <AccordionContent>
                    "Everything flows, out and in; everything has its tides; all things rise and fall." This principle describes the 
                    oscillation between poles that exists in everything. There is rhythm between every pair of opposites.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cause-effect">
                  <AccordionTrigger>The Principle of Cause and Effect</AccordionTrigger>
                  <AccordionContent>
                    "Every cause has its effect; every effect has its cause." There is a cause for every effect and an effect for every cause. 
                    Nothing escapes this law, but there are many planes of causation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="gender">
                  <AccordionTrigger>The Principle of Gender</AccordionTrigger>
                  <AccordionContent>
                    "Gender is in everything; everything has its masculine and feminine principles." This principle manifests on all planes 
                    and is expressed as masculine (projective) and feminine (receptive) energies.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Symbols</h2>
                <ul className="space-y-4">
                  <li>
                    <span className="text-2xl mr-2">☿</span> 
                    <span className="font-semibold">The Caduceus</span> - Symbol of Hermes/Mercury, representing balanced forces and healing
                  </li>
                  <li>
                    <span className="text-2xl mr-2">⚗️</span> 
                    <span className="font-semibold">The Alchemical Vessel</span> - Symbol of transformation and spiritual refinement
                  </li>
                  <li>
                    <span className="text-2xl mr-2">☉</span> 
                    <span className="font-semibold">The Sun</span> - Symbol of spiritual illumination and the divine masculine
                  </li>
                  <li>
                    <span className="text-2xl mr-2">☽</span> 
                    <span className="font-semibold">The Moon</span> - Symbol of reflection, intuition, and the divine feminine
                  </li>
                  <li>
                    <span className="text-2xl mr-2">⭐</span> 
                    <span className="font-semibold">The Star</span> - Symbol of divine guidance and astral influences
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Notable Figures</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Hermes Trismegistus</span> - The legendary founder
                  </li>
                  <li>
                    <span className="font-semibold">Thoth</span> - Egyptian god of wisdom and writing
                  </li>
                  <li>
                    <span className="font-semibold">Paracelsus</span> - Swiss physician and alchemist
                  </li>
                  <li>
                    <span className="font-semibold">Giordano Bruno</span> - Italian philosopher and hermetic
                  </li>
                  <li>
                    <span className="font-semibold">The Three Initiates</span> - Authors of The Kybalion
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <blockquote className="border-l-4 border-accent pl-4 py-2 italic text-xl text-muted-foreground max-w-3xl mx-auto">
          "The lips of wisdom are closed, except to the ears of Understanding." <br />
          <span className="text-sm not-italic block mt-2">- The Kybalion</span>
        </blockquote>
      </div>
    </MainLayout>
  );
} 