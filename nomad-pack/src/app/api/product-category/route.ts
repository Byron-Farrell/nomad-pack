import { NextResponse } from "next/server";
import { getAllProductCategories } from "@/lib/prisma/category";

export async function GET() {
    const productCategories = await getAllProductCategories();
    return NextResponse.json(productCategories);
}