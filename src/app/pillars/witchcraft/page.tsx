import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Moon, BookOpen, Flame, FlaskConical, Star, User, Rainbow } from 'lucide-react';

export default function WitchcraftPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative elements */}
        <div className="absolute top-32 right-10 w-20 h-20 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <polygon points="50,0 61,35 97,35 68,57 79,91 50,70 21,91 32,57 3,35 39,35" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="absolute bottom-32 left-10 w-24 h-24 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="49" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50 0 v100 M0 50 h100 M14.6 14.6 L85.4 85.4 M14.6 85.4 L85.4 14.6" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="text-center mb-12">
          <div className="mb-4">
            <Sparkles className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Witchcraft</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An ancient and evolving spiritual practice centered on the cultivation of personal power, connection with nature, 
            and the art of manifesting change through ritual, herbalism, and sympathetic magic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">The Ancient Craft of the Wise</h2>
              <p className="mb-4">
                Witchcraft stands as one of humanity's oldest spiritual traditions, with its roots extending deep into prehistoric times 
                when our ancestors first sought to understand and influence the natural forces that governed their lives. The word "witch" 
                derives from the Old English "wicce" (feminine) and "wicca" (masculine), terms that originally meant "wise one" or 
                "one who knows."
              </p>
              <p className="mb-4">
                Throughout history, witchcraft has taken countless forms across cultures worldwide, from the village cunningfolk 
                of medieval Europe to the traditional healers of indigenous societies, from the ceremonial magicians of Renaissance 
                courts to the modern practitioners of Wicca and other contemporary pagan movements. Despite this diversity, certain 
                core elements have remained consistent: a reverence for nature, knowledge of herbs and healing, and the belief that 
                humans can directly interact with subtle energies to create change.
              </p>
              <p className="mb-4">
                The history of witchcraft has also been marked by persecution. During the European witch hunts (approximately 1450-1750), 
                thousands of individuals—primarily women—were accused, tortured, and executed based on fears of diabolical magic. Modern 
                scholarship suggests that many of those persecuted were healers, midwives, and keepers of folk wisdom who existed at the 
                margins of Christian society. This dark chapter has become an important part of witchcraft's modern identity, informing 
                its themes of personal sovereignty and resistance to oppression.
              </p>
              <p>
                In the 20th century, witchcraft experienced a remarkable renaissance. The repeal of the last anti-witchcraft laws in 
                England in 1951 allowed Gerald Gardner to publicly establish Wicca as a formal spiritual path. Simultaneously, feminist 
                and environmental movements reclaimed the witch as a symbol of female power and ecological wisdom. Today, witchcraft 
                flourishes as a diverse set of practices that blend ancient traditions with contemporary insights, offering spiritual 
                tools for navigating our complex world.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Core Practices</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Moon className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Ritual & Spellcraft</span> - Creating sacred space and working with correspondences, intentions, and natural cycles to manifest change</span>
                  </li>
                  <li className="flex items-start">
                    <Flame className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Energy Work</span> - Developing awareness of and ability to direct subtle energies through visualization, focused intention, and symbolic tools</span>
                  </li>
                  <li className="flex items-start">
                    <FlaskConical className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Herbalism</span> - Working with plants for healing, magic, and connection with the natural world's wisdom</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Notable Figures</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <User className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Gerald Gardner (1884-1964)</span> - Founder of modern Wicca who codified many practices still used today</span>
                  </li>
                  <li className="flex items-start">
                    <User className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Doreen Valiente (1922-1999)</span> - High Priestess who wrote much of Wiccan liturgy and emphasized the divine feminine</span>
                  </li>
                  <li className="flex items-start">
                    <User className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Starhawk (b. 1951)</span> - Influential teacher who blended witchcraft with environmental activism and feminist spirituality</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Major Traditions</h2>
              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-accent mb-1">Wicca</h3>
                  <p className="text-foreground/80">
                    A modern pagan religion founded in the mid-20th century that combines ancient pagan elements with ceremonial magic. 
                    Wicca typically honors a Goddess and God, follows the Wheel of the Year with eight seasonal sabbats, and practices 
                    magic within a ritual circle. Many Wiccans follow the ethical guideline "An it harm none, do what ye will" (the Wiccan Rede) 
                    and believe in the threefold return of energy. While originally practiced in covens with formal initiation, 
                    solitary practice has become equally common.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Traditional Witchcraft</h3>
                  <p className="text-foreground/80">
                    Encompasses various non-Wiccan practices that claim older lineages or draw inspiration from historical folk magic 
                    and pre-modern magical systems. These traditions often emphasize working with the spirits of the land, ancestral practices, 
                    and practical magic. Unlike Wicca, traditional witchcraft may not use a formal circle, may work with a different cosmology, 
                    and may have distinctive approaches to ethics. Examples include Cochrane's Craft, the Cultus Sabbati, and various regional 
                    folk traditions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Hereditary Witchcraft</h3>
                  <p className="text-foreground/80">
                    Practices passed down through family lines, often incorporating regional folk magic, herbalism, and healing techniques. 
                    These traditions are typically eclectic in nature, blending cultural elements according to family history and 
                    migration patterns. Practices may include weather working, healing, protection magic, and divination using methods 
                    specific to the family tradition.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Reconstructionist Traditions</h3>
                  <p className="text-foreground/80">
                    Focus on reviving the historical magical and religious practices of specific cultures through scholarly research. 
                    These may include Hellenic, Norse, Celtic, or Slavic reconstructionism among others. Practitioners aim for historical 
                    accuracy while adapting ancient ways to modern contexts, often working with culturally specific deities, ritual formats, 
                    and magical techniques.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Kitchen/Cottage Witchcraft</h3>
                  <p className="text-foreground/80">
                    Centers practice in the home and daily life, emphasizing practical magic for hearth and home. Practitioners weave magic 
                    into cooking, cleaning, gardening, and other domestic activities, often using readily available herbs, foods, and household 
                    items as magical tools. This accessible approach focuses on improving everyday life through small, consistent magical acts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Tools of the Craft</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Throughout history, witches have employed various tools to focus intention, direct energy, and create a bridge 
                between the physical and spiritual realms. While the specific implements may vary between traditions, certain 
                classic witch's tools have endured across time and culture.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-accent mb-1">The Athame & Wand</h3>
                  <p className="text-foreground/80">
                    The athame (ritual knife) and wand represent the elements of air and fire respectively. The athame is used 
                    for directing energy and casting circles, never for physical cutting. The wand, often made from wood with 
                    magical associations, serves as an extension of the practitioner's will and a tool for invocation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">The Cauldron & Cup</h3>
                  <p className="text-foreground/80">
                    Associated with water and the feminine divine, these vessels represent transformation and receptivity. The 
                    cauldron symbolizes the womb of the Goddess, a place of rebirth and magical brewing. The cup or chalice holds 
                    ritual beverages and represents the element of water in ceremony.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">The Pentacle</h3>
                  <p className="text-foreground/80">
                    A five-pointed star enclosed in a circle, typically inscribed on a disc of wood, metal, or clay. This tool 
                    represents the element of earth and serves as a platform for consecrating objects, focusing energy, and 
                    providing protection. The five points symbolize the elements plus spirit, unified in perfect balance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">The Book of Shadows</h3>
                  <p className="text-foreground/80">
                    A witch's personal grimoire or magical journal containing rituals, spells, recipes, and magical knowledge. 
                    Traditionally hand-copied and kept secret, modern Books of Shadows may be personalized, creative expressions 
                    of a practitioner's unique path, containing both traditional lore and personal innovations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Natural Tools</h3>
                  <p className="text-foreground/80">
                    Beyond crafted implements, witches work with natural objects as magical tools, including crystals, herbs, 
                    feathers, bones, shells, and stones. These items connect the practitioner with elemental forces and the 
                    spirits of nature, serving as bridges between worlds and repositories of natural energy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Wheel of the Year</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Many witches, particularly those following Wiccan and Neo-Pagan paths, observe an eightfold cycle of festivals 
                known as the Wheel of the Year. This calendar harmonizes with natural cycles and provides a framework for 
                regular spiritual practice and celebration. Each sabbat (festival) carries unique energies and teachings.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Samhain (October 31/November 1)</h3>
                  <p className="text-foreground/80">
                    Often considered the witch's new year, Samhain marks when the veil between worlds is thinnest. A time for 
                    honoring ancestors, divination, and reflection on mortality and rebirth. Many traditions believe this is 
                    the best time for communication with the dead and deep magical workings.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Yule (December 21-22)</h3>
                  <p className="text-foreground/80">
                    The winter solstice celebrates the rebirth of the sun and the return of light. Witches honor the cycle of 
                    death and rebirth, working with evergreens as symbols of eternal life and lighting candles to strengthen the 
                    returning sun. Traditional magic focuses on protection, peace, and setting intentions for the coming year.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Imbolc (February 1-2)</h3>
                  <p className="text-foreground/80">
                    Honoring the goddess Brighid, Imbolc celebrates the first stirrings of spring. This festival focuses on 
                    purification, inspiration, and the kindling of creative and spiritual fires. Traditional activities include 
                    candle magic, blessing seeds for spring planting, and creating Brighid crosses for protection.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Ostara (March 20-21)</h3>
                  <p className="text-foreground/80">
                    The spring equinox celebrates perfect balance between light and dark, with light increasing. Magical work 
                    focuses on new beginnings, fertility, and manifestation. Eggs and rabbits—ancient symbols of fertility and 
                    abundance—feature prominently in rituals and altar decorations.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Beltane (May 1)</h3>
                  <p className="text-foreground/80">
                    A fire festival celebrating vitality, passion, and the full bloom of spring. Traditional practices include 
                    jumping bonfires for purification and blessing, dancing the maypole (symbolizing the union of masculine and 
                    feminine energies), and handfasting (ritual marriage). Magic focuses on love, fertility, and abundance.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Litha (June 20-21)</h3>
                  <p className="text-foreground/80">
                    The summer solstice marks the sun at its zenith and the longest day. Witches celebrate the triumph of light 
                    while acknowledging the coming return to darkness. Magic harnesses peak solar energies for empowerment, 
                    healing, and fire magic. Many gather herbs at this time, believing they reach their highest potency.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Lughnasadh/Lammas (August 1)</h3>
                  <p className="text-foreground/80">
                    The first harvest festival honors ripening grain and fruits. Witches bake bread as a magical act, give offerings 
                    of first fruits, and contemplate what they are harvesting in their own lives. Magical work focuses on abundance, 
                    skill development, and gratitude for life's blessings.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Mabon (September 22-23)</h3>
                  <p className="text-foreground/80">
                    The autumn equinox balances light and dark before night predominates. This second harvest festival focuses on 
                    gratitude, balance, and preparation for the darker half of the year. Witches perform magic for balance, protection 
                    during the coming winter, and the release of what no longer serves them.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Core Concepts</h2>
              <ul className="space-y-4">
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Magic as Natural Law</h3>
                  <p className="text-foreground/80">
                    Most witches view magic not as supernatural, but as working with subtle energies and forces that exist within 
                    nature itself. Magic operates according to consistent principles like the law of correspondence ("as above, so below"), 
                    the law of similarity, and the law of contagion. Rather than violating natural law, magical practice involves 
                    understanding and working with deeper layers of reality.
                  </p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">The Elements</h3>
                  <p className="text-foreground/80">
                    Earth, air, fire, water, and spirit (or ether) form the foundational energies with which witches work. Each element 
                    corresponds to directions, tools, seasons, times of life, and aspects of self. Balancing and harmonizing these forces 
                    within oneself and one's environment is a central magical practice, creating wholeness and alignment.
                  </p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">The Power of Intention</h3>
                  <p className="text-foreground/80">
                    The focused will of the practitioner drives magical work. Rituals, tools, and ingredients serve primarily to focus 
                    and amplify intention. Many traditions teach that magic follows thought, emphasizing the responsibility to maintain 
                    mental discipline and clarity of purpose. The phrase "energy follows thought" summarizes this principle.
                  </p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Magical Ethics</h3>
                  <p className="text-foreground/80">
                    Various ethical frameworks guide witchcraft practice, from the Wiccan Rede's harm-minimizing principle to traditional 
                    concepts of right relationship and balance. Many witches believe in some form of energetic return, whether the 
                    Threefold Law of Return or simply karma. These ethics emphasize personal responsibility and awareness of the 
                    consequences of magical actions.
                  </p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Animism & Spirit Work</h3>
                  <p className="text-foreground/80">
                    Many witchcraft traditions embrace an animistic worldview, recognizing consciousness in all things. Practitioners 
                    develop relationships with plant spirits, animal allies, land wights, ancestors, deities, and other non-physical beings. 
                    These relationships form a core part of magical practice, providing guidance, protection, and assistance with magical work.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary text-center">Contemporary Witchcraft</h2>
              <div className="max-w-4xl mx-auto">
                <p className="mb-4 text-foreground/90 leading-relaxed">
                  The 21st century has seen a remarkable resurgence of interest in witchcraft, with the practice evolving to 
                  address contemporary concerns while maintaining connections to historical traditions. Social media has 
                  transformed how witchcraft knowledge is shared, creating virtual communities that transcend geographical 
                  boundaries. This digital renaissance has made witchcraft more accessible than ever, with countless resources 
                  available to anyone with internet access.
                </p>
                <p className="mb-4 text-foreground/90 leading-relaxed">
                  Today's witches often blend traditional practices with modern concerns, addressing issues like environmental 
                  activism, social justice, mental health, and personal empowerment. Many contemporary practitioners approach 
                  witchcraft as a form of resistance against patriarchal, colonial, and capitalist systems, reclaiming practices 
                  that honor the earth, the body, and indigenous wisdom traditions (while being mindful of cultural appropriation).
                </p>
                <p className="mb-4 text-foreground/90 leading-relaxed">
                  The aesthetic of witchcraft has gained mainstream popularity, influencing fashion, art, music, and literature. 
                  Beyond mere style, this represents a deeper cultural shift toward values associated with witchcraft: ecological 
                  awareness, feminist empowerment, and spiritual autonomy. Simultaneously, practitioners continue to develop more 
                  grounded, research-based approaches to magical practice, exploring the psychological, sociological, and even 
                  quantum mechanical underpinnings of magical efficacy.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  As we face global challenges from climate change to social inequality, witchcraft offers practical and spiritual 
                  tools for both personal transformation and collective action. Its emphasis on the sacredness of nature, the power 
                  of intention, and the potential for magical change resonates deeply in a time when new paradigms are urgently needed. 
                  Whether practiced as religion, craft, or revolutionary praxis, witchcraft continues to evolve while maintaining its 
                  essential character as a path of wisdom, power, and transformation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <blockquote className="border-l-4 border-accent/50 pl-6 py-4 italic text-xl text-muted-foreground max-w-3xl mx-auto mb-12 bg-card/30 backdrop-blur-sm rounded-r-md">
          "The first time I called myself a 'Witch' was the most magical moment of my life."
          <span className="text-sm not-italic block mt-2 text-accent/80">— Margot Adler</span>
        </blockquote>
      </div>
    </MainLayout>
  );
} 