import { singleProduct } from "@/data"
import Image from "next/image"
import React from "react"

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:p-20 xl:p-40 h-screen flex flex-col justify-around text-red-500 md:flex-row">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="">
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
      </div>
    </div>
  )
}

export default SingleProductPage
