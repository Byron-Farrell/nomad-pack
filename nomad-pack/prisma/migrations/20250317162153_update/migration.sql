/*
  Warnings:

  - You are about to drop the column `productCategory` on the `MarketProductCategory` table. All the data in the column will be lost.
  - Added the required column `productCategoryId` to the `MarketProductCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MarketProductCategory" DROP CONSTRAINT "MarketProductCategory_productCategory_fkey";

-- AlterTable
ALTER TABLE "MarketProductCategory" DROP COLUMN "productCategory",
ADD COLUMN     "productCategoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "price" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ProductSubCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productCategoryId" INTEGER NOT NULL,

    CONSTRAINT "ProductSubCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MarketProductCategory" ADD CONSTRAINT "MarketProductCategory_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSubCategory" ADD CONSTRAINT "ProductSubCategory_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
