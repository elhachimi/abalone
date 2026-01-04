import About from "@/components/home/About";
import ContactCTA from "@/components/home/ContactCTA";
import FeaturedVillas from "@/components/home/FeaturedVillas";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import { Villa } from "@workspace/database/";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function Page() {
  const { data } = useSWR("/api/villas", fetcher);
  const villas = data || [];
  return (
    <div>
      <Hero />
      <FeaturedVillas villas={villas} />
      <About />
      <Services />
      <ContactCTA />
    </div>
  );
}
