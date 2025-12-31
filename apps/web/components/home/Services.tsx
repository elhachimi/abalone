"use client";
import { motion } from "motion/react";
import { Home, Key, Briefcase, Headphones } from "lucide-react";

const services = [
  {
    icon: Key,
    title: "Villa Rentals",
    description:
      "Short and long-term luxury villa rentals with full concierge services and personalized experiences.",
  },
  {
    icon: Home,
    title: "Property Sales",
    description:
      "Exclusive investment properties and freehold opportunities in prime beachfront locations.",
  },
  {
    icon: Briefcase,
    title: "Property Management",
    description:
      "Complete villa management services including maintenance, staffing, and rental optimization.",
  },
  {
    icon: Headphones,
    title: "Concierge Services",
    description:
      "24/7 dedicated support for all your needs, from airport transfers to private experiences.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#1A3A52] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C17E61] font-medium tracking-[0.2em] uppercase text-sm mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Our <span className="font-semibold italic">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-[#C17E61] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
