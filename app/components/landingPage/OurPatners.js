"use client";

import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { partners } from "@/public/images"
const partnerLogos = [
  { name: "Partner Logo 1", logo: partners },
  { name: "Partner Logo 2", logo: partners },
  { name: "Partner Logo 3", logo: partners },
  { name: "Partner Logo 4", logo: partners },

]

const profileImages = [
  "/images/cancer.jpg",
  "/images/labtest.jpg",
  "/images/nursing.jpg",
  "/images/therapy.jpg",
  "/images/partners.png",
  "/placeholder.svg?height=150&width=150",
]

export default function OurPartnersSection() {
  const [isWhiteBackground, setIsWhiteBackground] = useState(false)
  const componentRef = useRef(null)

  useEffect(() => {
    const element = componentRef.current
    
    const handleScroll = () => {
      if (!element) return
      
      const rect = element.getBoundingClientRect()
      const elementHeight = rect.height
      const elementTop = rect.top
      const viewportHeight = window.innerHeight
      
      // Calculate scroll progress through the element
      let scrollProgress = 0
      
      if (elementTop <= 0) {
        // Element has started scrolling past the top of viewport
        const scrolledAmount = Math.abs(elementTop)
        scrollProgress = Math.min(scrolledAmount / elementHeight, 1)
      } else {
        // Element hasn't reached the top of viewport yet
        scrollProgress = 0
      }
      
      // Set white background when MORE than 40% of component has been scrolled
      if (scrollProgress > 0) {
        setIsWhiteBackground(true)
      } else {
        setIsWhiteBackground(false)
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Check initial state
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      ref={componentRef}
      className={`transition-colors duration-700 ease-in-out ${isWhiteBackground ? "bg-white" : ""}`}
      style={!isWhiteBackground ? { backgroundColor: "#001D21" } : {}}
    >
      {/* Partnership Section */}
      <div className="py-16 px-6 md:px-12 lg:px-16  text-center">
        <div className=" max-w-xl mx-auto text-center">
          {/* Main Heading */}
          <h2
            className={`text-md md:text-lg lg:text-xl font-medium mb-4 transition-colors duration-700 ${
              isWhiteBackground ? "text-gray-900" : "text-white"
            }`}
          >
            Your Health, Our Priority. Trusted by Families Across Pakistan.
          </h2>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={130}
                  height={130}
                  className={`transition-all duration-700 ${
                    isWhiteBackground ? "opacity-80 brightness-50" : ""
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Partnership Program Link */}
          <div className="flex items-center justify-center gap-2 group cursor-pointer bg-gradient-to-r from-teal-800/90 to-teal-700/90 rounded-full">
             <span
              className={`bg-text-gradient text-center font-medium font-chillax  text-[10px] bg-clip-text text-transparent underline   transition-colors duration-700 ${
                isWhiteBackground ? "text-gray-700" : "text-gray-300"
              } group-hover:underline`}style={{
  backgroundImage: `linear-gradient(
    195.85deg,
    #6258ff -121.25%,
    #e06ab2 -69.08%,
    #fb8569 -36.55%,
    #ffb1b1 12.07%,
    #cdcbff 59.26%,
    #7e6f4a 126.83%,
    #32607f 172.94%,
    #fde8b5 277.03%
  )`,

}}
            >
              We partner with leading healthcare organizations to provide comprehensive and reliable home care services.
            </span>
            <svg
              className={`w-5 h-5 transition-all duration-700 group-hover:translate-x-1 ${
                isWhiteBackground ? "text-gray-700" : "text-gray-300"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Comprehensive Care Section */}
      <div className={`transition-colors duration-700   ${isWhiteBackground ? "bg-white" : "bg-[#001D21]"} `}>
        <div className="max-w-5xl bg-[#CDEED3] mx-auto px-6 md:px-12 lg:px-16 py-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-lg">
              <h3
                className={`text-md md:text-xl font-medium mb-6 transition-colors duration-700 text-gray-800 leading-tight`}
              >
                Comprehensive Home Health Care Services
              </h3>

              <p
                className={`text-sm md:text-md leading-relaxed mb-8 transition-colors duration-700 text-gray-700`}
              >
                We offer a wide range of home health care services, including nursing care, physiotherapy, elderly care, and more. Our team is dedicated to providing personalized and compassionate care to meet your needs.
              </p>

              <div className="group cursor-pointer">
                <span
                  className={`text-sm md:text-md  border-b-2 transition-all duration-300 text-gray-800 border-gray-800 group-hover:border-gray-600`}
                >
                  Learn more about our services
                </span>
              </div>
            </div>

            {/* Right Content - Profile Images in horizontal layout */}
            <div className="flex justify-center lg:justify-end">
              <div className="flex items-center gap-4 flex-wrap justify-center">
                {profileImages.map((image, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105 flex-shrink-0"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Home health care service ${index + 1}`}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-20"></div>
    </div>
  )
}