import hemp from "@/assets/images/landing/hempharv2.jpg";
import { LuMoveRight } from "react-icons/lu";
import Link from "next/link";

const HeroAbout = () => {
  return (
    <section id="solutions" className="relative overflow-hidden">
      <div>
        <div
          className="overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hemp.src})` }}
        >
          <div className="bg-black/60">
            <div className="container">
              <div className="relative p-6">
                <div className="flex h-full items-center justify-center py-36">
                  <div className="relative mx-auto max-w-3xl text-center">
                    
                    <h1 className="mt-10 text-4xl font-medium text-white md:text-5xl/snug">
                      From Hemp to a Carbon-Negative Future
                    </h1>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
