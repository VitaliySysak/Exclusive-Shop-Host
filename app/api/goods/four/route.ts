import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const goods = await prisma.product.findMany({
    take: 4,
  });
  return NextResponse.json({
    goods,
  });
}
