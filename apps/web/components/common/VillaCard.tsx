"use client";
import Link from "next/link";
import { Badge } from "@workspace/ui/components/badge";
import { Villa } from "@workspace/database/";
import { Bed, Bath, Users, MapPin } from "lucide-react";

import { motion } from "motion/react";
import Image from "next/legacy/image";

export default function VillaCard({
  villa = {
    id: 0,
    images: [],
    title: "",
    is_featured: true,
    bathrooms: 0,
    location: "",
    short_description: "",
    description: "",
    bedrooms: 0,
    listing_type: "rent",
    price_rent: 0,
    price_sale: 0,
    max_guests: 0,
  },
  index = 0,
}: {
  villa?: Villa;
  index?: number;
}) {
  const mainImage =
    villa.images?.[0] ||
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={""} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
          {/* Image Container */}
          <div className="relative h-72 overflow-hidden">
            <Image
              src={mainImage}
              alt={villa.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              layout="fill"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {villa.listing_type === "sale" ||
              villa.listing_type === "both" ? (
                <Badge className="bg-[#1A3A52] text-white border-0 px-3 py-1">
                  For Sale
                </Badge>
              ) : null}
              {villa.listing_type === "rent" ||
              villa.listing_type === "both" ? (
                <Badge className="bg-[#C17E61] text-white border-0 px-3 py-1">
                  For Rent
                </Badge>
              ) : null}
            </div>

            {villa.is_featured && (
              <Badge className="absolute top-4 right-4 bg-white/90 text-[#1A3A52] border-0">
                Featured
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-2 text-[#8B9D83] text-sm mb-2">
              <MapPin className="w-4 h-4" />
              <span>{villa.location || "Kuta, Lombok"}</span>
            </div>

            <h3 className="text-xl font-semibold text-[#1A3A52] mb-3 group-hover:text-[#C17E61] transition-colors">
              {villa.title}
            </h3>

            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
              {villa.short_description || villa.description?.substring(0, 100)}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-[#C17E61]" />
                <span>{villa.bedrooms || 0} Beds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bath className="w-4 h-4 text-[#C17E61]" />
                <span>{villa.bathrooms || 0} Baths</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#C17E61]" />
                <span>{villa.max_guests || 0} Guests</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              {villa.price_rent && (
                <div>
                  <span className="text-2xl font-bold text-[#1A3A52]">
                    ${villa.price_rent}
                  </span>
                  <span className="text-gray-500 text-sm"> /night</span>
                </div>
              )}
              {villa.price_sale && (
                <div className={villa.price_rent ? "text-right" : ""}>
                  <span className="text-lg font-semibold text-[#C17E61]">
                    ${(villa.price_sale / 1000).toFixed(0)}K
                  </span>
                  <span className="text-gray-500 text-sm"> sale</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
