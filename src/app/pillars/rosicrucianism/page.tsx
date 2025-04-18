import MainLayout from '@/components/layout/MainLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Flower, Flower2, Cross, Book, Castle } from 'lucide-react';

export default function RosicrucianismPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-4">
            <Flower className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Rosicrucianism</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A spiritual and cultural movement that emerged in Europe in the early 17th century 
            combining Christian mysticism with esoteric traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Core Teachings</h2>
              <p className="mb-4">
                Rosicrucianism is a philosophical and mystical tradition that first appeared publicly in the early 17th century 
                with the anonymous publication of the Fama Fraternitatis (1614) and the Confessio Fraternitatis (1615), 
                purporting to describe the existence of a secret brotherhood founded by Christian Rosenkreuz.
              </p>
              <p className="mb-4">
                The Rosicrucian manifestos describe a mysterious order that combined elements of Hermeticism, 
                Jewish mysticism, and Christian symbolism into a cohesive system. These texts sparked considerable 
                interest across Europe, influencing mystics, philosophers, and early scientists.
              </p>
              <p>
                Rosicrucian philosophy emphasizes spiritual transformation, alchemical symbolism, and the pursuit 
                of divine wisdom. It teaches that humans possess latent abilities that can be awakened through 
                specific spiritual practices, study, and initiation.
              </p>

              <h3 className="text-xl font-esoterica mt-8 mb-4 text-secondary">Key Rosicrucian Concepts</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="divine-wisdom">
                  <AccordionTrigger>Divine Wisdom</AccordionTrigger>
                  <AccordionContent>
                    Rosicrucians seek knowledge of the divine mysteries through both rational inquiry 
                    and intuitive understanding. They believe that true wisdom comes from harmonizing 
                    intellectual and spiritual faculties.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="spiritual-alchemy">
                  <AccordionTrigger>Spiritual Alchemy</AccordionTrigger>
                  <AccordionContent>
                    While recognizing the physical aspects of alchemy, Rosicrucians emphasize its spiritual dimension—the 
                    transformation of the human soul from base material consciousness to spiritual awakening and illumination.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="universal-reformation">
                  <AccordionTrigger>Universal Reformation</AccordionTrigger>
                  <AccordionContent>
                    Early Rosicrucian texts called for a universal reformation of mankind in terms of 
                    religion, ethics, arts, and sciences. This reforming impulse aimed to restore harmony 
                    between humanity, nature, and the divine.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="mystical-christianity">
                  <AccordionTrigger>Mystical Christianity</AccordionTrigger>
                  <AccordionContent>
                    Rosicrucianism integrates Christian elements with Hermetic and Kabbalistic teachings. 
                    It interprets Christianity through an esoteric lens, emphasizing direct spiritual 
                    experience over dogmatic interpretations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="invisible-college">
                  <AccordionTrigger>The Invisible College</AccordionTrigger>
                  <AccordionContent>
                    Rosicrucians are said to form an "invisible college" of initiates working secretly 
                    to advance human knowledge and spiritual development. This concept influenced the 
                    development of scientific academies and societies.
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
                  <li className="flex items-center">
                    <Cross className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">The Rose Cross</span> - Central symbol representing the union of opposites and spiritual unfoldment
                  </li>
                  <li className="flex items-center">
                    <Cross className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">The Cross</span> - Symbol of material existence and sacrifice
                  </li>
                  <li className="flex items-center">
                    <Flower2 className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">The Rose</span> - Symbol of unfolding consciousness and divine love
                  </li>
                  <li className="flex items-center">
                    <Book className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">The Book "M"</span> - Mysterious text containing all knowledge
                  </li>
                  <li className="flex items-center">
                    <Castle className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">The Vault</span> - Secret chamber of initiation and transformation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Notable Figures</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Christian Rosenkreuz</span> - Legendary founder
                  </li>
                  <li>
                    <span className="font-semibold">Johann Valentin Andreae</span> - Suspected author of early manifestos
                  </li>
                  <li>
                    <span className="font-semibold">Robert Fludd</span> - English physician and early defender
                  </li>
                  <li>
                    <span className="font-semibold">Michael Maier</span> - German physician and alchemist
                  </li>
                  <li>
                    <span className="font-semibold">Max Heindel</span> - Founder of the Rosicrucian Fellowship
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <blockquote className="border-l-4 border-accent pl-4 py-2 italic text-xl text-muted-foreground max-w-3xl mx-auto">
          "The highest wisdom is to know nothing." <br />
          <span className="text-sm not-italic block mt-2">- Attributed to Christian Rosenkreuz</span>
        </blockquote>
      </div>
    </MainLayout>
  );
} 