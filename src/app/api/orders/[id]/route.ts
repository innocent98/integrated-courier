import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Order from "@/models/Order";

export const GET = async (request: any, { params }: any) => {
  await connectDB();

  const { id } = params;

  try {
    const order = await Order.findById(id);

    if (order) {
      return new NextResponse(JSON.stringify(order), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({ message: "No order found!" }), {
        status: 404,
      });
    }
  } catch (err) {
    console.log("err", err);
    return new NextResponse(JSON.stringify({ error: "Connection Error" }), {
      status: 500,
    });
  }
};
