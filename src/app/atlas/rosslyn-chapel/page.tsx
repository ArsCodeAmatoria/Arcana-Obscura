import React from 'react';
import { MapPin, ArrowLeft, ExternalLink, Building } from 'lucide-react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

export default function RosslynChapelPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-20 h-20 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M20 80 L50 20 L80 80 Z" stroke="currentColor" strokeWidth="0.5" />
            <path d="M30 80 L50 30 L70 80 Z" stroke="currentColor" strokeWidth="0.5" />
            <path d="M35 75 L50 40 L65 75 Z" stroke="currentColor" strokeWidth="0.5" />
            <rect x="40" y="75" width="20" height="15" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        
        <Link href="/atlas" className="flex items-center text-muted-foreground hover:text-accent mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Esoteric Atlas</span>
        </Link>

        <div className="text-center mb-12">
          <div className="mb-4">
            <Building className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Rosslyn Chapel</h1>
          <div className="flex items-center justify-center text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Roslin, Scotland</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A medieval architectural enigma encoded with esoteric symbolism, connecting Templar mysteries, 
            ancient wisdom traditions, and sacred geometry into a stone tapestry of hidden knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">The Stone Enigma</h2>
              <p className="mb-4">
                Rosslyn Chapel, officially known as the Collegiate Chapel of St. Matthew, stands as one of 
                the most mysterious architectural works in Western esotericism. Built in the 15th century 
                (1446-1484) by William Sinclair, the third Earl of Orkney, the chapel represents far more than 
                a simple house of worship—it is widely regarded as a compendium of esoteric knowledge rendered 
                in stone.
              </p>
              <p className="mb-4">
                While ostensibly constructed as a Catholic chapel, Rosslyn's intricate carvings and symbolic 
                elements suggest deeper purposes connected to Templar traditions, Masonic principles, and 
                pre-Christian mystery schools. The Sinclair family's documented connections to the Knights 
                Templar and early Freemasonry have fueled centuries of speculation about the chapel's true 
                purpose.
              </p>
              <p>
                The building's architecture incorporates elements from diverse traditions, featuring over 100 
                Green Men (pagan symbols of rebirth), depictions of plants from the Americas (carved decades 
                before Columbus's voyage), and elaborate geometric patterns that appear to encode mathematical 
                and musical principles. The famous Apprentice Pillar, with its helical carvings, has been 
                interpreted as representing everything from ancient Celtic wisdom to the structure of DNA.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Esoteric Significance</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Repository of Templar knowledge following the order's suppression</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Connection point between Celtic, Christian, and Middle Eastern esoteric traditions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Architecturally encoded musical harmonies and sacred geometry</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span>Possible sanctuary for sacred relics, including Templar treasures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Facts</h2>
                <ul className="space-y-3 text-sm">
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Construction:</span>
                    <span className="col-span-2">1446-1484 CE</span>
                  </li>
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Builder:</span>
                    <span className="col-span-2">William Sinclair, Earl of Orkney</span>
                  </li>
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Style:</span>
                    <span className="col-span-2">Late Gothic with unique elements</span>
                  </li>
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Carvings:</span>
                    <span className="col-span-2">Over 110 Green Men figures</span>
                  </li>
                  <li className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground col-span-1">Coordinates:</span>
                    <span className="col-span-2">55.8530° N, 3.1580° W</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">Templar Connections</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                The Sinclair family's historical ties to the Knights Templar form a crucial part of Rosslyn's 
                esoteric significance. Henry Sinclair, grandfather of Rosslyn's builder, is believed by many 
                researchers to have traveled to North America in 1398, nearly a century before Columbus, 
                potentially explaining the chapel's carvings of New World plants like maize and aloe.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                After the suppression of the Templars in 1307, Scotland—under excommunication from Rome—became 
                a haven for fleeing knights. The Sinclairs, as hereditary Grand Masters of Scottish Masonry, 
                are thought to have integrated Templar knowledge into emerging Masonic traditions, with Rosslyn 
                serving as a symbolic bridge between these orders.
              </p>
              <p className="mt-4 text-foreground/90 leading-relaxed">
                The chapel's layout appears to mirror elements of King Solomon's Temple and the Templar 
                headquarters in Jerusalem, suggesting a deliberate architectural preservation of sacred 
                proportions. Some researchers propose that the chapel was built to house Templar treasures 
                or sacred relics, potentially including the Holy Grail, the Ark of the Covenant, or fragments 
                of the True Cross.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-primary">The Music of Stone</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                One of Rosslyn's most remarkable features is its "musical architecture." The chapel's famous 
                Apprentice Pillar and the 213 cubes carved with intricate patterns along the arches have 
                been deciphered by modern researchers as a form of musical notation frozen in stone.
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                In 2007, father and son musicians Thomas and Stuart Mitchell decoded these patterns 
                into musical sequences they called "The Rosslyn Motet." When played, these compositions 
                create harmonies that interact uniquely with the chapel's acoustic properties, suggesting 
                the building itself was designed as a resonance chamber for specific musical frequencies.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                This musical encoding aligns with Pythagorean and Hermetic traditions that view music as 
                a reflection of cosmic harmony and a vehicle for spiritual transformation. The incorporation 
                of these principles into Rosslyn's architecture suggests the chapel was designed to function 
                as an initiatory space where sacred vibrations could alter consciousness and facilitate 
                mystical experiences.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <Card className="bg-card/30 backdrop-blur-sm border-accent/10">
            <CardContent className="p-8">
              <h2 className="text-3xl font-esoterica mb-6 text-accent text-center">Green Men and Hidden Wisdom</h2>
              <div className="max-w-4xl mx-auto">
                <p className="mb-4 text-foreground/90 leading-relaxed">
                  Rosslyn Chapel contains one of the largest collections of Green Man carvings in the world, 
                  with over 110 distinct representations of this pre-Christian fertility symbol depicted 
                  throughout the structure. These foliate faces—human visages surrounded by or sprouting leaves 
                  and vines—represent the cycle of death and rebirth, connecting the chapel to ancient pagan 
                  wisdom traditions.
                </p>
                <p className="mb-4 text-foreground/90 leading-relaxed">
                  What makes Rosslyn's Green Men remarkable is their progression: as one moves from east to west 
                  through the chapel, the carvings evolve from young, seed-like faces to mature, leafy visages 
                  and finally to ancient, decaying countenances. This sequence has been interpreted as depicting 
                  the alchemical process of spiritual transformation, suggesting that the chapel served as a 
                  teaching tool for initiates.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  The presence of these pagan symbols in a nominally Christian chapel, alongside carvings of 
                  Masonic significance, Moses, Babylonian figures, Knights Templar, and even apparent 
                  representations of Native Americans, positions Rosslyn as a rare syncretic sanctuary. Here, 
                  diverse spiritual traditions were preserved together during a period when religious 
                  orthodoxy dominated, suggesting the Sinclairs were custodians of a more universal approach 
                  to spiritual wisdom.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center border-t border-border/30 pt-8 mt-8">
          <Link href="/atlas" className="text-sm text-muted-foreground hover:text-accent flex items-center transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Atlas</span>
          </Link>
          <a href="https://www.rosslynchapel.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent flex items-center transition-colors group">
            <span>External Resources</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </MainLayout>
  );
} 