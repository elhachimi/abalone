import { prisma } from "@workspace/database/client";
import { NextResponse } from "next/server";

export async function GET() {
  const villas = await prisma.villa.findMany();
  return NextResponse.json(villas);
}
