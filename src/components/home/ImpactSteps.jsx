import { LuPlay } from "react-icons/lu";
import { FaLeaf, FaCogs, FaGlobe } from "react-icons/fa";
import Image from "next/image";
import logoDark from "@/assets/images/logo-circle.png";
import bg from "@/assets/images/landing/bg.jpg";

const impactSteps = [
  {
    title: "1. Regenerative Hemp Farming",
    description:
      "We cultivate industrial hemp across scalable farmland to rapidly absorb CO₂, improve soil health, and provide sustainable raw materials. Each harvest builds the foundation for renewable innovation.",
    icon: FaLeaf,
  },
  {
    title: "2. Advanced Carbon Tech & Processing",
    description:
      "Using cutting-edge pyrolysis and clean processing systems, we transform hemp into biocoal, biochar, fiber, hurd, and hemp seed oil — each designed for high-impact, eco-conscious industries.",
    icon: FaCogs,
  },
  {
    title: "3. Global Distribution & Climate Action",
    description:
      "Our solutions power industries across energy, construction, packaging, textiles, and wellness. Every product sold contributes to climate resilience and permanent carbon removal at scale.",
    icon: FaGlobe,
  },
];

const ImpactSteps = () => {
  return (
    <>
      <section className="relative h-full py-16 lg:py-32 bg-gray-950 text-white">
        <div className="container">
          <div className="absolute inset-0 bg-cover bg-center bg-repeat" 
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
          >
            <div className="absolute inset-0 h-full w-full bg-black/60" />
          </div>
          <div className="relative z-10">
            <div className="grid items-center gap-10 sm:grid-cols-3">
              {/* Text and Steps */}
              <div className="sm:col-span-2">
                <div className="rounded-md p-6">
                  <h2 className="text-center text-4xl font-bold text-white">
                    How We Create Impact in 3 Key Phases
                  </h2>
                  <div className="mt-10 grid grid-cols-1 gap-6">
                    {impactSteps.map((step, idx) => {
                      const Icon = step.icon;
                      return (
                        <div
                          key={idx}
                          className="rounded-md bg-white/10 p-6 backdrop-blur-xl hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex flex-wrap items-start gap-6 md:flex-nowrap">
                            <div className="flex-shrink-0">
                              <Icon className="h-12 w-12 text-green-400" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-semibold text-white">
                                {step.title}
                              </h3>
                              <p className="mt-3 text-base text-gray-200">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Video Button */}
              <div className="flex items-center justify-center h-full">
                <button
                  className="relative flex h-32 w-32 items-center justify-center rounded-full  text-white ring-4 ring-green-400/30 hover:bg-green-600 transition-all duration-300"
                  data-hs-overlay="#watchvideomodal"
                >
                     <Image
                    src={logoDark}
                    alt="logo"
                    height={100}
                    width={150}
                    className="flex h-32 "
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

   
    </>
  );
};

export default ImpactSteps;
