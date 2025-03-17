import { NextRequest, NextResponse } from "next/server";
import { getMarketCategoryById } from "@/lib/prisma/market";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const marketCategoryById = parseInt(id, 10);

    if (isNaN(marketCategoryById)) {
        return NextResponse.json(
            { error: `Market category id: ${id}, is not a number. Expected a number.` },
            { status: 404 }
        );
    }

    const marketCategory = await getMarketCategoryById(marketCategoryById);
    return NextResponse.json(marketCategory);
}