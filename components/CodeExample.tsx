"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";

const codeString = `import { TextBubblesClient } from "@textbubbles/sdk";

const client = new TextBubblesClient({
  apiKey: process.env.TEXTBUBBLES_API_KEY
});

await client.messages.send({
  to: "+14155551234",
  content: { text: "Hello from TextBubbles!" },
  effect: "confetti"
});`;

const codeString = `import { TextBubblesClient } from "@textbubbles/sdk";

const client = new TextBubblesClient({
  apiKey: process.env.TEXTBUBBLES_API_KEY
});

await client.messages.send({
  to: "+14155551234",
  content: { text: "Hello from TextBubbles!" },
  effect: "confetti"
});`;

export default function CodeExample() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Ship in
              <br />
              <span className="gradient-text">five lines of code</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Install our SDK, add your API key, and start sending iMessages.
              It&apos;s that simple.
            </p>

            <div className="space-y-4 inline-block lg:block">
              {[
                "Type-safe SDK with full IntelliSense",
                "Async/await with Promise-based API",
                "Message effects like confetti and fireworks",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-left">
                  <div className="w-5 h-5 rounded-full bg-imessage-blue/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#007AFF"
                      strokeWidth="3"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full min-w-0"
          >
            <div className="code-block glow-blue border border-white/[0.06] w-full max-w-full overflow-hidden">
              {/* Tab bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="ml-3 text-xs text-gray-500 font-mono">
                    send-message.ts
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-gray-400 hover:text-gray-200"
                  aria-label="Copy code"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <Highlight theme={themes.oneDark} code={codeString} language="tsx">
                {({ tokens, getLineProps, getTokenProps }) => (
                  <pre className="font-mono text-[13px] leading-7 p-6 overflow-x-auto">
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
