import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, User, BookOpen, Music, Feather } from 'lucide-react';

export default function SufismPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-20 h-20 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="absolute bottom-32 right-10 w-24 h-24 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="currentColor" strokeWidth="0.5" />
            <path d="M30 30 L70 30 L70 70 L30 70 Z" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="text-center mb-12">
          <div className="mb-4">
            <Sparkles className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Sufism</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The mystical dimension of Islam emphasizing direct personal experience of the Divine 
            through devotion, love, and the purification of the heart.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">The Mystical Path of Islam</h2>
              <p className="mb-4">
                Sufism (tasawwuf in Arabic) represents the esoteric and mystical dimension of Islam, focusing on direct experience of the Divine rather than merely 
                intellectual or ritualistic approaches to religion. While firmly rooted in Islamic tradition, Sufism offers a universal spiritual perspective that 
                has influenced and intersected with numerous other mystical traditions throughout history.
              </p>
              <p className="mb-4">
                The essence of Sufism lies in its emphasis on the inner dimensions of Islamic practice—seeking to cultivate a direct, experiential 
                knowledge of God (ma'rifa) and a profound state of surrender (islam) through love, devotion, and self-purification. Sufis understand 
                religious law (shari'a) as a necessary foundation, but they seek to penetrate deeper into the spiritual realities these laws protect and represent.
              </p>
              <p className="mb-4">
                Central to Sufi thought is the concept of tawhid—the absolute oneness and unity of God—and the recognition that all existence emanates from 
                and returns to this divine unity. The ultimate goal of the Sufi path is fanā' (annihilation of the ego-self) followed by baqā' (subsistence in God), 
                a state in which one's individual consciousness is absorbed into divine consciousness while paradoxically maintaining human individuality.
              </p>
              <p>
                Throughout its history, Sufism has produced some of the world's most profound spiritual literature, inspiring poetry, and transformative practices. 
                From the ecstatic verses of Rumi to the penetrating wisdom of Ibn 'Arabi, Sufi teachings have transcended cultural and religious boundaries, 
                offering universal insights into the nature of reality and the human heart's yearning for the Divine.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Practices</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Dhikr</span> - Remembrance of God through rhythmic repetition of divine names and phrases</span>
                  </li>
                  <li className="flex items-start">
                    <Music className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Sama</span> - Spiritual concert and sacred dance, most famously practiced by the Mevlevi Order (Whirling Dervishes)</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Muraqaba</span> - Meditation and contemplative practices focused on developing presence and awareness</span>
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
                    <span><span className="font-semibold">Rumi (1207-1273)</span> - Persian poet and founder of the Mevlevi Order, whose works are among the most beloved in world literature</span>
                  </li>
                  <li className="flex items-start">
                    <User className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Ibn 'Arabi (1165-1240)</span> - Andalusian mystic and philosopher known as "the Greatest Master," whose writings profoundly shaped Sufi metaphysics</span>
                  </li>
                  <li className="flex items-start">
                    <User className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold">Rabia al-Adawiyya (713-801)</span> - Female mystic from Basra known for her doctrine of Divine Love</span>
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
                  <h3 className="font-semibold text-accent mb-1">Early Foundations (7th-9th Centuries)</h3>
                  <p className="text-foreground/80">
                    Sufism emerged from the ascetic and devotional practices of early Muslims who sought deeper spiritual connection with God. 
                    Early figures like Hasan al-Basri (642-728) and Rabia al-Adawiyya emphasized renunciation of worldly attachments and the cultivation of divine love.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Classical Period (10th-13th Centuries)</h3>
                  <p className="text-foreground/80">
                    This era saw the systematization of Sufi teachings, the emergence of major Sufi orders (tariqas), and the composition of important 
                    theoretical works. Al-Ghazali's (1058-1111) "Revival of Religious Sciences" integrated Sufism with orthodox Islamic theology, while 
                    al-Qushayri's "Risala" established key Sufi terminology and concepts.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Golden Age (13th-16th Centuries)</h3>
                  <p className="text-foreground/80">
                    This period witnessed the flowering of Sufi poetry, philosophy, and institutional orders. The works of Rumi, Hafiz, and Ibn 'Arabi 
                    reached unprecedented heights of spiritual insight and literary beauty. Major orders such as the Qadiriyya, Shadhiliyya, 
                    Naqshbandiyya, and Chishti established themselves across the Islamic world.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Modern Era (19th Century-Present)</h3>
                  <p className="text-foreground/80">
                    Despite challenges from modernist and reformist movements, Sufism has demonstrated remarkable resilience and continues to thrive 
                    globally. In the 20th century, figures like Hazrat Inayat Khan, Idries Shah, and Seyyed Hossein Nasr introduced Sufi teachings to 
                    Western audiences, emphasizing their universal spiritual dimensions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Path of the Spiritual Seeker</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The Sufi path (tariqa) is structured as a journey of spiritual development guided by a master (shaykh or pir) who has already traversed its stages. 
                This relationship between master and disciple (murid) is central to Sufi practice, as the master provides both instruction and spiritual 
                transmission (baraka).
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Many Sufi orders conceptualize the spiritual journey as progressing through various "stations" (maqamat) and "states" (ahwal). 
                Stations are stable spiritual achievements attained through effort and discipline, such as repentance (tawba), patience (sabr), 
                gratitude (shukr), and trust in God (tawakkul). States, by contrast, are temporary experiences of spiritual presence that come as divine gifts, 
                including states of fear, hope, intimacy, and love.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The ultimate goal is to transcend the limitations of the lower self (nafs) and realize one's essential identity with the divine reality. 
                This culminates in the state described as "dying before you die"—the mystical death of the ego and rebirth in divine consciousness. 
                As the Prophet Muhammad reportedly said in a tradition particularly cherished by Sufis, "He who knows himself knows his Lord."
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Sufi Orders (Tariqas)</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Sufi orders (tariqas) emerged as organized spiritual lineages, each with distinctive practices, litanies, and chains of transmission 
                (silsila) tracing back to the Prophet Muhammad. These orders provide structured frameworks for spiritual development while maintaining 
                the core principles of Sufism.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Mevlevi Order</h3>
                  <p className="text-foreground/80">
                    Founded by followers of Rumi, the Mevlevi Order is known for its distinctive whirling ceremony (sama), 
                    which represents the cosmic harmony of creation and the seeker's spiritual journey toward union with God. 
                    The practice involves precise movements and music that induce meditative states.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Naqshbandi Order</h3>
                  <p className="text-foreground/80">
                    Emphasizing silent dhikr and strict adherence to Islamic law, the Naqshbandi Order traces its origin to Abu Bakr, 
                    the first caliph. Known for its sobriety and intellectual approach, it has historically attracted scholars, 
                    officials, and merchants, becoming one of the most widespread orders globally.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Chishti Order</h3>
                  <p className="text-foreground/80">
                    Originating in Afghanistan and spreading throughout the Indian subcontinent, the Chishti Order is known for its 
                    inclusive approach, use of music in spiritual practice, and emphasis on service to humanity. Its shrines, 
                    especially that of Moinuddin Chishti in Ajmer, remain important pilgrimage sites.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Qadiri Order</h3>
                  <p className="text-foreground/80">
                    Founded by Abdul-Qadir Gilani in Baghdad, this order emphasizes generosity, humility, and strict adherence to 
                    Islamic law alongside mystical practices. It has spread widely across the Muslim world and is known for its 
                    accessible teachings and integration of local cultural elements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Spiritual Symbolism</h2>
              <ul className="space-y-4">
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">The Heart (Qalb)</h3>
                  <p className="text-foreground/80">
                    In Sufi tradition, the heart is not merely a physical organ but the spiritual center of the human being—the locus of divine knowledge and experience. 
                    The journey of purifying and polishing the heart to reflect divine reality is central to Sufi practice.
                  </p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">Wine and Intoxication</h3>
                  <p className="text-foreground/80">
                    Sufi poetry often employs metaphors of wine and intoxication to represent spiritual ecstasy and divine love. The tavern symbolizes the 
                    gathering place of mystics, while the cupbearer represents the spiritual guide offering divine knowledge.
                  </p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">The Beloved</h3>
                  <p className="text-foreground/80">
                    References to the "Beloved" in Sufi poetry typically symbolize God, with the relationship between lover and beloved representing the soul's 
                    passionate yearning for union with the Divine. This imagery draws on the Quranic theme of God's love for humanity and humanity's love for God.
                  </p>
                </li>
                <li className="group">
                  <h3 className="font-semibold text-accent mb-1">The Veil</h3>
                  <p className="text-foreground/80">
                    The concept of the veil represents the barriers—especially ego, attachments, and ignorance—that separate humans from direct perception of divine reality. 
                    Spiritual practice aims to lift these veils progressively, revealing the underlying unity of existence.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <blockquote className="border-l-4 border-accent/50 pl-6 py-4 italic text-xl text-muted-foreground max-w-3xl mx-auto mb-12 bg-card/30 backdrop-blur-sm rounded-r-md">
          "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it."
          <span className="text-sm not-italic block mt-2 text-accent/80">— Jalal ad-Din Rumi</span>
        </blockquote>
      </div>
    </MainLayout>
  );
} 