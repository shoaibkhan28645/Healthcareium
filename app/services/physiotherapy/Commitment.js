
import {  Clock,  Users,Shield  } from "lucide-react"
import Image from "next/image"
import { commitment1, commitment2, commitment3, commitment4 } from "@/public/images"

export default function Commitment() {
  return (
    <div className=" bg-[#093137]">
  <div className="text-center py-5 md:pt-10  ">
            <h2 className="text-4xl font-medium text-white mb-4">Our Commitment Extends Beyond Service Excellence</h2>
            <p className="text-white text-lg max-w-4xl mx-auto leading-relaxed ">
              At HomeServices, we believe in bringing the best of professional care to your doorstep. With flexible
              scheduling, familiar surroundings, and customized sessions designed just for you, home service isn't just
              a convenience, it's a holistic approach to getting you back to living life on your terms. Our
              professionals provide comprehensive care across various services, offering a sense of freedom, including:
            </p>
          </div>

       <section className="py-16 px-4 bg-[#093137]">
        <div className="container mx-auto ">
         

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
         

            {/* Flexible Scheduling */}
            <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-lg p-8">
              <div className="mb-6 bg-slate-700/50 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <Clock className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                  <div className="text-white font-semibold">Flexible Timing</div>
                </div>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Flexible Scheduling</h3>
              <p className="text-slate-300 leading-relaxed text-justify">
                Expert scheduling and efficient care are just our sessions that fit into your busy lifestyle. Whether
                it's early morning or late evening, we adapt to your schedule for maximum convenience. Prioritize your
                health without compromising your daily routine with effective and consistent care at home.
              </p>
            </div>

            {/* Personalised Care */}
            <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-lg p-8">
              <div className="mb-6 bg-slate-700/50 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                  <div className="text-white font-semibold">Personal Care</div>
                </div>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Personalised Care</h3>
              <p className="text-slate-300 leading-relaxed text-justify">
                Every individual has unique needs. Our services at home goes beyond one-size-fits-all approaches,
                offering personalized and tailored to your specific needs and goals. Our expert professionals craft a
                unique treatment plan just for you, addressing your individual challenges and focusing on areas that
                need special attention.
              </p>
            </div>

            {/* Family Support */}
           
          </div>
        </div>
      </section>

      {/* Services Section */}
  
    </div>
  )
}
