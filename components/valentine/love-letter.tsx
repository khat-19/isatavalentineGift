"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

const LOVE_LINES = [
  "My Dearest Love Isata,",
  "",
  "Every moment with you feels like a beautiful dream",
  "I never want to wake up from.",
  "",
  "Your smile is the sunrise that lights up my world,",
  "your laughter is the melody my heart dances to,",
  "and your love is the greatest gift I have ever known.",
  "",
  "You make ordinary days extraordinary",
  "simply by being in them.",
  "",
  "I fall deeper in love with you every single day,",
  "and I promise to cherish you, protect you,",
  "and love you with everything I am.",
  "",
  "You are my today, my tomorrow, and my forever.",
  "",
  "Happy Valentine's Day, my love.",
]

export function LoveLetter({ onNext }: { onNext: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (visibleLines < LOVE_LINES.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((v) => v + 1)
      }, 300)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setShowButton(true), 600)
      return () => clearTimeout(timeout)
    }
  }, [visibleLines])

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Letter Card */}
      <div
        className="relative rounded-3xl p-8 md:p-12"
        style={{
          background: "linear-gradient(165deg, hsl(40, 50%, 96%), hsl(30, 40%, 93%))",
          boxShadow:
            "0 25px 60px rgba(0,0,0,0.08), 0 0 0 1px rgba(220, 38, 78, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        {/* Decorative top corner */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-20">
          <Heart className="w-8 h-8 text-primary fill-current" />
        </div>
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 opacity-20">
          <Heart className="w-6 h-6 text-primary fill-current" />
        </div>

        {/* Letter content */}
        <div className="space-y-1 min-h-[400px] md:min-h-[450px]">
          {LOVE_LINES.slice(0, visibleLines).map((line, i) => {
            if (line === "") {
              return <div key={i} className="h-4" />
            }

            const isTitle = i === 0
            const isSignOff = i === LOVE_LINES.length - 1

            return (
              <p
                key={i}
                className={`animate-fade-up ${isTitle
                    ? "font-serif text-2xl md:text-3xl text-foreground mb-4 italic"
                    : isSignOff
                      ? "font-serif text-xl md:text-2xl text-primary font-semibold mt-4"
                      : "font-serif text-base md:text-lg text-foreground/80 leading-relaxed"
                  }`}
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationFillMode: "both",
                }}
              >
                {line}
              </p>
            )
          })}
        </div>

        {/* Signature area */}
        {visibleLines >= LOVE_LINES.length && (
          <div className="mt-8 flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-4 h-4 text-primary fill-current"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animation: "heartbeat 1.5s ease-in-out infinite",
                  }}
                />
              ))}
            </div>
            <span className="font-serif text-lg text-muted-foreground italic">
              Forever Yours
            </span>
          </div>
        )}
      </div>

      {/* Continue button */}
      {showButton && (
        <div className="mt-8 flex justify-center animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <button
            onClick={onNext}
            className="group relative px-8 py-4 rounded-full font-serif text-lg text-primary-foreground overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-transform hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, hsl(346, 77%, 50%), hsl(346, 77%, 40%))",
              boxShadow: "0 10px 30px rgba(220, 38, 78, 0.3)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Heart className="w-5 h-5 fill-current" />
              There{"'"}s more...
              <Heart className="w-5 h-5 fill-current" />
            </span>
          </button>
        </div>
      )}
    </div>
  )
}
