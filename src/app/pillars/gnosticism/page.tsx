import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function GnosticismPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-4">
            <Sparkles className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Gnosticism</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of religious ideas and systems that emphasized personal spiritual knowledge (gnosis) 
            over orthodox teachings, traditions, and ecclesiastical authority.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Core Principles</h2>
              <p className="mb-4">
                Gnosticism represents a diverse set of religious movements that emerged in the Mediterranean 
                world during the first and second centuries CE. Though varied in their specific beliefs, 
                Gnostic traditions share a common emphasis on direct spiritual knowledge (gnosis) as the 
                path to salvation.
              </p>
              <p className="mb-4">
                At the heart of many Gnostic teachings is a radical dualism: the material world is seen 
                as flawed or evil, created not by the true transcendent God but by a lesser, ignorant or 
                malevolent deity (the Demiurge). The human spirit, however, contains a divine spark that 
                originated in the transcendent realm and is trapped in the material world.
              </p>
              <p>
                Salvation in Gnostic thought comes through awakening to one's true divine nature and 
                origin—recognizing that one's innermost essence is not of this world but belongs to the 
                realm of light. This awakening, or gnosis, frees the divine spark from its material 
                imprisonment and enables its return to its true home.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Concepts</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Sparkles className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">Gnosis</span> - Direct spiritual knowledge
                  </li>
                  <li>
                    <span className="font-semibold">The Demiurge</span> - Creator of the material world
                  </li>
                  <li>
                    <span className="font-semibold">Archons</span> - Rulers of the material world
                  </li>
                  <li>
                    <span className="font-semibold">Pleroma</span> - The fullness of divine reality
                  </li>
                  <li>
                    <span className="font-semibold">Aeons</span> - Divine emanations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Notable Texts</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">The Gospel of Thomas</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Gospel of Mary</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Secret Book of John</span>
                  </li>
                  <li>
                    <span className="font-semibold">Pistis Sophia</span>
                  </li>
                  <li>
                    <span className="font-semibold">The Nag Hammadi Library</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <blockquote className="border-l-4 border-accent/50 pl-6 py-4 italic text-xl text-muted-foreground max-w-3xl mx-auto mb-12 bg-card/30 backdrop-blur-sm rounded-r-md">
          "If you bring forth what is within you, what you bring forth will save you. If you do not bring forth what is within you, what you do not bring forth will destroy you." <br />
          <span className="text-sm not-italic block mt-2 text-accent/80">- The Gospel of Thomas</span>
        </blockquote>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Gnostic Cosmos</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Gnostic cosmology describes a universe of stark contrasts between spirit and matter, light and darkness, knowledge and ignorance. 
                This complex spiritual framework explains both the origin of evil and the path to salvation:
              </p>
              
              <div className="space-y-6 mt-6">
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">The True God and the Pleroma</h3>
                  <p className="text-foreground/80">
                    At the highest level exists the true, transcendent God—unknowable, perfect, and beyond description. From this ineffable 
                    source emanates the Pleroma ("fullness"), a realm of spiritual light populated by divine beings called Aeons. These paired 
                    male-female emanations collectively form the fullness of divine reality, each expressing an aspect of the transcendent God.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">The Divine Fall and Creation</h3>
                  <p className="text-foreground/80">
                    The material universe results from a cosmic catastrophe. According to many Gnostic myths, Sophia (Wisdom), an Aeon within 
                    the Pleroma, acted independently and gave birth to a flawed entity—the Demiurge. Ignorant of the higher realms, the Demiurge 
                    falsely believed himself to be the supreme god and created the physical cosmos as an imperfect reflection of the divine realm.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">Archons and Material Imprisonment</h3>
                  <p className="text-foreground/80">
                    The Demiurge, identified by many Gnostics with the God of the Old Testament, created Archons (rulers or authorities) to 
                    govern the material universe. These malevolent or ignorant beings serve as cosmic prison wardens, keeping human souls 
                    trapped in bodies and preventing them from recognizing their true divine nature. They maintain control through ignorance, 
                    materiality, and worldly systems of power.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3">The Divine Spark</h3>
                  <p className="text-foreground/80">
                    Despite their material imprisonment, humans contain within them a divine spark or pneuma—a fragment of the spiritual light 
                    from the Pleroma. This divine element remains asleep or unconscious in most people, unaware of its true origin. Salvation 
                    comes through awakening this spark through gnosis, allowing it to recognize its alienation from the material world and its 
                    true connection to the divine realm.
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
                  <h3 className="font-semibold text-accent mb-1">Pre-Christian Origins (1st century BCE - 1st century CE)</h3>
                  <p className="text-foreground/80">
                    Gnostic concepts emerged from a complex religious landscape that included Hellenistic philosophy, Jewish mysticism, 
                    Babylonian astrology, and Egyptian religion. Scholars debate whether Gnosticism predates Christianity or developed 
                    alongside it. Some proto-Gnostic ideas can be found in Jewish apocalyptic literature and the Dead Sea Scrolls.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Classical Period (2nd-3rd centuries CE)</h3>
                  <p className="text-foreground/80">
                    The 2nd century saw Gnosticism flourish, particularly in Alexandria, Rome, and Syria. Teachers like Valentinus, Basilides, 
                    and Marcion developed sophisticated theological systems. During this period, orthodox Christian authorities, including 
                    Irenaeus of Lyon and Tertullian, began writing polemics against Gnostic teachings, considering them dangerous heresies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Suppression and Preservation (4th-5th centuries)</h3>
                  <p className="text-foreground/80">
                    As Christianity became the official religion of the Roman Empire, Gnostic groups faced increased persecution. 
                    Texts were systematically destroyed, driving Gnostic communities underground or to the margins of the empire. 
                    In response, followers buried texts for safekeeping, like the Nag Hammadi library discovered in Egypt in 1945, 
                    which dramatically expanded our knowledge of Gnostic thought.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Medieval and Modern Echoes</h3>
                  <p className="text-foreground/80">
                    Though classical Gnosticism declined, its ideas influenced medieval groups like the Cathars, Bogomils, and certain 
                    Sufi and Kabbalistic traditions. In modern times, Gnostic concepts have experienced revival through esoteric movements, 
                    depth psychology (particularly Jung's work), existential philosophy, and popular culture, reflecting their enduring 
                    relevance to questions of alienation, authenticity, and spiritual awakening.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Major Gnostic Schools</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-3">Sethian Gnosticism</h3>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Named for their veneration of Seth, the third son of Adam and Eve, the Sethians developed a complex mythological system 
                    involving multiple divine beings and cosmic realms. They identified themselves as the "seed of Seth," a lineage of spiritual 
                    elect distinct from the physical descendants of Cain and Abel.
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    In Sethian texts like "The Apocryphon of John," Seth is portrayed as a heavenly revealer who periodically incarnates or 
                    sends emissaries (sometimes including Jesus) to awaken his spiritual descendants. Sethian cosmology is characterized by 
                    elaborate descriptions of the Pleroma's hierarchical structure and dramatic accounts of Sophia's fall and the Demiurge's creation.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-3">Valentinian Gnosticism</h3>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Founded by Valentinus, a 2nd-century theologian who nearly became Bishop of Rome, Valentinian Gnosticism represented a more 
                    intellectually sophisticated and less overtly anti-cosmic form of Gnostic thought. Valentinians maintained a presence within 
                    mainstream Christian communities while holding their distinctive esoteric interpretations.
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    Their complex system divided humanity into three types: pneumatics (spiritual, destined for salvation), psychics (soulish, capable 
                    of salvation through faith and works), and hylics (material, spiritually unreceptive). Uniquely, they viewed the Demiurge not as 
                    evil but as ignorant, and saw the material world as potentially containing reflections of spiritual truth that could guide the 
                    initiate toward gnosis.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-3">Marcionite Movement</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Though not strictly Gnostic, Marcion of Sinope (85-160 CE) developed a theology with significant Gnostic elements. Marcion 
                    proposed a radical dualism between the wrathful God of the Old Testament, whom he identified as the Demiurge, and the loving 
                    God revealed by Jesus. He rejected the Hebrew scriptures completely and created a canonical collection of Christian texts that 
                    included edited versions of Luke's gospel and ten Pauline epistles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Contemporary Relevance</h2>
              <ul className="space-y-4">
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Psychological Interpretation</h3>
                  <p className="text-foreground/80">Carl Jung saw Gnostic myths as expressions of the collective unconscious, with the Demiurge representing the ego, Sophia the anima, and gnosis the process of individuation. His work inspired psychological approaches to spirituality that emphasize inner knowing over external authority.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Modern Gnostic Churches</h3>
                  <p className="text-foreground/80">Organizations like the Ecclesia Gnostica, the Apostolic Johannite Church, and various independent groups practice contemporary forms of Gnosticism, often blending ancient teachings with modern insights from psychology, philosophy, and comparative religion.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Philosophical Resonance</h3>
                  <p className="text-foreground/80">Existentialist thinkers like Heidegger, Sartre, and Camus explored themes of alienation, authenticity, and the search for meaning that parallel Gnostic concerns. Philosophers like Hans Jonas and Eric Voegelin identified "gnostic" tendencies in modern political movements and ideologies.</p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Cultural Impact</h3>
                  <p className="text-foreground/80">Gnostic themes permeate modern literature, film, and music. Works like Philip K. Dick's novels, the Matrix films, and artists from Leonard Cohen to Tool draw on Gnostic ideas of hidden realities, false worlds, and awakening to authentic existence.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary text-center">Gnostic Salvation and Practice</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                For Gnostics, salvation is not achieved through faith or works but through direct spiritual knowledge—gnosis. This transformative 
                knowing involves recognizing one's divine origin and the illusory nature of the material world. Various Gnostic traditions developed 
                practices to facilitate this awakening:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3 text-center">Sacramental Rituals</h3>
                  <p className="text-foreground/80">
                    Many Gnostic groups practiced initiation rites like baptism, chrism (anointing), and eucharist, but reinterpreted them as symbolic 
                    acts representing spiritual transformation rather than physical salvation. The "Bridal Chamber" sacrament described in Valentinian 
                    texts symbolized the reunification of the divided self and the soul's spiritual marriage with its angelic counterpart.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3 text-center">Contemplative Practices</h3>
                  <p className="text-foreground/80">
                    Meditation on sacred texts, recitation of divine names, visualization of celestial realms, and contemplation of mystic symbols were 
                    central to Gnostic practice. These exercises aimed to awaken the divine spark within and prepare the initiate for the soul's ascent 
                    through the hostile spheres controlled by the Archons after death.
                  </p>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-accent mb-3 text-center">Ethical Approaches</h3>
                  <p className="text-foreground/80">
                    Gnostics developed two contrasting ethical paths: asceticism and libertinism. Ascetic Gnostics practiced strict abstinence from 
                    worldly pleasures to liberate the spirit from material attachments. Others adopted antinomian (against the law) or libertine stances, 
                    believing that true spiritual beings were beyond moral constraints and could demonstrate their freedom through radical behavior.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
} 