import { prismaClient } from "@/lib/prisma/client";

export function getAllProductCategories() {
    return prismaClient.productCategory.findMany();
}

export function getProductCategoryById(id: number) {
    return prismaClient.productCategory.findUnique({
        where: { id: id }
    })
}

export function getProductCategoriesByMarketCategoryId(id: number) {
    return prismaClient.productCategory.findMany({
        where: {
            marketProductCategory: {
                some: { marketCategoryId: id }
            }
        }
    });
}