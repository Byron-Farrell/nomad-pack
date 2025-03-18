import { prismaClient } from "./../src/lib/prisma/client";
import MarketCategoryData from './seed_data/marketCategory.json';
import ProductCategoryData from './seed_data/ProductCategory.json';
import MarketProductCategoryData from './seed_data/MarketProductCategory.json';
import ProductData from './seed_data/product.json';
import GuideData from './seed_data/guide.json';
import ProductSubCategoryData from './seed_data/productSubCategory.json';

async function seed() {
    try {
        console.log("Seeding database...");

        await prismaClient.marketCategory.createMany({
            data: MarketCategoryData
        });

        await prismaClient.productCategory.createMany({
            data: ProductCategoryData
        });

        await prismaClient.marketProductCategory.createMany({
            data: MarketProductCategoryData
        });

        await prismaClient.product.createMany({
            data: ProductData
        });

        await prismaClient.guide.createMany({
            data: GuideData
        });

        await prismaClient.productSubCategory.createMany({
            data: ProductSubCategoryData
        });

        console.log("Seeding completed successfully.");
    } catch (error) {
        console.error("Seeding failed:", error);
    } finally {
        await prismaClient.$disconnect();
    }
}

// Run the seed function
seed();