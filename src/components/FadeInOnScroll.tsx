'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

interface FadeInOnScrollProps {
  children: React.ReactNode
  direction?: 'top' | 'bottom' | 'left' | 'right'
  distance?: number
  duration?: number
  delay?: number
  ease?: string
  className?: string
  triggerStart?: string
  triggerEnd?: string
  stagger?: number
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  direction = 'bottom',
  distance = 50,
  duration = 1,
  delay = 0,
  ease = 'power2.out',
  className = '',
  triggerStart = 'top 80%',
  triggerEnd = 'bottom 20%',
  stagger = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Configuration initiale de l'élément
    const initialTransform = {
      opacity: 0,
      x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      y: direction === 'top' ? -distance : direction === 'bottom' ? distance : 0
    }

    // Définir l'état initial
    gsap.set(element, initialTransform)

    // Animation d'apparition
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: triggerStart,
        end: triggerEnd,
        toggleActions: 'play none none reverse',
        markers: false, // Mettre à true pour déboguer
      }
    })

    // Chercher les enfants pour un éventuel effet de stagger
    const children = element.children
    
    if (stagger > 0 && children.length > 1) {
      // Animation avec stagger sur les enfants
      gsap.set(children, initialTransform)
      tl.to(children, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        ease,
        delay,
        stagger
      })
    } else {
      // Animation simple sur l'élément parent
      tl.to(element, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        ease,
        delay
      })
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [direction, distance, duration, delay, ease, triggerStart, triggerEnd, stagger])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export default FadeInOnScroll 