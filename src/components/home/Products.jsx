"use client";
import { useState } from "react";
import Image from "next/image";

import hemp1 from "@/assets/images/landing/biocoal.jpg";
import hemp2 from "@/assets/images/landing/biochar.jpg";
import hemp3 from "@/assets/images/landing/fiber.jpg";
import hemp4 from "@/assets/images/landing/hurd.jpg";
import hemp5 from "@/assets/images/landing/hempcrete.png";
import hemp6 from "@/assets/images/landing/seedoil.jpg";

const products = [
  {
    id: 1,
    name: "Biocoal",
    shortDesc: "High-energy renewable carbon for industry.",
    description: `Produced via cutting-edge pyrolysis technology, our biocoal turns hemp into powerful, clean-burning fuel — free from sulfur, heavy metals, and fossil emissions. Perfect for steel, boilers, and industrial energy systems.`,
    image: hemp1,
  },
  {
    id: 2,
    name: "Biochar",
    shortDesc: "Permanent carbon removal + soil and industrial innovation.",
    description: `Biochar locks away CO₂ for centuries while improving soil health, crop resilience, and even concrete performance. Certified by Puro.earth, it’s a climate-positive tool for agriculture and industry.`,
    image: hemp2,
  },
  {
    id: 3,
    name: "Fibre for Textiles",
    shortDesc: "Strong, sustainable, and uncompromising in quality.",
    description: `Our bast fibre is ultra-clean, retting-free, and high-tensile — making it ideal for fashion, automotive, interiors, and non-wovens. Harvested and processed with speed and precision.`,
    image: hemp3,
  },
  {
    id: 4,
    name: "Hurd for Bioplastics",
    shortDesc: "High-cellulose feedstock for sustainable plastics.",
    description: `Our micronized hurd maintains full material integrity and uniform sizing, ideal for biodegradable packaging, utensils, trays, and molded forms — with no chemical treatment required.`,
    image: hemp4,
  },
  {
    id: 5,
    name: "Hurd for Hempcrete Blocks",
    shortDesc: "Thermal mass, fire safety, and natural comfort.",
    description: `Hemp hurd and lime form hempcrete — a breathable, pest-resistant, fire-safe, and insulating building material. Reduces HVAC loads and improves comfort in construction.`,
    image: hemp5,
  },
  {
    id: 6,
    name: "Hemp Seed Oil",
    shortDesc: "Nutrient-rich oil for health, skincare, and wellness.",
    description: `Cold-pressed and nutrient-dense, our hemp seed oil is packed with omega-3s and 6s. Perfect for food, supplements, and cosmetics — with hemp cake and hulls available for secondary uses.`,
    image: hemp6,
  },
];

export default function Products() {
  return (
    <section id="Products" className="bg-[#f9f5f0] dark:bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-md border border-green-600 bg-green-100 dark:bg-green-900/20 px-4 py-1 text-sm font-medium uppercase tracking-wider text-green-700 dark:text-green-400">
            Our Products
          </span>
          <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Explore Our Hemp-Based Solutions
          </h2>
          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            From energy and agriculture to construction and wellness — our industrial hemp innovations are reshaping industries with sustainable, carbon-negative alternatives.
          </p>
        </div>

        {/* Alternating Image/Text Blocks */}
        {products.map((product, idx) => (
          <div
            key={product.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`relative w-full h-96 rounded-md overflow-hidden shadow-md order-1 ${
                idx % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className={`order-2 ${idx % 2 !== 0 ? "md:order-1" : ""}`}>
              <h3 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-3">
                {product.name}
              </h3>
              <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-2">
                {product.shortDesc}
              </p>
              <p className="text-lg font-poppins font-extralight text-gray-700 dark:text-gray-300 leading-loose">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
