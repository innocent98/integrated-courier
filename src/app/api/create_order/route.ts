import { confirmationEmailReceiver } from "@/config/new_order_receiver";
import { confirmationEmailSender } from "@/config/new_order_sender";
import connectDB from "@/lib/db";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

async function generateUniqueTrackingNo() {
  let trackingNo;
  let isUnique = false;

  while (!isUnique) {
    trackingNo = crypto.randomUUID();

    // Check if the code already exists in the database
    const existingUser = await Order.findOne({ trackingNo });

    if (!existingUser) {
      isUnique = true;
    }
  }

  return trackingNo;
}

export const POST = async (request: Request) => {
  await connectDB();

  try {
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

    await newOrder.save();

    return new NextResponse(JSON.stringify(newOrder), { status: 200 });
  } catch (err) {
    console.log("err", err);
    return new NextResponse(JSON.stringify({ message: "Connection Error" }), {
      status: 500,
    });
  }
};
