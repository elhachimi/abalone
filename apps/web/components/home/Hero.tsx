"use client";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/legacy/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920"
          alt="Lombok Beach"
          layout="fill"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#C17E61] font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Kuta Lombok, Indonesia
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight"
        >
          Find Your
          <span className="block font-semibold italic">Paradise Villa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto mb-10"
        >
          Exclusive beachfront villas for rent and sale in the pristine shores
          of Kuta Lombok
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <Button
              size="lg"
              className="bg-[#C17E61] hover:bg-[#a86a50] text-white px-8 py-6 text-lg rounded-full"
            >
              Explore Villas
            </Button>
          </Link>
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full bg-transparent"
            >
              Investment Properties
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/60 cursor-pointer"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <p className="text-3xl md:text-4xl font-bold">15+</p>
              <p className="text-white/70 text-sm">Luxury Villas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">100%</p>
              <p className="text-white/70 text-sm">Beachfront</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">5★</p>
              <p className="text-white/70 text-sm">Guest Rating</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">24/7</p>
              <p className="text-white/70 text-sm">Concierge</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
