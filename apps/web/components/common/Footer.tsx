import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A3A52] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Lombok <span className="text-[#C17E61]">Pearl</span>
            </h3>
            <p className="text-white/60 mb-6">
              Discover luxury living in Indonesia's most beautiful hidden
              paradise.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C17E61] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C17E61] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={"/"}
                  className="text-white/60 hover:text-[#C17E61] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"Villas"}
                  className="text-white/60 hover:text-[#C17E61] transition-colors"
                >
                  All Villas
                </Link>
              </li>
              <li>
                <Link
                  href={"Villas?type=rent"}
                  className="text-white/60 hover:text-[#C17E61] transition-colors"
                >
                  Rentals
                </Link>
              </li>
              <li>
                <Link
                  href={"Villas?type=sale"}
                  className="text-white/60 hover:text-[#C17E61] transition-colors"
                >
                  For Sale
                </Link>
              </li>
              <li>
                <Link
                  href={"Contact"}
                  className="text-white/60 hover:text-[#C17E61] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-white/60">
              <li>Villa Rentals</li>
              <li>Property Sales</li>
              <li>Property Management</li>
              <li>Investment Consulting</li>
              <li>Concierge Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C17E61] flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  Kuta, Lombok Tengah
                  <br />
                  NTB 83573, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C17E61]" />
                <span className="text-white/60">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C17E61]" />
                <span className="text-white/60">hello@lombokpearl.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Lombok Pearl. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
