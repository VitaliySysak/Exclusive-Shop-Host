import { RiHeartLine, RiEyeLine } from "@remixicon/react";
import Image from "next/image"

interface Product {
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const maxStars = 5;

  return (
    <div className="flex flex-col gap-y-2 w-full">
      <figure className="relative flex justify-center items-center w-full h-[300px] bg-[#F5F5F5]">
        <Image src={product.imageUrl} alt={product.name} width={300} height={300} />
        <div className="absolute top-2 right-2 bg-white rounded-full p-1">
          <RiHeartLine />
        </div>
        <div className="absolute top-12 right-2 bg-white rounded-full p-1">
          <RiEyeLine />
        </div>
      </figure>
      <figcaption className="flex flex-col gap-y-1">
        <span className="text-[20px] font-semibold">{product.name}</span>
        <div className="flex flex-row items-center gap-x-2">
          <span className="text-[#DB4444] font-semibold">240$</span>
          <span className="text-[#808080] font-semibold line-through text-[14px]">
            500$
          </span>
        </div>
        <div className="flex items-center">
          {[...Array(maxStars)].map((_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 me-1 ${
                index < product.rating ? "text-[#FFAD33]" : "text-[#BFBFBF]"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <span className="text-[#808080] font-semibold text-[15px] ms-2">
            ({product.reviews})
          </span>
        </div>
      </figcaption>
    </div>
  );
}
