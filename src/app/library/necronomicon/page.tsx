import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Scroll, Skull, Eye, Star, AlertTriangle } from 'lucide-react';

export default function NecronomiconPage() {
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
            <BookOpen className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            The Necronomicon
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Fictional Grimoire
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Cosmic Horror
            </span>
            <span className="text-xs bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full">
              20th Century
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A fictional grimoire invented by H.P. Lovecraft, said to contain knowledge to summon eldritch cosmic entities and reveal the terrifying secrets of the universe.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Origins */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Scroll className="w-5 h-5" />
                Fictional Origins
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The Necronomicon was created by American horror writer H.P. Lovecraft (1890-1937) as a plot device in his short stories, first appearing in his 1924 short story "The Hound." Lovecraft elaborated a detailed fictional history for the book, describing it as written by the "mad Arab" Abdul Alhazred around 730 CE in Damascus.
                </p>
                <p>
                  According to Lovecraft's mythos, the original title of the work was "Al Azif" (the nocturnal sound of insects believed to be the howling of demons), later translated into Greek as "Necronomicon" (roughly translated as "Book of the Laws of the Dead" or "Book of Dead Names") by Theodorus Philetas around 950 CE.
                </p>
                <p>
                  Lovecraft's fictional history further claims that the book was translated into Latin by Olaus Wormius in 1228, and that Pope Gregory IX banned both the Greek and Latin versions in 1232. The Latin translation was supposedly reprinted in Germany in the 15th century and in Spain in the 17th century, while an original Greek text was allegedly burned with Michael Psellus' library in 1050. Lovecraft asserted that only a few copies survive in his fictional universe, kept under lock and key in major libraries or in the possession of private collectors.
                </p>
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "That is not dead which can eternal lie,<br />
                  And with strange aeons even death may die."<br />
                  — The most famous couplet from the fictional Necronomicon, quoted by Lovecraft in "The Call of Cthulhu"
                </p>
              </div>
            </section>
            
            {/* Contents */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Fictional Contents
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Within Lovecraft's stories, the Necronomicon is described as containing forbidden knowledge that drives readers to madness. Its contents reportedly include:
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Cosmic Entities</h3>
                    <div className="space-y-4">
                      <p>
                        Detailed descriptions of the "Old Ones," ancient alien beings of immense power that once ruled the Earth and now lie dormant but will eventually return. These entities include Cthulhu, Yog-Sothoth, Shub-Niggurath, Nyarlathotep, and Azathoth, among others.
                      </p>
                      <p>
                        The book allegedly contains information about these beings' characteristics, origins, and the cults that worship them, as well as methods to contact or summon them—often with catastrophic consequences for the summoner and potentially all of humanity.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Forbidden Knowledge</h3>
                    <div className="space-y-4">
                      <p>
                        Information about lost civilizations such as Hyperborea, Leng, R'lyeh, and Y'ha-nthlei, which predate human civilization and harbor remnants of alien influence.
                      </p>
                      <p>
                        Secrets about the true nature of reality that reveal human existence to be insignificant in a vast, largely hostile universe populated by entities beyond human comprehension—knowledge so disturbing that it frequently drives readers to insanity.
                      </p>
                      <p>
                        Formulae for opening gates between dimensions, enabling travel between worlds, extending life beyond natural limits, or transferring consciousness between bodies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3">Alhazred's Journey</h3>
                    <div className="space-y-4">
                      <p>
                        According to Lovecraft's fictional history, Abdul Alhazred spent the last ten years of his life writing the Necronomicon after exploring the ruins of Babylon, the "subterranean secrets" of Memphis, and spending ten years alone in the great southern desert of Arabia—the Rub al Khali or "Empty Space" of the ancients—a region said to be inhabited by protective evil spirits and monsters of death.
                      </p>
                      <p>
                        Lovecraft claims that Alhazred's death was particularly gruesome—he was seized in broad daylight by an invisible monster and devoured horribly before a crowd of terrified witnesses. The implication is that the entities described in his book eventually claimed him as punishment for revealing their secrets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Literary Significance */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Literary Significance
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  The Necronomicon has become one of the most influential fictional books in literary history, extending far beyond Lovecraft's original works:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Shared Universe</h3>
                    <p className="text-sm text-foreground/70">
                      Lovecraft encouraged other writers to reference the Necronomicon in their own stories, creating one of the earliest examples of a shared fictional universe. Contemporary authors like Clark Ashton Smith, Robert E. Howard, and August Derleth—referred to as the "Lovecraft Circle"—incorporated the book into their own works, expanding its mythology.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Modern Influence</h3>
                    <p className="text-sm text-foreground/70">
                      The concept of the dangerous book of forbidden knowledge has influenced countless works across various media, including Stephen King's fiction, the Evil Dead film series, countless video games, role-playing games like Call of Cthulhu, and even music, with numerous bands making lyrical references to the Necronomicon and the Cthulhu Mythos.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Archetype</h3>
                    <p className="text-sm text-foreground/70">
                      The Necronomicon has become an archetypal example of the "Tome of Eldritch Lore" trope—an ancient, obscure text containing dangerous magical knowledge that threatens the reader's sanity and potentially the world itself. Its influence can be seen in fictional books like the Darkhold (Marvel Comics), the Book of the Dead (Evil Dead), and the Naturom Demonto (Evil Dead remake).
                    </p>
                  </div>
                  
                  <div className="bg-card/50 p-6 rounded-lg border border-border/30">
                    <h3 className="text-xl font-medium text-accent/80 mb-3 text-center">Meta-narrative</h3>
                    <p className="text-sm text-foreground/70">
                      Lovecraft's approach of providing a detailed, pseudo-scholarly history for a fictional text created a compelling meta-narrative that blurred the lines between fiction and reality. This approach has inspired many authors and helped establish the "false document" technique as a staple of horror fiction.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Real-World Publications */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4">Real-World "Necronomicons"</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Despite being entirely fictional, several real-world books claiming to be "The Necronomicon" have been published:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">The Simon Necronomicon (1977)</span>: Perhaps the most famous, published by Avon Books and purporting to be a genuine translation of a pre-Islamic text. It blends Lovecraftian elements with Sumerian mythology and ceremonial magic. Many occultists have criticized it as a commercially motivated hoax with potentially dangerous ritual instructions.
                  </li>
                  <li>
                    <span className="font-medium">The Necronomicon of George Hay (1978)</span>: Edited by George Hay and presented with essays by Colin Wilson and Robert Turner, this version claims to be based on a deciphered manuscript by John Dee. It's generally considered an elaborate literary experiment rather than an attempt to deceive.
                  </li>
                  <li>
                    <span className="font-medium">H.R. Giger's Necronomicon (1977)</span>: Not claiming to be the actual text, this is instead a collection of artwork by Swiss artist H.R. Giger, whose biomechanical style perfectly captured the disturbing alien aesthetics of Lovecraft's cosmic horror. The book had significant influence on visual interpretations of Lovecraftian entities.
                  </li>
                  <li>
                    <span className="font-medium">The Necronomicon Files (2003)</span>: A scholarly examination by Daniel Harms and John Wisdom Gonce III that explores the history of the fictional book and debunks claims of actual historical Necronomicons.
                  </li>
                  <li>
                    <span className="font-medium">Various Artistic Interpretations</span>: Numerous artists and writers have created their own versions of the Necronomicon as art projects or limited edition books, often featuring elaborate illustrations and designs intended to capture the disturbing nature of the fictional original.
                  </li>
                </ol>
              </div>
            </section>
            
            {/* Cultural Impact */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4">Cultural Impact</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  The impact of the Necronomicon extends beyond literature into broader cultural phenomena:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-medium">Library Hoaxes</span>: Numerous libraries have received request slips for the Necronomicon, and some have responded with humorous catalog entries or explanations of the book's fictional nature. Some university libraries maintain catalog entries for the Necronomicon as inside jokes, often with call numbers that lead to works about Lovecraft.
                  </li>
                  <li>
                    <span className="font-medium">Occult Adoption</span>: Some contemporary occultists, particularly those practicing chaos magic, have incorporated elements from the Cthulhu Mythos into their practices, arguing that fictional entities can become effective magical tools through focused belief—a concept sometimes called "hyper-sigillization" or "mytho-reality."
                  </li>
                  <li>
                    <span className="font-medium">Urban Legends</span>: The Necronomicon has spawned urban legends about secret government-held copies, hidden sections in libraries, and rare editions that contain "the real secrets" Lovecraft supposedly coded into his fiction. These myths persist despite clear historical evidence of the book's fictional origins.
                  </li>
                  <li>
                    <span className="font-medium">Academic Studies</span>: The Necronomicon phenomenon has been studied by scholars of religion, literature, and popular culture as an example of how fictional texts can develop quasi-religious significance and how the boundaries between fiction and belief can blur in contemporary society.
                  </li>
                </ul>
                <p>
                  The enduring fascination with the Necronomicon highlights humanity's persistent interest in forbidden knowledge and the thin line between horror fiction and esoteric belief. Lovecraft's imaginary book has transcended its origins to become a powerful cultural symbol of dangerous knowledge and cosmic terror that continues to captivate the imagination more than a century after its creation.
                </p>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Appearances */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Notable Appearances</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">"The Hound" (1924)</h4>
                    <p className="text-sm">First mention of the Necronomicon in Lovecraft's work, described as a "forbidden tome."</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">"The Call of Cthulhu" (1928)</h4>
                    <p className="text-sm">Contains the famous couplet and references to cult worship described in the book.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">"The Dunwich Horror" (1929)</h4>
                    <p className="text-sm">Features extensive use of the Necronomicon by the Whateley family to summon entities.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">"At the Mountains of Madness" (1931)</h4>
                    <p className="text-sm">References the book in relation to the ancient alien Elder Things.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">"The Shadow Over Innsmouth" (1936)</h4>
                    <p className="text-sm">Mentions the Necronomicon's accounts of the Deep Ones and their human hybrid offspring.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Key Entities */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Key Entities Referenced</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">Cthulhu</h4>
                    <p className="text-sm">A cosmic entity that lies dead but dreaming in the sunken city of R'lyeh, whose eventual awakening would spell doom for humanity.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Yog-Sothoth</h4>
                    <p className="text-sm">The All-in-One and One-in-All, existing outside conventional space-time and coterminous with all points in time and space.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Azathoth</h4>
                    <p className="text-sm">The "blind idiot god" who resides at the center of infinity, surrounded by dancers and the sound of demonic flutes.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Nyarlathotep</h4>
                    <p className="text-sm">The crawling chaos, a shape-shifting entity who serves as messenger of the Outer Gods and has direct interaction with humanity.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Shub-Niggurath</h4>
                    <p className="text-sm">The "Black Goat of the Woods with a Thousand Young," a fertility deity associated with perverse and corrupted nature.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Related Texts */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Related Fictional Texts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li>
                    <div className="flex items-center gap-2 text-accent">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Book of Eibon</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 text-accent">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>De Vermis Mysteriis</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 text-accent">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Unaussprechlichen Kulten</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 text-accent">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>The Pnakotic Manuscripts</span>
                    </div>
                  </li>
                  <li>
                    <Link 
                      href="/library/grimoires" 
                      className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Grimoires & Black Books</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  The Necronomicon is entirely fictional. While there are published books claiming to be "real" versions of the Necronomicon, these are either literary works inspired by Lovecraft's fiction or, in some cases, commercially motivated hoaxes. H.P. Lovecraft himself confirmed in his letters that he had invented the book for his stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 