"use client"

import { useEffect } from "react"

interface ConfettiEffectProps {
  isActive: boolean
}

export function ConfettiEffect({ isActive }: ConfettiEffectProps) {
  useEffect(() => {
    if (!isActive) return

    const runConfetti = async () => {
      const confetti = (await import("canvas-confetti")).default

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })

      // 多次触发彩带效果
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        })
      }, 250)

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        })
      }, 400)
    }

    runConfetti()
  }, [isActive])

  return null
}
