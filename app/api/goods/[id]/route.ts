import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const good = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });
  return NextResponse.json({
    good,
  });
}
