import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import hemp1 from "@/assets/images/landing/hempbales.webp";
import hemp4 from "@/assets/images/landing/hempharvest.jpg";
// import pressMachineVideo from "@/assets/images/landing/ggcblock.mp4";

const About = () => {
  return (
    <section id="about" className="bg-[#f9f5f0] dark:bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-md border border-green-600 bg-green-100 dark:bg-green-900/20 px-4 py-1 text-sm font-medium uppercase tracking-wider text-green-700 dark:text-green-400">
            About Us
          </span>
          <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Building a Carbon-Negative Future with Hemp Innovation
          </h2>
          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300 font-nunito leading-relaxed">
            Global Green Carbon is a sustainability-driven company pioneering advancements in
            renewable, carbon-negative materials. Through industrial hemp, we develop scalable
            solutions for energy, climate resilience, and global environmental regeneration.
          </p>
        </div>

        {/* Image + Story Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div className="relative w-full h-96 rounded-md overflow-hidden shadow-md">
            <Image
              src={hemp1}
              alt="Hemp Field"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-nunito leading-relaxed">
              We aim to lead the global transition toward carbon-negative industries using regenerative
              hemp ecosystems. Our work aligns environmental responsibility with commercial scale —
              offering sustainable alternatives for energy, materials, and wellness, while capturing and
              storing atmospheric CO₂.
            </p>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-4">What Drives Us</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-nunito leading-relaxed ">
              At Global Green Carbon, we believe that sustainability must scale — and fast. Our farms,
              technologies, and teams are built to meet real-world demand while restoring the planet’s
              natural balance. Every initiative is guided by circularity, transparency, and global
              collaboration.
            </p>
          </div>
          <div className="relative w-full h-96 rounded-md overflow-hidden shadow-md">
            <Image
              src={hemp4}
              alt="Industrial Hemp"
              fill
              className="object-cover"
            />
          </div>
        </div>

       


        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-green-600 px-8 py-3 text-green-800 dark:text-green-300 font-medium hover:bg-green-600 hover:text-white transition-all"
          >
            Contact Us
            <LuArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
