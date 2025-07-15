'use client'
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
    description: `Global Green Carbon’s biocoal is produced via cutting-edge pyrolysis technology,
converting industrial hemp into a powerful, plant-based renewable fuel. Unlike fossil coal,
it contains no sulfur or heavy metals, and is 100% sustainable, with new hemp harvests
possible every 100 days. Applications include steel furnaces, industrial boilers, and thermal energy systems.`,
    image: hemp1,
  },
  {
    id: 2,
    name: "Biochar",
    shortDesc: "Permanent carbon removal + soil and industrial innovation.",
    description: `Our biochar is a stable, carbon-rich material created from hemp biomass and verified under Puro.earth CORCs,
locking atmospheric CO₂ for centuries while enhancing soil health and concrete durability.
It improves water retention, prevents erosion, boosts crop yields, and integrates carbon removal into infrastructure.`,
    image: hemp2,
  },
  {
    id: 3,
    name: "Fibre for Textiles",
    shortDesc: "Strong, sustainable, and uncompromising in quality.",
    description: `Our bast fibre is processed immediately after harvest preserving 98% of natural quality,
delivering ultra-clean fibre ideal for fashion, interiors, automotive, and industrial non-wovens.
It retains tensile strength and flexibility with high scalability.`,
    image: hemp3,
  },
  {
    id: 4,
    name: "Hurd for Bioplastics",
    shortDesc: "High-cellulose feedstock for sustainable plastics.",
    description: `Our hemp hurd is micronised to preserve 100% material integrity, ideal for biodegradable plastic blends.
Consistent sizing and quality make it perfect for packaging, trays, utensils, and moldables without chemical treatment.`,
    image: hemp4,
  },
  {
    id: 5,
    name: "Hurd for Hempcrete Blocks",
    shortDesc: "Thermal mass, fire safety, and natural comfort.",
    description: `Processed hemp hurd combined with lime-based binders to create lightweight, breathable, and fire-resistant hempcrete blocks.
Naturally pest-resistant and energy efficient, reducing HVAC costs and improving indoor comfort.`,
    image: hemp5,
  },
  {
    id: 6,
    name: "Hemp Seed Oil",
    shortDesc: "Nutrient-rich oil for health, skincare, and wellness.",
    description: `Cold-pressed hemp seed oil, rich in omega-3 and omega-6 fatty acids, ideal for food, supplements, and cosmetics.
Produced from certified farms, offering clean label and sustainability credentials.`,
    image: hemp6,
  },
];

export default function Products() {

  const [activeId, setActiveId] = useState(null);

  const toggleDescription = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };
  return (
    <section
      id="products"
      className="py-10 lg:py-20 bg-[#f9f5f0] dark:bg-gray-950"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-center">
          <div className="max-w-2xl text-center">
            <span className="rounded-md border border-green-600 bg-green-100 dark:bg-green-900/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-700 dark:text-green-400">
              Our Products
            </span>
            <h2 className="mt-4 text-4xl font-medium capitalize text-gray-900 dark:text-white">
              Explore Our Sustainable Hemp Innovations
            </h2>
          </div>
        </div>

        {/* Grid with 2 columns and left big image, right two stacked smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left big image */}
          <div>
            <div
              onClick={() => toggleDescription(products[0].id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleDescription(products[0].id);
              }}
              className="group relative cursor-pointer"
            >
              <Image
                src={products[0].image}
                alt={products[0].name}
                className="rounded-xl w-full h-[450px] object-cover"
              />
              <div className="absolute inset-x-2 bottom-2 rounded-md bg-white/10 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100">
                <div className="p-6 text-center">
                  <h2 className="text-3xl font-medium text-white">{products[0].name}</h2>
                  <p className="mt-2 text-base text-white">{products[0].shortDesc}</p>
                </div>
              </div>
            </div>
            {/* Description below big image */}
            {activeId === products[0].id && (
              <div className="mt-4 rounded-lg bg-white dark:bg-gray-800 p-5 text-gray-900 dark:text-gray-300 shadow-md transition-all">
                {products[0].description}
              </div>
            )}
          </div>

          {/* Right column with 2 stacked smaller images */}
          <div className="flex flex-col gap-6">
            {[products[1], products[2]].map((product) => (
              <div key={product.id}>
                <div
                  onClick={() => toggleDescription(product.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggleDescription(product.id);
                  }}
                  className="group relative cursor-pointer"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="rounded-xl w-full h-[210px] object-cover"
                  />
                  <div className="absolute inset-x-2 bottom-2 rounded-md bg-white/10 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100">
                    <div className="p-6 text-center">
                      <h2 className="text-2xl font-medium text-white">{product.name}</h2>
                      <p className="mt-2 text-base text-white">{product.shortDesc}</p>
                    </div>
                  </div>
                </div>
                {/* Description below each small image */}
                {activeId === product.id && (
                  <div className="mt-4 rounded-lg bg-white dark:bg-gray-800 p-5 text-gray-900 dark:text-gray-300 shadow-md transition-all">
                    {product.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Now render the remaining products in pairs of 3 columns or 1 column on small */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[products[3], products[4], products[5]].map((product) => (
            <div key={product.id}>
              <div
                onClick={() => toggleDescription(product.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleDescription(product.id);
                }}
                className="group relative cursor-pointer"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="rounded-xl w-full h-48 object-cover"
                />
                <div className="absolute inset-x-2 bottom-2 rounded-md bg-white/10 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100">
                  <div className="p-6 text-center">
                    <h2 className="text-2xl font-medium text-white">{product.name}</h2>
                    <p className="mt-2 text-base text-white">{product.shortDesc}</p>
                  </div>
                </div>
              </div>
              {/* Description below each product */}
              {activeId === product.id && (
                <div className="mt-4 rounded-lg bg-white dark:bg-gray-800 p-5 text-gray-900 dark:text-gray-300 shadow-md transition-all">
                  {product.description}
                </div>
              )}
            </div>
          ))}
        </div>
         {/* Technology in Action - Video */}
         <div className="my-20 text-center">
          <h3 className="text-3xl font-semibold text-green-800 dark:text-green-400 mb-6">
            Technology in Action: Block Press Machine
          </h3>
          <p className="max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300 text-lg">
            Witness our advanced press machine producing high-quality, carbon-negative hempcrete blocks. This state-of-the-art equipment ensures consistency, durability, and sustainability in every block we create.
          </p>
          <div className="mx-auto max-w-4xl rounded-md overflow-hidden shadow-lg">
            <video
              src="/videos/ggcblock.mp4"
              controls
              loop
              muted
              autoPlay
              playsInline
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
