"use client"

import Image from "next/image"
import { Wordmark } from "@/components/wordmark"
import { useEffect } from "react"

export default function ProductCatalog() {
  // Add print functionality when the page loads
  useEffect(() => {
    // Auto-print when the page loads (optional)
    // window.print()
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* Poster Header */}
      <div className="bg-navy-800 text-white py-8 px-6 text-center">
        <Wordmark size="lg" />
        <h1 className="text-4xl font-bold mt-4 text-amber-100">Complete Product Catalog</h1>
        <p className="text-xl mt-2 text-gray-100">Premium Tissue & Paper Products for Your Business</p>
      </div>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Towel Products */}
          <div className="col-span-full">
            <h2 className="text-3xl font-bold text-navy-800 border-b-2 border-amber-400 pb-2 mb-6">Towel Products</h2>
          </div>

          {/* N-Fold Towels */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/n-fold-towels-new.jpg"
                width={400}
                height={400}
                alt="N-Fold Towels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">N-Fold Towels</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm)/Recycled(white/kraft/blue, 1ply
                32-42gsm/2ply-quilted 16-20gsm)/TAD(white, 1ply 28gsm); 1/3fold,
                9/9.25"8.86"/9"/9.25"(230/240mm225/230/235mm)
              </p>
            </div>
          </div>

          {/* Singlefold Towels */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/singlefold-towels-new.jpg"
                width={400}
                height={400}
                alt="Singlefold Towels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">Singlefold Towels</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 1ply 32-42gsm/2ply quilted 16-20gsm)/Recycled(white/kraft/blue, 1ply
                32-42gsm/2ply quilted 16-20gsm)/TAD(white, 1ply 28gsm); 1/2fold, 9"*10.23"(230mm*260mm)
              </p>
            </div>
          </div>

          {/* Hardwound Towels */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/hardwound-towels-new.jpg"
                width={400}
                height={400}
                alt="Hardwound Towels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">Hardwound Towels</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 1ply 32-42gsm/2ply quilted 16-20gsm)/Recycled(white/kraft/blue, 1ply
                32-42gsm/2ply quilted 16-20gsm)/TAD(white, 1ply 28gsm); 7.76/8/10"*600/800ft (197/203/254mm*183/243.8m),
                core3.8/4/4.2/5.1cm, y cut/1 cut, with plastic tub.
              </p>
            </div>
          </div>

          {/* Center Pull Towels */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/center-pull-towels-bulk.jpg"
                width={400}
                height={400}
                alt="Center Pull Towels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">Center Pull Towels</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm)/Recycled(white/kraft/blue, 1ply
                32-42gsm/2ply quilted 16-20gsm)/TAD(white, 1ply 28gsm); width7.28/7.87/8"*length10"
                (185/200/203mm*254mm), 600/720/800sheets, core5.1/6/7.6cm.
              </p>
            </div>
          </div>

          {/* 4-Fold Towels */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/4-fold-towels-new.jpg"
                width={400}
                height={400}
                alt="4-Fold Towels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">4-Fold Towels</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm)/Recycled(white/kraft/blue, 1ply
                32-42gsm/2ply quilted 16-20gsm)/TAD(white, 1ply 28gsm); 1/4fold, 9.25"*8.86/9/9.25"
                (240mm*225/230/235mm)
              </p>
            </div>
          </div>

          {/* 5-Fold Towels */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/5-fold-towels-new.jpg"
                width={400}
                height={400}
                alt="5-Fold Towels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">5-Fold Towels</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm)/Recycled(white/kraft/blue, 1ply
                32-42gsm/2ply quilted 16-20gsm)/TAD(white, 1ply 28gsm); 1/5fold, 9.84"*7.48"(250mm*190mm)
              </p>
            </div>
          </div>

          {/* C-Fold Towels */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/c-fold-towels-new.jpg"
                width={400}
                height={400}
                alt="C-Fold Towels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">C-Fold Towels</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 1ply 32-42gsm/2ply-quilted 16-20gsm)/Recycled(white/kraft/blue, 1ply
                32-42gsm/2ply-quilted 16-20gsm)/TAD(white, 1ply 28gsm); 10"*11.02"/12"/13" (255mm280/305/330mm)
              </p>
            </div>
          </div>

          {/* Kitchen Towels */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/standing-paper-towel-roll.png"
                width={400}
                height={400}
                alt="Kitchen Towels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">Kitchen Towels</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 12.5-16gsm); 2ply, other details based on customer requirements.
              </p>
            </div>
          </div>

          {/* Disposable Bed Sheets */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/disposable-bed-sheets-new.png"
                width={400}
                height={400}
                alt="Disposable Bed Sheets"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">Disposable Bed Sheets</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 1ply 42gsm/2ply-glued 20gsm); width37cm*length49cm, perforated in 135sheets,
                core45mm.
              </p>
            </div>
          </div>

          {/* Tissue Products */}
          <div className="col-span-full mt-8">
            <h2 className="text-3xl font-bold text-navy-800 border-b-2 border-amber-400 pb-2 mb-6">Tissue Products</h2>
          </div>

          {/* Toilet Paper Rolls */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/toilet-paper-rolls-new.jpg"
                width={400}
                height={400}
                alt="Toilet Paper Rolls"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">Toilet Paper Rolls</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 12.5-15gsm)/Recycled(white/kraft/blue, 12.5-15gsm); 2ply/4ply,
                width4"*length3.75"(102mm*95mm), 450/550/600/1000sheets, core 1.9cm(small core)/4/4.2cm.
              </p>
            </div>
          </div>

          {/* Jumbo Toilet Rolls */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/jumbo-toilet-rolls-new.jpg"
                width={400}
                height={400}
                alt="Jumbo Toilet Rolls"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">Jumbo Toilet Rolls</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 12.5-15gsm)/Recycled(white/kraft/blue, 12.5-15gsm); 2ply,
                3.3/3.5"(84mm/89mm)*600/800/1000', core 1.9cm(small core)/7.6/8.4cm.
              </p>
            </div>
          </div>

          {/* Facial Tissue */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/facial-tissues-dual-black-bg.jpg"
                width={400}
                height={400}
                alt="Facial Tissue"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">Facial Tissue</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 16-36gsm); 2ply, 1/2fold, 7.87"*7.48"(200mm*190mm), 100sheets, in case or plastic
              </p>
            </div>
          </div>

          {/* Napkin Products */}
          <div className="col-span-full mt-8">
            <h2 className="text-3xl font-bold text-navy-800 border-b-2 border-amber-400 pb-2 mb-6">Napkin Products</h2>
          </div>

          {/* Dinner Napkins(1) */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/dinner-napkins-new.jpg"
                width={400}
                height={400}
                alt="Dinner Napkins(1)"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">Dinner Napkins(1)</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 12.5-16gsm); 2ply, 1/8fold, 14.17/14.96"*16.54"(360/380mm*420mm), or
                16.93"*16.93"(430mm*430mm)
              </p>
            </div>
          </div>

          {/* Dinner Napkins(2) */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/dinner-napkins-2.jpg"
                width={400}
                height={400}
                alt="Dinner Napkins(2)"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">Dinner Napkins(2)</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 16-20gsm); 2ply, 1/8fold, 15.75"*15.75"(400mm*400mm)
              </p>
            </div>
          </div>

          {/* Lunch Napkins */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/lunch-napkins-new.jpg"
                width={400}
                height={400}
                alt="Lunch Napkins"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">Lunch Napkins</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 16-20gsm); 2ply, 1/4fold, 11.81"*11.81"(300mm*300mm) or
                15.75"*15.75"(400mm*400mm)
              </p>
            </div>
          </div>

          {/* Interfold Napkins */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
              <Image
                src="/interfold-napkins-new.jpg"
                width={400}
                height={400}
                alt="Interfold Napkins"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-navy-700">Interfold Napkins</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details: Virgin(white, 1ply 32-38gsm/quilted 2ply 16-20gsm); 1/2fold,
                7.87/8.27/8,86"*6.3/6.5"(200/210/225mm*160/165mm)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-navy-800 text-white py-6 px-6 text-center mt-8">
        <p className="text-gray-100">Contact us: sales@oceanwide.ltd | +1(86)15613255335</p>
        <p className="text-gray-100 mt-2">© {new Date().getFullYear()} OceanWide. All rights reserved.</p>
      </div>

      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A3 portrait;
            margin: 0;
          }
          body {
            width: 3508px;
            height: 4961px;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}
