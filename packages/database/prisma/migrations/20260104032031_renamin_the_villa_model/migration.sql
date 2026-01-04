/*
  Warnings:

  - You are about to drop the `Villa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Villa";

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "is_featured" BOOLEAN NOT NULL,
    "listing_type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "max_guests" INTEGER NOT NULL,
    "price_rent" INTEGER NOT NULL,
    "price_sale" INTEGER NOT NULL,
    "short_description" TEXT NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);
