import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Order from "@/models/Order";

export const POST = async (request: any) => {
  await connectDB();

  try {
    const body = await request.json();
    const { trackingNo } = body;

    const order = await Order.findOne({ trackingNo: trackingNo });

    if (order) {
      return new NextResponse(JSON.stringify(order), { status: 200 });
    } else {
      return new NextResponse(
        JSON.stringify({ message: "Record not found!" }),
        {
          status: 404,
        }
      );
    }
  } catch (err) {
    console.log("err", err);
    return new NextResponse(JSON.stringify({ error: "Connection Error" }), {
      status: 500,
    });
  }
};
