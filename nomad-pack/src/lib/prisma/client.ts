import { PrismaClient } from '@prisma/client';


// Using typescript type assertion to explicitly add prismaClient variable to globals
// to ensure the prismaClient persists in development during hot reloads.
const globalPrisma = global as unknown as { prisma?: PrismaClient };

export const prismaClient = globalPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalPrisma.prisma = prismaClient;