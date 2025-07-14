import React from 'react'
import Image from 'next/image'
import { cancercare3 } from '@/public/images'
const Experts = () => {
  return (
    <div>
         <section className="py-20" style={{ backgroundColor: "#001D21" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-purple-200 ">
                In the Hands of Experts: Empowering Your Path to Recovery
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 text-justify">
                When you are feeling scared and unsure about what's going to happen, we ensure that your loved ones
                receive the best possible care. Our team of healthcare professionals has extensive experience in
                providing home care for cancer patients. Together, we navigate this journey with expertise, empathy, and
                a shared commitment to the well-being and comfort of your loved ones.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative pl-16">
              <Image
                src={cancercare3}
                alt="cancer treatment at home"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experts
