import { data } from "@/lib/data";
import dbConnect from "@/lib/db";
import { ProductModel } from "@/lib/models/ProductModel";
import { UserModel } from "@/lib/models/UserModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { users, products } = data;

  await dbConnect();

  await UserModel.deleteMany();
  await UserModel.insertMany(users);

  await ProductModel.deleteMany();
  await ProductModel.insertMany(products);

  return NextResponse.json({
    message: "Seeded successfully",
    users,
    products,
  });
};
