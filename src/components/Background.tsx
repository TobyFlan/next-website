'use client'

import { useEffect, useRef } from 'react'

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = (count: number) => {
      const stars = []
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random(),
          speed: Math.random() * 0.0025 + 0.001,

          // give stars velocity
          vx: Math.random() * 0.05 - 0.025,
          vy: Math.random() * 0.05 - 0.025
        })
      }
      return stars
    }

    const drawBackground = (stars: any[]) => {
      ctx.fillStyle = '#050314'  // BG colour
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Update star opacity for twinkling effect
        star.opacity += star.speed
        if (star.opacity > 1 || star.opacity < 0) {
          star.speed = -star.speed
        }

        // Update star position for movement
        star.x += star.vx
        star.y += star.vy

        // if stars leave canvas, wrap them around to the other side
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

      })
    }

    const animate = (stars: any[]) => {
      drawBackground(stars)
      animationFrameId = requestAnimationFrame(() => animate(stars))
    }

    resizeCanvas()
    const stars = createStars(50)  // Increased number of stars for a denser sky
    animate(stars)

    window.addEventListener('resize', () => {
      resizeCanvas()
      stars.forEach(star => {
        star.x = Math.random() * canvas.width
        star.y = Math.random() * canvas.height
      })
    })

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
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

