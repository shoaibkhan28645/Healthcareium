import React from 'react'
import Image from 'next/image'
import { labtest2 } from '@/public/images'
const Experts = () => {
  return (
    <div>
        <div className=' bg-[#001D21]'>
            <div className= ' py-10 md:py-28 md:px-10 px-5'>
        <div className="flex justify-center gap-12 items-center ">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-purple-200 ">
              Accurate and Reliable Results from Top Labs
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify max-w-5xl">
              We partner with the leading laboratories in Pakistan to provide you with accurate and reliable results. Our partner labs are equipped with state-of-the-art technology and staffed by experienced professionals. We are committed to providing you with the highest quality of service.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative pl-16">
            <Image
              src={labtest2}
              alt="A medical professional analyzing lab results, emphasizing accuracy and reliability."
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Experts
