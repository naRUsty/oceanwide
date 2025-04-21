"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const loadImage = async () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // Set canvas dimensions to match window
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Load the image
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = "/factory-background.png"

      img.onload = () => {
        // Draw the image to fit the canvas
        const aspectRatio = img.width / img.height
        let drawWidth = canvas.width
        let drawHeight = canvas.width / aspectRatio

        if (drawHeight < canvas.height) {
          drawHeight = canvas.height
          drawWidth = canvas.height * aspectRatio
        }

        const x = (canvas.width - drawWidth) / 2
        const y = (canvas.height - drawHeight) / 2

        ctx.globalAlpha = 0.3 // Set opacity
        ctx.drawImage(img, x, y, drawWidth, drawHeight)
      }
    }

    loadImage()

    // Handle resize
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
        loadImage()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.3 }} />
}
