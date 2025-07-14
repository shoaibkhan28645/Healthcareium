"use client"

import { useState, useEffect, useRef } from "react"
import { testimonial1, testimonial2, testimonial3 } from "@/public/images"
import Image from "next/image"
const testimonials = [
  {
    quote:
      "One of AngelList's biggest benefits is its all-in-one software-first approach to admin, legal and tax services.",
    author: "Cindy Bi, GP, CapitalX",
    image:testimonial1,
  },
  {
    quote: "AngelList has revolutionized how we manage our fund operations, making everything seamless and efficient.",
    author: "Sarah Chen, Managing Partner, Venture Labs",
    image: testimonial2,
  },
  {
    quote:
      "The platform's comprehensive tools have saved us countless hours and allowed us to focus on what matters most.",
    author: "Michael Rodriguez, Founder, Tech Capital",
    image:testimonial3,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)
  const progressRef = useRef(null)
  const autoPlayDuration = 5000 // 5 seconds

  // Auto-play functionality with progress tracking
  useEffect(() => {
    const startAutoPlay = () => {
      // Clear any existing intervals
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
      
      // Reset progress
      setProgress(0)
      
      // Progress update interval (update every 50ms for smooth animation)
      const progressInterval = 50
      const totalSteps = autoPlayDuration / progressInterval
      let currentStep = 0
      
      progressRef.current = setInterval(() => {
        currentStep++
        const newProgress = (currentStep / totalSteps) * 100
        setProgress(newProgress)
        
        if (newProgress >= 100) {
          clearInterval(progressRef.current)
        }
      }, progressInterval)
      
      // Main auto-play interval
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, autoPlayDuration)
    }

    startAutoPlay()

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [currentIndex]) // Restart when currentIndex changes

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  // Circular progress component
  const CircularProgress = ({ progress, size = 56 }) => {
    const center = size / 2
    const radius = center - 6 // More space for thicker stroke
    const circumference = 2 * Math.PI * radius
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (progress / 100) * circumference

    return (
      <svg 
        width={size} 
        height={size} 
        className="absolute inset-0"
        style={{ transform: 'rotate(-90deg)' }}
      >
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="4"
        />
        {/* Progress circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 1)"
          strokeWidth="4"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.05s ease-out',
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
          }}
        />
      </svg>
    )
  }

  return (
    <div 
      className="w-full max-w-full"
      style={{ width: "100%", maxWidth: "100vw" }}
    >
      <div className="relative h-screen w-full">
        {/* Background Images with Crossfade - Full Screen */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={testimonial.image}
                alt={`Testimonial ${index + 1} background`}
                layout="fill"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 w-full h-full"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-12 lg:p-16">
          {/* Header */}
          <div>
            <h2 className="text-white text-md md:text-xl font-light">Testimonials</h2>
          </div>

          {/* Testimonial Content with Fade Animation */}
          <div className="max-w-3xl">
            <div
              key={currentIndex}
              className="animate-fade-in"
              style={{
                animation: "fadeIn 0.8s ease-in-out",
              }}
            >
              <blockquote className="text-white text-md md:text-xl xl:text-2xl font-medium leading-tight mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <cite className="text-white/90 text-lg md:text-xl lg:text-2xl font-normal not-italic">
                {testimonials[currentIndex].author}
              </cite>
            </div>
          </div>

          {/* Navigation and Indicators */}
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              {/* Previous Button */}
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Next Button with Circular Progress */}
              <div className="relative">
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200 relative z-10"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {/* Circular Progress Indicator */}
                <div className="absolute -inset-0">
                  <CircularProgress progress={progress} size={54} />
                </div>
                {/* Larger progress for md screens */}
                <div className="absolute -inset-1 hidden md:block">
                  <CircularProgress progress={progress} size={64} />
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  )
}