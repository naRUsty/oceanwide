import "@/app/globals.css"

import { Inter, Dancing_Script } from "next/font/google"

import { ScrollToSection } from "@/components/scroll-to-section"

const inter = Inter({ subsets: ["latin"] })
const dancingScript = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dancing",
})

export const metadata = {
  title: "VisionPaper - Premium Tissue & Paper Products",
  description: "Your trusted partner for high-quality tissue and toilet paper products.",
  themeColor: "#FBB305",
  icons: {
    icon: "/logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${inter.className} ${dancingScript.variable}`}>
        <ScrollToSection />
        {children}
      </body>
    </html>
  )
}
