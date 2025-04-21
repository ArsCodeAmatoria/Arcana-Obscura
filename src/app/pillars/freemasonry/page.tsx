import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer } from 'lucide-react';

export default function FreemasonryPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-4">
            <Hammer className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Freemasonry</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A fraternal organization that traces its origins to the local fraternities of stonemasons 
            that from the end of the 14th century regulated the qualifications of masons and their 
            interaction with authorities and clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Core Teachings</h2>
              <p className="mb-4">
                Freemasonry is a fraternal organization that employs symbolic tools and allegorical rituals to teach moral and 
                philosophical lessons. It promotes self-improvement, brotherhood, and service to humanity.
              </p>
              <p className="mb-4">
                This tradition evolved from medieval stonemasons' guilds into a philosophical system focused on ethics, 
                personal growth, and charitable work. It maintains a system of initiation rituals rich in symbolism derived 
                from architectural tools, ancient wisdom traditions, and biblical narratives.
              </p>
              <p>
                At its core, Freemasonry promotes virtues such as truth, charity, and brotherly love. Members are encouraged to pursue 
                moral excellence while respecting diverse beliefs. The organization is not a religion but requires belief in a Supreme Being, 
                often referred to as the "Grand Architect of the Universe," allowing men of various faiths to participate together.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Symbols</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Hammer className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">The Square and Compass</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Letter G</span>
                  </li>
                  <li>
                    <span className="font-semibold">The All-Seeing Eye</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Notable Figures</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">George Washington</span>
                  </li>
                  <li>
                    <span className="font-semibold">Benjamin Franklin</span>
                  </li>
                  <li>
                    <span className="font-semibold">Wolfgang Amadeus Mozart</span>
                  </li>
                  <li>
                    <span className="font-semibold">Mark Twain</span>
                  </li>
                  <li>
                    <span className="font-semibold">Oscar Wilde</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Three Degrees</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Traditional Craft Freemasonry consists of three primary degrees, each representing a stage in the Mason's 
                journey toward moral and spiritual enlightenment. Each degree includes an initiation ritual filled with 
                symbolic elements and teachings:
              </p>
              
              <div className="space-y-6 mt-6">
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">Entered Apprentice</h3>
                  <p className="text-foreground/80">
                    The first degree focuses on birth and beginnings. The candidate symbolically moves from darkness to light, representing 
                    the start of Masonic knowledge. Key symbols include the rough ashlar (unworked stone), representing the initiate's 
                    unrefined nature, and the 24-inch gauge, teaching the proper division of time between work, rest, and service.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">Fellow Craft</h3>
                  <p className="text-foreground/80">
                    The second degree symbolizes adulthood and education. It emphasizes the importance of liberal arts and sciences in 
                    developing the mind. Central symbols include the winding staircase, representing progressive advancement in knowledge, 
                    and the pillars Boaz and Jachin, symbolizing strength and establishment, as described in the biblical Temple of Solomon.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">Master Mason</h3>
                  <p className="text-foreground/80">
                    The third degree deals with death and rebirth. It centers around the legend of Hiram Abiff, the chief architect of 
                    Solomon's Temple, teaching lessons about fidelity to one's principles even in the face of death. The perfect ashlar 
                    (smoothed stone) represents the Master Mason's refined character, while the trowel symbolizes the spreading of brotherly 
                    love that unites Masons into a harmonious community.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Historical Development</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-accent mb-1">Operative to Speculative (1300s-1700s)</h3>
                  <p className="text-foreground/80">
                    Freemasonry evolved from guilds of actual stonemasons who built medieval cathedrals and castles. By the late 17th century, 
                    these guilds began accepting non-masons ("accepted" or "speculative" Masons) interested in the philosophical aspects of the craft. 
                    The transition was complete with the formation of the Grand Lodge of England in 1717.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Expansion and Growth (1700s-1800s)</h3>
                  <p className="text-foreground/80">
                    Masonry spread rapidly throughout Europe and to the American colonies, attracting intellectuals, aristocrats, and 
                    merchants. The ideals of brotherhood and enlightenment resonated with Enlightenment-era thinkers. Various additional 
                    degrees and rites developed, including the Scottish and York Rites.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Golden Age and Challenges (1800s-1900s)</h3>
                  <p className="text-foreground/80">
                    The 19th century saw Freemasonry's greatest popularity, with lodges established worldwide. However, it also faced 
                    opposition from religious institutions, particularly the Catholic Church, and political movements concerned about 
                    its secrecy and influence. The Anti-Masonic Party even emerged briefly in American politics.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Modern Era (1900s-Present)</h3>
                  <p className="text-foreground/80">
                    While membership peaked in the mid-20th century and has since declined in many countries, Freemasonry continues as a 
                    significant fraternal organization worldwide. Today's Masons emphasize charitable work, self-improvement, and fellowship, 
                    while working to preserve their traditions and adapt to changing social contexts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Masonic Symbolism</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <p className="mb-4 text-foreground/90 leading-relaxed">
                    Freemasonry communicates its teachings through an intricate system of symbols derived from architectural tools, 
                    geometry, and ancient traditions. These symbols carry multiple layers of meaning that are progressively revealed 
                    to members through ritual and contemplation.
                  </p>
                  <p className="mb-4 text-foreground/90 leading-relaxed">
                    The Square and Compass, the most recognizable Masonic emblem, represents the interplay between matter (square) and spirit 
                    (compass). The square teaches Masons to act with moral rectitude toward all humanity, while the compass reminds them to 
                    circumscribe their desires and maintain proper boundaries in all actions.
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    The letter "G" often found between the Square and Compass has dual meanings: Geometry, considered the most essential science 
                    for understanding the order of the universe, and God (or Grand Architect), the supreme being at the center of Masonic 
                    reverence. Other important symbols include the all-seeing eye (divine watchfulness), the checkered pavement (duality of 
                    human existence), and acacia (immortality of the soul).
                  </p>
                </div>
                
                <div className="md:w-1/3 flex justify-center items-center">
                  <div className="relative w-full max-w-[180px]">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                      {/* Simple Square and Compass */}
                      <path d="M100 40 L160 140 L40 140 Z" stroke="hsl(45 100% 60%)" strokeWidth="1" fill="none" />
                      <path d="M65 140 L135 140" stroke="hsl(45 100% 60%)" strokeWidth="3" />
                      <text x="93" y="110" fill="hsl(45 100% 60%)" fontSize="36" fontFamily="serif">G</text>
                    </svg>
                    <div className="absolute inset-0 bg-accent/5 rounded-full blur-xl -z-10"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Appendant Bodies</h2>
              <ul className="space-y-4">
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Scottish Rite</h3>
                  <p className="text-foreground/80">A system of 29 additional degrees (4°-33°) beyond the Master Mason degree, organized into philosophical teachings about human knowledge and character development.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">York Rite</h3>
                  <p className="text-foreground/80">Three separate bodies (Chapter, Council, and Commandery) conferring degrees emphasizing Judeo-Christian traditions, particularly the Temple of Solomon and Christian knighthood.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Shriners</h3>
                  <p className="text-foreground/80">The Ancient Arabic Order of the Nobles of the Mystic Shrine, known for charitable work, especially their children's hospitals, and their distinctive red fezzes.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Order of the Eastern Star</h3>
                  <p className="text-foreground/80">A Masonic-affiliated organization open to both men and women, with rituals based on biblical female heroines and teachings of service and charity.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <blockquote className="border-l-4 border-accent/50 pl-6 py-4 italic text-xl text-muted-foreground max-w-3xl mx-auto mb-12 bg-card/30 backdrop-blur-sm rounded-r-md">
          "We represent a fraternity which believes in justice and truth and honorable action in your community... men who are endeavoring to be better citizens... to make a great country greater."
          <span className="text-sm not-italic block mt-2 text-accent/80">— Harry S. Truman, 33° Freemason</span>
        </blockquote>
      </div>
    </MainLayout>
  );
} 