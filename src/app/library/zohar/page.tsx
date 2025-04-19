import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, BookMarked, Trees, Sparkles, Star, SquareStack, CircleOff } from 'lucide-react';

export default function ZoharPage() {
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
            <BookMarked className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            The Zohar
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Kabbalah
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Jewish Mysticism
            </span>
            <span className="text-xs bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full">
              c. 1280 CE
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            The foundational work of Kabbalistic thought, containing mystical commentaries on the Torah and exploring the hidden dimensions of existence.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Origins */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <BookMarked className="w-5 h-5" />
                Origins and Authorship
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Zohar (Hebrew: זֹהַר, meaning "Splendor" or "Radiance") emerged in 13th century Spain as the crowning achievement of medieval Kabbalah. Traditionally, it was attributed to the 2nd century sage Rabbi Shimon bar Yochai, who was said to have received its mystical teachings directly from the prophet Elijah while hiding in a cave for thirteen years to escape Roman persecution.
                </p>
                <p>
                  However, modern scholarship largely attributes its composition to the Spanish Kabbalist Moses de León (c. 1240-1305), who first circulated the text in the late 13th century. While some scholars suggest de León compiled older mystical traditions, others propose he was its primary author, writing in a deliberately archaic style and attributing it to an ancient authority to lend it credibility—a common medieval literary practice.
                </p>
                <p>
                  The text is written primarily in Aramaic, the vernacular language of Jews in ancient Judea. Its linguistic characteristics, including peculiarities in grammar and vocabulary, as well as Spanish words and concepts embedded in the text, support the theory of medieval authorship.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "Woe to the human being who says that the Torah comes to tell ordinary tales and mundane narratives... Rather, all the words of the Torah are sublime words and sublime secrets."<br />
                  — Zohar III, 152a
                </p>
              </div>
            </section>
            
            {/* Structure and Content */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <SquareStack className="w-5 h-5" />
                Structure and Content
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Zohar is not a single book but a corpus of texts spanning over 2,000 printed pages. It is structured as a mystical commentary on the Torah (Five Books of Moses), presented as conversations among Rabbi Shimon bar Yochai and his disciples as they wander through the Galilee, discussing the divine mysteries hidden within scripture.
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Primary Sections</h3>
                    <div className="space-y-4">
                      <p>
                        The main body of the Zohar follows the weekly Torah readings and offers mystical interpretations of biblical passages. However, several distinct sections exist within the larger work:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-medium">Zohar on the Torah</span>: The core text, providing Kabbalistic commentary on the Pentateuch.</li>
                        <li><span className="font-medium">Idra Rabba (The Greater Assembly)</span>: Records the gathering of Rabbi Shimon's disciples where profound teachings about the divine countenances (partzufim) are revealed.</li>
                        <li><span className="font-medium">Idra Zuta (The Lesser Assembly)</span>: Describes Rabbi Shimon's final teachings before his death.</li>
                        <li><span className="font-medium">Sifra di-Tzeniuta (The Book of Concealment)</span>: A concise, cryptic text outlining key Kabbalistic principles.</li>
                        <li><span className="font-medium">Ra'aya Meheimna (The Faithful Shepherd)</span>: Conversations between Rabbi Shimon and Moses on the mystical reasons for the commandments.</li>
                        <li><span className="font-medium">Heikhalot (The Palaces)</span>: Descriptions of the heavenly realms and how the mystic might ascend through them.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Literary Style</h3>
                    <div className="space-y-4">
                      <p>
                        The Zohar employs a distinctive literary approach, weaving together multiple genres and techniques:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-medium">Midrashic Exegesis</span>: Creative interpretations of biblical verses that reveal hidden meanings beyond the literal text.</li>
                        <li><span className="font-medium">Symbolic Narratives</span>: Allegorical tales that convey spiritual truths through storytelling.</li>
                        <li><span className="font-medium">Homilies</span>: Sermons exploring theological and ethical teachings.</li>
                        <li><span className="font-medium">Mystical Dialogues</span>: Conversations among sages that dramatize the discovery of esoteric knowledge.</li>
                        <li><span className="font-medium">Cosmic Descriptions</span>: Elaborate portrayals of divine realms and processes.</li>
                      </ul>
                      <p>
                        The text often employs deliberately obscure language and symbolism that requires initiation into Kabbalistic modes of thought to fully comprehend, maintaining the tradition that mystical secrets should not be readily accessible to unprepared readers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Core Teachings */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Trees className="w-5 h-5" />
                Core Kabbalistic Teachings
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  The Zohar expounds several fundamental concepts that form the backbone of Kabbalistic thought:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Ein Sof</h3>
                    <p className="text-sm text-foreground/70">
                      The limitless, unknowable essence of God prior to any manifestation. The Zohar teaches that God's true nature is beyond human comprehension—infinite, eternal, and without attributes. Ein Sof (literally "without end") transcends both being and non-being, creating a paradox at the heart of Kabbalistic theology.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Sefirot</h3>
                    <p className="text-sm text-foreground/70">
                      The ten divine emanations or attributes through which Ein Sof manifests and creates the universe. The Zohar elaborates on the dynamic relationships between these sefirot (Keter, Chokhmah, Binah, Chesed, Gevurah, Tiferet, Netzach, Hod, Yesod, and Malkhut), depicting them as a cosmic tree structure that channels divine energy from the highest realms to the material world.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Shekinah</h3>
                    <p className="text-sm text-foreground/70">
                      The divine feminine presence, identified with the final sefirah of Malkhut. The Zohar develops the concept of Shekinah as the exiled aspect of divinity that dwells among Israel in their suffering. The ultimate religious goal involves reuniting the Shekinah with the higher aspects of God, healing the divine rupture caused by human sin.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Four Worlds</h3>
                    <p className="text-sm text-foreground/70">
                      The Zohar describes a cosmology of four descending spiritual realms: Atzilut (Emanation), Beriah (Creation), Yetzirah (Formation), and Assiyah (Action). Each world represents a different level of divine manifestation, from the purely spiritual to the physical universe, with the sefirot operating differently in each realm.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Soul Structure</h3>
                    <p className="text-sm text-foreground/70">
                      The Zohar elaborates a complex understanding of the human soul as having multiple levels: nefesh (vital soul), ruach (spirit), neshamah (higher soul), chayah (life force), and yechidah (unique essence). Each level connects to different sefirot and worlds, providing the framework for spiritual development through successive awakening of these soul-levels.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Tikkun Olam</h3>
                    <p className="text-sm text-foreground/70">
                      The cosmic restoration accomplished through human spiritual practice. The Zohar teaches that human religious actions (mitzvot) have cosmic significance, affecting the balance of the sefirot and either facilitating or impeding the flow of divine energy. Through proper intention and practice, humans participate in "repairing" both the divine and material realms.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Interpretive Methods */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4">Interpretive Methods</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Zohar employs several distinctive hermeneutical techniques to extract hidden meanings from scripture:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Symbolic Reading</span>: The Zohar interprets biblical narratives, characters, and places as representing cosmic processes and divine entities. Abraham, Isaac, and Jacob, for instance, are associated with specific sefirot (Chesed, Gevurah, and Tiferet respectively).
                  </li>
                  <li>
                    <span className="font-medium">Letter Mysticism</span>: Individual Hebrew letters are seen as containing profound cosmic secrets. The shapes, numerical values (gematria), and combinations of letters reveal hidden teachings about creation and divine nature.
                  </li>
                  <li>
                    <span className="font-medium">Mythic Amplification</span>: Biblical stories are expanded into elaborate cosmic dramas involving the interactions of the sefirot. For example, the Exodus from Egypt becomes a template for understanding the liberation of divine sparks from the realms of impurity.
                  </li>
                  <li>
                    <span className="font-medium">Paradoxical Discourse</span>: The Zohar often uses contradictory statements to express truths that transcend logical categories, acknowledging that divine realities cannot be fully captured in linear human thought.
                  </li>
                  <li>
                    <span className="font-medium">Multiple Layers of Meaning</span>: The Zohar expands on the traditional four levels of scriptural interpretation (Pardes: peshat/literal, remez/allegorical, derash/homiletical, sod/mystical), emphasizing that sacred texts contain infinite layers of meaning that reveal themselves according to the spiritual level of the reader.
                  </li>
                </ol>
                <p>
                  These interpretive methods transform the Torah from a historical and legal document into a symbolic map of cosmic processes and a key to unlocking the secrets of divine and human consciousness.
                </p>
              </div>
            </section>
            
            {/* Historical Impact */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Historical Impact
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Zohar's influence on Jewish thought and practice has been profound and far-reaching:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Canonization</span>: Despite initial controversy regarding its authenticity, the Zohar achieved near-canonical status in many Jewish communities by the 16th century. In some Sephardic communities, it came to be regarded as one of the three pillars of faith alongside the Bible and Talmud.
                  </li>
                  <li>
                    <span className="font-medium">Safed Renaissance</span>: In 16th century Safed (in Ottoman Palestine), mystics led by Rabbi Isaac Luria ("the Ari") developed systematic interpretations of the Zohar that became the basis for later Kabbalah. Lurianic Kabbalah, with its emphasis on cosmic repair (tikkun), exile, and redemption, provided a theological framework for understanding Jewish historical experience.
                  </li>
                  <li>
                    <span className="font-medium">Liturgical Integration</span>: Many prayers, hymns, and customs derived from the Zohar entered mainstream Jewish practice, even among those without formal Kabbalistic training. The Friday night hymn "Lecha Dodi," welcoming the Sabbath as a bride, emerged directly from Zoharic imagery.
                  </li>
                  <li>
                    <span className="font-medium">Sabbatean Movement</span>: In the 17th century, the messianic movement centered around Sabbatai Zevi drew heavily on Zoharic and Lurianic concepts, demonstrating both the text's widespread influence and its revolutionary potential when interpreted radically.
                  </li>
                  <li>
                    <span className="font-medium">Hasidism</span>: The 18th century Hasidic movement popularized Zoharic teachings for the masses, translating abstract Kabbalistic concepts into psychological insights and spiritual practices accessible to ordinary Jews. This democratization of mysticism transformed Eastern European Jewish life.
                  </li>
                  <li>
                    <span className="font-medium">Modern Jewish Thought</span>: Philosophers like Martin Buber, Franz Rosenzweig, and Abraham Joshua Heschel drew on Zoharic concepts to develop modern theological approaches that emphasized divine-human encounter, the sanctification of everyday life, and the cosmic significance of ethical action.
                  </li>
                </ul>
                <p>
                  Beyond Judaism, the Zohar influenced Christian Kabbalah during the Renaissance, contributed to Western esoteric traditions, and has been studied by scholars of comparative mysticism for its sophisticated exploration of universal spiritual themes.
                </p>
              </div>
            </section>
            
            {/* Contemporary Relevance */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Contemporary Relevance
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Zohar continues to exert significant influence in contemporary spiritual contexts:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Academic Study</span>: Over the past century, the Zohar has become the subject of rigorous academic research, with scholars like Gershom Scholem, Isaiah Tishby, and Daniel Matt illuminating its historical context, literary techniques, and philosophical significance. The Pritzker Edition, a comprehensive English translation with commentary, has made the text accessible to new audiences.
                  </li>
                  <li>
                    <span className="font-medium">Neo-Hasidism</span>: Contemporary spiritual movements drawing on Hasidic teachings, particularly in North America, have reconnected with Zoharic concepts as resources for spiritual renewal, psychological insight, and ecological awareness.
                  </li>
                  <li>
                    <span className="font-medium">New Age and Popular Kabbalah</span>: Adaptations of Kabbalistic teachings, often drawing selectively from the Zohar, have gained popularity in non-Jewish spiritual contexts. While often departing significantly from traditional interpretations, these approaches have introduced Zoharic imagery and concepts to diverse audiences.
                  </li>
                  <li>
                    <span className="font-medium">Feminist Reinterpretations</span>: Scholars and theologians have examined the Zohar's complex treatment of gender, particularly its elaboration of divine feminine aspects, as resources for developing more gender-inclusive spiritual frameworks.
                  </li>
                  <li>
                    <span className="font-medium">Consciousness Studies</span>: The Zohar's sophisticated model of consciousness, with its multiple soul-levels and intricate descriptions of mystical states, has attracted interest from researchers exploring the phenomenology of spiritual experience across traditions.
                  </li>
                </ul>
                <p>
                  Whether approached as a sacred text, a literary masterpiece, or a psychological resource, the Zohar continues to offer profound insights into the nature of reality, consciousness, and the human quest for meaning and transcendence. Its complex symbolism and multi-layered approach to interpretation make it a text that reveals new dimensions with each generation of readers.
                </p>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Key Symbols */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Symbols</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Tree of Life</h4>
                    <p className="text-sm">The interconnected structure of the ten sefirot, representing the primary channels through which divine energy flows into creation.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Divine Face</h4>
                    <p className="text-sm">The anthropomorphic imagery used to describe God's manifestation through the sefirot, with features corresponding to different divine attributes.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">The River of Light</h4>
                    <p className="text-sm">The continual flow of divine consciousness from Ein Sof through the sefirot and into the worlds of creation.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Celestial Marriage</h4>
                    <p className="text-sm">The union of masculine and feminine divine principles (particularly Tiferet and Malkhut) that generates spiritual fertility and harmony.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">The Cave</h4>
                    <p className="text-sm">A symbol of protected esoteric wisdom and the womb-like space where mystical revelation occurs, based on Rabbi Shimon's legendary hiding place.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Distinctive Concepts */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Distinctive Concepts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Sitra Achra</h4>
                    <p className="text-sm">The "Other Side" or realm of impurity that represents the necessary cosmic opposition to holiness, containing the destructive forces that emerged from an imbalance in divine judgment.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Partzufim</h4>
                    <p className="text-sm">The divine "countenances" or personas that organize the sefirot into more complex, interactive structures, including Arikh Anpin (the Long Face) and Ze'er Anpin (the Small Face).</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Kavvanah</h4>
                    <p className="text-sm">The mystical intention that transforms ritual actions into cosmic events affecting the sefirotic realms and the flow of divine energy.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Tzimtzum</h4>
                    <p className="text-sm">The divine "contraction" or self-limitation that created space for the worlds to exist, a concept later elaborated by Lurianic Kabbalah but with roots in Zoharic thinking.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Devekut</h4>
                    <p className="text-sm">The mystical "cleaving" to God achieved through contemplation, study, and proper performance of the commandments with awareness of their cosmic significance.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Related Texts */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Related Texts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/library/sefer-yetzirah" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Sefer Yetzirah</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/qliphoth" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Qliphoth</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/library/gematria" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Gematria: The Cosmic Science</span>
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 text-accent">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Etz Chaim (Tree of Life)</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Study Note */}
            <div className="bg-card/40 p-6 rounded-lg border border-border/50">
              <h3 className="font-esoterica text-accent/90 mb-3">Traditional Study Note</h3>
              <p className="text-sm text-foreground/80">
                In traditional Jewish contexts, the Zohar was considered a text requiring substantial preparatory study. Many communities restricted its study to married men over 40 who had mastered Talmud and Jewish law. Today, while academically available to all, many traditional teachers still emphasize that proper understanding requires grounding in broader Jewish learning and spiritual practice to avoid misinterpretation of its complex symbolism.
              </p>
              <div className="mt-4">
                <CircleOff className="w-4 h-4 text-accent/70 mx-auto" />
                <p className="text-xs text-accent/70 italic text-center mt-2">The revealed conceals, the concealed reveals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 