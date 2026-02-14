"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { DealSliders } from "@/components/deal/deal-sliders"
import { AcceptanceMeter } from "@/components/deal/acceptance-meter"
import { TermSheet } from "@/components/deal/term-sheet"

export default function DealPage() {
  const [investment, setInvestment] = useState(1500000)
  const [equity, setEquity] = useState(12)

  return (
    <div className="min-h-screen bg-background grid-bg ambient-glow">
      <Navigation />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16">
        <div className="mb-10">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Deal Simulator
          </h1>
          <p className="mt-2 text-muted-foreground">
            Adjust investment terms and see how AI investors react. Generate a term sheet preview.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: Sliders + Acceptance */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <DealSliders
              investment={investment}
              equity={equity}
              onInvestmentChange={setInvestment}
              onEquityChange={setEquity}
            />
            <AcceptanceMeter investment={investment} equity={equity} />
          </div>

          {/* Right: Term Sheet */}
          <div className="lg:col-span-3">
            <TermSheet investment={investment} equity={equity} />
          </div>
        </div>
      </main>
    </div>
  )
}
