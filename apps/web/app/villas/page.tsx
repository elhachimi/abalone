"use client";
import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Slider } from "@workspace/ui/components/slider";
import {
  Search,
  SlidersHorizontal,
  X,
  Bed,
  Bath,
  Grid3X3,
  List,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
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
const villas: Villa[] = [
  {
    id: "1",
    images: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200",
    ],
    title: "Seaside Retreat",
    is_featured: true,
    bathrooms: 2,
    location: "Santorini, Greece",
    short_description: "A beautiful villa overlooking the sea.",
    description:
      "Enjoy breathtaking sunsets and luxurious amenities in this seaside villa.",
    bedrooms: 3,
    listing_type: "rent",
    price_rent: 350,
    price_sale: 0,
    max_guests: 6,
  },
  {
    id: "2",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
    ],
    title: "Mountain Escape",
    is_featured: true,
    bathrooms: 1,
    location: "Aspen, Colorado",
    short_description: "Cozy mountain villa for winter getaways.",
    description:
      "Perfect for ski lovers, this villa offers comfort and stunning mountain views.",
    bedrooms: 2,
    listing_type: "rent",
    price_rent: 250,
    price_sale: 0,
    max_guests: 4,
  },
  {
    id: "3",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    ],
    title: "Urban Luxury",
    is_featured: true,
    bathrooms: 3,
    location: "Dubai, UAE",
    short_description: "Modern villa in the heart of the city.",
    description:
      "Experience luxury living with top-notch facilities and city views.",
    bedrooms: 4,
    listing_type: "sale",
    price_rent: 0,
    price_sale: 1200000,
    max_guests: 8,
  },
];
export default function Villas() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialType = urlParams.get("type") || "all";

  const [listingType, setListingType] = useState(initialType);
  const [searchQuery, setSearchQuery] = useState("");
  const [bedroomsFilter, setBedroomsFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  const isLoading = false;
  // Filter villas
  const filteredVillas = villas.filter((villa) => {
    // Listing type filter
    if (
      listingType === "rent" &&
      villa.listing_type !== "rent" &&
      villa.listing_type !== "both"
    )
      return false;
    if (
      listingType === "sale" &&
      villa.listing_type !== "sale" &&
      villa.listing_type !== "both"
    )
      return false;

    // Search filter
    if (
      searchQuery &&
      !villa.title?.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !villa.location?.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;

    // Bedrooms filter
    if (bedroomsFilter !== "all" && villa.bedrooms !== parseInt(bedroomsFilter))
      return false;

    // Price filter (for rentals)
    if (listingType === "rent" || listingType === "all") {
      if (
        villa.price_rent &&
        (villa.price_rent < priceRange[0] || villa.price_rent > priceRange[1])
      )
        return false;
    }

    return true;
  });

  const resetFilters = () => {
    setListingType("all");
    setSearchQuery("");
    setBedroomsFilter("all");
    setPriceRange([0, 5000]);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#1A3A52] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C17E61] font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Our Collection
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
              {listingType === "sale"
                ? "Villas for Sale"
                : listingType === "rent"
                  ? "Villas for Rent"
                  : "All Villas"}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of luxury villas in the pristine
              shores of Kuta Lombok
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search villas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full border-gray-200"
              />
            </div>

            {/* Type Tabs */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
              {["all", "rent", "sale"].map((type) => (
                <button
                  key={type}
                  onClick={() => setListingType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    listingType === type
                      ? "bg-[#1A3A52] text-white"
                      : "text-gray-600 hover:text-[#1A3A52]"
                  }`}
                >
                  {type === "all"
                    ? "All"
                    : type === "rent"
                      ? "For Rent"
                      : "For Sale"}
                </button>
              ))}
            </div>

            {/* Filter Button */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="rounded-full gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="py-4 flex flex-wrap items-end gap-6 border-t mt-4">
                  <div className="w-40">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Bedrooms
                    </label>
                    <Select
                      value={bedroomsFilter}
                      onValueChange={setBedroomsFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="1">1 Bedroom</SelectItem>
                        <SelectItem value="2">2 Bedrooms</SelectItem>
                        <SelectItem value="3">3 Bedrooms</SelectItem>
                        <SelectItem value="4">4 Bedrooms</SelectItem>
                        <SelectItem value="5">5+ Bedrooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="w-64">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Price Range (per night): ${priceRange[0]} - $
                      {priceRange[1]}
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={5000}
                      step={100}
                      className="w-full"
                    />
                  </div>

                  <Button
                    variant="ghost"
                    onClick={resetFilters}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Reset All
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-[#F5F0E8] min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              <span className="font-semibold text-[#1A3A52]">
                {filteredVillas.length}
              </span>{" "}
              villas found
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl h-96 animate-pulse"
                />
              ))}
            </div>
          ) : filteredVillas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVillas.map((villa, index) => (
                <VillaCard key={villa.id} villa={villa} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-4">
                No villas match your criteria.
              </p>
              <Button onClick={resetFilters} variant="outline">
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
