import { NextResponse } from "next/server";
import { getAllProductSubCategories } from "@/lib/prisma/subCategory";

export async function GET() {
    const productCategories = await getAllProductSubCategories();
    return NextResponse.json(productCategories);
}