import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, BookMarked, Sparkles, Scroll, Star, Hash, AlignJustify, Milestone } from 'lucide-react';

export default function SeferYetzirahPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Back navigation */}
        <div className="mb-8">
          <Link 
            href="/library" 
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Library</span>
          </Link>
        </div>
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <Scroll className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            Sefer Yetzirah
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Kabbalah
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Jewish Mysticism
            </span>
            <span className="text-xs bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full">
              c. 200 CE
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            The Book of Formation — one of the earliest extant books on Jewish esotericism that outlines the cosmogenic process through the power of Hebrew letters and numbers.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Origins */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Scroll className="w-5 h-5" />
                Origins & Historical Context
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Sefer Yetzirah (Book of Formation or Book of Creation) is among the earliest surviving Jewish esoteric texts, whose precise origins remain shrouded in mystery. While tradition attributes its authorship to the biblical patriarch Abraham, modern scholarship dates its composition to sometime between the 2nd and 6th centuries CE, with the most widely accepted period being around the 3rd century.
                </p>
                <p>
                  Emerging during a time of significant philosophical cross-pollination between Hellenistic, Gnostic, and early Jewish mystical thought, the text reflects multiple intellectual currents of Late Antiquity. Its concise nature—comprising only about 1,600 words in its shortest version—belies its profound influence on subsequent Jewish mystical traditions.
                </p>
                <p>
                  The text exists in multiple recensions of varying lengths, with the three primary versions being the Short, Long, and Saadian recensions. Each varies slightly in content and organization, suggesting a complex transmission history that likely included both written and oral components.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "With 32 mystical paths of Wisdom engraved Yah, the Lord of Hosts, the God of Israel, the Living God, King of the universe, El Shaddai, Merciful and Gracious, High and Exalted, Dwelling in eternity, Whose name is Holy, and created His universe with three books: with text (Sepher), with number (Sephar), and with communication (Sippur)."
                  <br />— Opening lines of Sefer Yetzirah
                </p>
              </div>
            </section>
            
            {/* Cosmological Framework */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Cosmological Framework
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  At its core, Sefer Yetzirah presents a systematic theory of creation through language and number. The text describes how God created the universe using the 22 letters of the Hebrew alphabet combined with the 10 sefirot (divine emanations or numbers), collectively forming the "32 paths of wisdom."
                </p>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                  <h3 className="text-xl font-medium text-accent/80 mb-3">The Structure of Creation</h3>
                  <p>
                    The Sefer Yetzirah presents creation as structured along three dimensions, which are then divided into complementary pairs:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
                    <li><span className="font-medium">Universe (Olam)</span>: Space - the six directions (above, below, east, west, north, south)</li>
                    <li><span className="font-medium">Year (Shanah)</span>: Time - the seasons and months of the calendar</li>
                    <li><span className="font-medium">Soul (Nefesh)</span>: Person - the human body and its sensory faculties</li>
                  </ul>
                  <p className="mt-3">
                    This tripartite framework establishes correspondences between cosmic processes, temporal cycles, and the human experience, revealing a universe of profound interconnection.
                  </p>
                </div>
                
                <h3 className="text-xl font-medium text-accent/80">The Ten Sefirot</h3>
                <p>
                  The sefirot in Sefer Yetzirah differ significantly from their later development in medieval Kabbalah. Rather than the elaborate Tree of Life structure that would emerge centuries later, here they appear as primordial numbers or dimensions—the fundamental building blocks of reality:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The text describes them as "ten and not nine, ten and not eleven"—emphasizing their precise enumeration</li>
                  <li>They are depicted as "depths" or "dimensions" of reality (depth of beginning, depth of end, etc.)</li>
                  <li>They represent the divine finger "engraving" creation through continuous acts of definition and boundary-setting</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">The Twenty-Two Letters</h3>
                <p>
                  The Hebrew alphabet is divided into three groups, each associated with different aspects of creation:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="font-medium">Three Mothers (Alef, Mem, Shin)</span>: Representing the primary elements of air, water, and fire</li>
                  <li><span className="font-medium">Seven Doubles (Bet, Gimel, Dalet, Kaf, Pe, Resh, Tav)</span>: Associated with planetary bodies and possessing dual pronunciations (hard/soft)</li>
                  <li><span className="font-medium">Twelve Simples</span>: The remaining letters, connected to the twelve zodiacal constellations and months</li>
                </ul>
              </div>
            </section>
            
            {/* Linguistic Mysticism */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <AlignJustify className="w-5 h-5" />
                Linguistic Mysticism
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Sefer Yetzirah elevates letters and language beyond mere communication tools into actual metaphysical forces. In this vision, the Hebrew alphabet contains the essence of creation itself, with each letter embodying specific cosmic energies and creative potentialities.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-accent/80">Permutation and Combination</h3>
                  <p>
                    A distinctive feature of Sefer Yetzirah is its emphasis on letter permutations (tzerufim) as a means of understanding the creative process. The text describes how God "permuted" the letters to form different words, which then became the building blocks of reality:
                  </p>
                  <p className="ml-4 italic">
                    "Two stones build two houses, three stones build six houses, four stones build twenty-four houses... thereafter go and calculate what the mouth cannot express and the ear cannot hear."
                  </p>
                  <p>
                    This mathematical progression describes combinatorial possibilities (what we now understand as factorial calculations), suggesting that the infinite complexity of creation emerges from permutations of a finite set of elemental letters.
                  </p>
                  
                  <h3 className="text-xl font-medium text-accent/80">Phonetic Qualities</h3>
                  <p>
                    The text pays close attention to the phonetic qualities of letters—how they are formed in the mouth and the parts of the vocal apparatus used to pronounce them. These physical aspects of speech are linked to metaphysical principles:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Dental consonants relate to wisdom</li>
                    <li>Labial consonants relate to life and death</li>
                    <li>Gutturals relate to air and spirit</li>
                  </ul>
                  <p>
                    This emphasis on the phonetic embodiment of letters underscores the text's view that language is not abstract but physically manifested creative energy.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Practical Applications */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Hash className="w-5 h-5" />
                Practical Applications
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  While primarily theoretical, Sefer Yetzirah contains hints of practical applications that were developed further by later mystics. These practical dimensions contributed to its enduring influence across various Jewish mystical traditions.
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Meditative Techniques</h3>
                <p>
                  The text alludes to meditative practices centered on the letters and their combinations:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contemplation of letter permutations to attune the mind to divine creative processes</li>
                  <li>Visualization of letters as cosmic building blocks</li>
                  <li>Breathing techniques coordinated with the pronunciation of specific letter combinations</li>
                </ul>
                <p>
                  These practices were later expanded in Abulafian prophetic Kabbalah, which developed elaborate letter-meditation techniques as pathways to altered states of consciousness.
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Golem Creation</h3>
                <p>
                  Perhaps most famously, Sefer Yetzirah became associated with the creation of a golem—an artificially animated being formed from clay or earth. Several Talmudic stories and medieval accounts describe mystics using the book's techniques to create such entities:
                </p>
                <p className="ml-4 italic">
                  "Rava created a man and sent him to Rabbi Zeira. The Rabbi spoke to him but he did not answer. Then he said: 'You are from the magicians. Return to your dust.'"
                  <br />— Babylonian Talmud, Sanhedrin 65b
                </p>
                <p>
                  Later commentators explicitly connected this practice to the combinatorial letter methods of Sefer Yetzirah, suggesting that the same divine linguistic processes that formed the cosmos could be employed on a smaller scale by the initiated.
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Astrology and Divination</h3>
                <p>
                  The text's system of correspondences between letters, planets, zodiac signs, and body parts provided a framework for astrological and divinatory practices. Medieval commentaries expanded these connections into comprehensive systems for interpreting cosmic influences and personal destiny through the lens of Hebrew linguistic structures.
                </p>
              </div>
            </section>
            
            {/* Influence and Legacy */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Milestone className="w-5 h-5" />
                Influence and Legacy
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Sefer Yetzirah's influence reaches far beyond its modest length, serving as a foundational text for multiple streams of Jewish mysticism and reverberating into other esoteric traditions.
                </p>
                
                <h3 className="text-xl font-medium text-accent/80">Within Jewish Mysticism</h3>
                <p>
                  Sefer Yetzirah played a pivotal role in the development of later Kabbalistic thought:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Its sefirot concept was expanded into the elaborate Tree of Life structure in works like the Zohar</li>
                  <li>Its letter mysticism influenced meditative Kabbalah, particularly Abraham Abulafia's ecstatic techniques</li>
                  <li>Its cosmological framework informed the Lurianic Kabbalah's understanding of cosmic processes</li>
                  <li>Its emphasis on divine names shaped practical Kabbalah and magical traditions</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Philosophical Interpretations</h3>
                <p>
                  The text garnered significant attention from medieval Jewish philosophers who sought to reconcile its teachings with Aristotelian and Neoplatonic thought:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Saadia Gaon's 10th-century commentary attempted to interpret it within a rationalist framework</li>
                  <li>Judah Halevi incorporated its ideas about the unique status of Hebrew into his philosophical defense of Judaism</li>
                  <li>Maimonides, while not commenting directly on the text, engaged with concepts influenced by it</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Hasidic Reinterpretation</h3>
                <p>
                  The 18th-century Hasidic movement drew heavily on Sefer Yetzirah's concepts, particularly:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The idea that divine creative processes continue perpetually, not just at the beginning of time</li>
                  <li>The emphasis on the power of speech and its connection to spiritual realities</li>
                  <li>The notion that human creative activities parallel divine creation</li>
                </ul>
                
                <h3 className="text-xl font-medium text-accent/80">Beyond Judaism</h3>
                <p>
                  Sefer Yetzirah's influence extended into other traditions:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Islamic esoteric sciences, particularly the science of letters (ilm al-huruf)</li>
                  <li>Renaissance Christian Kabbalah, through figures like Pico della Mirandola and Johannes Reuchlin</li>
                  <li>Western occultism, where its letter system was incorporated into various magical paradigms</li>
                  <li>Modern esoteric movements, including certain streams of Theosophy and New Age thought</li>
                </ul>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30 mt-6">
                  <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Modern Relevance</h3>
                  <p>
                    In contemporary contexts, Sefer Yetzirah continues to inspire:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>New approaches to Jewish meditation and contemplative practice</li>
                    <li>Studies in linguistic philosophy and the relationship between language and consciousness</li>
                    <li>Explorations of combinatorial mathematics and early information theory</li>
                    <li>Artistic and literary works engaging with themes of creation and language</li>
                    <li>Interdisciplinary approaches bridging mystical thought with contemporary science</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Key concepts */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Concepts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Sefirot</h4>
                    <p className="text-sm">The ten primordial numbers or dimensions that form the foundation of creation, representing divine emanations of energy.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Otiyot Yesod</h4>
                    <p className="text-sm">The "foundational letters" of the Hebrew alphabet, containing within them the blueprint of all creation and cosmic forces.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Tzerufim</h4>
                    <p className="text-sm">Letter permutations and combinations that reveal deeper structures of reality and can be used in meditative and magical practices.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Olam, Shanah, Nefesh</h4>
                    <p className="text-sm">The three dimensions of space (universe), time (year), and person (soul) that structure all of creation.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Covenant of the Tongue</h4>
                    <p className="text-sm">The mystical principle that speech has creative power, paralleling the divine speech that brought the world into being.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Structure of the Text */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Structure of the Text</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <h4 className="font-medium text-accent/80">Chapter 1</h4>
                    <p className="text-sm">Introduction to the 32 paths of wisdom and the ten sefirot.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Chapter 2</h4>
                    <p className="text-sm">The 22 letters of the Hebrew alphabet and their division into three groups.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Chapter 3</h4>
                    <p className="text-sm">The three mother letters (Alef, Mem, Shin) and their cosmic correspondences.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Chapter 4</h4>
                    <p className="text-sm">The seven double letters and their relationships to planets, directions, and human attributes.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Chapter 5</h4>
                    <p className="text-sm">The twelve simple letters and their connections to the zodiac and human faculties.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">Chapter 6</h4>
                    <p className="text-sm">Conclusion synthesizing the entire system and relating it to Abraham's discovery of God.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Principal Commentaries */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Principal Commentaries</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Saadia Gaon (10th century)</h4>
                    <p className="text-sm">Philosophical interpretation attempting to reconcile the text with rational thought and natural philosophy.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Dunash ibn Tamim (10th century)</h4>
                    <p className="text-sm">Commentary connecting the text to astronomical and astrological concepts prevalent in Arab science.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Eleazar of Worms (12th-13th century)</h4>
                    <p className="text-sm">Ashkenazi esoteric interpretation emphasizing practical applications and golem creation.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Rabbi Moshe Cordovero (16th century)</h4>
                    <p className="text-sm">Systematic Kabbalistic interpretation integrating the text into the broader framework of Safed Kabbalah.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Gaon of Vilna (18th century)</h4>
                    <p className="text-sm">Analytical commentary relating the text to Talmudic and Midrashic sources and later Kabbalistic developments.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Related Traditions */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Related Traditions</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/pillars/kabbalah" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Kabbalah</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/zohar" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Zohar</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/gematria" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Gematria</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/golem" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Golem</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Historical Note */}
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Scroll className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  The Sefer Yetzirah is considered one of the most important texts in the development of Jewish mysticism. While its precise origins remain debated among scholars, its impact on Jewish thought and Western esotericism is indisputable. The text should be understood within its historical context as a formative document that bridged cosmological speculation, linguistic theory, and mystical practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 