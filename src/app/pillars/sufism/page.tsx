import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Moon } from 'lucide-react';

export default function SufismPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-4">
            <Moon className="w-16 h-16 inline-block text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Sufism</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The mystical dimension of Islam that emphasizes direct personal experience of the Divine
            through practices of devotion, love, and the purification of the heart.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-esoterica mb-4 text-primary">Core Principles</h2>
              <p className="mb-4">
                Sufism, or Tasawwuf, represents the inner, mystical dimension of Islam. It emerged in the early 
                Islamic period as a response to the growing worldliness in society, with early Sufis emphasizing 
                simplicity, asceticism, and direct experience of the Divine.
              </p>
              <p className="mb-4">
                At the heart of Sufi practice is the concept of dhikr, the remembrance of God through repetitive 
                prayers or sacred phrases. Through this remembrance, along with other spiritual practices such as 
                meditation, breathing techniques, music, and movement, the Sufi seeks to polish the mirror of the 
                heart to reflect divine reality.
              </p>
              <p>
                The ultimate goal of the Sufi path is fanaa, the annihilation of the self in the Divine presence, 
                followed by baqaa, subsistence in God. This represents the dissolution of the ego and the awakening 
                to the unity of all existence (tawhid), where the separation between lover and beloved dissolves.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Key Practices</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Moon className="w-6 h-6 text-accent mr-2" />
                    <span className="font-semibold">Dhikr</span> - Remembrance of God
                  </li>
                  <li>
                    <span className="font-semibold">Sama</span> - Spiritual concert and dance
                  </li>
                  <li>
                    <span className="font-semibold">Muraqaba</span> - Meditation
                  </li>
                  <li>
                    <span className="font-semibold">Muhasaba</span> - Self-examination
                  </li>
                  <li>
                    <span className="font-semibold">Sohbet</span> - Spiritual conversation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-esoterica mb-4 text-primary">Notable Figures</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Rumi</span> - Persian poet and mystic
                  </li>
                  <li>
                    <span className="font-semibold">Ibn Arabi</span> - Philosopher and poet
                  </li>
                  <li>
                    <span className="font-semibold">Rabia al-Adawiyya</span> - Female mystic
                  </li>
                  <li>
                    <span className="font-semibold">Al-Ghazali</span> - Theologian and mystic
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <blockquote className="border-l-4 border-accent pl-4 py-2 italic text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          "What you seek is seeking you." <br />
          <span className="text-sm not-italic block mt-2">- Rumi</span>
        </blockquote>

        <div className="text-center text-muted-foreground">
          <p>Full content coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
} 