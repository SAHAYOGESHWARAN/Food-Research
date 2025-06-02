// Payment service using Stripe (can be extended for other providers)
const Stripe = require('stripe');
const config = require('../config/config');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY || config.STRIPE_SECRET_KEY);

const createCheckoutSession = async (customerEmail, lineItems, successUrl, cancelUrl) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: customerEmail,
      line_items: lineItems,
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
    return { success: true, sessionUrl: session.url };
  } catch (error) {
    return { success: false, error };
  }
};

const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || config.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  // Handle event types (e.g., subscription created, payment succeeded)
  // ...
  res.json({ received: true });
};

module.exports = {
  createCheckoutSession,
  handleWebhook,
};
