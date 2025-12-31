"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@workspace/ui/components/badge";
import { Calendar } from "@workspace/ui/components/calendar";
import { Textarea } from "@workspace/ui/components/textarea";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import {
  Bed,
  Bath,
  Users,
  MapPin,
  Ruler,
  ChevronLeft,
  ChevronRight,
  Check,
  Calendar as CalendarIcon,
  Phone,
  Mail,
  Heart,
  Share2,
  Wifi,
  Car,
  Waves,
  Coffee,
  Utensils,
  Wind,
  Tv,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { format } from "date-fns";
import { toast } from "sonner";

const amenityIcons: Record<string, React.ElementType> = {
  WiFi: Wifi,
  Parking: Car,
  Pool: Waves,
  Kitchen: Utensils,
  Coffee: Coffee,
  AC: Wind,
  TV: Tv,
  Cleaning: Sparkles,
};

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
  features: string[];
  amenities: string[];
  building_size: number;
  status: string;
};
const villa: Villa = {
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
  features: [],
  amenities: ["Wifi"],
  building_size: 250,
  status: "available",
};
export default function VillaDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const villaId = urlParams.get("id");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  //const { data: villa, isLoading } = useQuery({
  //  queryKey: ["villa", villaId],
  //  queryFn: async () => {
  //    const villas = await base44.entities.Villa.filter({ id: villaId });
  //    return villas[0];
  //  },
  //  enabled: !!villaId,
  //});

  const isLoading = false;
  //const createInquiry = useMutation({
  //  mutationFn: (data) => base44.entities.Inquiry.create(data),
  //  onSuccess: () => {
  //    toast.success("Inquiry sent successfully! We will get back to you soon.");
  //    setInquiryForm({ name: "", email: "", phone: "", message: "" });
  //    setCheckIn(null);
  //    setCheckOut(null);
  //  },
  //});

  const handleSubmitInquiry = () => {
    //e.preventDefault();
    //createInquiry.mutate({
    //  ...inquiryForm,
    //  villa_id: villaId,
    //  villa_title: villa?.title,
    //  inquiry_type: villa?.listing_type === "sale" ? "buy" : "rent",
    //  check_in: checkIn ? format(checkIn, "yyyy-MM-dd") : undefined,
    //  check_out: checkOut ? format(checkOut, "yyyy-MM-dd") : undefined,
    //});
  };

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#C17E61] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!villa) {
    return (
      <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#1A3A52] mb-4">
            Villa not found
          </h2>
          <Link href={"/Villas"}>
            <Button>Back to Villas</Button>
          </Link>
        </div>
      </div>
    );
  }

  const images =
    villa.images?.length > 0
      ? villa.images
      : ["https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200"];

  const nextImage = () => setCurrentImageIndex((i) => (i + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="pt-20 bg-white">
      {/* Image Gallery */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={villa.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
          {currentImageIndex + 1} / {images.length}
        </div>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
            {images.slice(0, 5).map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  i === currentImageIndex
                    ? "border-white scale-105"
                    : "border-transparent opacity-70"
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {(villa.listing_type === "sale" ||
                  villa.listing_type === "both") && (
                  <Badge className="bg-[#1A3A52] text-white">For Sale</Badge>
                )}
                {(villa.listing_type === "rent" ||
                  villa.listing_type === "both") && (
                  <Badge className="bg-[#C17E61] text-white">For Rent</Badge>
                )}
                {villa.status && villa.status !== "available" && (
                  <Badge variant="outline">{villa.status}</Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold text-[#1A3A52] mb-3">
                {villa.title}
              </h1>

              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-[#C17E61]" />
                <span>{villa.location || "Kuta, Lombok"}</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#F5F0E8] rounded-xl p-4 text-center">
                <Bed className="w-6 h-6 text-[#C17E61] mx-auto mb-2" />
                <p className="text-2xl font-semibold text-[#1A3A52]">
                  {villa.bedrooms || 0}
                </p>
                <p className="text-sm text-gray-500">Bedrooms</p>
              </div>
              <div className="bg-[#F5F0E8] rounded-xl p-4 text-center">
                <Bath className="w-6 h-6 text-[#C17E61] mx-auto mb-2" />
                <p className="text-2xl font-semibold text-[#1A3A52]">
                  {villa.bathrooms || 0}
                </p>
                <p className="text-sm text-gray-500">Bathrooms</p>
              </div>
              <div className="bg-[#F5F0E8] rounded-xl p-4 text-center">
                <Users className="w-6 h-6 text-[#C17E61] mx-auto mb-2" />
                <p className="text-2xl font-semibold text-[#1A3A52]">
                  {villa.max_guests || 0}
                </p>
                <p className="text-sm text-gray-500">Guests</p>
              </div>
              <div className="bg-[#F5F0E8] rounded-xl p-4 text-center">
                <Ruler className="w-6 h-6 text-[#C17E61] mx-auto mb-2" />
                <p className="text-2xl font-semibold text-[#1A3A52]">
                  {villa.building_size || 0}
                </p>
                <p className="text-sm text-gray-500">sqm</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-[#1A3A52] mb-4">
                About This Villa
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {villa.description ||
                  "A beautiful luxury villa in the heart of Kuta Lombok."}
              </p>
            </div>

            {/* Amenities */}
            {villa.amenities?.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#1A3A52] mb-4">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {villa.amenities.map((amenity, i) => {
                    const Icon = amenityIcons[amenity] || Check;
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#F5F0E8] rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#C17E61]" />
                        </div>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Features */}
            {villa.features?.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#1A3A52] mb-4">
                  Features
                </h2>
                <ul className="space-y-2">
                  {villa.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <Check className="w-5 h-5 text-[#8B9D83]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Price Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg mb-6">
                <div className="mb-6">
                  {villa.price_rent && (
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-[#1A3A52]">
                        ${villa.price_rent}
                      </span>
                      <span className="text-gray-500"> / night</span>
                    </div>
                  )}
                  {villa.price_sale && (
                    <div>
                      <span className="text-2xl font-semibold text-[#C17E61]">
                        ${villa.price_sale.toLocaleString()}
                      </span>
                      <span className="text-gray-500"> sale price</span>
                    </div>
                  )}
                </div>

                {/* Inquiry Form */}
                <form onSubmit={handleSubmitInquiry} className="space-y-4">
                  {(villa.listing_type === "rent" ||
                    villa.listing_type === "both") && (
                    <div className="grid grid-cols-2 gap-3">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkIn ? format(checkIn, "MMM d") : "Check-in"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                          />
                        </PopoverContent>
                      </Popover>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOut ? format(checkOut, "MMM d") : "Check-out"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  )}

                  <Input
                    placeholder="Your Name"
                    value={inquiryForm.name}
                    onChange={(e) =>
                      setInquiryForm({ ...inquiryForm, name: e.target.value })
                    }
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={inquiryForm.email}
                    onChange={(e) =>
                      setInquiryForm({ ...inquiryForm, email: e.target.value })
                    }
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={inquiryForm.phone}
                    onChange={(e) =>
                      setInquiryForm({ ...inquiryForm, phone: e.target.value })
                    }
                  />
                  <Textarea
                    placeholder="Your message..."
                    value={inquiryForm.message}
                    onChange={(e) =>
                      setInquiryForm({
                        ...inquiryForm,
                        message: e.target.value,
                      })
                    }
                    rows={4}
                    required
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#C17E61] hover:bg-[#a86a50] py-6 text-lg rounded-xl"
                    disabled={false}
                  >
                    {false ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-[#F5F0E8] rounded-2xl p-6">
                <h3 className="font-semibold text-[#1A3A52] mb-4">
                  Need Help?
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+6281234567890"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#C17E61]"
                  >
                    <Phone className="w-5 h-5" />
                    +62 812 3456 7890
                  </a>
                  <a
                    href="mailto:hello@lombokpearl.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#C17E61]"
                  >
                    <Mail className="w-5 h-5" />
                    hello@lombokpearl.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
