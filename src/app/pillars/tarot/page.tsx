import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function TarotPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-4">
            <Sparkles className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Tarot</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A symbolic system of divination using a deck of 78 cards, each rich with archetypal imagery 
            that reflects the human experience and the journey of consciousness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Historical Development</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The earliest known Tarot decks appeared in Northern Italy during the mid-15th century, originally as playing cards 
                called <span className="italic">carte da trionfi</span> (triumph cards) used for games like Tarocchi. These early decks were 
                commissioned by noble families and beautifully hand-painted, with the Visconti-Sforza deck being one of the most famous 
                surviving examples.
              </p>
              
              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="font-semibold text-accent mb-1">Playing Cards to Esoteric System (15th-18th centuries)</h3>
                  <p className="text-foreground/80">
                    Initially created for card games, Tarot was not associated with divination until the late 18th century. The first 
                    documented connection between Tarot and occult practices was made by Antoine Court de Gébelin in 1781, who claimed the cards 
                    contained hidden wisdom from ancient Egypt. Jean-Baptiste Alliette (known as Etteilla) soon after created the first 
                    deck specifically designed for divination.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-accent mb-1">Occult Revival (19th century)</h3>
                  <p className="text-foreground/80">
                    The 19th century saw Tarot integrated into Western esoteric traditions. Éliphas Lévi connected Tarot to Kabbalah and 
                    the elements of the tetragrammaton. The Hermetic Order of the Golden Dawn further developed these associations, 
                    with members like A.E. Waite and Aleister Crowley eventually creating their own influential decks.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-accent mb-1">Modern Popularity (20th century-Present)</h3>
                  <p className="text-foreground/80">
                    The publication of the Rider-Waite-Smith deck in 1909 revolutionized Tarot with its fully illustrated Minor Arcana. 
                    This deck, created by A.E. Waite and artist Pamela Colman Smith, became the template for most modern Tarot decks. 
                    In the latter half of the 20th century, Tarot experienced renewed popularity through the New Age movement and has 
                    continued to evolve with thousands of diverse decks now available.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Structure of the Tarot</h2>
              <div className="space-y-6">
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">The Major Arcana</h3>
                  <p className="text-foreground/80 mb-3">
                    22 cards representing significant archetypes and spiritual lessons in life's journey. Often called "trump cards," 
                    they depict universal experiences and spiritual principles.
                  </p>
                  <p className="text-foreground/80">
                    Beginning with The Fool (0) and ending with The World (XXI), these cards form what's known as "The Fool's Journey"—a 
                    metaphorical path of spiritual development and self-discovery. Major Arcana cards typically indicate significant life 
                    events, karmic lessons, or powerful spiritual influences.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">The Minor Arcana</h3>
                  <p className="text-foreground/80 mb-3">
                    56 cards divided into four suits (Wands, Cups, Swords, and Pentacles), each containing ten numbered cards (Ace through Ten) 
                    and four court cards (Page, Knight, Queen, and King).
                  </p>
                  <p className="text-foreground/80">
                    Each suit corresponds to an element and a domain of human experience:
                  </p>
                  <ul className="mt-2 space-y-1 text-foreground/80">
                    <li><span className="font-semibold">Wands</span> (Fire): Creativity, passion, energy, and action</li>
                    <li><span className="font-semibold">Cups</span> (Water): Emotions, relationships, intuition, and the subconscious</li>
                    <li><span className="font-semibold">Swords</span> (Air): Intellect, communication, conflict, and truth</li>
                    <li><span className="font-semibold">Pentacles</span> (Earth): Material world, finances, career, and physical health</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Art of Tarot Reading</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Reading Tarot involves more than memorizing card meanings—it's a practice that combines knowledge, intuition, and the ability 
                to recognize patterns and connections between cards. The context of a reading is shaped by the question asked, the spread used, 
                and the reader's interpretive approach.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-accent">Reading Approaches</h3>
                  <ul className="space-y-2 text-foreground/90">
                    <li><span className="font-semibold">Intuitive:</span> Focusing on personal impressions and feelings evoked by the imagery</li>
                    <li><span className="font-semibold">Symbolic:</span> Analyzing the symbols and their traditional meanings</li>
                    <li><span className="font-semibold">Narrative:</span> Weaving the cards into a coherent story or journey</li>
                    <li><span className="font-semibold">Psychological:</span> Viewing cards as reflections of the unconscious mind</li>
                    <li><span className="font-semibold">Predictive:</span> Using cards to forecast potential future outcomes</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-accent">Advanced Reading Elements</h3>
                  <ul className="space-y-2 text-foreground/90">
                    <li><span className="font-semibold">Reversals:</span> Interpreting cards that appear upside-down</li>
                    <li><span className="font-semibold">Dignities:</span> How cards influence each other based on suit relationships</li>
                    <li><span className="font-semibold">Timing:</span> Using cards to estimate when events might occur</li>
                    <li><span className="font-semibold">Shadow work:</span> Exploring unconscious patterns and repressed aspects</li>
                    <li><span className="font-semibold">Progressive readings:</span> Following up on readings to track development</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-foreground/90 leading-relaxed pt-4 border-t border-accent/20">
                Many readers emphasize that Tarot doesn't predict fixed outcomes but rather reveals energetic patterns and potentials. 
                The cards illuminate possibilities, allowing the querent (person receiving the reading) to make more informed choices. 
                This perspective aligns with the concept of free will, suggesting that understanding current influences helps shape 
                future outcomes rather than merely revealing a predetermined fate.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Notable Tarot Decks</h2>
              <ul className="space-y-4">
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Rider-Waite-Smith (1909)</h3>
                  <p className="text-foreground/80">Created by A.E. Waite and artist Pamela Colman Smith, this is the most influential modern deck, known for its rich symbolism and fully illustrated Minor Arcana.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Thoth Tarot (1969)</h3>
                  <p className="text-foreground/80">Designed by Aleister Crowley and painted by Lady Frieda Harris, incorporating complex esoteric symbolism from various mystical traditions.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Marseille Tarot (17th century)</h3>
                  <p className="text-foreground/80">One of the oldest standardized designs, featuring simple woodcut-style illustrations and non-scenic pip cards in the Minor Arcana.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Visconti-Sforza (15th century)</h3>
                  <p className="text-foreground/80">One of the earliest known Tarot decks, hand-painted for the Visconti and Sforza noble families of Milan.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Contemporary Decks</h3>
                  <p className="text-foreground/80">Modern decks like the Wild Unknown, Fountain Tarot, and thousands of others offer diverse cultural perspectives, artistic styles, and thematic approaches.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary text-center">Common Tarot Spreads</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3 text-center">Three-Card Spread</h3>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-4">
                      <div className="w-12 h-16 border border-accent/50 rounded-md flex items-center justify-center">1</div>
                      <div className="w-12 h-16 border border-accent/50 rounded-md flex items-center justify-center">2</div>
                      <div className="w-12 h-16 border border-accent/50 rounded-md flex items-center justify-center">3</div>
                    </div>
                  </div>
                  <p className="text-foreground/80 text-sm">
                    The most versatile and simple spread. Can represent past-present-future, mind-body-spirit, situation-action-outcome, 
                    or any three-aspect question. Perfect for beginners or quick readings.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3 text-center">Celtic Cross</h3>
                  <div className="flex justify-center mb-4">
                    <div className="relative w-24 h-24">
                      <div className="absolute w-12 h-16 border border-accent/50 rounded-md flex items-center justify-center top-4 left-6">1</div>
                      <div className="absolute w-12 h-16 border border-accent/50 rounded-md flex items-center justify-center top-4 left-14 rotate-90">2</div>
                      <div className="absolute w-12 h-16 border border-accent/50 rounded-md flex items-center justify-center bottom-12 right-0">6</div>
                      <div className="absolute w-12 h-16 border border-accent/50 rounded-md flex items-center justify-center top-0 right-8">5</div>
                      <div className="absolute w-12 h-16 border border-accent/50 rounded-md flex items-center justify-center bottom-0 left-8">4</div>
                      <div className="absolute w-12 h-16 border border-accent/50 rounded-md flex items-center justify-center bottom-12 left-0">3</div>
                    </div>
                  </div>
                  <p className="text-foreground/80 text-sm">
                    A comprehensive 10-card spread examining multiple aspects of a situation: current influences, obstacles, ideals, 
                    foundation, past and future influences, self-perception, external influences, hopes/fears, and outcome.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3 text-center">Horseshoe Spread</h3>
                  <div className="flex justify-center mb-4">
                    <div className="flex flex-col items-center">
                      <div className="flex space-x-3">
                        <div className="w-10 h-14 border border-accent/50 rounded-md flex items-center justify-center">1</div>
                        <div className="w-10 h-14 border border-accent/50 rounded-md flex items-center justify-center">2</div>
                        <div className="w-10 h-14 border border-accent/50 rounded-md flex items-center justify-center">3</div>
                        <div className="w-10 h-14 border border-accent/50 rounded-md flex items-center justify-center">4</div>
                        <div className="w-10 h-14 border border-accent/50 rounded-md flex items-center justify-center">5</div>
                      </div>
                      <div className="flex space-x-3 mt-2">
                        <div className="w-10 h-14 border border-accent/50 rounded-md flex items-center justify-center">6</div>
                        <div className="w-10 h-14 border border-accent/50 rounded-md flex items-center justify-center">7</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground/80 text-sm">
                    A seven-card spread arranged in an arc, showing the progression of a situation or challenge. Typically covers past influences, 
                    present situation, hidden influences, obstacles, environment, advice, and likely outcome.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <blockquote className="border-l-4 border-accent/50 pl-6 py-4 italic text-xl text-muted-foreground max-w-3xl mx-auto mb-12 bg-card/30 backdrop-blur-sm rounded-r-md">
          "The Tarot is a pictorial representation of the forces of the invisible universe."
          <span className="text-sm not-italic block mt-2 text-accent/80">— A.E. Waite</span>
        </blockquote>
      </div>
    </MainLayout>
  );
} 