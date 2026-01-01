"use client";
import { useState } from "react";
import { Textarea } from "@workspace/ui/components/textarea";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Image from "next/legacy/image";
import { motion } from "motion/react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry_type: "general",
    message: "",
  });

  const createInquiry = (e: React.FormEvent<HTMLFormElement>) => {};
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createInquiry(e);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#1A3A52] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1920"
            width={800}
            height={600}
            alt="Contact"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C17E61] font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
              Contact <span className="font-semibold italic">Us</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Whether you're looking to rent, buy, or invest, we're here to help
              you find your perfect villa in Kuta Lombok
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold text-[#1A3A52] mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-600 mb-8">
                Our dedicated team is available to assist you with villa
                rentals, property purchases, and investment opportunities in
                Kuta Lombok. Reach out to us anytime.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#F5F0E8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#C17E61]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A3A52] mb-1">
                      Our Location
                    </h3>
                    <p className="text-gray-600">
                      Kuta Beach Road, Kuta
                      <br />
                      Lombok Tengah, NTB 83573
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#F5F0E8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#C17E61]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A3A52] mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +62 812 3456 7890
                      <br />
                      +62 813 8765 4321 (WhatsApp)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#F5F0E8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#C17E61]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A3A52] mb-1">Email</h3>
                    <p className="text-gray-600">
                      hello@lombokpearl.com
                      <br />
                      reservations@lombokpearl.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#F5F0E8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#C17E61]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A3A52] mb-1">
                      Office Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden h-64 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800"
                  alt="Kuta Lombok Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#F5F0E8] rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-semibold text-[#1A3A52] mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="bg-white border-0 py-6"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="bg-white border-0 py-6"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="+62 xxx xxxx xxxx"
                        className="bg-white border-0 py-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <Select
                      value={form.inquiry_type}
                      onValueChange={(value) =>
                        setForm({ ...form, inquiry_type: value })
                      }
                    >
                      <SelectTrigger className="bg-white border-0 py-6 w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="rent">Villa Rental</SelectItem>
                        <SelectItem value="buy">Property Purchase</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell us about what you're looking for..."
                      className="bg-white border-0 min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#C17E61] hover:bg-[#a86a50] py-6 text-lg rounded-xl gap-2"
                    disabled={false}
                  >
                    {false ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
