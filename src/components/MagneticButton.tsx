'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  magneticStrength?: number
}

export default function MagneticButton({ 
  children, 
  className = '', 
  onClick,
  magneticStrength = 0.4
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) * magneticStrength
      const deltaY = (e.clientY - centerY) * magneticStrength

      gsap.to(button, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.6)"
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
  }, [magneticStrength])

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`
        relative overflow-hidden
        px-8 py-4 
        bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700
        text-white font-semibold text-lg
        rounded-2xl
        border border-white/20
        shadow-lg shadow-purple-500/25
        transition-all duration-300
        hover:shadow-xl hover:shadow-purple-500/40
        active:scale-95
        cursor-pointer
        ${className}
      `}
      style={{ 
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      <span className="relative z-10">
        {children}
      </span>
      
      {/* Effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </button>
  )
} 