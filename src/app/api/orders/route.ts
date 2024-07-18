import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Order from "@/models/Order";

export const GET = async (request: Request) => {
  try {
    await connectDB();

    const orders = await Order.find();

    return new NextResponse(JSON.stringify(orders), { status: 200 });

    // if (orders.length > 0) {
    // } else {
    //   return new NextResponse(JSON.stringify({ message: "No order found!" }), {
    //     status: 404,
    //   });
    // }
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: "Connection Error" }), {
      status: 500,
    });
  }
};
