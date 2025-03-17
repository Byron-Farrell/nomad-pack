import { prismaClient } from '@/lib/prisma/client';

export function getAllProducts() {
    return prismaClient.product.findMany();
}

export function getProductById(id: number) {
    return prismaClient.product.findUnique({
        where: { id: id }
    })
}

export function getAllProductsByMarketId(marketCategoryId: number) {
    return prismaClient.product.findMany({
        where: {
            category: {
                marketProductCategory: {
                    some: {
                        marketCategoryId: marketCategoryId
                    }
                }
            }
        }
    });
}

export function getAllProductsByProductCategoryId(productCategoryId: number) {
    return prismaClient.product.findMany({
        where: {
            category: {
                id: productCategoryId
            }
        }
    });
}

