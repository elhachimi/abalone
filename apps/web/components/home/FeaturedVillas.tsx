"use client";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import VillaCard from "@/components/common/VillaCard";

type Villa = {
  id: string;
  images: string[];
  title: string;
  is_featured: boolean;
  bathrooms: number;
  location: string;
  short_description: string;
  description: string;
  bedrooms: number;
  listing_type: "rent" | "sale" | "both";
  price_rent: number;
  price_sale: number;
  max_guests: number;
};

export default function FeaturedVillas({ villas }: { villas: Villa[] }) {
  const featuredVillas =
    villas?.filter((v) => v.is_featured)?.slice(0, 3) ||
    villas?.slice(0, 3) ||
    [];

  return (
    <section className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C17E61] font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Curated Selection
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1A3A52]">
              Featured <span className="font-semibold italic">Villas</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <Button
                variant="ghost"
                className="text-[#1A3A52] hover:text-[#C17E61] group mt-4 md:mt-0"
              >
                View All Properties
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Villas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVillas.map((villa, index) => (
            <VillaCard key={villa.id} villa={villa} index={index} />
          ))}
        </div>

        {featuredVillas.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No featured villas available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
