import { prismaClient } from "@/lib/prisma/client";

export function getAllProductSubCategories() {
    return prismaClient.productSubCategory.findMany();
}

export function getProductSubCategoryById(id: number) {
    return prismaClient.productSubCategory.findUnique({
        where: { id: id }
    })
}

export function getProductSubCategoriesByProductCategoryId(id: number) {
    return prismaClient.productSubCategory.findMany({
        where: {
            productCategoryId: id
        }
    });
}