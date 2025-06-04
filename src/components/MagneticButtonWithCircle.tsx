'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface MagneticButtonWithCircleProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  circleSize?: number
  magneticStrength?: number
}

export default function MagneticButtonWithCircle({ 
  children, 
  className = '', 
  onClick,
  circleSize = 80,
  magneticStrength = 0.8
}: MagneticButtonWithCircleProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    const circle = circleRef.current
    if (!button || !circle) return

    // Position initiale du cercle au centre
    gsap.set(circle, {
      x: 0,
      y: 0,
      scale: 0
    })

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Calculer la position relative de la souris par rapport au centre du bouton
      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY
      
      // Limiter le mouvement du cercle dans les limites du bouton
      const maxX = (rect.width / 2) - (circleSize / 2)
      const maxY = (rect.height / 2) - (circleSize / 2)
      
      const deltaX = Math.max(-maxX, Math.min(maxX, mouseX * magneticStrength))
      const deltaY = Math.max(-maxY, Math.min(maxY, mouseY * magneticStrength))

      gsap.to(circle, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleMouseEnter = () => {
      gsap.to(circle, {
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)"
      })
    }

    const handleMouseLeave = () => {
      gsap.to(circle, {
        x: 0,
        y: 0,
        scale: 0,
        duration: 0.5,
        ease: "back.in(1.7)"
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [circleSize, magneticStrength])

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`
        relative overflow-hidden
        px-12 py-6 
        bg-gray-900
        text-white font-bold text-xl
        rounded-full
        border-2 border-white/20
        transition-all duration-300
        hover:border-white/40
        active:scale-95
        cursor-pointer
        ${className}
      `}
      style={{ 
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      {/* Texte du bouton */}
      <span className="relative z-20 select-none">
        {children}
      </span>
      
      {/* Cercle magnétique */}
      <div
        ref={circleRef}
        className="absolute top-1/2 left-1/2 pointer-events-none z-10"
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          marginLeft: `-${circleSize / 2}px`,
          marginTop: `-${circleSize / 2}px`,
          willChange: 'transform'
        }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-90" />
      </div>
    </button>
  )
} 