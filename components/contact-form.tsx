"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { SuccessDialog } from "./success-dialog"
import { ConfettiEffect } from "./confetti-effect"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mblgzyyd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        // Form submitted successfully
        form.reset()
        setShowSuccess(true)
        setShowConfetti(true)
      } else {
        const data = await response.json()
        setError(data.error || "An error occurred while submitting the form. Please try again later.")
      }
    } catch (err) {
      setError("An error occurred while submitting the form. Please try again later.")
      console.error("Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <ConfettiEffect isActive={showConfetti} />
      <SuccessDialog isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

      <form id="contact-form" onSubmit={handleSubmit} method="POST" className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium leading-none text-navy-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="flex h-10 w-full rounded-md border border-navy-300 bg-white px-3 py-2 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium leading-none text-navy-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="flex h-10 w-full rounded-md border border-navy-300 bg-white px-3 py-2 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter your email address"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium leading-none text-navy-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="flex min-h-[120px] w-full rounded-md border border-navy-300 bg-white px-3 py-2 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter your message"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-navy-700 text-amber-100 hover:bg-navy-600 border border-navy-600"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
      </form>
    </>
  )
}
