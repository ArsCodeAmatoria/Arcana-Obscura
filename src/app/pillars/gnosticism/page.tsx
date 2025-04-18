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

        <blockquote className="border-l-4 border-accent pl-4 py-2 italic text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          "If you bring forth what is within you, what you bring forth will save you. If you do not bring forth what is within you, what you do not bring forth will destroy you." <br />
          <span className="text-sm not-italic block mt-2">- The Gospel of Thomas</span>
        </blockquote>

        <div className="text-center text-muted-foreground">
          <p>Full content coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
} 