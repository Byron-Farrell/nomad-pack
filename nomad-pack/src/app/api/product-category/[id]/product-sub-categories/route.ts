import {NextResponse } from "next/server";
import { getProductSubCategoriesByProductCategoryId} from "@/lib/prisma/subCategory";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    const productCategoryId = parseInt(id, 10);

    if (isNaN(productCategoryId)) {
        return NextResponse.json(
            { error: `Product category id: ${productCategoryId}, is not a number. Expected a number.` },
            { status: 400 }
        );
    }

    const productSubCategories = await getProductSubCategoriesByProductCategoryId(productCategoryId)
    return NextResponse.json(productSubCategories);
}
