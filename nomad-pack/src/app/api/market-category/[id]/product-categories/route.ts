import {NextResponse } from "next/server";
import { getProductCategoriesByMarketCategoryId } from "@/lib/prisma/category";

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

    const productCategories = await getProductCategoriesByMarketCategoryId(marketCategoryId)
    return NextResponse.json(productCategories);
}
