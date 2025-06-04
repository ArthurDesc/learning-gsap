'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function GSAPDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const boxesRef = useRef<HTMLDivElement[]>([])
  const textRef = useRef<HTMLHeadingElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation d'entrée pour le titre
      gsap.fromTo(textRef.current, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        }
      )

      // Animation d'entrée pour les boîtes
      gsap.fromTo(boxesRef.current,
        { opacity: 0, scale: 0, rotation: 45 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%"
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleBoxAnimation = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false)
    })

    tl.to(boxesRef.current, {
      y: -20,
      rotation: 360,
      scale: 1.2,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1
    })
    .to(boxesRef.current, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "bounce.out",
      stagger: 0.05
    })
  }

  const addToBoxRefs = (el: HTMLDivElement | null) => {
    if (el && !boxesRef.current.includes(el)) {
      boxesRef.current.push(el)
    }
  }

  return (
    <section 
      id="gsap-demo"
      ref={containerRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={textRef}
          className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Démos d'animations GSAP
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              ref={addToBoxRefs}
              className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
              onClick={handleBoxAnimation}
            >
              <span className="text-white font-bold text-xl">
                {index + 1}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleBoxAnimation}
            disabled={isAnimating}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAnimating ? 'Animation en cours...' : 'Déclencher l\'animation'}
          </button>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🎯 Fonctionnalités GSAP utilisées
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Animations Timeline</li>
              <li>• Transformations (scale, rotation, translation)</li>
              <li>• Stagger animations</li>
              <li>• Easing personnalisé</li>
              <li>• ScrollTrigger</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🎨 Tailwind CSS 4.0
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Gradients modernes</li>
              <li>• Grid responsive</li>
              <li>• Classes utilitaires</li>
              <li>• Transitions fluides</li>
              <li>• Configuration avec @theme</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 