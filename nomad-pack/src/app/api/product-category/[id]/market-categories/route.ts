import {NextResponse } from "next/server";
import { getMarketCategoriesByProductCategoryId} from "@/lib/prisma/market";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    const productCategoryId = parseInt(id, 10);

    if (isNaN(productCategoryId)) {
        return NextResponse.json(
            { error: `Market category id: ${productCategoryId}, is not a number. Expected a number.` },
            { status: 400 }
        );
    }

    const marketCategories = await getMarketCategoriesByProductCategoryId(productCategoryId)
    return NextResponse.json(marketCategories);
}
