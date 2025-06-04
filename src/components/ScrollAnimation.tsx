'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    // Enregistrer le plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animation des cartes au scroll
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 100,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          }
        )

        // Animation de hover
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            rotation: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        }

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          })
        }

        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)

        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter)
          card.removeEventListener('mouseleave', handleMouseLeave)
        }
      })

      // Animation de parallax pour le titre
      gsap.to(".parallax-title", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  const features = [
    {
      title: "Performance Optimale",
      description: "Next.js 15 avec Turbopack pour des builds ultra-rapides",
      icon: "🚀"
    },
    {
      title: "Animations Fluides",
      description: "GSAP pour des animations 60fps et une expérience utilisateur premium",
      icon: "✨"
    },
    {
      title: "Design System",
      description: "Tailwind CSS 4.0 avec @theme inline pour une configuration moderne",
      icon: "🎨"
    },
    {
      title: "TypeScript",
      description: "Types stricts pour une meilleure productivité développeur",
      icon: "📝"
    }
  ]

  return (
    <section 
      ref={containerRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="parallax-title text-3xl md:text-5xl font-bold text-center text-gray-900 mb-20">
          Fonctionnalités Avancées
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={addToCardsRef}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Éléments décoratifs animés */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-25 animate-pulse"></div>
    </section>
  )
} 