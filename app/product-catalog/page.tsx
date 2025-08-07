"use client"

import Image from "next/image"
import { Wordmark } from "@/components/wordmark"
import { useEffect } from "react"

export default function ProductCatalog() {
  // Add print functionality when the page loads
  useEffect(() => {
    // Set up print-specific adjustments
    const handleBeforePrint = () => {
      document.body.classList.add("print-mode")

      // Force high-resolution images for print
      const images = document.querySelectorAll("img")
      images.forEach((img) => {
        img.setAttribute("loading", "eager")
        if (img.classList.contains("print-optimize")) {
          img.style.objectFit = "contain"
        }
      })
    }

    const handleAfterPrint = () => {
      document.body.classList.remove("print-mode")
    }

    window.addEventListener("beforeprint", handleBeforePrint)
    window.addEventListener("afterprint", handleAfterPrint)

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint)
      window.removeEventListener("afterprint", handleAfterPrint)
    }
  }, [])

  return (
    <div className="bg-white min-h-screen print:bg-white">
      {/* Poster Header */}
      <div className="bg-navy-800 text-white py-8 px-6 text-center print:py-6 print:bg-navy-800">
        <Wordmark size="lg" />
        <h1 className="text-4xl font-bold mt-4 text-amber-100 print:text-3xl print:text-amber-100">
          Complete Product Catalog
        </h1>
        <p className="text-xl mt-2 text-gray-100 print:text-lg print:text-gray-100">
          Premium Tissue & Paper Products for Your Business
        </p>
      </div>

      <div className="container mx-auto p-6 print:p-4">
        {/* Two-column layout for print */}
        <div className="print:flex print:flex-row print:flex-wrap print:justify-between">
          {/* Towel Products */}
          <div className="col-span-full mb-6 print:w-full">
            <h2 className="text-3xl font-bold text-navy-800 border-b-2 border-amber-400 pb-2 mb-6 print:text-2xl print:border-amber-400">
              Towel Products
            </h2>
          </div>

          {/* Products in a grid that becomes two columns in print */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:grid-cols-2 print:gap-4">
            {/* Hardwound Towels */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/hardwound-towels-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="Hardwound Towels"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Hardwound Towels</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Details: Virgin(white, 1ply 32-42gsm/2ply quilted 16-20gsm)/Recycled(white/kraft/blue, 1ply
                  32-42gsm/2ply quilted 16-20gsm)/TAD(white, 1ply 28gsm); 7.76/8/10"*600/800ft
                  (197/203/254mm*183/243.8m), core3.8/4/4.2/5.1cm, y cut/1 cut, with plastic tub.
                </p>
              </div>
            </div>

            {/* Center Pull Towels */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/center-pull-towels-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="Center Pull Towels"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Center Pull Towels</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Convenient center-pull towel rolls for high-traffic areas, providing easy dispensing and reduced waste
                  in commercial settings.
                </p>
              </div>
            </div>

            {/* N-Fold Towels */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/n-fold-towels-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="N-Fold Towels"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">N-Fold Towels</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Details: Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm)/Recycled(white/kraft/blue, 1ply
                  32-42gsm/2ply-quilted 16-20gsm)/TAD(white, 1ply 28gsm); 1/3fold,
                  9/9.25"8.86"/9"/9.25"(230/240mm225/230/235mm)
                </p>
              </div>
            </div>

            {/* Singlefold Towels */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/singlefold-towels-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="Singlefold Towels"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Singlefold Towels</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Economical singlefold paper towels offering reliable performance and cost-effectiveness for
                  high-traffic restrooms.
                </p>
              </div>
            </div>

            {/* 4-Fold Towels */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/4-fold-towels-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="4-Fold Towels"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">4-Fold Towels</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Details: Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm)/Recycled(white/kraft/blue, 1ply
                  32-42gsm/2ply quilted 16-20gsm)/TAD(white, 1ply 28gsm); 1/4fold, 9.25"*8.86/9/9.25"
                  (240mm*225/230/235mm)
                </p>
              </div>
            </div>

            {/* 5-Fold Towels */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/5-fold-towels-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="5-Fold Towels"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">5-Fold Towels</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Details: Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm)/Recycled(white/kraft/blue, 1ply
                  32-42gsm/2ply quilted 16-20gsm)/TAD(white, 1ply 28gsm); 1/5fold, 9.84"*7.48"(250mm*190mm)
                </p>
              </div>
            </div>

            {/* C-Fold Towels */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/c-fold-towels-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="C-Fold Towels"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">C-Fold Towels</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Details: Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm)/Recycled(white/kraft/blue, 1ply
                  32-42gsm/2ply-quilted 16-20gsm)/TAD(white, 1ply 28gsm); 10"*11.02"/12"/13" (255mm280/305/330mm)
                </p>
              </div>
            </div>

            {/* Kitchen Towels */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/kitchen-towels-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="Kitchen Towels"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Kitchen Towels</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Strong and absorbent kitchen towels perfect for food preparation, cleaning, and spill management in
                  commercial kitchens.
                </p>
              </div>
            </div>

            {/* Disposable Bed Sheets */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/disposable-bed-sheets-roll-new.jpg"
                  width={400}
                  height={400}
                  alt="Disposable Bed Sheets"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Disposable Bed Sheets</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Details: Virgin(white, 1ply 42gsm/2ply-glued 20gsm); width37cm*length49cm, perforated in 135sheets,
                  core45mm.
                </p>
              </div>
            </div>
          </div>

          {/* Tissue Products */}
          <div className="col-span-full mt-8 mb-6 print:w-full print:mt-6">
            <h2 className="text-3xl font-bold text-navy-800 border-b-2 border-amber-400 pb-2 mb-6 print:text-2xl print:border-amber-400">
              Tissue Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:grid-cols-2 print:gap-4">
            {/* Toilet Paper Rolls */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/toilet-paper-rolls-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="Toilet Paper Rolls"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Toilet Paper Rolls</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Details: Virgin(white, 12.5-15gsm)/Recycled(white/kraft/blue, 12.5-15gsm); 2ply/4ply,
                  width4"*length3.75"(102mm*95mm), 450/550/600/1000sheets, core 1.9cm(small core)/4/4.2cm.
                </p>
              </div>
            </div>

            {/* Jumbo Toilet Rolls */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/jumbo-toilet-rolls-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="Jumbo Toilet Rolls"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Jumbo Toilet Rolls</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Details: Virgin(white, 12.5-15gsm)/Recycled(white/kraft/blue, 12.5-15gsm); 2ply,
                  3.3/3.5"(84mm/89mm)*600/800/1000', core 1.9cm(small core)/7.6/8.4cm.
                </p>
              </div>
            </div>

            {/* Facial Tissue */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/facial-tissues-dual-black-bg.jpg"
                  width={400}
                  height={400}
                  alt="Facial Tissue"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Facial Tissue</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Details: Virgin(white, 16-36gsm); 2ply, 1/2fold, 7.87"*7.48"(200mm*190mm), 100sheets, in case or
                  plastic
                </p>
              </div>
            </div>
          </div>

          {/* Napkin Products */}
          <div className="col-span-full mt-8 mb-6 print:w-full print:mt-6">
            <h2 className="text-3xl font-bold text-navy-800 border-b-2 border-amber-400 pb-2 mb-6 print:text-2xl print:border-amber-400">
              Napkin Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:grid-cols-2 print:gap-4">
            {/* Dinner Napkins(1) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/dinner-napkins-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="Dinner Napkins(1)"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Dinner Napkins(1)</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Details: Virgin(white, 12.5-16gsm); 2ply, 1/8fold, 14.17/14.96"*16.54"(360/380mm*420mm), or
                  16.93"*16.93"(430mm*430mm)
                </p>
              </div>
            </div>

            {/* Dinner Napkins(2) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/dinner-napkins-2-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="Dinner Napkins(2)"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Dinner Napkins(2)</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Details: Virgin(white, 16-20gsm); 2ply, 1/8fold, 15.75"*15.75"(400mm*400mm)
                </p>
              </div>
            </div>

            {/* Lunch Napkins */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/lunch-napkins-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="Lunch Napkins"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Lunch Napkins</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Practical medium-sized napkins perfect for cafes, lunch restaurants, and casual dining
                  settings with reliable performance.
                </p>
              </div>
            </div>

            {/* Interfold Napkins */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/v-fold-napkins-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="V-Fold Napkins"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">V-Fold Napkins</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  Details: Virgin(white, 1ply 32-38gsm/quilted 2ply 16-20gsm); 1/2fold,
                  7.87/8.27/8,86"*6.3/6.5"(200/210/225mm*160/165mm)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-navy-800 text-white py-6 px-6 text-center mt-8 print:mt-4 print:py-4 print:bg-navy-800">
        <p className="text-gray-100 print:text-sm print:text-gray-100">
          Contact us: sales@oceanwide.ltd | +1(86)15613255335
        </p>
        <p className="text-gray-100 mt-2 print:text-sm print:text-gray-100">
          © {new Date().getFullYear()} OceanWide. All rights reserved.
        </p>
      </div>

      {/* Print-specific styles - enhanced */}
      <style jsx global>{`
        @media print {
          @page {
            size: A3 portrait;
            margin: 0.5cm;
          }
          
          html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }
          
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
            background-color: white !important;
          }
          
          .print-mode {
            width: 3508px;
            height: 4961px;
          }
          
          /* Left-right page layout */
          .print\\:grid-cols-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 1cm;
            row-gap: 1cm;
          }
          
          /* Ensure proper page breaks */
          .print\\:break-inside-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
            page-break-after: avoid;
          }
          
          /* Adjust colors for print */
          .bg-navy-800 {
            background-color: #1e2e47 !important;
            color: white !important;
          }
          
          .text-amber-100 {
            color: #fef3c7 !important;
          }
          
          .border-amber-400 {
            border-color: #fbbf24 !important;
          }
          
          /* Ensure images print properly with high quality */
          img {
            max-width: 100%;
            max-height: 100%;
            image-resolution: 300dpi;
            image-rendering: crisp-edges;
          }
          
          /* Better text rendering for print */
          * {
            text-rendering: optimizeLegibility;
          }
          
          /* Add page numbers */
          .container {
            position: relative;
          }
          
          .container::after {
            content: counter(page);
            position: absolute;
            bottom: -2cm;
            right: 0.5cm;
            font-size: 10pt;
          }
          
          /* Equal height product cards */
          .print\\:grid-cols-2 > div {
            height: 16cm;
            overflow: hidden;
          }
          
          /* Better headings in print */
          h2 {
            break-after: avoid;
            page-break-after: avoid;
          }
          
          /* Improved section spacing */
          .print\\:w-full {
            margin-top: 1cm;
          }
        }
      `}</style>
    </div>
  )
}
