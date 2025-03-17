import { NextResponse, NextRequest } from "next/server";
import { getAllProductsByProductCategoryId } from "@/lib/prisma/product";

export async function GET(
    request: NextRequest,
    { params } : { params: Promise<{id: string}> }
) {
    const { id } = await params;
    const productCategoryId = parseInt(id, 10);

    if (isNaN(productCategoryId)) {
        return NextResponse.json(
            { error: `Product category id: ${id}, is not a number. Expected a number.` },
            { status: 400 }
        );
    }

    const products = await getAllProductsByProductCategoryId(productCategoryId);
    return NextResponse.json(products);
}