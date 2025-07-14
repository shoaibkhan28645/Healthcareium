import React from 'react'
import { cancercare } from '@/public/images'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div>
        <section className="relative flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={cancercare}
            alt="A certified phlebotomist collecting a blood sample from a patient at home."
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Creative Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/70 "></div>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 29, 33, 0.6)" }}></div>

         
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 my-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Creative Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-white/90">Professional Healthcare at Home </span>
              </div>

              <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl  mb-4 text-purple-200 leading-tight font-medium">
                Convenient Cancer Care at Your Home
                <br />
              
               
              </h1>

              <p className="text-md md:text-lg mb-8 text-gray-300 max-w-md text-justify">
Receive compassionate, professional cancer care in the comfort of your home — including symptom management, medication and personalized treatment under expert supervision.              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
          Contact Us
        </button>
                
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/80">Licensed Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/80">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Content - Creative Card */}
            <div className="relative lg:ml-8">
              {/* Floating Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Compassionate Care</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Providing dignity, comfort, and professional medical support in the familiar surroundings of home.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-light text-purple-200 mb-1">500+</div>
                    <div className="text-xs text-gray-400">Families Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-green-200 mb-1">24/7</div>
                    <div className="text-xs text-gray-400">Care Available</div>
                  </div>
                </div>
              </div>      
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/60">
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
