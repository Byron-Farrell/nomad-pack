import { NextRequest, NextResponse } from "next/server";
import { getProductSubCategoryById } from "@/lib/prisma/subCategory";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const productSubCategoryId = parseInt(id, 10);

    if (isNaN(productSubCategoryId)) {
        return NextResponse.json(
            { error: `Product sub category id: ${id}, is not a number. Expected a number.` },
            { status: 404 }
        );
    }

    const productSubCategory = await getProductSubCategoryById(productSubCategoryId);
    return NextResponse.json(productSubCategory);
}