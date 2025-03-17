import { prismaClient } from "@/lib/prisma/client";

export function getAllGuides() {
    return prismaClient.guide.findMany();
}

export function getGuideById(id: number) {
    return prismaClient.guide.findUnique({
        where: {
            id: id
        }
    })
}