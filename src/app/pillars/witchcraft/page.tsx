import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Wand, Flame, PenTool, Flask, Scroll, Heart, Sparkles } from 'lucide-react';

export default function WitchcraftPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-20 h-20 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M50 10 L50 90" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M10 50 L90 50" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M22 22 L78 78" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
            <path d="M22 78 L78 22" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="absolute bottom-32 right-10 w-24 h-24 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <polygon points="50,10 61,35 90,35 65,55 75,80 50,65 25,80 35,55 10,35 39,35" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="text-center mb-12">
          <div className="mb-4">
            <Wand className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Witchcraft</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The ancient and evolving tradition of folk magic, nature wisdom, and feminine spiritual power 
            that has persisted throughout history in various forms around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">The Path of the Witch</h2>
              <p className="mb-4">
                Witchcraft represents one of humanity's oldest spiritual traditions, embracing the powers of nature, 
                intuitive wisdom, and the sacred feminine. Though persecuted and misunderstood throughout much of recorded 
                history, witchcraft has persisted as both a spiritual path and a practical tradition of folk healing, 
                divination, and natural magic.
              </p>
              <p className="mb-4">
                The term "witch" derives from Old English "wicce" (feminine) and "wicca" (masculine), 
                meaning "wise one" or "one who works with natural energies." Across cultures and throughout history, 
                those who practiced witchcraft were often community healers, midwives, seers, and keepers of 
                pre-Christian traditions and nature-based spirituality.
              </p>
              <p className="mb-4">
                Far from the harmful stereotypes perpetuated during the witch hunts of the medieval and early modern 
                periods, historical witchcraft was primarily concerned with healing, protection, fertility, and 
                divination—the practical needs of agricultural communities living close to the land.
              </p>
              
              <h3 className="text-xl font-esoterica mt-8 mb-4 text-secondary">Modern Witchcraft & Wicca</h3>
              <p className="mb-4">
                In the mid-20th century, modern witchcraft experienced a revival with the emergence of Wicca, 
                a contemporary Pagan religious movement initiated by Gerald Gardner in the 1950s. Wicca draws 
                on various historical traditions but is largely a modern creation that emphasizes nature reverence, 
                ritual practice, and a duotheistic theology featuring a Goddess and God who embody the divine 
                feminine and masculine principles.
              </p>
              <p className="mb-4">
                Wicca is characterized by its ritual calendar of eight seasonal festivals (the Wheel of the Year), 
                its ethical principle of "An it harm none, do what ye will" (the Wiccan Rede), and its belief in 
                magic as a natural force that can be directed through ritual, visualization, and focused intention.
              </p>
              <p className="mb-4">
                Today, witchcraft encompasses diverse traditions, including Wicca, Traditional Witchcraft, Green Witchcraft, 
                Kitchen Witchery, and various cultural traditions from around the world. What unites these paths is a 
                reverence for nature, an acknowledgment of personal spiritual authority, and a practical approach to 
                working with subtle energies.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Practices</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Flame className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Ritual Magic</span> - Ceremonial practices to honor deities, mark seasonal transitions, and work with energy</span>
                  </li>
                  <li className="flex items-start">
                    <PenTool className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Herbalism</span> - Working with plants for healing, protection, and spiritual purposes</span>
                  </li>
                  <li className="flex items-start">
                    <Flask className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Divination</span> - Various methods of seeking insight or prophecy, including tarot, runes, and scrying</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Historical Traditions</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Scroll className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Völva (Norse)</span> - Female shamans and seers who carried wands of power in Viking societies</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Wise Women</span> - Rural healers, midwives, and folk practitioners throughout European history</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Cunning Folk</span> - Professional practitioners of folk magic in Britain from the Medieval period through the early 20th century</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Völva: Norse Magic Workers</h2>
              <p className="mb-4">
                In Norse society, the Völva (plural: völur) was a highly respected female practitioner of seiðr, 
                a form of pre-Christian Norse magic concerned with telling and shaping the future. The name literally 
                means "wand carrier" or "staff bearer," indicating the ritual importance of these implements.
              </p>
              <p className="mb-4">
                Völur were powerful seers who traveled between communities, performing divination rituals and 
                prophecy. They occupied a unique position in Norse society—feared yet sought after for their abilities. 
                Archaeological evidence from female graves containing ritual staffs, amulets, and other magical items 
                confirms their historical existence.
              </p>
              <p>
                The most famous depiction of a völva appears in the Saga of Erik the Red, where a seeress named Thorbjorg 
                performs a ritual to end a famine in Greenland. She wears a distinctive costume including a blue cloak, 
                a headdress of black lamb trimmed with white cat skin, and carries a staff adorned with brass and precious stones.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Wise Women & Cunning Folk</h2>
              <p className="mb-4">
                Throughout European history, "wise women" served their communities as herbalists, 
                midwives, and healers. They possessed extensive knowledge of plants, folk remedies, and 
                natural cycles, passed down through generations often from mother to daughter.
              </p>
              <p className="mb-4">
                During the medieval and early modern periods, these practitioners existed in a precarious 
                position. While valued for their healing abilities and practical knowledge, they could 
                be vulnerable to accusations of malefic witchcraft, especially during times of social stress 
                or misfortune.
              </p>
              <p>
                The "cunning folk" of Britain occupied a similar space, offering services including healing, 
                finding lost objects, fortune-telling, and protection against witchcraft. Unlike the stereotypical 
                witches of popular imagination, cunning folk were considered beneficial to their communities, 
                though their practices often blended Christian prayers with pre-Christian magical formulas and beliefs.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="p-6 bg-card/30 backdrop-blur-sm border border-accent/10 rounded-lg text-center">
          <p className="text-lg text-muted-foreground">
            "The witch represents the female principle in its uncontrolled, undominated form, and the repression of the witch is the repression of that part in all of us."
          </p>
          <p className="mt-2 text-accent">— Starhawk, <em>The Spiral Dance</em></p>
        </div>
      </div>
    </MainLayout>
  );
} 