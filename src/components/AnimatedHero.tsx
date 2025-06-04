'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function AnimatedHero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation d'entrée
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
        opacity: 0,
        y: 50
      })

      const tl = gsap.timeline()
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3")

      // Animation de pulsation continue sur le bouton
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
        >
          Bienvenue dans
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Next.js + GSAP + Tailwind 4.0
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Découvrez la puissance des animations fluides avec GSAP, 
          le styling moderne avec Tailwind CSS 4.0, et la performance 
          de Next.js 15.
        </p>
        
        <button 
          ref={buttonRef}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          onClick={() => {
            gsap.to(window, {
              duration: 1.5,
              scrollTo: "#gsap-demo",
              ease: "power3.inOut"
            })
          }}
        >
          Voir les démos
        </button>
      </div>
    </section>
  )
} 