import { prismaClient } from '@/lib/prisma/client';

export function getAllMarketCategories() {
    return prismaClient.marketCategory.findMany();
}

export function getMarketCategoryById(id: number) {
    return prismaClient.marketCategory.findUnique({
        where: {
            id: id
        }
    })
}

export function getMarketCategoriesByProductCategoryId(id: number) {
    return prismaClient.marketCategory.findMany({
        where: {
            marketProductCategory: {
                some: { productCategoryId: id }
            }
        }
    });
}