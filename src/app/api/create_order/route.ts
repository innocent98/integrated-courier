import connectDB from "@/lib/db";
import { generateUniqueTrackingNo } from "@/utils/uniqueNumber";
import Order from "@/models/Order";
import { confirmationEmailReceiver } from "@/config/new_order_receiver";
import { confirmationEmailSender } from "@/config/new_order_sender";
import { NextResponse } from "next/server";

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

    if (savedOrder) {
      try {
        confirmationEmailSender(
          newOrder.senderEmail,
          newOrder.senderName,
          newOrder.trackingNo,
          newOrder.pickupFrom,
          newOrder.deliverTo
        );

        confirmationEmailReceiver(
          newOrder.receiverEmail,
          newOrder.receiverName,
          newOrder.trackingNo,
          newOrder.pickupFrom,
          newOrder.deliverTo
        );
      } catch (err) {
        console.log(err);
      }
    }

    return new NextResponse(JSON.stringify(savedOrder), { status: 200 });
  } catch (err) {
    console.log("err", err);
    return new NextResponse(JSON.stringify({ message: "Connection Error" }), {
      status: 500,
    });
  }
};
