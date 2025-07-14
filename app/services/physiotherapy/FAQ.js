"use client"

import { useState } from "react"

const faqData = [
  {
    question: "What services are included in physiotherapy at home?",
    answer:
      "Our physiotherapy at home services include rehabilitation exercises, pain management, post-surgery recovery, mobility improvement, and personalized treatment plans for neurological, orthopedic, and geriatric conditions.",
  },
  {
    question: "Is physiotherapy at home effective?",
    answer:
      "Yes, physiotherapy at home is highly effective. It allows patients to recover in a familiar and stress-free environment, which can significantly enhance progress and consistency in treatment.",
  },
  {
    question: "Who will provide physiotherapy at home?",
    answer:
      "Certified and experienced physiotherapists will visit your home to conduct one-on-one sessions. Each session is tailored to the patient’s condition and supervised according to medical best practices.",
  },
  {
    question: "Do I need any equipment for physiotherapy at home?",
    answer:
      "Most exercises can be performed with minimal or no equipment. If specialized tools are needed, our physiotherapist will either bring them or guide you on suitable alternatives available at home.",
  },
  {
    question: "What are the benefits of physiotherapy at home?",
    answer:
      "Physiotherapy at home provides personalized attention, reduces travel-related stress, and encourages better patient engagement. It is especially beneficial for elderly patients, those with mobility issues, or individuals recovering from surgery or injury.",
  },
];



export default function FAQ() {
  const [openIndex, setOpenIndex] = useState()

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      {/* FAQ Section that slides up to reveal footer */}
      <div
        className="relative z-10 py-20 px-6 md:px-12 lg:px-16"
        style={{ backgroundColor: "#001D21" }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-lg md:text-3xl font-medium text-white text-center mb-16">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4 mx-4 md:mx-14 xl:mx-20 mb-16">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-700">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 flex items-center justify-between text-left cursor-pointer transition-colors duration-200 rounded-lg md:px-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                          openIndex === index ? "bg-green-600 rotate-45" : "bg-green-600"
                        }`}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-md md:text-lg text-white font-light">{faq.question}</span>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-6 ml-10">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200">
              Call us
            </button>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Footer that is revealed on scroll */}
      <div className="sticky bottom-0 bg-gray-100 text-gray-800 z-0 flex items-end">
        <div className="max-w-7xl pb-10 mx-auto px-6 py-16 w-full">
            <div className="">
                <h1  className="bg-text-gradient text-center font-medium text-3xl md:text-5xl break-words tracking-widest  bg-clip-text mb-28" >HealthCareium</h1>
            </div>
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Get Started */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-4">Get started</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Sign in</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Contact sales</a>
              </div>
            </div>

            {/* Fund Managers */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-4">Fund Managers</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Rolling Funds®</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Venture Funds</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">SPVs</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Networked banking</a>
               
              </div>
            </div>

            {/* Pricing + Returns */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-4">Pricing + Returns</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">VC Fund Performance Calculator</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">RUV Calculator</a>
              </div>
            </div>

            {/* Startups + Investors */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-4">Startups + Investors</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Roll Up Vehicles®</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Demo Day Funds</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Explore Investment Opportunities</a>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Partnerships</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Help Center</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Education Center</a>
                
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4 md:mb-0">
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Disclosures</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Cookie Settings</a>
              <span>© AL Advisors Management Inc.</span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
