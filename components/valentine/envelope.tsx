"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

interface EnvelopeProps {
  onOpen: () => void
}

export function Envelope({ onOpen }: EnvelopeProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
      aria-label="Open your Valentine's love letter"
    >
      {/* Envelope body */}
      <div
        className={`relative w-72 h-48 md:w-96 md:h-64 rounded-2xl transition-all duration-500 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
        style={{
          background: "linear-gradient(135deg, hsl(346, 77%, 50%), hsl(346, 77%, 40%))",
          boxShadow: isHovered
            ? "0 25px 60px rgba(220, 38, 78, 0.4), 0 0 40px rgba(220, 38, 78, 0.2)"
            : "0 15px 40px rgba(220, 38, 78, 0.25)",
        }}
      >
        {/* Envelope flap (triangle) */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden rounded-t-2xl"
          style={{
            background: "linear-gradient(180deg, hsl(346, 77%, 45%), hsl(346, 77%, 50%))",
            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
          }}
        />

        {/* Heart seal */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
              isHovered ? "animate-heartbeat" : ""
            }`}
            style={{
              background: "linear-gradient(135deg, hsl(20, 80%, 55%), hsl(20, 80%, 45%))",
              boxShadow: "0 4px 15px rgba(220, 120, 50, 0.4)",
            }}
          >
            <Heart className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground fill-current" />
          </div>
        </div>

        {/* Bottom fold line */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 rounded-b-2xl" style={{
          background: "linear-gradient(180deg, hsl(346, 77%, 48%), hsl(346, 77%, 42%))",
        }} />

        {/* Side fold lines */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, transparent 0%, transparent 48%, rgba(255,255,255,0.1) 50%, transparent 52%, transparent 100%)",
          }}
        />
      </div>

      {/* Click hint */}
      <div
        className={`mt-6 text-center transition-all duration-500 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-60 translate-y-1"
        }`}
      >
        <p className="font-serif text-lg md:text-xl text-foreground tracking-wide">
          Tap to open your gift
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Heart className="w-3 h-3 text-primary fill-current animate-pulse" />
          <span className="text-sm text-muted-foreground font-sans">with love</span>
          <Heart className="w-3 h-3 text-primary fill-current animate-pulse" />
        </div>
      </div>
    </button>
  )
}
