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

        <blockquote className="border-l-4 border-accent pl-6 py-4 italic text-xl text-muted-foreground max-w-3xl mx-auto mb-12 bg-card/30 backdrop-blur-sm rounded-r-md">
          "The highest wisdom is to know nothing." <br />
          <span className="text-sm not-italic block mt-2 text-accent/80">- Attributed to Christian Rosenkreuz</span>
        </blockquote>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Rosicrucian Manifestos</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The Rosicrucian movement emerged publicly with the publication of three anonymous manifestos in the early 17th century that sent 
                shockwaves through European intellectual circles. These texts introduced the story of Christian Rosenkreuz and the Brotherhood of the Rosy Cross:
              </p>
              
              <div className="space-y-6 mt-6">
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">Fama Fraternitatis (1614)</h3>
                  <p className="text-foreground/80">
                    The "Fame of the Brotherhood" tells the life story of Christian Rosenkreuz (1378-1484), who journeyed to the Middle East 
                    and North Africa, learning secret wisdom from sages in Damascus, Egypt, and Morocco. Upon returning to Europe, he founded 
                    the "Fraternity of the Rose Cross" with a small group of disciples. After his death, his tomb remained hidden for 120 years 
                    before being discovered by the Brotherhood, perfectly preserved and containing secret knowledge.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">Confessio Fraternitatis (1615)</h3>
                  <p className="text-foreground/80">
                    The "Confession of the Brotherhood" expanded on the Fama, outlining the Brotherhood's goals for reforming society, science, 
                    philosophy, and religion. It emphasized the impending dawn of a new age of enlightenment and the Brotherhood's role in 
                    this universal reformation, while also criticizing the corruptions of contemporary religious and political institutions.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">The Chemical Wedding of Christian Rosenkreuz (1616)</h3>
                  <p className="text-foreground/80">
                    This allegorical romance describes Christian Rosenkreuz's journey to a mysterious castle to attend the wedding of a king and queen. 
                    Written as a complex alchemical allegory, the text describes processes of spiritual purification, death, and rebirth through symbolic 
                    trials and transformations. Unlike the first two manifestos, it was later acknowledged to be written by Johann Valentin Andreae.
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
                  <h3 className="font-semibold text-accent mb-1">The Rosicrucian Furor (1614-1625)</h3>
                  <p className="text-foreground/80">
                    Following the publication of the manifestos, a "Rosicrucian fever" swept Europe. Hundreds of pamphlets and books were published 
                    either in support of or against the Brotherhood. Despite many attempts, no one could locate the actual Rosicrucian order, leading 
                    some scholars to suggest it was a "ludibrium" (playful hoax) with serious philosophical intent.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Influence on Early Science (17th Century)</h3>
                  <p className="text-foreground/80">
                    Rosicrucian ideas influenced early scientific thinking through figures like Robert Boyle, Elias Ashmole, and possibly members of the 
                    Royal Society. The concept of the "invisible college" of learned individuals working toward knowledge advancement paralleled the 
                    development of scientific societies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Integration with Freemasonry (18th Century)</h3>
                  <p className="text-foreground/80">
                    During the 18th century, Rosicrucian elements were incorporated into various Masonic rites and high-degree systems. The Gold- und 
                    Rosenkreuzer order in Germany claimed Rosicrucian heritage and influenced the development of various mystical Masonic systems.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Modern Revival (19th-20th Century)</h3>
                  <p className="text-foreground/80">
                    The 19th century saw numerous revival attempts, including the Societas Rosicruciana in Anglia (1866) and the Hermetic Order of the 
                    Golden Dawn (1888). In the early 20th century, organizations like AMORC (Ancient Mystical Order Rosae Crucis), founded by H. Spencer 
                    Lewis in 1915, and Max Heindel's Rosicrucian Fellowship (1909) popularized Rosicrucian teachings for modern audiences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Rosicrucian Symbolism</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <p className="mb-4 text-foreground/90 leading-relaxed">
                    The central emblem of Rosicrucianism—the Rose Cross—contains layers of symbolic meaning. The cross represents the physical world, 
                    matter, and the four elements. The rose, blooming at the center, symbolizes unfolding consciousness, divine love, and spiritual 
                    awakening emerging from material existence.
                  </p>
                  <p className="mb-4 text-foreground/90 leading-relaxed">
                    The rose typically bears seven petals, representing the seven classical planets, the seven alchemical metals, and the seven stages 
                    of spiritual transformation. The combination of rose and cross represents the reconciliation of opposites: spirit and matter, 
                    masculine and feminine, mortality and immortality.
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    The legendary Vault of Christian Rosenkreuz, described in the Fama Fraternitatis, contains potent symbolic elements. The circular 
                    vault with seven sides represents celestial perfection. Each wall corresponds to a planet and contains symbolic illustrations and 
                    magical formulae. At the center stands an altar with secret inscriptions revealing cosmic mysteries.
                  </p>
                </div>
                
                <div className="md:w-1/3 flex justify-center items-center">
                  <div className="relative w-full max-w-[180px]">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                      {/* Simple Rose Cross */}
                      <rect x="90" y="40" width="20" height="120" fill="none" stroke="hsl(45 100% 60%)" strokeWidth="1" />
                      <rect x="40" y="90" width="120" height="20" fill="none" stroke="hsl(45 100% 60%)" strokeWidth="1" />
                      <circle cx="100" cy="100" r="30" fill="none" stroke="hsl(345 80% 50%)" strokeWidth="1" />
                      
                      {/* Rose petals */}
                      <path d="M100 70 Q110 85 100 100 Q90 85 100 70" fill="none" stroke="hsl(345 80% 50%)" strokeWidth="0.5" />
                      <path d="M100 100 Q110 115 100 130 Q90 115 100 100" fill="none" stroke="hsl(345 80% 50%)" strokeWidth="0.5" />
                      <path d="M70 100 Q85 110 100 100 Q85 90 70 100" fill="none" stroke="hsl(345 80% 50%)" strokeWidth="0.5" />
                      <path d="M100 100 Q115 110 130 100 Q115 90 100 100" fill="none" stroke="hsl(345 80% 50%)" strokeWidth="0.5" />
                      <path d="M85 85 Q95 95 100 100 Q90 95 85 85" fill="none" stroke="hsl(345 80% 50%)" strokeWidth="0.5" />
                      <path d="M115 115 Q105 105 100 100 Q110 105 115 115" fill="none" stroke="hsl(345 80% 50%)" strokeWidth="0.5" />
                      <path d="M85 115 Q95 105 100 100 Q90 105 85 115" fill="none" stroke="hsl(345 80% 50%)" strokeWidth="0.5" />
                      <path d="M115 85 Q105 95 100 100 Q110 95 115 85" fill="none" stroke="hsl(345 80% 50%)" strokeWidth="0.5" />
                      
                      <circle cx="100" cy="100" r="10" fill="none" stroke="hsl(345 80% 50%)" strokeWidth="0.5" />
                    </svg>
                    <div className="absolute inset-0 bg-accent/5 rounded-full blur-xl -z-10"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Modern Organizations</h2>
              <ul className="space-y-4">
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">AMORC</h3>
                  <p className="text-foreground/80">The Ancient Mystical Order Rosae Crucis, founded by H. Spencer Lewis in 1915, offers a structured system of monographs exploring mystical principles.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Rosicrucian Fellowship</h3>
                  <p className="text-foreground/80">Founded by Max Heindel in 1909, it emphasizes Christian esotericism, astrology, and healing, based on teachings allegedly received from Elder Brothers of the Rose Cross.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Lectorium Rosicrucianum</h3>
                  <p className="text-foreground/80">Established by Jan van Rijckenborgh in 1924, it focuses on the path of transfiguration and spiritual rebirth through what it calls the "Gnostic-Christian mysteries."</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">SRIA</h3>
                  <p className="text-foreground/80">The Societas Rosicruciana in Anglia, founded in 1866, is a Masonic Rosicrucian society dedicated to the study of metaphysics and the spiritual sciences.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
} 