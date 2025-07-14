import { cancercare1 } from "@/public/images";
import React from "react";
import Image from "next/image";
const Journey = () => {
  return (
    <div className=" flex justify-center items-center bg-green-50">
           <section className="py-20 ">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              Simplify Your Journey with Cancer Care at Home!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Facing a cancer diagnosis introduces countless challenges for individuals, creating a profound sense of
                vulnerability and fear. The physical toll of treatments, the emotional rollercoaster of uncertainty, and
                the strain on personal and financial aspects can leave one feeling deeply agitated and overwhelmed.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Cancer care at home emerges as a transformative approach, offering not just medical attention but a
                holistic sanctuary. It addresses the problem by providing personalized, compassionate care that extends
                beyond the clinical setting. In the warmth of home, patients find solace in familiar surroundings,
                surrounded by loved ones.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                At ConsideraCare Pakistan, our caregivers not only attend to the physical needs of the patient but also
                foster emotional well-being, creating a supportive environment where healing becomes a shared journey.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src={cancercare1}
                alt="in-home cancer care"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;
