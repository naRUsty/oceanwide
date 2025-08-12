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
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">
                    Virgin(white, 1ply 32-42gsm/2ply quilted 16-20gsm); Recycled(white/kraft/blue, 1ply 32-42gsm/2ply
                    quilted 16-20gsm); TAD(white, 1ply 28gsm)
                  </span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">
                    7.8/8/10"*600/800ft (197/203/254mm*183/244m); core3.8/4/4.2/5.1cm; Y cut/1 cut; in plastic tub.
                  </span>
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
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">
                    Virgin(white, 1ply 19-38gsm/2ply quilted 16-20gsm); Recycled(white/kraft/blue, 1ply 19-38gsm/2ply
                    quilted 16-20gsm); TAD(white, 1ply 28gsm)
                  </span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">
                    width 7.3/7.9/8"* length 10"(185/200/203mm*254mm), perforated in 600/700/800 sheets; core
                    5.1/6/7.6cm
                  </span>
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
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">
                    Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm); Recycled(white/kraft/blue, 1ply
                    32-42gsm/2ply-quilted 16-20gsm); TAD(white, 1ply 28gsm)
                  </span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">1/3fold, 9/9.4"*8.9/9/9.3"(230/240mm*225/230/235mm)</span>
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
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">
                    Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm); Recycled(white/kraft/blue, 1ply
                    32-42gsm/2ply-quilted 16-20gsm); TAD(white, 1ply 28gsm)
                  </span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">1/2fold, 9.1"*8.3/8.6/9.6/10.2"(230mm*210/225/245/260mm)</span>
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
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">
                    Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm); Recycled(white/kraft/blue, 1ply
                    32-42gsm/2ply-quilted 16-20gsm); TAD(white, 1ply 28gsm)
                  </span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">1/4fold, 9.4"*8.9/9.1/9.3"(240mm*225/230/235mm)</span>
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
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">
                    Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm); Recycled(white/kraft/blue, 1ply
                    32-42gsm/2ply-quilted 16-20gsm); TAD(white, 1ply 28gsm)
                  </span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">1/5fold, 9.8"*7.5"(250mm*190mm)</span>
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
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">
                    Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm); Recycled(white/kraft/blue, 1ply
                    32-42gsm/2ply-quilted 16-20gsm); TAD(white, 1ply 28gsm)
                  </span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">10"*11/12/13"(255mm*280/305/330mm)</span>
                </p>
              </div>
            </div>

            {/* Kitchen Towels */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/kitchen-towels-dispensing.jpg"
                  width={240}
                  height={240}
                  alt="Kitchen Towels"
                  className="rounded-lg product-image"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Kitchen Towels</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">Virgin(white, 2ply 15-23gsm)</span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">Other details based on customer requirements</span>
                </p>
              </div>
            </div>

            {/* Disposable Bed Sheets */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/disposable-bed-sheets-roll-new.jpg"
                  width={240}
                  height={240}
                  alt="Disposable Bed Sheets with Massage Table"
                  className="rounded-lg product-image"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Disposable Bed Sheets</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">Virgin(white, 1ply 42gsm/2ply-quilted 20gsm)</span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">
                    width 14.6"*length 19.3"(370mm*490mm), perforated in 135 sheets, core 45mm
                  </span>
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
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">
                    Virgin(white, 2/4ply, 12.5-15gsm); Recycled(white/kraft/blue, 2/4ply 12.5-15gsm)
                  </span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">
                    width 4"*length 3.7"(102mm*95mm), perforated in 450/550/600/1000sheets, core 1.9cm(small
                    core)/4/4.2cm
                  </span>
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
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">
                    Virgin(white, 2ply 12.5-15gsm); Recycled(white/kraft/blue, 2ply 12.5-15gsm)
                  </span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">
                    3.3/3.5"(84mm/89mm)*600/800/1000', core 1.9cm(small core)/7.6/8.4cm
                  </span>
                </p>
              </div>
            </div>

            {/* Facial Tissue */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 print:break-inside-avoid print:mb-4 print:shadow-none print:border-navy-200 flex flex-col h-full">
              <div className="h-64 overflow-hidden print:h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src="/facial-tissues-dispensing.jpg"
                  width={400}
                  height={400}
                  alt="Facial Tissue"
                  className="w-full h-full object-cover print:object-contain print-optimize"
                />
              </div>
              <div className="p-4 print:p-2 flex-grow">
                <h3 className="text-xl font-bold text-navy-700 print:text-lg">Facial Tissue</h3>
                <p className="text-sm text-gray-600 mt-2 print:text-xs print:text-navy-800">
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">Virgin(white, 2ply 16-36gsm)</span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">1/2fold, 7.9"*7.5"(200mm*190mm), 100sheets, in case or plastic</span>
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
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">Virgin(white, 2ply 12.5-16gsm)</span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">
                    1/8fold, 14.2/15"*16.5"(360/380mm*420mm), or 16.9"*16.9"(430mm*430mm)
                  </span>
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
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">Virgin(white, 2ply 16-20gsm)</span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">1/8fold, 15.7"*15.7"(400mm*400mm)</span>
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
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">Virgin(white, 2ply 16-20gsm)</span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">1/4fold, 11.8"*11.8"(300mm*300mm) or 15.7"*15.7"(400mm*400mm)</span>
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
                  <span className="font-semibold text-navy-700">Material:</span>{" "}
                  <span className="text-gray-700">Virgin(white, 1ply 32-38gsm/quilted 2ply 16-20gsm)</span>
                  <br />
                  <span className="font-semibold text-navy-700">Details:</span>{" "}
                  <span className="text-gray-700">1/2fold, 7.9/8.3/8.9"*6.3/6.5"(200/210/225mm*160/165mm)</span>
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
