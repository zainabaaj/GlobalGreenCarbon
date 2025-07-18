import hemp from "@/assets/images/landing/hero.jpg";
import { LuMoveRight } from "react-icons/lu";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="">
        <div
          className="overflow-hidden  bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hemp.src})` }}
        >
          <div className=" bg-black/60">
            <div className="container">
              <div className="relative p-6">
                <div className="flex h-full items-center justify-center py-36">
                  <div className="relative mx-auto max-w-3xl text-center">
                    <span  className="rounded-md bg-white/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-white">
                  <Link href="#Products">
                  Explore Our Solutions
                  </Link>
                    </span>
                    <h1 className="mt-10 text-4xl font-medium text-white md:text-5xl/snug ${openSans.className}">
                    EMPOWERING THE PLANET WITH INDUSTRIAL HEMP
                    </h1>
                    <p className="mx-auto mt-5 w-3/4 text-xl text-white/80">
                      Revolutionizing sustainability with industrial hemp – renewable, regenerative, and ready for a better tomorrow.
                    </p>
                    <div className="mt-10 flex justify-center">
                      <Link
                        href="#Contact Us"
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-2 text-base text-white transition-all duration-300 hover:bg-primary-700"
                      >
                        Get in Touch
                        <LuMoveRight className="h-6 w-6" />
                      </Link>
                    </div>
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

export default Hero;
