"use client";
import { motion } from "motion/react";
import { Waves, Sun, Mountain, Compass } from "lucide-react";
import Image from "next/legacy/image";

const features = [
  {
    icon: Waves,
    title: "Pristine Beaches",
    description:
      "Crystal-clear turquoise waters and powdery white sand beaches, perfect for surfing and relaxation.",
  },
  {
    icon: Sun,
    title: "Year-Round Sunshine",
    description:
      "Enjoy over 300 days of sunshine with tropical warmth and refreshing ocean breezes.",
  },
  {
    icon: Mountain,
    title: "Natural Beauty",
    description:
      "Dramatic landscapes with lush hills, waterfalls, and the majestic Mount Rinjani nearby.",
  },
  {
    icon: Compass,
    title: "Adventure Awaits",
    description:
      "World-class surfing, snorkeling, traditional villages, and hidden coves to explore.",
  },
];

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600"
                  alt="Lombok Beach"
                  className="rounded-2xl h-48 w-full object-cover"
                  width={600}
                  height={500}
                />
                <Image
                  src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600"
                  alt="Villa Pool"
                  className="rounded-2xl h-64 w-full object-cover"
                  width={600}
                  height={600}
                />
              </div>
              <div className="pt-8 space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600"
                  alt="Tropical Paradise"
                  className="rounded-2xl h-64 w-full object-cover"
                  width={600}
                  height={600}
                />
                <Image
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600"
                  alt="Beach Sunset"
                  className="rounded-2xl h-48 w-full object-cover"
                  width={600}
                  height={600}
                />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C17E61]/10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#8B9D83]/10 rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C17E61] font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Discover Kuta Lombok
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1A3A52] mb-6">
              Indonesia's Best{" "}
              <span className="font-semibold italic">Hidden Gem</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Kuta Lombok offers an unspoiled paradise unlike anywhere else in
              Indonesia. With its dramatic coastline, world-class surf breaks,
              and traditional Sasak culture, this emerging destination is
              perfect for those seeking luxury living in an authentic setting.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F5F0E8] rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#C17E61]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A3A52] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
