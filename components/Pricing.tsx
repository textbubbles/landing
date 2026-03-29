"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for testing and personal projects",
    messages: "100 messages/mo",
    features: [
      "iMessage via email only",
      "No phone number",
      "Basic media support",
      "Community support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mo",
    description: "For growing apps and startups",
    messages: "10,000 messages/mo",
    features: [
      "Dedicated phone number",
      "iMessage & SMS fallback",
      "Rich media & effects",
      "Webhooks",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$299",
    period: "/mo",
    description: "For high-volume applications",
    messages: "100,000 messages/mo",
    features: [
      "Dedicated phone number",
      "Everything in Pro",
      "Group chats",
      "Payment requests",
      "Dedicated support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For mission-critical messaging",
    messages: "Unlimited messages",
    features: [
      "Everything in Scale",
      "Multiple phone numbers",
      "Custom SLA",
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-32 relative" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, transparent
            <br />
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-6 rounded-2xl border ${
                plan.highlighted
                  ? "bg-imessage-blue/5 dark:bg-imessage-blue/10 border-imessage-blue/30"
                  : "bg-gray-50 dark:bg-white/[0.03] border-gray-200 dark:border-white/[0.06]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-imessage-blue text-white text-xs font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {plan.description}
                </p>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-imessage-blue/10 text-imessage-blue text-sm font-medium text-center mb-6">
                {plan.messages}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#007AFF"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://docs.textbubbles.com"
                className={`block text-center py-2.5 px-4 rounded-full text-sm font-medium transition-all ${
                  plan.highlighted
                    ? "bg-imessage-blue text-white hover:bg-blue-600"
                    : "bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
