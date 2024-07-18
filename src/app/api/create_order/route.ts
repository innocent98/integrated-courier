import connectDB from "@/lib/db";
import { generateUniqueTrackingNo } from "@/utils/uniqueNumber";
import Order from "@/models/Order";
import { NextResponse } from "next/server";
import { sendConfirmationEmails } from "@/utils/sendConfirmationEmail";

export const POST = async (request: Request) => {
  try {
    await connectDB();

    const trackingNo = await generateUniqueTrackingNo();

    const body = await request.json();
    const {
      pickupFrom,
      deliverTo,
      senderName,
      senderEmail,
      receiverName,
      receiverEmail,
      ...orderData
    } = body;

    const newOrder = new Order({
      trackingNo: `ICS-${trackingNo?.slice(0, 13)}`,
      currentLocation: pickupFrom,
      deliverTo,
      senderName,
      senderEmail,
      receiverName,
      receiverEmail,
      pickupFrom,
      ...orderData,
    });

    const savedOrder = await newOrder.save();

    await sendConfirmationEmails(newOrder);

    return new NextResponse(JSON.stringify(savedOrder), { status: 200 });
  } catch (err) {
    console.log("err", err);
    return new NextResponse(JSON.stringify({ message: "Connection Error" }), {
      status: 500,
    });
  }
};
