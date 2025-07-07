import Link from "next/link"


export default function HeroSection() {
  return (
    <div className="min-h-screen px-6 pt-10 md:px-12 lg:px-16 font-chillax" style={{ backgroundColor: "#001D21" }}>
      <div className="max-w-4xl">
        {/* Top Banner Link */}
        <Link
          href="#"
          className="inline-flex  hover:shadow-md items-center gap-2 transition-colors duration-200 mb-10 group bg-gradient-to-r from-teal-800/30 to-teal-700/20 px-4 py-2 rounded-full"
        >
          <span className="bg-text-gradient font-chillax bg-clip-text text-transparent group-hover:underline text-sm md:text-base" style={{
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

}}>
            Explore our 2024 Year in Review
          </span>
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-teal-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Main Heading */}
        <h1 className="text-xl md:text-4xl xl:text-5xl font-light  mb-8">
          <span className="text-purple-200 font-medium">Compassionate Home Care, Right at Your Doorstep.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg font-light md:text-2xl lg:text-2xl text-gray-300  leading-relaxed mb-12 max-w-2xl">
        Professional nursing, elderly, and patient care services in Pakistan. Quality healthcare in the comfort of your home.
        </p>

        {/* Contact Button */}
        <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
          Contact Us
        </button>
      </div>
    </div>
  )
}
