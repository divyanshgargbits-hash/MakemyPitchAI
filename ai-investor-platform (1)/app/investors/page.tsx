"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { InvestorCard } from "@/components/investors/investor-card"
import { InvestorScene } from "@/components/investors/investor-scene"
import { InvestorFitMeter } from "@/components/investors/investor-fit-meter"
import { Cloud, TrendingUp, Mic, MessageSquare } from "lucide-react"

const investors = [
  {
    id: "aws",
    name: "AWS AI",
    role: "Cloud & Infrastructure",
    description: "Evaluates scalability, infrastructure costs, and cloud-native architecture. Looks for startups that can leverage AWS services for rapid growth.",
    icon: Cloud,
    color: "#f97316",
    fitScore: 88,
    interests: ["Scalability", "Serverless", "Enterprise"],
    verdict: "Strong infrastructure play. Scalable architecture aligns with cloud-native trends.",
  },
  {
    id: "clickhouse",
    name: "ClickHouse AI",
    role: "Data & Analytics",
    description: "Focuses on data pipeline efficiency, analytics capabilities, and real-time processing. Values startups with strong data moats.",
    icon: TrendingUp,
    color: "#fde047",
    fitScore: 76,
    interests: ["Real-time Data", "Analytics", "Data Moats"],
    verdict: "Solid data pipeline. Needs stronger real-time analytics differentiation.",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs AI",
    role: "Voice & Audio Tech",
    description: "Assesses voice interface innovation, audio AI capabilities, and natural language understanding. Champions human-AI interaction.",
    icon: Mic,
    color: "#a78bfa",
    fitScore: 92,
    interests: ["Voice AI", "NLU", "Human-AI UX"],
    verdict: "Exceptional voice integration. Natural language workflow control is groundbreaking.",
  },
  {
    id: "slack",
    name: "Slack AI",
    role: "Collaboration & Comms",
    description: "Evaluates team workflow integration, communication features, and collaboration patterns. Seeks strong distribution channels.",
    icon: MessageSquare,
    color: "#fb7185",
    fitScore: 71,
    interests: ["Integrations", "Team UX", "Distribution"],
    verdict: "Good integration potential. Needs clearer distribution and GTM strategy.",
  },
]

export default function InvestorsPage() {
  const [selectedInvestor, setSelectedInvestor] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background grid-bg ambient-glow">
      <Navigation />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16">
        <div className="mb-10">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Investor Room
          </h1>
          <p className="mt-2 text-muted-foreground">
            Meet your AI investors. Each evaluates your startup from a unique perspective.
          </p>
        </div>

        {/* Spline 3D Scene Placeholder */}
        <InvestorScene />

        {/* Investor Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {investors.map((investor, i) => (
            <InvestorCard
              key={investor.id}
              investor={investor}
              isSelected={selectedInvestor === investor.id}
              onSelect={() => setSelectedInvestor(
                selectedInvestor === investor.id ? null : investor.id
              )}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Investor Fit Meter */}
        <div className="mt-10">
          <InvestorFitMeter investors={investors} />
        </div>
      </main>
    </div>
  )
}
