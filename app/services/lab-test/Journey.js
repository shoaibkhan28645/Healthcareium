import React from 'react'
import Image from 'next/image'
import { labtest1 } from '@/public/images'
const Journey = () => {
  return (
    <div className='bg-green-50 py-10 md:px-10 px-2 '>
        <div className='flex justify-center items-center pb-5 md:pb-10'>
            <h1 className='text-gray-900 font-medium md:text-5xl'>Our Process</h1>
        </div>
       <div
        title="Book Your At-Home Lab Test in 3 Simple Steps"
        backgroundColor="bg-green-50"
      >
        <div className="flex justify-center gap-12 items-center text-center ">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              <b>1. Book an Appointment:</b> Schedule an appointment online or by phone. Choose a time that is convenient for you.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              <b>2. Sample Collection:</b> Our certified phlebotomist will visit your home to collect your lab samples.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              <b>3. Get Your Results:</b> We will send your results to you via email or our secure online portal.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src={labtest1}
              alt="A patient receiving an in-home lab test, showing the convenience of the service."
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey
