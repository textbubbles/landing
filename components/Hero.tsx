"use client";

import { motion } from "framer-motion";

const messages = [
  { text: "Hey! Check out this new API 🚀", sent: true, delay: 0.5 },
  { text: "It sends iMessages programmatically?!", sent: false, delay: 1.5 },
  { text: "Yep — blue bubbles and everything 💬", sent: true, delay: 2.5 },
  { text: "Reactions, media, even Apple Cash", sent: true, delay: 3.2 },
  { text: "That's incredible. Signing up now!", sent: false, delay: 4.2 },
];

function ChatBubble({
  text,
  sent,
  delay,
}: {
  text: string;
  sent: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className={`flex ${sent ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] px-4 py-2.5 text-[15px] ${
          sent ? "bubble-blue" : "bubble-gray"
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20 dark:via-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-imessage-blue/5 dark:bg-imessage-blue/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-imessage-blue/10 text-imessage-blue text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-imessage-blue animate-pulse" />
              Now in public beta
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6">
              iMessage API
              <br />
              <span className="gradient-text">for Developers</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-lg">
              Send blue bubbles, reactions, and rich media via a simple REST
              API. Built for developers who ship.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://docs.textbubbles.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-imessage-blue text-white font-medium hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://docs.textbubbles.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
              >
                View Docs
              </a>
            </div>
          </motion.div>

          {/* Right - Chat Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glow-blue rounded-3xl bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-white/10 p-6 shadow-2xl">
              {/* Phone header */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-100 dark:border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-imessage-blue to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                  TB
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">
                    TextBubbles API
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    iMessage
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-3 min-h-[280px]">
                {messages.map((msg, i) => (
                  <ChatBubble key={i} {...msg} />
                ))}
              </div>

              {/* Input bar */}
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-100 dark:bg-white/5">
                  <span className="text-sm text-gray-400">iMessage</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
