import Link from "next/link";

export default function PhysiotherapyCategories() {
  const services = [
    { name: "Neck Pain", icon: "🦴" },
    { name: "Back Pain", icon: "🏥" },
    { name: "Knee Pain", icon: "🦵" },
    { name: "Shoulder Injuries", icon: "💪" },
    { name: "Fracture", icon: "🩹" },
    { name: "Arthritis", icon: "🦴" },
    { name: "Cerebral Palsy", icon: "🧠" },
    { name: "Muscle Weakness", icon: "💪" },
    { name: "Sprains and Strains", icon: "🏃" },
    { name: "Paraplegia", icon: "♿" },
    { name: "Tendonitis", icon: "🦴" },
    { name: "Post Surgical Care", icon: "🏥" },
  ];

  return (
    <div className=" bg-[#001D21]">
      {/* Hero Section */}
      <section className="bg-[#001D21] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-md md:text-2xl lg:text-3xl font-medium text-white leading-tight mb-8">
              Professional Physiotherapy Home Services in Lahore
              <br />
             
            </h1>

            <div className="max-w-4xl mx-auto space-y-6 text-md text-slate-300 leading-relaxed mb-12 text-justify">
              <p>
                The resident area is your back or the stiffness in your joints
                is not just an inconvenience, it's your body signaling for some
                attention. Individuals struggling with various discomforts and
                impairments can significantly benefit from physiotherapy. Beyond
                the categories of traditional clinical settings, we also provide
                the convenience of in-home physiotherapy services.
              </p>

              <p>
                Whether it's post-surgery recovery, managing chronic pain, or
                reclaiming your mobility after an injury, our dedicated team of
                qualified physiotherapists brings a comprehensive range of
                services to your home. From targeted exercises to hands-on
                techniques, we address a variety of musculoskeletal,
                neurological, and orthopedic issues, including but not limited
                to:
              </p>
            </div>

            <button className="bg-white text-slate-800 px-8 py-4 rounded font-semibold text-lg hover:bg-slate-100 transition-colors">
              Book Your Session
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="services"
        className="bg-[#001D21] py-20 border-t border-slate-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-medium text-white mb-6">
              Our specialized services
            </h2>
            <p className="text-xl text-slate-300">
              Comprehensive physiotherapy treatments delivered to your home in
              Lahore
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group text-center">
                <div className="w-44 h-44 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500 transition-colors">
                  <span className="text-md font-medium text-white">{service.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
