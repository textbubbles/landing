"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const STARTER_URL = "https://github.com/textbubbles/textbubbles-nextjs-starter";

export default function Starter() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Start from our
            <br />
            <span className="gradient-text">Next.js starter</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A working app that sends iMessage and SMS, plus a webhook handler
            for inbound replies. Clone, drop in your API key, and you&apos;re
            live.
          </p>
        </motion.div>

        <motion.a
          href={STARTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="group block max-w-3xl mx-auto rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] hover:border-imessage-blue/40 transition-colors p-6 sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-imessage-blue/10 flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-sm text-gray-500 dark:text-gray-500 font-mono truncate">
                  github.com/textbubbles
                </div>
                <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
                  textbubbles-nextjs-starter
                </div>
              </div>
            </div>
            <ArrowUpRight
              size={20}
              className="text-gray-400 group-hover:text-imessage-blue transition-colors flex-shrink-0 mt-1"
            />
          </div>

          <pre className="mt-6 font-mono text-[13px] leading-7 text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-black/40 border border-gray-200 dark:border-white/[0.06] rounded-lg p-4 overflow-x-auto">
            <code>
              <span className="text-gray-400 dark:text-gray-500">$ </span>
              git clone https://github.com/textbubbles/textbubbles-nextjs-starter
              {"\n"}
              <span className="text-gray-400 dark:text-gray-500">$ </span>
              npm install
              {"\n"}
              <span className="text-gray-400 dark:text-gray-500">$ </span>
              npm run dev
            </code>
          </pre>
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center text-sm text-gray-500 dark:text-gray-500 mt-8"
        >
          Prefer another stack? Use the{" "}
          <a
            href="https://docs.textbubbles.com"
            className="text-imessage-blue hover:underline"
          >
            REST API
          </a>{" "}
          from anything that can speak HTTP.
        </motion.p>
      </div>
    </section>
  );
}
