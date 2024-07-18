import Order from "@/models/Order";

export async function generateUniqueTrackingNo() {
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
