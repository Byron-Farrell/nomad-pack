import { NextRequest, NextResponse } from "next/server";
import { getProductCategoryById } from "@/lib/prisma/category";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const productCategoryId = parseInt(id, 10);

    if (isNaN(productCategoryId)) {
        return NextResponse.json(
            { error: `Product category id: ${id}, is not a number. Expected a number.` },
            { status: 404 }
        );
    }

    const productCategory = await getProductCategoryById(productCategoryId);
    return NextResponse.json(productCategory);
}