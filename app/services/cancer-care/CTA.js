import React from 'react'
import Image from 'next/image'
import { cancercare2 } from '@/public/images'
const CTA = () => {
  return (
    <div className='bg-[#001D21]'>
         <section className="relative flex items-center py-20">
        <div className="absolute inset-0">
          <Image
            src={cancercare2}
            alt="palliative care at home"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 29, 33, 0.8)" }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-purple-200">
            Choose Expertise, Choose the Best for Your Loved One!
          </h2>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
          Contact Us
        </button>
        </div>
      </section>

    
    </div>
  )
}

export default CTA
