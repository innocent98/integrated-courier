import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    senderName: { type: String },
    senderPhone: { type: String },
    senderEmail: { type: String },
    receiverName: { type: String },
    receiverPhone: { type: String },
    receiverEmail: { type: String },
    itemTitle: { type: String },
    itemKg: { type: String },
    itemQuantity: { type: String },
    price: { type: String },
    pickupFrom: { type: String },
    deliverTo: { type: String },
    trackingNo: { type: String },
    orderStatus: { type: String, default: "received" },
    currentLocation: { type: String },
  },
  { timestamps: true }
);

// Check if the model already exists before defining it
const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
