import { confirmationEmailReceiver } from "@/config/new_order_receiver";
import { confirmationEmailSender } from "@/config/new_order_sender";

type Order = {
  senderEmail: string;
  senderName: string;
  trackingNo: string;
  pickupFrom: string;
  deliverTo: string;
  receiverEmail: string;
  receiverName: string;
};

export const sendConfirmationEmails = async (order: Order) => {
  try {
    confirmationEmailSender(
      order.senderEmail,
      order.senderName,
      order.trackingNo,
      order.pickupFrom,
      order.deliverTo
    );
    console.log("Sender confirmation email sent");

    confirmationEmailReceiver(
      order.receiverEmail,
      order.receiverName,
      order.trackingNo,
      order.pickupFrom,
      order.deliverTo
    );
    console.log("Receiver confirmation email sent");
  } catch (emailError) {
    console.error("Error sending confirmation emails:", emailError);
    // Optionally handle email sending errors
  }
};
