"use client";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/legacy/image";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C17E61] font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1A3A52] mb-6">
              Ready to Find Your{" "}
              <span className="font-semibold italic">Dream Villa?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Whether you're looking for a vacation rental or an investment
              property, our team is here to help you discover the perfect villa
              in Kuta Lombok.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5 text-[#C17E61]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-semibold text-[#1A3A52]">
                    +62 812 3456 7890
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5 text-[#C17E61]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-semibold text-[#1A3A52]">
                    hello@lombokpearl.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-[#C17E61]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-[#1A3A52]">
                    Kuta, Lombok Tengah, NTB, Indonesia
                  </p>
                </div>
              </div>
            </div>

            <Link href="/">
              <Button
                size="lg"
                className="bg-[#C17E61] hover:bg-[#a86a50] text-white px-8 py-6 text-lg rounded-full"
              >
                Send Us a Message
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800"
              alt="Luxury Villa Interior"
              className="rounded-2xl shadow-2xl"
              width="800"
              height="600"
            />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs hidden md:block">
              <p className="text-[#C17E61] font-bold text-3xl mb-1">10+</p>
              <p className="text-gray-600">
                Years of experience in Lombok real estate
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
