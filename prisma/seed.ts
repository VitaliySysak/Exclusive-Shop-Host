import { Prisma } from "@prisma/client";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  size,
  color,
  discountPercent,
  description,
}: {
  productId: number;
  size?: "S" | "M" | "L";
  color?: "red" | "blue" | "green";
  discountPercent?: number;
  description: string;
}) => {
  return {
    productId,
    price: randomNumber(100, 600),
    size,
    color,
    inStock: randomNumber(10, 100),
    discountPercent,
    description,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        token: "11111",
        fullName: "Test Admin",
        email: "user@gmail.com",
        password: hashSync("111111", 10),
        role: "USER",
      },
      {
        token: "11111",
        fullName: "Test User",
        email: "admin@@gmail.com",
        password: hashSync("111111", 10),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: [
      {
        name: "Category1",
      },
      {
        name: "Category2",
      },
      {
        name: "Category3",
      },
      {
        name: "Category4",
      },
      {
        name: "Category5",
      },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Bag",
        imageUrl: "/images/goods/bag.png",
        rating: 10,
        reviews: 100,
        categoryId: 2,
      },
      {
        name: "Chair",
        imageUrl: "/images/goods/chair.png",
        categoryId: 2,
        rating: 10,
        reviews: 100,
      },
      {
        name: "Coat",
        imageUrl: "/images/goods/coat.png",
        rating: 10,
        reviews: 100,
        categoryId: 2,
      },
      {
        name: "Cooler",
        imageUrl: "/images/goods/cooler.png",
        rating: 10,
        reviews: 100,
        categoryId: 3,
      },
      {
        name: "Gamepad",
        imageUrl: "/images/goods/gamepad.png",
        rating: 10,
        reviews: 100,
        categoryId: 3,
      },
      {
        name: "Keyboard",
        imageUrl: "/images/goods/keyboard.png",
        rating: 10,
        reviews: 100,
        categoryId: 3,
      },
      {
        name: "Main Gamepad",
        imageUrl: "/images/goods/main-gamepad.png",
        rating: 10,
        reviews: 100,
        categoryId: 3,
      },
      {
        name: "Monitor",
        imageUrl: "/images/goods/monitor.png",
        rating: 10,
        reviews: 100,
        categoryId: 4,
      },
      {
        name: "Shell",
        imageUrl: "/images/goods/shell.png",
        rating: 10,
        reviews: 100,
        categoryId: 4,
      },
    ],
  });

  const gamepad1 = await prisma.product.create({
    data: {
      name: "Gamepad view 1",
      imageUrl: "/images/goods/gamepad-view-1.png",
      rating: 10,
      reviews: 100,
      categoryId: 1,
    },
  });

  const gamepad2 = await prisma.product.create({
    data: {
      name: "Gamepad view 2",
      imageUrl: "/images/goods/gamepad-view-2.png",
      rating: 10,
      reviews: 100,
      categoryId: 1,
    },
  });

  const gamepad3 = await prisma.product.create({
    data: {
      name: "Gamepad view 3",
      imageUrl: "/images/goods/gamepad-view-3.png",
      rating: 10,
      reviews: 100,
      categoryId: 1,
    },
  });

  const gamepad4 = await prisma.product.create({
    data: {
      name: "Gamepad view 4",
      imageUrl: "/images/goods/gamepad-view-4.png",
      rating: 10,
      reviews: 100,
      categoryId: 1,
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Game Pad test1 variations"
      generateProductItem({ productId: gamepad1.id, color: "red", size: "S", description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad1.id, color: "green", size: "L", discountPercent: 0.7, description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad1.id, color: "blue", size: "M", discountPercent: 0.5, description: 'a;sdfioaogagd'}),

      // Game Pad test2 variations"
      generateProductItem({ productId: gamepad2.id, color: "red", size: "S", description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad2.id, color: "green", size: "L", discountPercent: 0.7, description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad2.id, color: "blue", size: "M", discountPercent: 0.5, description: 'a;sdfioaogagd'}),

      // Game Pad test3 variations"
      generateProductItem({ productId: gamepad3.id, color: "red", size: "S", description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad3.id, color: "green", size: "L", discountPercent: 0.7, description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad3.id, color: "blue", size: "M", discountPercent: 0.5, description: 'a;sdfioaogagd'}),
      // Game Pad test4 variations"
      generateProductItem({ productId: gamepad4.id, color: "red", size: "S", description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad4.id, color: "green", size: "L", discountPercent: 0.7, description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad4.id, color: "blue", size: "M", discountPercent: 0.5, description: 'a;sdfioaogagd'}),

      // Game Pad test3"
      generateProductItem({ productId: 1, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 2, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 3, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 4, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 5, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 6, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 7, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 8, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 9, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 10, description: 'a;sdfioaogagd' }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "22222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
