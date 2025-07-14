import Image from "next/image"
import { cancer, labtest, nursing, therapy } from "@/public/images"
const servicesData = [
  {
    title: "Cancer Care",
    image: cancer,
    description: "Compassionate cancer care at home. We provide comfort and support to patients and their families.",
    subtitle: "Focus on what matters most, while we handle the care.",
  },
  {
    title: "Lab Tests at Home",
    image: cancer,
    description: "Convenient and reliable lab tests at home. Get accurate results without leaving your house.",
    subtitle: "Fast, easy, and confidential.",
  },
  {
    title: "Nursing Care",
    image: cancer,
    description: "Professional nursing care at home. Our certified nurses provide personalized and skilled medical support.",
    subtitle: "Get the best care, right where you are.",
  },
  {
    title: "Physiotherapy at Home",
    image: cancer,
    description: "Expert physiotherapy at home. Recover from injuries and improve your mobility with our certified therapists.",
    subtitle: "Your path to recovery starts here.",
  },
]

export default function ServicesCards() {
  return (
    <div className=" pb-5 px-6 md:px-12 lg:px-16" style={{ backgroundColor: "#001D21" }}>
        <div>
            <h1  className="bg-text-gradient text-center font-medium font-chillax  text-5xl bg-clip-text text-white mb-14 " >Our Services</h1>
        </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="group ">
              {/* Decorative line above title */}
              <div className=" h-px bg-gray-600 mb-4"></div>
              {/* Card Title */}
              <h3 className="text-white text-xl font-medium mb-6">{service.title}</h3>

              {/* Card Container with hover effect */}
              <div className="">
                <div className="relative  gap-2 rounded-2xl overflow-hidden mb-6 border border-purple-200 shadow-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={500}
                      height={300}
                      className="object-cover"
                    />

                    {/* Arrow Button Overlay - positioned in bottom right */}
                    <div className="absolute bottom-4 right-4">
                      <div className="w-12 h-12 bg-black/20 cursor-pointer backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10  ">
                        <svg className="w-5 h-5 transition-transform duration-400 ease-out hover:scale-125 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Text */}
                <div className="text-gray-300 leading-relaxed">
                  <span className="text-white font-medium">{service.description}</span>
                  <span className="text-gray-400"> {service.subtitle}</span>
                </div>
              </div>
          
          ))}
         
        </div>
      </div>
    </div>
  )
}