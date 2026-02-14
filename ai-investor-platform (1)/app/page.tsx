"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Zap, ArrowRight, Brain, Mic, HandshakeIcon, TrendingUp, Shield, Cloud, MessageSquare } from "lucide-react"

const investors = [
  {
    name: "AWS AI",
    description: "Cloud infrastructure & scalability expert",
    icon: Cloud,
    iconColor: "text-orange-400",
    gradient: "from-orange-500/15 to-orange-500/5",
    border: "border-orange-500/20",
  },
  {
    name: "ClickHouse AI",
    description: "Data analytics & real-time processing",
    icon: TrendingUp,
    iconColor: "text-yellow-300",
    gradient: "from-yellow-400/15 to-yellow-400/5",
    border: "border-yellow-400/20",
  },
  {
    name: "ElevenLabs AI",
    description: "Voice technology & audio intelligence",
    icon: Mic,
    iconColor: "text-violet-400",
    gradient: "from-violet-500/15 to-violet-500/5",
    border: "border-violet-500/20",
  },
  {
    name: "Slack AI",
    description: "Team collaboration & communication",
    icon: MessageSquare,
    iconColor: "text-rose-400",
    gradient: "from-rose-500/15 to-rose-500/5",
    border: "border-rose-500/20",
  },
]

const features = [
  {
    icon: Brain,
    title: "AI Pitch Analysis",
    description: "Upload your pitch and receive instant AI-powered evaluation across multiple investment dimensions.",
  },
  {
    icon: Mic,
    title: "Live Voice Pitch",
    description: "Pitch to AI investors in real-time with voice recognition and interactive Q&A sessions.",
  },
  {
    icon: HandshakeIcon,
    title: "Deal Simulator",
    description: "Negotiate investment terms with AI investors and generate term sheets instantly.",
  },
  {
    icon: Shield,
    title: "Smart Due Diligence",
    description: "AI investors analyze market fit, risk factors, and competitive landscape automatically.",
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background grid-bg ambient-glow">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
        {/* Ambient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600/8 to-fuchsia-600/4 blur-[140px]" />
          <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-purple-600/6 to-indigo-600/3 blur-[120px]" />
          <div className="absolute top-1/3 left-1/6 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-600/4 to-transparent blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="mb-8 animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/8 px-4 py-1.5">
            <Zap className="h-3.5 w-3.5 text-violet-400" />
            <span className="text-xs font-medium text-violet-300">AI-Powered Investment Platform</span>
          </div>

          <h1 className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight text-foreground animate-fade-in-up md:text-7xl lg:text-8xl" style={{ animationDelay: "0.1s" }}>
            <span className="text-balance">Pitch once.</span>
            <br />
            <span className="text-balance bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Get funded by AI investors.</span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-fade-in-up md:text-xl" style={{ animationDelay: "0.2s" }}>
            Present your startup to four AI-powered investors modeled after top tech companies. Get instant evaluation, negotiate deals, and receive actionable feedback.
          </p>

          <div className="flex flex-col items-center gap-4 animate-fade-in-up sm:flex-row" style={{ animationDelay: "0.3s" }}>
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-2 rounded-xl gradient-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110 purple-glow"
            >
              Pitch Your Startup
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/investors"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-500/20 bg-violet-500/5 px-8 py-3.5 text-sm font-semibold text-violet-200 transition-all hover:bg-violet-500/10 hover:border-violet-500/30"
            >
              Enter Investor Room
            </Link>
          </div>
        </div>

        {/* 3D Embed Placeholder */}
        <div className="relative z-10 mx-auto mt-20 w-full max-w-4xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="glass purple-border rounded-2xl p-1">
            <div className="flex h-64 items-center justify-center rounded-xl bg-gradient-to-br from-violet-950/30 to-purple-950/20 md:h-80">
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary-subtle animate-float">
                  <Zap className="h-8 w-8 text-violet-400" />
                </div>
                <p className="text-sm font-medium text-foreground/70">3D Scene Embed Area</p>
                <p className="text-xs text-muted-foreground/60">Spline integration placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Investor Cards */}
      <section className="relative py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Meet Your <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">AI Investors</span>
            </h2>
            <p className="text-lg text-muted-foreground">Four AI personas ready to evaluate your startup from every angle.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {investors.map((investor, i) => (
              <div
                key={investor.name}
                className="glass group rounded-2xl p-6 transition-all duration-300 hover:purple-border hover:scale-[1.02] cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${investor.gradient} border ${investor.border}`}>
                  <investor.icon className={`h-6 w-6 ${investor.iconColor}`} />
                </div>
                <h3 className="mb-1 font-display text-lg font-semibold text-foreground">{investor.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{investor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">A complete AI investment experience from pitch to term sheet.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="glass group rounded-2xl p-8 transition-all duration-300 hover:purple-border animate-fade-in-up"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg gradient-primary-subtle">
                  <feature.icon className="h-5 w-5 text-violet-400" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-violet-400" />
            <span className="text-sm font-medium text-foreground">SharkPitch<span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">AI</span></span>
          </div>
          <p className="text-xs text-muted-foreground">Built for the hackathon. AI-powered startup evaluation platform.</p>
        </div>
      </footer>
    </div>
  )
}
