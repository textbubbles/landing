"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "💬",
    title: "iMessage & SMS",
    description:
      "Send via iMessage with automatic SMS fallback for Android users. One API, universal reach.",
  },
  {
    icon: "📸",
    title: "Rich Media",
    description:
      "Send images, videos, voice memos, and link previews. Full media support out of the box.",
  },
  {
    icon: "⏰",
    title: "Scheduled Messages",
    description:
      "Schedule messages for the perfect time. Precise delivery with timezone awareness.",
  },
  {
    icon: "💳",
    title: "Payment Requests",
    description:
      "Request Apple Cash directly via iMessage. Seamless payment collection in conversations.",
  },
  {
    icon: "👥",
    title: "Group Chats",
    description:
      "Create and manage group conversations programmatically. Add, remove, and message groups.",
  },
  {
    icon: "🔔",
    title: "Webhooks",
    description:
      "Real-time delivery receipts, read receipts, and reply tracking via webhook callbacks.",
  },
];

export default function Features() {
  return (
    <section className="py-32 relative" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to
            <br />
            <span className="gradient-text">send blue bubbles</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A complete iMessage platform with every feature your app needs,
            accessible through a simple REST API.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] hover:border-imessage-blue/30 dark:hover:border-imessage-blue/30 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
