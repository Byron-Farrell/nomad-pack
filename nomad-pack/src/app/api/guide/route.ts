import { NextResponse } from "next/server";
import { getAllGuides } from "@/lib/prisma/guide";

export async function GET() {
    const guides = await getAllGuides();
    return NextResponse.json(guides);
}