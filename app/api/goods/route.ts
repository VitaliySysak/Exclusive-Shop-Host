import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const goods = await prisma.product.findMany();
  return NextResponse.json({
    goods,
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const good = await prisma.product.create({
    data
  });

  return NextResponse.json(good)
}