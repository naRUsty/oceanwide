import "@/app/globals.css"

import { Inter, Pacifico } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToSection } from "@/components/scroll-to-section"

const inter = Inter({ subsets: ["latin"] })
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
})

export const metadata = {
  title: "OceanWide - Premium Tissue & Paper Products",
  description: "Your trusted partner for high-quality tissue and toilet paper products.",
  themeColor: "#FBB305",
  icons: {
    icon: "/logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${inter.className} ${pacifico.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ScrollToSection />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
