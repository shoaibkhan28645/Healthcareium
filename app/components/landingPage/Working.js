"use client"

import { useState, useEffect, useRef } from "react"

const steps = [
  {
    id: 1,
    title: "Initial Consultation and Needs Assessment",
    description: "We begin with a free consultation to understand your specific home health care needs. Our team assesses the patient's condition and works with you to create a personalized care plan that covers everything from nursing care to physiotherapy at home."
  },
  {
    id: 2,
    title: "Caregiver Matching and Selection",
    description: "Based on the assessment, we match you with a certified and experienced caregiver from our team. We ensure the selected professional has the right skills and personality to provide compassionate and effective patient care at home."
  },
  {
    id: 3,
    title: "Care Plan Implementation and Monitoring",
    description: "Once the caregiver is selected, we implement the care plan and provide continuous monitoring to ensure the highest quality of service. Our team is available 24/7 to support you and make adjustments to the plan as needed."
  },
  {
    id: 4,
    title: "Regular Follow-ups and Support",
    description: "We conduct regular follow-ups to ensure you are satisfied with our home care services. Our goal is to build a long-term relationship with our clients and provide ongoing support to help them maintain their health and well-being."
  }
]

export default function SeniorCareTimeline() {
  const [activeStep, setActiveStep] = useState(1)
  const [backgroundColor, setBackgroundColor] = useState("white")
  const componentRef = useRef(null)

  useEffect(() => {
    const element = componentRef.current
    
    const handleScroll = () => {
      if (!element) return
      
      const rect = element.getBoundingClientRect()
      const elementHeight = rect.height
      const elementTop = rect.top
      const elementBottom = rect.bottom
      const viewportHeight = window.innerHeight
      
      // Check if at least 10% of element is visible in viewport
      const isPartiallyVisible = elementBottom > 0 && elementTop < viewportHeight
      
      if (isPartiallyVisible) {
        // Calculate how much of the element is visible
        const visibleTop = Math.max(0, elementTop)
        const visibleBottom = Math.min(viewportHeight, elementBottom)
        const visibleHeight = visibleBottom - visibleTop
        const visibilityPercentage = visibleHeight / elementHeight
        
        // When 10% or more of element is visible, change to #6E5C3B
        if (visibilityPercentage >= 0.5) {
          setBackgroundColor("#04373d")
        } else {
          setBackgroundColor("white")
        }
      } else {
        // Element is not in viewport
        setBackgroundColor("white")
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
    <div className="min-h-screen bg-gray-100">
      {/* Some content above to enable scrolling */}
    
      {/* Main Timeline Component */}
      <div
        ref={componentRef}
        className="min-h-screen transition-colors duration-500 ease-in-out"
        style={{ 
          backgroundColor: backgroundColor === "white" ? "white" : "#04373d",
          backgroundImage: backgroundColor === "white" ? "none" : "linear-gradient(135deg, #04373d%, #5a4a2f 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className={`text-lg md:text-3xl font-medium mb-3 transition-colors duration-500 ${
              backgroundColor === "white" ? "text-gray-800" : "text-white"
            }`}>
              How Does ConsidraCare's Senior Home Care Work?
            </h1>
            <p className={`text-sm md:text-md  mx-auto leading-relaxed transition-colors duration-500 px-6 md:px-14 xl:px-44 ${
              backgroundColor === "white" ? "text-gray-600" : "text-gray-200"
            }`}>
              ConsidraCare places thoroughly vetted and matched professionals within the homes of seniors, and provides their families and caregivers with a state-of-the-art platform to improve collaboration, increase visibility and improve the delivery of care.
            </p>
          </div>

          {/* Timeline and Content */}
          <div className="flex justify-center gap-12 items-start">
            {/* Left Side - Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {/* Timeline Steps */}
              <div className="space-y-8">
                {steps.map((step) => (
                  <div 
                    key={step.id} 
                    className="relative flex items-center  group"
                    onClick={() => setActiveStep(step.id)}
                  >
                    {/* Step Number Circle */}
                    <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 ${
                      activeStep === step.id 
                        ? 'bg-[#4a8892] scale-110' 
                        : 'bg-[#4a8892] group-hover:bg-[#4a8892]'
                    }`}>
                      {step.id}
                    </div>
                    
                    {/* Step Title */}
                    <div className="ml-6">
                      <h3 className={`text-md font-medium transition-colors duration-300 ${
                        backgroundColor === "white" ? "text-gray-800" : "text-white"
                      } ${activeStep === step.id ? 'text-green-600' : ''}`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      
     
    </div>
  )
}