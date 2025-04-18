'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample quotes from mystical traditions
const quotes = [
  {
    text: "As above, so below; as below, so above. By virtue of the one thing comes the perfection of all things.",
    source: "The Emerald Tablet",
    tradition: "Hermeticism"
  },
  {
    text: "The lips of wisdom are closed, except to the ears of Understanding.",
    source: "The Kybalion",
    tradition: "Hermeticism"
  },
  {
    text: "All the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
    source: "William Shakespeare",
    tradition: "Rosicrucian"
  },
  {
    text: "The universe is a single mirror reflecting itself.",
    source: "Ibn Arabi",
    tradition: "Sufism"
  },
  {
    text: "Know thyself, and thou shalt know the universe and God.",
    source: "Temple of Apollo at Delphi",
    tradition: "Greek Mysteries"
  },
  {
    text: "The All is Mind; The Universe is Mental.",
    source: "The Kybalion",
    tradition: "Hermeticism"
  },
  {
    text: "In the beginning was darkness, and the darkness was without form and void. And upon the face of the Abyss there was a movement.",
    source: "The Divine Pymander",
    tradition: "Hermeticism"
  },
  {
    text: "Everyone has their own perfect center, and when you find it, your life will become magical beyond anything you ever dreamed possible.",
    source: "Robert Anton Wilson",
    tradition: "Modern Esoteric"
  },
  {
    text: "If you wish to understand the Universe, think of energy, frequency and vibration.",
    source: "Nikola Tesla",
    tradition: "Modern Esoteric"
  },
  {
    text: "Light and darkness, life and death, right and left, are brothers of one another. They are inseparable.",
    source: "Gospel of Philip",
    tradition: "Gnosticism"
  },
  {
    text: "The kingdom of heaven is within you; and whosoever shall know himself shall find it.",
    source: "The Gospel of Thomas",
    tradition: "Gnosticism"
  },
  {
    text: "If the doors of perception were cleansed everything would appear to man as it is, Infinite.",
    source: "William Blake",
    tradition: "Mysticism"
  }
];

export default function OracleGenerator() {
  const [quote, setQuote] = useState<typeof quotes[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-accent/20">
        <motion.div
          className="absolute inset-0 bg-accent/5"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
              'radial-gradient(circle at 20% 70%, rgba(255, 215, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
              'radial-gradient(circle at 80% 30%, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
              'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <CardContent className="p-8 relative">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Sparkles className="w-12 h-12 text-accent animate-pulse" />
              <p className="mt-4 text-accent/80 font-esoterica">Consulting the oracle...</p>
            </div>
          ) : quote ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              <p className="text-2xl italic">{quote.text}</p>
              <div className="mt-6">
                <p className="text-primary font-semibold">{quote.source}</p>
                <p className="text-sm text-muted-foreground">{quote.tradition} Tradition</p>
              </div>
            </motion.div>
          ) : null}
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button 
          onClick={generateQuote} 
          className="mystical-glow" 
          disabled={isLoading}
          size="lg"
        >
          <RefreshCw className={`w-5 h-5 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Consult the Oracle Again
        </Button>
      </div>
    </div>
  );
} 