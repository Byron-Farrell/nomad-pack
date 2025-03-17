import { NextResponse, NextRequest } from "next/server";
import { getGuideById } from "@/lib/prisma/guide";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{id: string}> }
) {
    const { id } = await params;
    const guideId = parseInt(id, 10);

    if (isNaN(guideId)) {
        return NextResponse.json(
            { error: `Guide id: ${guideId}, is not a number. expected a number.` },
        )
    }

    const guide = await getGuideById(guideId);
    return NextResponse.json(guide);
}