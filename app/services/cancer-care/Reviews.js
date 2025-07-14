"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  reviewimage,
  reviewprofileimage,
  reviewprofileimage1,
} from "@/public/images";

const testimonials = [
  {
    name: "Sohail Khalid",
    rating: 5,
    text: "Very professional team. Genuinely compassionate about helping you can for your loved ones.",
    avatar: reviewprofileimage,
  },
  {
    name: "Asha Wajid",
    rating: 5,
    text: "V good company the staff is friendly and cooperative.",
    avatar: reviewprofileimage1,
  },
  {
    name: "Hira Sana",
    rating: 5,
    text: "Compassionate care providers. I was not expecting that level of professionalism.",
    avatar: reviewprofileimage1,
  },
  {
    name: "Ahmad Hassan",
    rating: 5,
    text: "Outstanding service quality. The team exceeded our expectations in every way.",
    avatar: reviewprofileimage,
  },
  {
    name: "Fatima Ali",
    rating: 5,
    text: "Professional, caring, and reliable. Highly recommend their services to everyone.",
    avatar: reviewprofileimage1,
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Create extended array for infinite scroll effect
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <div className="">
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Endorsed by Families Like Yours
            </h2>
          </div>

          {/* Mobile and Tablet Carousel */}
          <div className="block lg:hidden">
            <div
              className="relative h-64 mb-8"
             
           
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {testimonials.map((testimonial, index) => {
                  const position =
                    (index - currentIndex + testimonials.length) %
                    testimonials.length;
                  const isActive = position === 0;
                  const isNext = position === 1;
                  const isPrev = position === testimonials.length - 1;

                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-700 ease-in-out ${
                        isActive
                          ? "opacity-100 scale-100 z-20 transform translate-x-0"
                          : isNext
                          ? "opacity-60 scale-90 z-10 transform translate-x-80"
                          : isPrev
                          ? "opacity-60 scale-90 z-10 transform -translate-x-80"
                          : "opacity-0 scale-75 z-0"
                      }`}
                      style={{
                        transform: `translateX(${
                          isActive ? 0 : isNext ? 320 : isPrev ? -320 : 0
                        }px) scale(${isActive ? 1 : 0.9})`,
                      }}
                    >
                      <div className="bg-gray-50 rounded-xl p-6 w-80 mx-auto shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                          <Image
                            src={reviewimage || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {testimonial.name}
                            </h4>
                            <div className="flex items-center gap-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <svg
                                  key={i}
                                  className="w-4 h-4 text-yellow-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Infinite Scroll */}
          <div className="hidden lg:block">
            <div
              className="relative overflow-hidden"
          
            
            >
              <div
                className="flex gap-8 transition-transform duration-1000 ease-linear"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / 3}%)`,
                  animation: isHovered
                    ? "infiniteScroll 20s linear infinite"
                    : "infiniteScroll 20s linear infinite",
                }}
              >
                {extendedTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 bg-gray-50 rounded-xl p-6 ransition-all duration-300 hover:-translate-y-2 group"
                    style={{
                      animationDelay: `${(index % testimonials.length) * 0.2}s`,
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4 ">
                      <div className="relative ">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-400 transition-transform duration-300 group-hover:scale-125"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Gradient overlays for smooth infinite effect */}
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(100 * testimonials.length) / 3}%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
