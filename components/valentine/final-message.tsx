"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

export function FinalMessage() {
  const [show, setShow] = useState(false)
  const [showSubtext, setShowSubtext] = useState(false)
  const [showHearts, setShowHearts] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 300)
    const t2 = setTimeout(() => setShowSubtext(true), 1200)
    const t3 = setTimeout(() => setShowHearts(true), 2000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  return (
    <div className="w-full max-w-3xl mx-auto px-4 text-center">
      {/* Giant heart */}
      <div
        className={`mb-8 transition-all duration-1000 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        <div className="relative inline-block">
          <Heart
            className="w-28 h-28 md:w-40 md:h-40 text-primary fill-current animate-heartbeat"
            style={{
              filter: "drop-shadow(0 0 30px rgba(220, 38, 78, 0.4))",
            }}
          />
          {/* Glow ring */}
          <div
            className="absolute inset-0 animate-pulse-glow rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(220,38,78,0.15) 0%, transparent 70%)",
              transform: "scale(2)",
            }}
          />
        </div>
      </div>

      {/* Main text */}
      <div
        className={`transition-all duration-1000 delay-300 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance leading-tight">
          You Are My
          <span
            className="block mt-2 bg-clip-text text-transparent animate-shimmer"
            style={{
              backgroundImage:
                "linear-gradient(90deg, hsl(346, 77%, 50%), hsl(20, 80%, 55%), hsl(346, 77%, 50%))",
              backgroundSize: "200% auto",
            }}
          >
            Everything
          </span>
        </h2>
      </div>

      {/* Subtext */}
      <div
        className={`transition-all duration-1000 ${
          showSubtext ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="font-serif text-lg md:text-2xl text-foreground/70 max-w-lg mx-auto leading-relaxed mb-4 text-balance">
          Today, tomorrow, and every day after, my heart belongs to you and only you.
        </p>
        <p className="font-serif text-xl md:text-2xl text-primary italic">
          Happy Valentine{"'"}s Day, my love
        </p>
      </div>

      {/* Bottom hearts row */}
      <div
        className={`mt-12 flex items-center justify-center gap-3 transition-all duration-1000 ${
          showHearts ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {[...Array(5)].map((_, i) => (
          <Heart
            key={i}
            className="text-primary fill-current"
            style={{
              width: `${20 + Math.abs(2 - i) * -3 + 12}px`,
              height: `${20 + Math.abs(2 - i) * -3 + 12}px`,
              animation: `heartbeat 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
              opacity: 0.5 + (1 - Math.abs(2 - i) / 2) * 0.5,
            }}
          />
        ))}
      </div>

      {/* Restart hint */}
      <div
        className={`mt-16 transition-all duration-1000 ${
          showHearts ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => window.location.reload()}
          className="text-sm text-muted-foreground hover:text-primary transition-colors font-sans underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
        >
          Read it again?
        </button>
      </div>
    </div>
  )
}
