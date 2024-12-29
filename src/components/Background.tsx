'use client'

import React, { useEffect, useRef } from 'react'

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: Star[] = []
    const starCount = 200

    class Star {
      x: number
      y: number
      radius: number
      opacity: number
      twinkleSpeed: number

      constructor() {
        if (!canvas) throw new Error('Canvas is null')
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 1.5 + 0.5
        this.opacity = Math.random() * 0.5 + 0.5
        this.twinkleSpeed = Math.random() / 2 * 0.02 + 0.0005
      }

      twinkle(time: number) {
        this.opacity = 0.5 + Math.sin(time * this.twinkleSpeed) * 0.25
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.fill()
      }
    }

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star())
    }

    const drawNebula = (time: number) => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Fill the canvas with black as the base
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      )

      // Add color stops
      const breathe = Math.sin(time / 5000) * 0.1 + 0.9
      gradient.addColorStop(0, `rgba(30, 10, 60, ${breathe})`)
      gradient.addColorStop(0.3, `rgba(60, 20, 90, ${breathe * 0.8})`)
      gradient.addColorStop(0.6, `rgba(90, 30, 110, ${breathe * 0.6})`)
      gradient.addColorStop(1, `rgba(20, 10, 40, ${breathe * 0.4})`)

      // Fill background
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach(star => {
        star.twinkle(time)
        star.draw()
      })
    }

    let animationId: number

    const animate = (time: number) => {
      drawNebula(time)
      animationId = requestAnimationFrame(animate)
    }

    animate(0)

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: -1 }}
    />
  )
}

export default Background
