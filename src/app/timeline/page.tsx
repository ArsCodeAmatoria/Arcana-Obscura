import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

export default function TimelinePage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <Clock className="w-16 h-16 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Alchemical Timeline</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Journey through the ages of esoteric wisdom, from ancient mystery schools
            to modern-day mystical orders.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/50 pl-8 space-y-16 ml-4">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <div className="absolute top-0 -left-10 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-background"></div>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-accent font-mono">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-esoterica mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                    {event.keyFigures && (
                      <div className="mt-3 text-sm">
                        <span className="text-primary">Key Figures:</span> {event.keyFigures}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

const timelineEvents = [
  {
    year: "c. 3000 BCE",
    title: "Egyptian Mystery Schools",
    description: "The Egyptian Mystery Schools begin to formalize the teaching of metaphysical concepts, astronomy, mathematics, and medicine, providing the foundation for later Hermetic philosophy.",
    keyFigures: "Imhotep"
  },
  {
    year: "c. 600 BCE",
    title: "Orphic Mysteries",
    description: "The Orphic tradition emerges in Greece, teaching reincarnation, purification, and the soul's journey to the afterlife through symbolic initiation rites."
  },
  {
    year: "c. 500 BCE",
    title: "Pythagorean Brotherhood",
    description: "Pythagoras founds his mystery school in Croton, Italy, teaching that numbers are the key to understanding the universe and reality.",
    keyFigures: "Pythagoras"
  },
  {
    year: "c. 400 BCE",
    title: "Eleusinian Mysteries",
    description: "The Eleusinian Mysteries reach their height in Greece, offering initiates a transformative experience and the promise of a blessed afterlife."
  },
  {
    year: "c. 100-300 CE",
    title: "Hermetica Written",
    description: "The core Hermetic texts (Corpus Hermeticum) are compiled in Hellenistic Egypt, blending Greek and Egyptian wisdom under the mythical author Hermes Trismegistus."
  },
  {
    year: "c. 200 CE",
    title: "Gnostic Traditions",
    description: "Gnostic schools flourish in the Mediterranean region, teaching that divine knowledge (gnosis) is the path to salvation from the material world.",
    keyFigures: "Valentinus, Basilides"
  },
  {
    year: "1118 CE",
    title: "Knights Templar Founded",
    description: "The Knights Templar order is established, eventually becoming associated with esoteric wisdom and occult practices during and after the Crusades.",
    keyFigures: "Hughes de Payens"
  },
  {
    year: "c. 1200 CE",
    title: "Kabbalah Emerges",
    description: "Jewish mystical tradition of Kabbalah begins to formalize with texts like the Zohar, exploring the nature of God and the universe through the Tree of Life.",
    keyFigures: "Moses de León"
  },
  {
    year: "1462 CE",
    title: "Corpus Hermeticum Translated",
    description: "Marsilio Ficino translates the Corpus Hermeticum from Greek to Latin, sparking a revival of Hermetic philosophy in Renaissance Europe.",
    keyFigures: "Marsilio Ficino"
  },
  {
    year: "1614 CE",
    title: "Rosicrucian Manifestos",
    description: "Publication of the Rosicrucian manifestos (Fama Fraternitatis and Confessio Fraternitatis) announces the existence of a secret brotherhood possessing ancient wisdom.",
    keyFigures: "Johann Valentin Andreae (attributed)"
  },
  {
    year: "1717 CE",
    title: "Freemasonry Goes Public",
    description: "Modern Freemasonry begins with the formation of the Grand Lodge of England, systematizing ritual, symbolism, and teachings of operative masonry into a speculative craft.",
  },
  {
    year: "1875 CE",
    title: "Theosophical Society Founded",
    description: "Helena Blavatsky, Henry Steel Olcott, and William Quan Judge establish the Theosophical Society, blending Eastern and Western esoteric traditions.",
    keyFigures: "Helena Blavatsky"
  },
  {
    year: "1888 CE",
    title: "Hermetic Order of the Golden Dawn",
    description: "The Hermetic Order of the Golden Dawn is founded, becoming one of the most influential modern magical societies, synthesizing various esoteric systems.",
    keyFigures: "S.L. MacGregor Mathers, W. Wynn Westcott"
  },
  {
    year: "1904 CE",
    title: "Thelemic Era Begins",
    description: "Aleister Crowley receives The Book of the Law in Cairo, establishing Thelema as a spiritual philosophy centered around the principle 'Do what thou wilt.'",
    keyFigures: "Aleister Crowley"
  },
  {
    year: "1908 CE",
    title: "The Kybalion Published",
    description: "Publication of The Kybalion by 'Three Initiates' (likely William Walker Atkinson), presenting seven Hermetic principles in an accessible format for modern readers.",
    keyFigures: "William Walker Atkinson (suspected)"
  }
]; 