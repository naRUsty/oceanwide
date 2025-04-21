"use client"
import { XCircle } from "lucide-react"

interface SuccessDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function SuccessDialog({ isOpen, onClose }: SuccessDialogProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="absolute right-2 top-2">
          <button onClick={onClose} className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
            <XCircle className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-navy-100 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-navy-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-navy-900">Form Submitted Successfully!</h3>
          <p className="mt-2 text-sm text-gray-500">
            Thank you for your message. We have received your information and will contact you shortly.
          </p>
          <button
            className="mt-5 w-full rounded-md bg-navy-600 px-4 py-2 text-sm font-medium text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-500"
            onClick={onClose}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
