import { NextRequest, NextResponse } from "next/server";
import { getProductById } from "@/lib/prisma/product";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const productId = parseInt(id, 10);

    if (isNaN(productId)) {
        return NextResponse.json(
            { error: `Product id: ${id}, is not a number. Expected a number.` },
            { status: 404 }
        );
    }

    const product = await getProductById(productId);
    return NextResponse.json(product);
}