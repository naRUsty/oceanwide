"use client"

import { useEffect } from "react"

export function ScrollToSection() {
  useEffect(() => {
    // Add smooth scrolling behavior for all anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")?.substring(1)

        if (targetId) {
          const targetElement = document.getElementById(targetId)

          if (targetElement) {
            // Account for fixed header
            const headerHeight = 64 // h-16 = 4rem = 64px
            const elementPosition = targetElement.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}
