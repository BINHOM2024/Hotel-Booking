import Stripe from "stripe";
import bookingModel from "../models/booking.js";

const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function stripeWebHooks(req, res) {
  const sig = req.headers["stripe-signature"];
  let event;
  try {
    event = stripeInstance.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", error.message);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }
  if (event.type === "payment_intent.succeeded") {
    const payment_intent = event.data.object;
    const payment_intentId = payment_intent.id;

    try {
      const sessionList = await stripeInstance.checkout.sessions.list({
        payment_intent: payment_intentId,
      });

      if (!sessionList.data || sessionList.data.length === 0) {
        console.error(
          "No checkout session found for payment_intent:",
          payment_intentId
        );
        return res.status(404).send("No associated checkout session found.");
      }

      const { bookingId } = sessionList.data[0].metadata;

      await bookingModel.findByIdAndUpdate(bookingId, {
        isPaid: true,
        paymentMethod: "Stripe",
      });

      console.log(`Booking ${bookingId} marked as paid.`);
    } catch (err) {
      console.error("Error updating booking:", err);
      return res.status(500).send("Internal server error");
    }
  } else {
    console.log("Unhandled event type:", event.type);
  }

  res.json({ received: true });
}
