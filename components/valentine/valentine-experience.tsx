"use client"

import { useState } from "react"
import { FloatingHearts } from "./floating-hearts"
import { Sparkles } from "./sparkles"
import { Envelope } from "./envelope"
import { LoveLetter } from "./love-letter"
import { ReasonsILoveYou } from "./reasons-love"
import { FinalMessage } from "./final-message"

type Stage = "envelope" | "letter" | "reasons" | "final"

export function ValentineExperience() {
  const [stage, setStage] = useState<Stage>("envelope")
  const [transitioning, setTransitioning] = useState(false)

  function goToStage(next: Stage) {
    setTransitioning(true)
    setTimeout(() => {
      setStage(next)
      setTransitioning(false)
    }, 600)
  }

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-12 px-4"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, hsl(340, 30%, 95%) 0%, hsl(0, 20%, 98%) 50%, hsl(340, 25%, 93%) 100%)",
      }}
    >
      {/* Ambient backgrounds */}
      <FloatingHearts />
      <Sparkles />

      {/* Decorative top accent */}
      <div
        className="fixed top-0 left-0 right-0 h-1 z-50"
        style={{
          background: "linear-gradient(90deg, hsl(346, 77%, 50%), hsl(20, 80%, 55%), hsl(346, 77%, 50%))",
        }}
      />

      {/* Content area with transitions */}
      <div
        className={`relative z-10 w-full flex flex-col items-center justify-center transition-all duration-600 ${transitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        style={{ transitionDuration: "600ms" }}
      >
        {stage === "envelope" && (
          <div className="flex flex-col items-center gap-8">
            {/* Title */}
            <div className="text-center animate-fade-up">
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-3 text-balance">
                Happy Valentine{"'"}s Day
              </h1>
              <p className="font-sans text-base md:text-lg text-muted-foreground">
                I made something special for you Isata
              </p>
            </div>

            {/* Envelope */}
            <div className="animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
              <Envelope onOpen={() => goToStage("letter")} />
            </div>
          </div>
        )}

        {stage === "letter" && (
          <LoveLetter onNext={() => goToStage("reasons")} />
        )}

        {stage === "reasons" && (
          <ReasonsILoveYou onNext={() => goToStage("final")} />
        )}

        {stage === "final" && <FinalMessage />}
      </div>
    </main>
  )
}
