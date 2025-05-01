'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Meteors } from '@/components/magicui/meteors'
import { GridPattern } from '@/components/magicui/grid-pattern'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles =
      Math.min(window.innerWidth, window.innerHeight) / 15

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      pulse: number
      pulseSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.3 - 0.15
        this.speedY = Math.random() * 0.3 - 0.15
        this.color = `rgba(0, 180, 216, ${Math.random() * 0.5 + 0.2})`
        this.opacity = Math.random() * 0.5 + 0.2
        this.pulse = 0
        this.pulseSpeed = Math.random() * 0.01 + 0.005
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.pulse += this.pulseSpeed

        // Pulsating effect
        this.opacity = 0.2 + Math.abs(Math.sin(this.pulse)) * 0.3

        // If particle goes off screen, wrap around
        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = `rgba(0, 180, 216, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create initial particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Function to connect particles with lines
    function connectParticles() {
      const maxDistance = 150

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity =
              (1 - distance / maxDistance) *
              0.15 *
              particlesArray[a].opacity *
              particlesArray[b].opacity

            ctx.strokeStyle = `rgba(0, 180, 216, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className='fixed left-0 top-0 -z-10 h-full w-full opacity-40'
      />

      <Meteors number={15} className='opacity-70' />

      {/* Here we removed SparklesCore and kept other animations */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className='fixed inset-0 h-full w-full -z-30 opacity-10'
        strokeWidth={1}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 2 }}
        className='fixed left-0 top-0 -z-40 h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black'
      />
    </>
  )
}
