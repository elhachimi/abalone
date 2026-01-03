import { prisma } from "../src";

async function main() {
  await prisma.villa.createMany({
    data: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
