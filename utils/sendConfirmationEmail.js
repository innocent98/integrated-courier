const { confirmationEmailReceiver } = require("../config/new_order_receiver");
const { confirmationEmailSender } = require("../config/new_order_sender");

const sendConfirmationEmails = async (order) => {
  // console.log('order', order)
  try {
    confirmationEmailSender(
      (email = order.senderEmail),
      (senderName = order.senderName),
      (trackinNo = order.trackingNo),
      (pickupFrom = order.pickupFrom),
      (deliverTo = order.deliverTo)
    );
    console.log("Sender confirmation email sent");

    confirmationEmailReceiver(
      (email = order.receiverEmail),
      (receiverName = order.receiverName),
      (trackingNo = order.trackingNo),
      (pickupFrom = order.pickupFrom),
      (deliverTo = order.deliverTo)
    );
    console.log("Receiver confirmation email sent");
  } catch (emailError) {
    console.error("Error sending confirmation emails:", emailError);
    // Optionally handle email sending errors
  }
};

module.exports = { sendConfirmationEmails };
