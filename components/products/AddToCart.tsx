"use client";

import useCartService from "@/lib/hooks/useCartStore";
import { OrderItem } from "@/lib/models/OrderModel";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AddToCart({ item }: { item: OrderItem }) {
  const router = useRouter();
  const { items, increase } = useCartService();
  const [existItem, setExistItem] = useState<OrderItem | undefined>();

  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug));
  }, [item, items]);

  const addToCartHandler = () => {
    increase(item);
  };

  return existItem ? (
    <div>
      <button type="button" className="btn">
        -
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button type="button" className="btn" onClick={() => increase(existItem)}>
        +
      </button>
    </div>
  ) : (
    <button
      type="button"
      onClick={addToCartHandler}
      className="btn btn-primary w-full"
    >
      Add to cart
    </button>
  );
}
