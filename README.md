# Arcana Obscura

A modern, esoteric knowledge portal inspired by *The Secret Teachings of All Ages* and various mystery traditions. This web application provides a digital repository dedicated to preserving and illuminating esoteric wisdom traditions.

## Features

- **The Living Grimoire**: Home page with cosmic Three.js animation and site introduction
- **Pillars of Mystery**: Navigation hub for exploring different esoteric traditions
- **Esoteric Atlas**: Interactive map of sacred mystery school sites
- **Alchemical Timeline**: Scroll-based history of esoteric traditions
- **The Secret Library**: Excerpts and interpretations from esoteric texts
- **The Inner Chamber**: Login-protected content
- **Daily Oracle**: Quote generator from Hermetic/Kabbalistic texts
- **Symbol Decoder**: Hover glossary for esoteric iconography

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) / [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **Mapping**: [react-simple-maps](https://www.react-simple-maps.io/)

## Project Structure

```
arcana-obscura/
├── src/
│   ├── app/                   # App Router structure
│   │   ├── pillars/           # Mystery tradition pages
│   │   ├── atlas/             # Esoteric Atlas
│   │   ├── timeline/          # Alchemical Timeline
│   │   ├── library/           # The Secret Library
│   │   ├── chamber/           # The Inner Chamber
│   │   ├── oracle/            # Daily Oracle
│   │   └── decoder/           # Symbol Decoder
│   ├── components/            # Reusable UI components
│   │   ├── ui/                # shadcn/ui components
│   │   ├── layout/            # Layout components
│   │   ├── home/              # Homepage-specific components
│   │   ├── atlas/             # Atlas components
│   │   ├── timeline/          # Timeline components
│   │   └── oracle/            # Oracle components
│   ├── lib/                   # Utilities
│   └── types/                 # TypeScript type definitions
├── data/                      # JSON/MDX files for texts, quotes, etc.
├── public/                    # Static assets
│   └── assets/                # Icons, images, and SVGs
└── package.json               # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/arcana-obscura.git
   cd arcana-obscura
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Theme

- Dark velvet background with cosmic accents
- Gold, deep purple, and dark crimson highlights
- Serif and alchemical-looking display fonts
- Mystical hover glows and smooth animations

## Page Descriptions

- `/` - **The Living Grimoire**: A cosmic animation introduces visitors to the site's purpose as a repository of esoteric knowledge
- `/pillars` - **Pillars of Mystery**: A hub showcasing different esoteric traditions (Hermeticism, Rosicrucianism, etc.)
- `/atlas` - **Esoteric Atlas**: An interactive map showing important locations in the history of mystery traditions
- `/timeline` - **Alchemical Timeline**: A chronological exploration of key events in the history of esoteric knowledge
- `/library` - **The Secret Library**: A collection of excerpts and interpretations from important esoteric texts
- `/chamber` - **The Inner Chamber**: Protected content for registered users/members
- `/oracle` - **Daily Oracle**: A random quote generator drawing from the wisdom of esoteric teachings
- `/decoder` - **Symbol Decoder**: A reference guide explaining common esoteric symbols and their meanings

## Content Sources

The content for this project draws inspiration from:
- *The Secret Teachings of All Ages* by Manly P. Hall
- *The Kybalion* by Three Initiates
- Works on Hermeticism, Kabbalah, Rosicrucianism, Freemasonry, and other esoteric traditions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Manly P. Hall for his extensive research on esoteric traditions
- The developers of all the open-source libraries used in this project
