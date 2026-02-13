"use client"

import { useState } from "react"
import { Heart, Sparkles, Star, Sun, Moon, Coffee } from "lucide-react"

const REASONS = [
  { icon: Heart, text: "Your beautiful smile makes my heart skip a beat" },
  { icon: Star, text: "The way you always know how to make me laugh" },
  { icon: Sun, text: "How you light up every room you walk into" },
  { icon: Moon, text: "Our late-night conversations about everything" },
  { icon: Coffee, text: "The little things you do that show you care" },
  { icon: Sparkles, text: "Your kindness and the warmth of your soul" },
]

export function ReasonsILoveYou({ onNext }: { onNext: () => void }) {
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set())
  const allRevealed = revealedCards.size === REASONS.length

  function handleReveal(index: number) {
    setRevealedCards((prev) => {
      const newSet = new Set(prev)
      newSet.add(index)
      return newSet
    })
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <h2 className="font-serif text-3xl md:text-5xl text-center text-foreground mb-3 animate-fade-up text-balance">
        Reasons I Love You
      </h2>
      <p className="text-center text-muted-foreground font-sans mb-10 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
        Tap each card to reveal
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {REASONS.map((reason, i) => {
          const isRevealed = revealedCards.has(i)
          const Icon = reason.icon

          return (
            <button
              key={i}
              onClick={() => handleReveal(i)}
              className={`group relative rounded-2xl p-6 min-h-[180px] flex flex-col items-center justify-center gap-4 text-center transition-all duration-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                isRevealed
                  ? "scale-100"
                  : "hover:scale-105 active:scale-95 cursor-pointer"
              }`}
              style={{
                background: isRevealed
                  ? "linear-gradient(165deg, hsl(40, 50%, 96%), hsl(30, 40%, 93%))"
                  : "linear-gradient(135deg, hsl(346, 77%, 50%), hsl(346, 77%, 40%))",
                boxShadow: isRevealed
                  ? "0 10px 30px rgba(0,0,0,0.06), 0 0 0 1px rgba(220,38,78,0.1)"
                  : "0 10px 30px rgba(220,38,78,0.25)",
                animationDelay: `${i * 0.1}s`,
                animationFillMode: "both",
              }}
              aria-label={isRevealed ? reason.text : `Reveal reason ${i + 1}`}
              disabled={isRevealed}
            >
              {isRevealed ? (
                <div className="animate-fade-up flex flex-col items-center gap-3" style={{ animationFillMode: "both" }}>
                  <Icon className="w-8 h-8 text-primary" />
                  <p className="font-serif text-base text-foreground/80 leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-foreground fill-current animate-pulse" />
                  </div>
                  <span className="text-primary-foreground font-serif text-lg">
                    {"#"}{i + 1}
                  </span>
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Continue button */}
      {allRevealed && (
        <div className="mt-10 flex justify-center animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          <button
            onClick={onNext}
            className="px-8 py-4 rounded-full font-serif text-lg text-primary-foreground transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            style={{
              background: "linear-gradient(135deg, hsl(346, 77%, 50%), hsl(346, 77%, 40%))",
              boxShadow: "0 10px 30px rgba(220, 38, 78, 0.3)",
            }}
          >
            <span className="flex items-center gap-2">
              <Heart className="w-5 h-5 fill-current" />
              One last thing...
              <Heart className="w-5 h-5 fill-current" />
            </span>
          </button>
        </div>
      )}
    </div>
  )
}
