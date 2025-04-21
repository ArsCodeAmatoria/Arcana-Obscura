import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, User, Trees, Compass, BookOpen, Sparkles } from 'lucide-react';

export default function DruidryPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-20 h-20 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="50" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50 10 L50 90" stroke="currentColor" strokeWidth="0.5" />
            <path d="M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
            <path d="M20 20 L80 80" stroke="currentColor" strokeWidth="0.5" />
            <path d="M20 80 L80 20" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="absolute bottom-32 right-10 w-24 h-24 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50 0 L50 100" stroke="currentColor" strokeWidth="0.5" />
            <path d="M0 50 L100 50" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="text-center mb-12">
          <div className="mb-4">
            <Leaf className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Druidry</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An ancient Celtic spiritual tradition revived in modern times, centered on reverence for nature, 
            ancestral wisdom, and the cultivation of a harmonious relationship with all beings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">The Path of the Oak</h2>
              <p className="mb-4">
                Druidry represents one of the oldest indigenous spiritual traditions of Europe, originating among the Celtic peoples 
                who once inhabited much of the continent. The word "Druid" likely comes from the Celtic term "dru-wid," meaning 
                "oak knowledge" or "oak wisdom," reflecting the sacred status of oak trees in Celtic culture and the Druid's role 
                as keeper of wisdom.
              </p>
              <p className="mb-4">
                Historical Druids served as the religious leaders, judges, lore-keepers, healers, and advisors to Celtic society. 
                They underwent extensive training, reportedly lasting up to twenty years, during which they memorized vast amounts 
                of oral tradition including history, law, poetry, astronomy, and religious teachings—for the Druids left no written 
                records of their esoteric knowledge.
              </p>
              <p className="mb-4">
                With the Roman conquest of Celtic territories and later Christian conversion, the ancient Druidic tradition largely disappeared. 
                However, beginning in the 18th century, a revival of interest in Celtic heritage led to the reconstruction and reimagining 
                of Druidry as a nature-based spiritual practice. This revival has continued to evolve, drawing inspiration from historical 
                accounts, archaeological evidence, comparative mythology, and indigenous wisdom traditions worldwide.
              </p>
              <p>
                Modern Druidry encompasses diverse approaches, from reconstructionist paths seeking to reclaim authentic Celtic practices 
                to more eclectic forms incorporating elements from various wisdom traditions. Despite these differences, contemporary 
                Druids generally share a deep reverence for nature, commitment to personal spiritual development, and dedication to 
                serving their communities and the Earth.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Core Practices</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Trees className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Nature Connection</span> - Developing deep, reciprocal relationships with the natural world through regular time outdoors and mindful awareness</span>
                  </li>
                  <li className="flex items-start">
                    <Compass className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Seasonal Celebrations</span> - Observing the eight festivals of the Wheel of the Year that mark the solar and agricultural cycles</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Ritual & Ceremony</span> - Creating sacred space and performing ceremonies that honor the elements, ancestors, and deities</span>
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
                    <span><span className="font-semibold">Iolo Morganwg (1747-1826)</span> - Welsh antiquarian and key figure in the Druid revival who founded the Gorsedd of Bards</span>
                  </li>
                  <li className="flex items-start">
                    <User className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Ross Nichols (1902-1975)</span> - Founder of the Order of Bards, Ovates and Druids (OBOD) who established the modern Eightfold Wheel of the Year</span>
                  </li>
                  <li className="flex items-start">
                    <User className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Philip Carr-Gomm</span> - Former Chosen Chief of OBOD who significantly expanded Druidry's global presence through accessible teachings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Historical Development</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-accent mb-1">Ancient Druids (Pre-Roman Era)</h3>
                  <p className="text-foreground/80">
                    Our understanding of ancient Druids comes primarily from Greek and Roman accounts, archaeological evidence, and 
                    linguistic studies. Classical writers like Julius Caesar described Druids as learned philosophers who studied 
                    astronomy, natural philosophy, ethics, and theology. They served as mediators between the human and divine realms, 
                    presiding over sacrifices and enforcing moral and legal codes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">The Long Silence (1st-17th Centuries)</h3>
                  <p className="text-foreground/80">
                    With Roman conquest and later Christian conversion, Druidic practices were suppressed or absorbed into new cultural contexts. 
                    The tradition went underground, with some elements potentially preserved in folklore, bardic traditions, and practices 
                    of rural "wise folk." During this period, Druids became figures of legend rather than living practitioners.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Romantic Revival (18th-19th Centuries)</h3>
                  <p className="text-foreground/80">
                    Interest in Druids resurged during the Romantic period as part of a broader fascination with national origin stories and 
                    ancient wisdom. Antiquarians and early folklorists began studying megalithic monuments, speculating about their connections 
                    to Druidic practices. Fraternal organizations like the Ancient Order of Druids formed, emphasizing moral philosophy and fellowship.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Modern Resurgence (20th Century-Present)</h3>
                  <p className="text-foreground/80">
                    The 20th century saw the emergence of Druidry as a coherent spiritual path, with the founding of organizations like 
                    The Order of Bards, Ovates and Druids (1964) and the British Druid Order (1979). The environmental movement, interest 
                    in Celtic heritage, and the broader Pagan revival provided cultural contexts for Druidry's growth as a nature-based spirituality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Three Branches</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Many modern Druid orders organize their teaching and training along three traditional branches, each representing a 
                distinct but complementary path of wisdom, service, and spiritual development.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">The Path of the Bard</h3>
                  <p className="text-foreground/80">
                    Bards cultivate creative inspiration and expression through poetry, storytelling, music, and art. They preserve cultural 
                    memory and wisdom through oral tradition, serving as the voice and heart of Druidic practice. The bardic arts are not 
                    merely for entertainment but are understood as magical practices that can shape consciousness and connect with the Otherworld. 
                    Modern bards study ancient tales, develop performance skills, and practice the art of spontaneous inspiration (Awen).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">The Path of the Ovate</h3>
                  <p className="text-foreground/80">
                    Ovates delve into the mysteries of nature, developing skills in healing, divination, and deep ecological knowledge. 
                    They study herbalism, sacred geography, animal lore, and the hidden patterns of natural cycles. This branch emphasizes 
                    direct communion with nature spirits, ancestors, and the Otherworld. Ovates often serve as seers, healers, and guides 
                    for their communities, helping others navigate life transitions and spiritual challenges.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">The Path of the Druid</h3>
                  <p className="text-foreground/80">
                    The Druid path represents the integration and culmination of bardic and ovate studies. Druids focus on philosophy, theology, 
                    ceremonial practice, and community leadership. They delve into cosmic mysteries, exploring the relationship between the visible 
                    and invisible worlds. This branch emphasizes wisdom, justice, and service—cultivating the ability to stand between worlds as 
                    a mediator, teacher, and spiritual guide.
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
                Modern Druids observe an eightfold cycle of seasonal festivals known as the Wheel of the Year. 
                This calendar combines the solstices and equinoxes (the "solar festivals") with the cross-quarter days 
                (the "fire festivals") that mark the midpoints between them. Each festival offers opportunities to 
                align with natural cycles, honor specific aspects of the divine, and reflect on corresponding themes 
                in human experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Samhain (October 31/November 1)</h3>
                  <p className="text-foreground/80">
                    The Celtic New Year and feast of the ancestors, when the veil between worlds is thinnest. A time 
                    to honor the dead, reflect on mortality, and prepare for the inward journey of winter. Corresponds 
                    with All Hallows' Eve and the beginning of the dark half of the year.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Winter Solstice / Alban Arthan (December 21-22)</h3>
                  <p className="text-foreground/80">
                    The longest night and rebirth of the sun. A time of stillness, reflection, and the kindling of light 
                    in darkness. Celebrated with fires, feasts, and the honoring of evergreen plants that symbolize 
                    enduring life through winter.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Imbolc (February 1-2)</h3>
                  <p className="text-foreground/80">
                    Festival of awakening and purification, associated with the Celtic goddess Brighid. Marks the first 
                    stirrings of spring and the lactation of ewes. A time for inspiration, cleansing, and dedicating 
                    oneself to new endeavors.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Spring Equinox / Alban Eilir (March 20-21)</h3>
                  <p className="text-foreground/80">
                    Day and night stand in balance, with light increasing. A celebration of new growth, fertility, and 
                    creative potential. Associated with cosmic balance and the greening of the world. Many traditions 
                    include blessing seeds and planting rituals.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Beltane (May 1)</h3>
                  <p className="text-foreground/80">
                    Ancient fire festival celebrating fertility, vitality, and the height of spring. Traditionally marked 
                    by maypole dancing, the lighting of bonfires, and the honoring of the sacred marriage between divine 
                    masculine and feminine principles. Marks the beginning of the light half of the year.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Summer Solstice / Alban Hefin (June 20-21)</h3>
                  <p className="text-foreground/80">
                    The longest day, celebrating the sun at its zenith. A time of abundance, fulfillment, and the 
                    full flowering of nature's potential. Many Druids gather at stone circles and other sacred sites to 
                    greet the sunrise on this powerful day.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Lughnasadh (August 1)</h3>
                  <p className="text-foreground/80">
                    Harvest festival named for the Celtic god Lugh, celebrating the first fruits of the field. A time 
                    to give thanks for abundance, demonstrate skills and crafts, and begin the preparation for autumn. 
                    Traditional activities include bread-making and athletic competitions.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Autumn Equinox / Alban Elfed (September 22-23)</h3>
                  <p className="text-foreground/80">
                    The second harvest festival, when day and night are again in balance but with darkness increasing. 
                    A time of thanksgiving, completion, and preparation for the inner work of winter. Many Druids focus 
                    on themes of balance, gratitude, and letting go.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Key Concepts</h2>
              <ul className="space-y-4">
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Awen</h3>
                  <p className="text-foreground/80">
                    A Welsh word meaning "flowing inspiration" or "divine essence," Awen represents the creative, inspirational force 
                    that flows through all things. Druids seek to cultivate and channel this inspiration through meditation, 
                    ritual, and artistic expression. The Awen symbol (three rays of light) represents this flowing spirit.
                  </p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Nwyfre</h3>
                  <p className="text-foreground/80">
                    The life force or spiritual energy that animates all beings, similar to concepts like chi or prana in other traditions. 
                    Druids work with nwyfre through breath practices, movement, and communion with natural sources of vital energy like 
                    trees, standing stones, and flowing water.
                  </p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">The Three Realms</h3>
                  <p className="text-foreground/80">
                    Celtic cosmology divides existence into three interconnected domains: Annwn (the Underworld/Land), Abred (the 
                    Middle World/Sea), and Gwynfyd (the Upper World/Sky). Druids work with the energies and beings of all three realms, 
                    often using the tree as a symbol of their connection.
                  </p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Nemeton</h3>
                  <p className="text-foreground/80">
                    A sacred space or sanctuary, often a grove of trees, where Druids gather for worship, teaching, and ceremony. 
                    The concept extends to include both physical places and the inner sacred space created through ritual and 
                    meditation practice.
                  </p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Imbas</h3>
                  <p className="text-foreground/80">
                    A form of illumination or prophetic knowledge, sometimes translated as "fire in the head." Similar to the 
                    Norse concept of önd, imbas refers to divine inspiration and the flash of insight that comes through deep 
                    connection with the Otherworld and ancestral wisdom.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary text-center">Contemporary Druidry and Living Tradition</h2>
              <div className="max-w-4xl mx-auto">
                <p className="mb-4 text-foreground/90 leading-relaxed">
                  Modern Druidry is a living, evolving tradition that seeks to apply ancient wisdom to contemporary challenges. Today's Druids engage 
                  actively with environmental issues, recognizing that reverence for nature must be coupled with practical action to protect and restore 
                  the Earth's ecosystems. Many Druid groups organize tree-planting initiatives, conservation efforts, and educational programs about 
                  sustainable living.
                </p>
                <p className="mb-4 text-foreground/90 leading-relaxed">
                  Druidry has diversified and spread globally, with practitioners adapting Celtic-inspired spirituality to various cultural contexts. 
                  While some groups emphasize Celtic cultural heritage and reconstructionist approaches, others develop more universalist forms of nature 
                  spirituality informed by Druidic principles. This diversity has led to vibrant exchanges of ideas and practices, enriching the tradition 
                  while maintaining core values of reverence for nature, honor for ancestors, and the cultivation of wisdom.
                </p>
                <p className="mb-4 text-foreground/90 leading-relaxed">
                  Druidic teachings on the interconnectedness of all life and the sacred nature of the Earth resonate deeply with contemporary 
                  ecological awareness, offering spiritual frameworks that support environmental ethics. Similarly, Druidry's emphasis on creative 
                  expression, community ritual, and connection with place provides meaningful alternatives to the alienation and disconnection often 
                  experienced in modern society.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  As we face planetary crises including climate change, biodiversity loss, and social fragmentation, Druidry offers valuable perspectives 
                  and practices. Its vision of humans living in sacred relationship with the land, honoring ancestors and future generations, and cultivating 
                  wisdom through direct engagement with nature represents a path of reverence and responsibility particularly relevant to our times.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <blockquote className="border-l-4 border-accent/50 pl-6 py-4 italic text-xl text-muted-foreground max-w-3xl mx-auto mb-12 bg-card/30 backdrop-blur-sm rounded-r-md">
          "The knowledge of nature is the foundation of all knowledge."
          <span className="text-sm not-italic block mt-2 text-accent/80">— Attributed to the ancient Druids</span>
        </blockquote>
      </div>
    </MainLayout>
  );
} 