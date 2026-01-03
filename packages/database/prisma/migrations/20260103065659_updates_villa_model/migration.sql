/*
  Warnings:

  - Added the required column `bathrooms` to the `Villa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedrooms` to the `Villa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Villa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_featured` to the `Villa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listing_type` to the `Villa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Villa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_guests` to the `Villa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_rent` to the `Villa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_sale` to the `Villa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `short_description` to the `Villa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Villa" ADD COLUMN     "bathrooms" INTEGER NOT NULL,
ADD COLUMN     "bedrooms" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "is_featured" BOOLEAN NOT NULL,
ADD COLUMN     "listing_type" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "max_guests" INTEGER NOT NULL,
ADD COLUMN     "price_rent" INTEGER NOT NULL,
ADD COLUMN     "price_sale" INTEGER NOT NULL,
ADD COLUMN     "short_description" TEXT NOT NULL;
