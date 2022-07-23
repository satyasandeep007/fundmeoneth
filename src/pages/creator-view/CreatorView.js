
import React, { useState } from "react"
import { Tab } from "@headlessui/react"
import { StarIcon } from "@heroicons/react/solid"
import Elon from "../../assets/ElonMusk.jpeg"
const product = {
  name: "Elon Musk",
  price: "$14000",
  rating: 5,
  image:
    {
      id: 1,
      name: "Angled view",
      src: Elon,
      alt: "Angled front view with bag zipped and handles upright.",
    },

  colors: [
    { name: "Washed Black", bgColor: "bg-gray-700", selectedColor: "ring-gray-700" },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    { name: "Washed Gray", bgColor: "bg-gray-500", selectedColor: "ring-gray-500" },
  ],
  description: `
    <p>Elon Reeve Musk FRS (born June 28, 1971) is a business magnate and investor. He is the founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI.</p>
  `,
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                  <Tab
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  >
                      <>
                        <span className="sr-only">{product.image.name}</span>
                        <span className="absolute inset-0 rounded-md overflow-hidden">
                          <img src={product.image.src} alt="" className="w-full h-full object-center object-cover" />
                        </span>
                        <span
                          className={classNames(
                             "ring-indigo-500" ,
                            "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                          )}
                          aria-hidden="true"
                        />
                      </>
                  </Tab>
              </Tab.List>
            </div>

            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                <Tab.Panel >
                  <img
                    src={product.image.src}
                    alt={product.image.alt}
                    className="w-full h-full object-center object-cover sm:rounded-lg"
                  />
                </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{product.price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating ? "text-indigo-500" : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className="mt-6">

              <div className="mt-10 flex sm:flex-col1">
                <button
                  type="submit"
                  className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                >
                  Donate
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
