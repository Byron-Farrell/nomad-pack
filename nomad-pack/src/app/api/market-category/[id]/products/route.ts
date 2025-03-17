import {NextResponse } from "next/server";
import { getAllProductsByMarketId } from "@/lib/prisma/product";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    const marketCategoryId = parseInt(id, 10);

    if (isNaN(marketCategoryId)) {
        return NextResponse.json(
            { error: `Market category id: ${marketCategoryId}, is not a number. Expected a number.` },
            { status: 400 }
        );
    }

    const products = await getAllProductsByMarketId(marketCategoryId)
    return NextResponse.json(products);
}
