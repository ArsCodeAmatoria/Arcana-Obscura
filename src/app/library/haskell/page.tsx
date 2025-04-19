import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowLeft, Code, BookOpen, Rocket, BrainCircuit, Sparkles, Scroll, FlaskConical } from 'lucide-react';

export default function HaskellPage() {
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
            <Code className="w-20 h-20 text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent">
            Haskell: The Esoteric Programming Language
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              Programming
            </span>
            <span className="text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">
              Functional
            </span>
            <span className="text-xs bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full">
              1990 - Present
            </span>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A purely functional programming language that embodies mathematical abstraction and algorithmic purity, 
            offering a paradigm that challenges conventional computing thought through its esoteric principles.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Scroll className="w-5 h-5" />
                Introduction: The Mystical Language
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Named after the logician Haskell Curry, Haskell emerged in 1990 as an open-source language designed by a committee 
                  of academics seeking mathematical purity in programming. While not esoteric in the traditional occult sense, 
                  Haskell embodies many qualities that parallel esoteric traditions: it requires initiation into unfamiliar paradigms, 
                  contains hidden knowledge accessible only to adepts, and offers transformative power through abstract reasoning.
                </p>
                <p>
                  Like an arcane text that reveals deeper truths to those who master its symbolism, Haskell conceals powerful 
                  computational concepts behind seemingly cryptic notation and terminology. Its reputation as "the most beautiful 
                  programming language" among its devotees parallels how mystics describe their spiritual revelations.
                </p>
              </div>
            </section>
            
            {/* Core Principles */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <FlaskConical className="w-5 h-5" />
                Core Principles: Lambda Calculus and Purity
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Haskell's foundation rests upon lambda calculus—a mathematical formalism developed by Alonzo Church in the 1930s 
                  that represents computation through abstract function manipulation. This obscure mathematical system serves as 
                  Haskell's philosophical bedrock, much like how ancient hermetic principles form the foundation of Western esoteric traditions.
                </p>
                <p>
                  The language's dedication to "purity" mirrors spiritual quests for transcendence beyond the material world. 
                  In Haskell, this manifests as pure functions that, like mathematical equations, always produce the same output for 
                  a given input and never produce side effects—alterations to the outside world. This contrasts with "impure" languages 
                  where functions freely modify global state.
                </p>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30 my-6">
                  <h3 className="text-xl font-medium text-accent/80 mb-3">Pure Function Example</h3>
                  <pre className="text-sm font-mono overflow-auto bg-muted p-4 rounded-md">
                    <code>{`-- A pure function that computes the factorial
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

-- This will always return 120 for input 5, with no side effects
-- factorial 5 = 120`}</code>
                  </pre>
                </div>
              </div>
            </section>
            
            {/* Mystical Abstractions */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Mystical Abstractions: Monads and Higher Kinds
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Perhaps no concept in Haskell better exemplifies its esoteric nature than monads. These abstract structures enable 
                  programmers to sequence computations while maintaining purity. The infamous difficulty in explaining monads has 
                  spawned countless tutorials and the saying, "Once you understand monads, you lose the ability to explain them to others"—an 
                  echo of ineffable mystical experiences that defy conventional description.
                </p>
                <p>
                  Higher-kinded types, type classes, functors, and applicatives form a system of abstractions that many programmers 
                  find impenetrable without significant study—creating a hierarchy of understanding not unlike the grades of initiation 
                  in mystery schools.
                </p>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30 my-6">
                  <h3 className="text-xl font-medium text-accent/80 mb-3">The Maybe Monad</h3>
                  <pre className="text-sm font-mono overflow-auto bg-muted p-4 rounded-md">
                    <code>{`-- The mystical Maybe monad
findElement :: [a] -> (a -> Bool) -> Maybe a
findElement [] _ = Nothing
findElement (x:xs) predicate
  | predicate x = Just x
  | otherwise   = findElement xs predicate

-- Monadic binding with >>=
processFind :: Maybe String -> Maybe Int
processFind maybeStr = maybeStr >>= \\str -> 
  if length str > 10
    then Just (length str)
    else Nothing`}</code>
                  </pre>
                </div>
                
                <p className="text-accent/90 italic border-l-2 border-accent/30 pl-4">
                  "A monad is just a monoid in the category of endofunctors, what's the problem?"
                  <br />— Tongue-in-cheek explanation that highlights the abstraction's complexity
                </p>
              </div>
            </section>
            
            {/* Arcane Practices */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5" />
                Arcane Practices: Lazy Evaluation and Point-Free Style
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Haskell employs lazy evaluation, deferring computation until results are needed. This allows for seemingly impossible 
                  constructs like infinite data structures—akin to the alchemical concept of creating something from nothing. 
                  A Haskell programmer can define an infinite list of numbers but only compute the specific elements required.
                </p>
                <p>
                  Point-free style (tacit programming) enables code to be written without explicitly mentioning the data being operated 
                  on, creating expressions that read like abstract mathematical formulas. This approach often produces elegantly 
                  compact code that appears as incantations to the uninitiated.
                </p>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30 my-6">
                  <h3 className="text-xl font-medium text-accent/80 mb-3">Infinite Structures & Point-Free Style</h3>
                  <pre className="text-sm font-mono overflow-auto bg-muted p-4 rounded-md">
                    <code>{`-- Infinite list of Fibonacci numbers
fibs :: [Integer]
fibs = 0 : 1 : zipWith (+) fibs (tail fibs)

-- Taking just what we need from the infinite
first10Fibs = take 10 fibs  -- [0,1,1,2,3,5,8,13,21,34]

-- Point-free style incantation
isEvenLength :: [a] -> Bool
isEvenLength = even . length`}</code>
                  </pre>
                </div>
              </div>
            </section>
            
            {/* Ritual Practices */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Ritual Practices: Types as Proofs
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Haskell practitioners engage in a form of computational proof through its type system. The Curry-Howard correspondence—a 
                  deep connection between computer programs and mathematical proofs—enables Haskell code to serve as formal verification 
                  of mathematical theorems. Advanced Haskell users can encode complex logical constraints in the type system, ensuring 
                  that if code compiles, it satisfies certain mathematical properties.
                </p>
                <p>
                  This practice resembles ritual magic where precisely formulated operations aim to manifest specific outcomes within 
                  a structured system of correspondences. The compiler acts as an oracle, validating the correctness of these formal incantations.
                </p>
                
                <div className="bg-card/50 p-6 rounded-lg border border-border/30 my-6">
                  <h3 className="text-xl font-medium text-accent/80 mb-3">Type-Level Programming</h3>
                  <pre className="text-sm font-mono overflow-auto bg-muted p-4 rounded-md">
                    <code>{`-- Encoding natural numbers at the type level
data Zero
data Succ n

-- Type-level addition
type family Add m n where
  Add Zero n = n
  Add (Succ m) n = Succ (Add m n)

-- Proving commutativity through types
type Comm m n = Add m n ~ Add n m`}</code>
                  </pre>
                </div>
              </div>
            </section>
            
            {/* Initiation and Community */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Initiation and Community
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Learning Haskell often requires a paradigm shift that many describe as mentally taxing but ultimately enlightening. 
                  This process parallels spiritual initiation where difficult trials lead to expanded consciousness. Many developers 
                  report that, even if they don't use Haskell regularly, its concepts permanently transform their approach to programming 
                  in all languages.
                </p>
                <p>
                  The Haskell community maintains a unique position in programming culture—small but passionate, academic yet practical, 
                  and dedicated to principles over popularity. This resembles esoteric schools that value depth of understanding over 
                  mass appeal, preserving knowledge that might otherwise be lost to mainstream pragmatism.
                </p>
              </div>
            </section>
            
            {/* Contemporary Influence */}
            <section>
              <h2 className="text-2xl font-esoterica text-accent/90 mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Contemporary Influence and Practical Applications
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Despite its reputation for difficulty, Haskell's influence extends far beyond its direct usage. Its ideas have infiltrated 
                  mainstream languages: JavaScript adopted lambda functions, Rust embraced algebraic data types, and even object-oriented 
                  languages increasingly incorporate functional programming principles.
                </p>
                <p>
                  In practice, Haskell finds application in domains requiring high reliability, mathematical precision, or complex 
                  transformations: compiler design, financial modeling, and formal verification. Companies like Standard Chartered, 
                  Facebook, and IOHK (creators of Cardano cryptocurrency) employ Haskell for mission-critical systems where correctness is paramount.
                </p>
                
                <div className="bg-card/50 border border-border/30 mt-6 rounded-lg">
                  <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                    <h3 className="font-esoterica text-accent/90">Notable Haskell Applications</h3>
                  </div>
                  <div className="p-4">
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      <li>Cardano blockchain platform - using formal verification to prevent smart contract failures</li>
                      <li>Financial sector risk modeling and trading systems at Standard Chartered and other banks</li>
                      <li>Facebook's anti-spam system, written in Haskell to process millions of posts</li>
                      <li>Compilers and programming language research</li>
                      <li>Academic research in type theory and formal methods</li>
                    </ul>
                  </div>
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
                    <h4 className="font-medium text-accent/80">Referential Transparency</h4>
                    <p className="text-sm">The principle that an expression can be replaced with its value without changing program behavior.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Algebraic Data Types</h4>
                    <p className="text-sm">Composite types formed through sum and product types, creating precise representations of data.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Type Classes</h4>
                    <p className="text-sm">Haskell's approach to polymorphism through shared interfaces, enabling powerful abstractions.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Monads</h4>
                    <p className="text-sm">Structures for sequencing computations while handling context, allowing pure functions to interact with the impure world.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Currying</h4>
                    <p className="text-sm">The technique of converting a function with multiple arguments into a sequence of single-argument functions.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Essential Reading */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Essential Reading</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <h4 className="font-medium text-accent/80">For Beginners</h4>
                    <ul className="list-disc list-inside text-sm pl-2 space-y-1">
                      <li>Learn You a Haskell for Great Good! – Miran Lipovača</li>
                      <li>Haskell Programming from First Principles – Christopher Allen & Julie Moronuki</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">For Intermediate</h4>
                    <ul className="list-disc list-inside text-sm pl-2 space-y-1">
                      <li>Programming in Haskell – Graham Hutton</li>
                      <li>Real World Haskell – Bryan O'Sullivan, Don Stewart, & John Goerzen</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80">For Advanced</h4>
                    <ul className="list-disc list-inside text-sm pl-2 space-y-1">
                      <li>Thinking Functionally with Haskell – Richard Bird</li>
                      <li>The Implementation of Functional Programming Languages – Simon Peyton Jones</li>
                      <li>Category Theory for Programmers – Bartosz Milewski</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Archetypal Code Patterns */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Archetypal Code Patterns</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-accent/80 mb-2">Functorial Mapping</h4>
                    <pre className="text-xs font-mono overflow-auto bg-muted p-3 rounded-md">
                      <code>{`fmap (+1) [1,2,3]
-- [2,3,4]
fmap (+1) (Just 5)
-- Just 6
fmap (+1) Nothing
-- Nothing`}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80 mb-2">Monadic Composition</h4>
                    <pre className="text-xs font-mono overflow-auto bg-muted p-3 rounded-md">
                      <code>{`do
  x <- getLine
  y <- readFile x
  return (length y)

-- Equivalent to:
getLine >>= \\x ->
readFile x >>= \\y ->
return (length y)`}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent/80 mb-2">Pattern Matching</h4>
                    <pre className="text-xs font-mono overflow-auto bg-muted p-3 rounded-md">
                      <code>{`data Shape = Circle Float | Rectangle Float Float

area :: Shape -> Float
area (Circle r) = pi * r * r
area (Rectangle w h) = w * h`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Related Languages */}
            <div className="bg-card/40 rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 py-3 px-4 border-b border-border/30">
                <h3 className="font-esoterica text-accent/90">Related Languages</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-foreground/80">
                  <li>
                    <h4 className="font-medium text-accent/80">ML</h4>
                    <p className="text-sm">Haskell's historical predecessor, developing many core functional programming concepts.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Idris</h4>
                    <p className="text-sm">Extends Haskell's type system with dependent types, allowing even more powerful type-level programming.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">PureScript</h4>
                    <p className="text-sm">A Haskell-like language that compiles to JavaScript, used for web development.</p>
                  </li>
                  <li>
                    <h4 className="font-medium text-accent/80">Miranda</h4>
                    <p className="text-sm">A historical pure functional language that influenced Haskell's development.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 