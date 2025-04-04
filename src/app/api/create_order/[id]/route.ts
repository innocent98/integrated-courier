import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Order from "@/models/Order";

export const PUT = async (request: any, { params }: any) => {
  await connectDB();

  const { id } = params;

  try {
    const body = await request.json();
    const { ...orderData } = body;

    const order = await Order.findByIdAndUpdate(
      id,
      { $set: { ...orderData } },
      { new: true }
    );

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
