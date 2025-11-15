import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Features from '@/components/Features'
import TechStack from '@/components/TechStack'
import Roadmap from '@/components/Roadmap'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <TechStack />
      <Roadmap />
      <CTA />
      <Footer />
    </main>
  )
}

