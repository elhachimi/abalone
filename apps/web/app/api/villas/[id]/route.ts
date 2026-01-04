import { prisma } from "@workspace/database/client";
import { NextResponse } from "next/server";

type Params = Promise<{ id: string }>;
export async function GET(request: Request, context: { params: Params }) {
  const { id } = await context.params;
  const villaId = Number(id);

  if (Number.isNaN(villaId)) {
    return NextResponse.json({ error: "Invalid villa id" }, { status: 400 });
  }

  const villa = await prisma.villa.findUnique({
    where: { id: villaId },
  });

  if (!villa) {
    return NextResponse.json({ error: "Villa not found" }, { status: 404 });
  }

  return NextResponse.json(villa);
}
