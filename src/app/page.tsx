import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import GSAPDemo from '@/components/GSAPDemo'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation vers les autres pages */}
      <div className="fixed top-4 right-4 z-50">
        <Link 
          href="/fade-in-effects" 
          className="bg-white/90 backdrop-blur-sm text-blue-600 px-4 py-2 rounded-lg shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 font-medium border border-blue-100"
        >
          🎭 Effets Fade In →
        </Link>
      </div>
      
      <AnimatedHero />
      <GSAPDemo />
      <ScrollAnimation />
    </main>
  )
}
