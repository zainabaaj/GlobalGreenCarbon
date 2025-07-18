import Image from "next/image";

import carbonCaptureImg from "@/assets/images/landing/field3.jpg";
import versatilityImg from "@/assets/images/landing/factory.jpg";
import scalingImg from "@/assets/images/landing/farm.jpg";

const sections = [
  {
    id: 1,
    title: "Rapid Carbon Capture",
    image: carbonCaptureImg,
    content: `
      Industrial hemp is one of nature’s fastest-growing plants, with the ability to complete multiple harvest cycles annually.
      This rapid growth enables hemp to absorb and sequester large quantities of atmospheric carbon dioxide (CO₂), making it a powerful
      ally in the fight against climate change. Unlike slower-growing trees or crops, hemp’s unique biology allows it to efficiently
      capture carbon while simultaneously improving soil health through its deep root systems. By cultivating hemp at scale, we can
      not only produce renewable raw materials but also actively reduce greenhouse gases and restore degraded ecosystems. This
      dual function — as both a carbon sink and a sustainable crop — positions hemp at the forefront of regenerative agriculture and
      climate resilience strategies worldwide.
    `,
  },
  {
    id: 2,
    title: "Versatile Applications Transforming Industries",
    image: versatilityImg,
    content: `
      Beyond carbon capture, hemp’s incredible versatility unlocks sustainable alternatives across multiple sectors.
      From biocoal that replaces fossil fuels in heavy industry, to hempcrete blocks that offer breathable, fire-resistant building
      materials, the possibilities are vast. Hemp bast fibres provide strong, natural textiles that reduce reliance on synthetic
      fabrics, while micronised hurd supports the creation of biodegradable plastics with a significantly lower environmental impact.
      Additionally, cold-pressed hemp seed oil offers nutrient-rich benefits for health, skincare, and wellness products. This
      multifunctionality allows industries to transition towards circular economies, where waste is minimized, and materials are
      renewable. Our commitment to innovation ensures every part of the hemp plant is optimized, turning what was once an overlooked
      crop into a cornerstone of sustainable development.
    `,
  },
  {
    id: 3,
    title: "Scaling Impact with Integrated Technology & Farms",
    image: scalingImg,
    content: `
      To meet the increasing global demand for sustainable products, it’s essential to scale hemp cultivation and processing responsibly.
      At Global Green Carbon, we combine advanced agricultural techniques, precision processing technologies, and strategic partnerships
      to deliver consistent, high-quality hemp materials at commercial volumes. Our integrated approach spans from seed to final product,
      ensuring transparency, quality control, and environmental stewardship at every step. This allows us to supply industries worldwide
      with reliable carbon-negative materials while maintaining a positive impact on local communities and ecosystems. By investing in
      scalable infrastructure and fostering innovation, we empower a regenerative future — one where economic growth and ecological balance
      go hand in hand.
    `,
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="bg-[#f9f5f0] dark:bg-gray-950 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <span className="inline-block rounded-md border border-green-600 bg-green-100 dark:bg-green-900/20 px-4 py-1 text-sm font-medium uppercase tracking-wider text-green-700 dark:text-green-400">
          Why Hemp?
        </span>
        <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white leading-tight max-w-3xl mx-auto mb-12">
          Hemp: Nature&apos;s Solution for a Sustainable Future
        </h2>

        {/* Sections */}
        {sections.map(({ id, title, image, content }) => (
          <div key={id} className="mb-20 max-w-4xl mx-auto text-center">
            <div className="relative w-full h-64 rounded-md overflow-hidden shadow-md mb-8">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <h3 className="text-3xl font-semibold text-green-800 dark:text-green-400 mb-6">{title}</h3>
            <p className="text-gray-700 text-center dark:text-gray-300 text-lg font-nunito leading-loose ">
              {content.trim()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
