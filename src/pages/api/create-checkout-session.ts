import type { APIRoute } from "astro";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

const PLAN_PRICE_MAP: Record<string, string> = {
  starter: import.meta.env.STRIPE_PRICE_STARTER as string,
  founder: import.meta.env.STRIPE_PRICE_FOUNDER as string,
  team: import.meta.env.STRIPE_PRICE_TEAM as string,
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const planId = body?.planId as string | undefined;

    if (!planId || !PLAN_PRICE_MAP[planId]) {
      return new Response(JSON.stringify({ error: "Invalid planId" }), {
        status: 400,
      });
    }

    const priceId = PLAN_PRICE_MAP[planId];

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${import.meta.env.STRIPE_SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: import.meta.env.STRIPE_CANCEL_URL,
      metadata: {
        planId,
        type: "nomaphone_founding_credits",
      },
      allow_promotion_codes: false,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Stripe checkout error", err);
    return new Response(
      JSON.stringify({ error: "Failed to create checkout session" }),
      { status: 500 }
    );
  }
};
