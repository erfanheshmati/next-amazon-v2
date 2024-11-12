import { Product } from "@/lib/models/ProductModel";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden flex bg-base-300 rounded-xl shadow-xl my-2 max-h-52">
        <figure className="w-2/5">
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover h-full rounded-l-xl"
            />
          </Link>
        </figure>
        <div className="w-3/5 flex flex-col p-4 gap-2">
          <Link href={`/product/${product.slug}`}>
            <h2 className="card-title font-normal">{product.name}</h2>
          </Link>
          <p className="mb-2">{product.brand}</p>
          <div className="card-actions flex items-center justify-between">
            <span className="text-xl">${product.price}</span>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block card bg-base-300 shadow-xl my-2">
        <figure>
          <Link href={`/product/${product.slug}`} className="w-full">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover h-74 w-full"
            />
          </Link>
        </figure>
        <div className="card-body">
          <Link href={`/product/${product.slug}`}>
            <h2 className="card-title font-normal">{product.name}</h2>
          </Link>
          <p className="mb-2">{product.brand}</p>
          <div className="card-actions flex items-center justify-between">
            <span className="text-2xl">${product.price}</span>
          </div>
        </div>
      </div>
    </>
  );
}
