"use client"

import type React from "react"

import Image from "next/image"
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactForm } from "@/components/contact-form"
import { Wordmark } from "@/components/wordmark"
import { ImageCarousel } from "@/components/image-carousel"

export default function Home() {
  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      // Account for the fixed header height
      const headerHeight = 64 // 16 * 4 = 64px (h-16)
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-navy-800 via-navy-700 to-ocean-700">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-navy-600/30 bg-navy-900/90 backdrop-blur-sm shadow-md shadow-navy-950/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Wordmark size="md" />
            </div>
            <nav className="hidden md:flex gap-12">
              <a
                href="#hero"
                onClick={(e) => scrollToSection(e, "hero")}
                className="text-base font-medium text-gray-100 hover:text-amber-200 hover:underline underline-offset-4"
              >
                Home
              </a>
              <a
                href="#products"
                onClick={(e) => scrollToSection(e, "products")}
                className="text-base font-medium text-gray-100 hover:text-amber-200 hover:underline underline-offset-4"
              >
                Products
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="text-base font-medium text-gray-100 hover:text-amber-200 hover:underline underline-offset-4"
              >
                About Us
              </a>
            </nav>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex bg-amber-400 text-navy-900 border-amber-500 hover:bg-amber-300 px-4"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              <a href="#contact">Contact Us</a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-amber-400 text-navy-900 border-amber-500 hover:bg-amber-300"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 relative" id="hero">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-amber-100">
                      Premium Tissue & Paper Products for Your Business
                    </h1>
                    <p className="max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      <Wordmark size="sm" className="mr-1" /> is your trusted partner for high-quality tissue and paper
                      products. We offer wholesale solutions with reliable delivery and competitive pricing.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button
                      className="bg-amber-500 text-navy-900 hover:bg-amber-400"
                      onClick={(e) => scrollToSection(e, "products")}
                    >
                      Explore Products
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-ocean-700 border-ocean-600 text-amber-100 hover:bg-ocean-600"
                      onClick={(e) => scrollToSection(e, "contact")}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
                <div className="mx-auto w-full h-[300px] md:h-[400px]">
                  <ImageCarousel
                    images={[
                      { src: "/factory-interior.png", alt: "Modern tissue manufacturing facility" },
                      { src: "/dinner-napkins-new.jpg", alt: "Premium Dinner Napkins" },
                      { src: "/toilet-paper-rolls-new.jpg", alt: "Premium Toilet Paper Rolls" },
                      { src: "/paper-towels.jpg", alt: "Premium Paper Towels" },
                    ]}
                    interval={5000}
                    className="h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 border-t border-b border-navy-600/30 bg-gradient-to-br from-navy-900 via-navy-800 to-ocean-800"
          id="products"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-amber-400/20 text-amber-200 text-sm font-medium mb-2">
                Natural and Sustainable Solutions
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-100">Our Product Range</h2>
                <p className="text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our comprehensive range of high-quality products for businesses and distributors. Based on
                  our 100% owned factory, we can customize these products not only in sizes, but also in
                  material(virgin, or recycled--kraft, blue, or bleached), and packaging(material and pattern). See the
                  details below.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-8">
              <Tabs defaultValue="towels" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-navy-700/30">
                  <TabsTrigger
                    value="towels"
                    className="data-[state=active]:bg-amber-400 data-[state=active]:text-navy-900 text-gray-100 flex items-center justify-center"
                  >
                    Towel Products
                  </TabsTrigger>
                  <TabsTrigger
                    value="tissues"
                    className="data-[state=active]:bg-amber-400 data-[state=active]:text-navy-900 text-gray-100 flex items-center justify-center"
                  >
                    Tissue Products
                  </TabsTrigger>
                  <TabsTrigger
                    value="napkins"
                    className="data-[state=active]:bg-amber-400 data-[state=active]:text-navy-900 text-gray-100 flex items-center justify-center"
                  >
                    Napkin Products
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="towels" className="mt-0">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[240px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                        <Image
                          src="/n-fold-towels-new.jpg"
                          width={240}
                          height={240}
                          alt="N-Fold Towels"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">N-Fold Towels</h3>
                        <p className="text-sm text-gray-100">
                          Premium N-fold paper towels that provide excellent absorbency and strength for commercial
                          washrooms.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[240px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                        <Image
                          src="/singlefold-towels-new.jpg"
                          width={240}
                          height={240}
                          alt="Singlefold Towels"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">Singlefold Towels</h3>
                        <p className="text-sm text-gray-100">
                          Economical singlefold paper towels that offer reliable performance for high-traffic restrooms.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[240px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                        <Image
                          src="/hardwound-towels-new.jpg"
                          width={240}
                          height={240}
                          alt="Hardwound Towels"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">Hardwound Towels</h3>
                        <p className="text-sm text-gray-100">
                          Durable hardwound roll towels ideal for high-volume environments requiring continuous hand
                          drying.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[240px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                        <Image
                          src="/center-pull-towels-bulk.jpg"
                          width={240}
                          height={240}
                          alt="Center Pull Towels"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">Center Pull Towels</h3>
                        <p className="text-sm text-gray-100">
                          Convenient center-pull towel rolls for high-traffic areas, providing easy dispensing and
                          reduced waste.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[240px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                        <Image
                          src="/4-fold-towels-new.jpg"
                          width={240}
                          height={240}
                          alt="4-Fold Quilted Towels"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">4-Fold Quilted Towels</h3>
                        <p className="text-sm text-gray-100">
                          Premium quilted towels with enhanced absorbency and softness for upscale washrooms and
                          facilities.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[240px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                        <Image
                          src="/5-fold-towels-new.jpg"
                          width={240}
                          height={240}
                          alt="5-Fold Towels"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">5-Fold Towels</h3>
                        <p className="text-sm text-gray-100">
                          Luxurious 5-fold towels offering superior absorbency and comfort for premium hospitality
                          environments.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[240px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                        <Image
                          src="/c-fold-towels-new.jpg"
                          width={240}
                          height={240}
                          alt="C-Fold Towels"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">C-Fold Towels</h3>
                        <p className="text-sm text-gray-100">
                          High-quality C-fold hand towels designed for efficient dispensing in washrooms and commercial
                          settings.
                        </p>
                        <p className="text-xs text-amber-200 mt-1">
                          Customization: Virgin(white, 32-40gsm)/TAD(white, 25gsm)/Recycled(white/kraft/blue, 32-40gsm);
                          1ply, 10"*11"/12"/13"(255mm*280/305/330mm)
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[240px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                        <Image
                          src="/standing-paper-towel-roll.png"
                          width={240}
                          height={240}
                          alt="Kitchen Towels"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">Kitchen Towels</h3>
                        <p className="text-sm text-gray-100">
                          Strong and absorbent kitchen towels perfect for food preparation, cleaning, and spill
                          management.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[240px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                        <Image
                          src="/disposable-bed-sheets-new.png"
                          width={240}
                          height={240}
                          alt="Disposable Bed Sheets with Massage Table"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">Disposable Bed Sheets</h3>
                        <p className="text-sm text-gray-100">
                          High-quality disposable bed sheets in convenient roll format for medical facilities, massage
                          tables, spas, and hospitality applications offering superior hygiene and comfort.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="tissues" className="mt-0">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[280px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                        <Image
                          src="/toilet-paper-rolls-new.jpg"
                          width={240}
                          height={280}
                          alt="Premium Toilet Paper Rolls"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">Toilet Paper Rolls</h3>
                        <p className="text-sm text-gray-100">
                          Premium quality toilet paper rolls in various ply options, perfect for hotels, offices, and
                          public facilities.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[280px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                        <Image
                          src="/jumbo-toilet-rolls-new.jpg"
                          width={240}
                          height={280}
                          alt="Jumbo Toilet Paper Rolls"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">Jumbo Toilet Rolls</h3>
                        <p className="text-sm text-gray-100">
                          Large-capacity toilet paper rolls designed for high-traffic commercial restrooms and public
                          facilities.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[280px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                        <Image
                          src="/facial-tissues-dual-black-bg.jpg"
                          width={240}
                          height={280}
                          alt="Mint Green Facial Tissue Box"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">Facial Tissue</h3>
                        <p className="text-sm text-gray-100">
                          Soft and absorbent facial tissues in attractive packaging, ideal for homes, hotels, and
                          offices.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="napkins" className="mt-0">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[240px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                        <Image
                          src="/dinner-napkins-new.jpg"
                          width={240}
                          height={240}
                          alt="Premium Dinner Napkins"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">Dinner Napkins</h3>
                        <p className="text-sm text-gray-100">
                          High-quality dinner napkins perfect for restaurants, hotels, and catering services in various
                          colors and designs.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[240px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 shadow-md group-hover:shadow-lg transition-all">
                        <Image
                          src="/lunch-napkins-new.jpg"
                          width={240}
                          height={240}
                          alt="Lunch Napkins"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">Lunch Napkins</h3>
                        <p className="text-sm text-gray-100">
                          Practical medium-sized napkins perfect for cafes, lunch restaurants, and casual dining
                          settings.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 group">
                      <div className="flex h-[240px] items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 shadow-md group-hover:shadow-lg transition-all">
                        <Image
                          src="/interfold-napkins-new.jpg"
                          width={240}
                          height={240}
                          alt="Interfold Napkins"
                          className="rounded-lg product-image"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-amber-100">Interfold Napkins</h3>
                        <p className="text-sm text-gray-100">
                          Space-saving V-fold napkins designed for efficient dispensing in restaurants, cafes, and food
                          service establishments.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-ocean-700 text-gray-100 border-ocean-600 hover:bg-ocean-600"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-center mt-12">
                <Button className="bg-amber-500 text-navy-900 hover:bg-amber-400">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-navy-800 via-navy-700 to-ocean-700 relative"
          id="about"
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(13, 31, 61, 0.85), rgba(13, 31, 61, 0.8)), url('/company-factory.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              opacity: 0.6,
            }}
          ></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="mx-auto w-full">
                  <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-2 shadow-lg shadow-navy-900/20">
                    <Image
                      src="/toilet-paper-production.jpg"
                      width={550}
                      height={550}
                      alt="Our toilet paper production line"
                      className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center sm:w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-flex items-center justify-center w-fit px-4 py-1 rounded-full bg-amber-400/20 text-amber-200 text-sm font-medium mb-2">
                    Our Story
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-100">
                      About <Wordmark size="lg" className="inline" />
                    </h2>
                    <p className="max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      With over 25 years of experience in the paper products industry,{" "}
                      <Wordmark size="sm" className="inline" /> has established itself as a leading supplier of premium
                      tissue and paper products.
                    </p>
                  </div>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-300" />
                      <span className="text-gray-50">Direct 100% owned factory ensuring competitive pricing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-300" />
                      <span className="text-gray-50">Quality control at every stage of production</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-300" />
                      <span className="text-gray-50">Eco-friendly and sustainable product options</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-300" />
                      <span className="text-gray-50">Reliable global shipping and logistics network</span>
                    </li>
                  </ul>
                  <div>
                    <Button
                      variant="outline"
                      className="bg-amber-500 text-navy-900 border-amber-600 hover:bg-amber-400"
                    >
                      Learn More About Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 border-t border-navy-600/30 bg-gradient-to-br from-navy-900 via-navy-800 to-ocean-800"
          id="contact"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-amber-400/20 text-amber-200 text-sm font-medium mb-2">
                Get In Touch
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-100">Contact Us</h2>
                <p className="max-w-[900px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our sales team to discuss your product needs.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid items-center gap-6 lg:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500">
                      <Phone className="h-5 w-5 text-navy-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-100">Phone</h3>
                      <p className="text-sm text-gray-100">+1(86)15613255335</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500">
                      <Mail className="h-5 w-5 text-navy-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-100">Email</h3>
                      <p className="text-sm text-gray-100">sales@oceanwide.ltd</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500">
                      <MapPin className="h-5 w-5 text-navy-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-100">Address</h3>
                      <p className="text-sm text-gray-100">Guangzhou, China</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-navy-700/30 border border-navy-600/30">
                    <p className="text-sm text-amber-100">
                      Our customer service team is available Monday through Friday, 9am to 5pm EST.
                    </p>
                  </div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-lg shadow-navy-900/20">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
