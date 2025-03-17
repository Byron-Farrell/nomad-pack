import { NextResponse } from "next/server";
import { getAllMarketCategories } from "@/lib/prisma/market";

export async function GET() {
    const marketCategories = await getAllMarketCategories();
    return NextResponse.json(marketCategories);
}