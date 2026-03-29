"use client";

import { motion } from "framer-motion";

function TokenSpan({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode;
}) {
  return <span className={`token-${type}`}>{children}</span>;
}

export default function CodeExample() {
  return (
    <section className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

            <div className="space-y-4">
              {[
                "Type-safe SDK with full IntelliSense",
                "Async/await with Promise-based API",
                "Message effects like confetti and fireworks",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
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
          >
            <div className="code-block glow-blue border border-white/[0.06]">
              {/* Tab bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="ml-3 text-xs text-gray-500 font-mono">
                  send-message.ts
                </span>
              </div>

              <pre className="font-mono text-[13px] leading-7">
                <code>
                  <TokenSpan type="keyword">import</TokenSpan>
                  <TokenSpan type="plain"> {"{ "}</TokenSpan>
                  <TokenSpan type="type">TextBubblesClient</TokenSpan>
                  <TokenSpan type="plain">{" }"}</TokenSpan>
                  <TokenSpan type="keyword"> from</TokenSpan>
                  <TokenSpan type="string">
                    {' "@textbubbles/sdk"'}
                  </TokenSpan>
                  <TokenSpan type="punctuation">;</TokenSpan>
                  {"\n\n"}
                  <TokenSpan type="keyword">const</TokenSpan>
                  <TokenSpan type="plain"> client</TokenSpan>
                  <TokenSpan type="punctuation"> = </TokenSpan>
                  <TokenSpan type="keyword">new</TokenSpan>
                  <TokenSpan type="plain"> </TokenSpan>
                  <TokenSpan type="type">TextBubblesClient</TokenSpan>
                  <TokenSpan type="punctuation">{"({"}</TokenSpan>
                  {"\n"}
                  <TokenSpan type="plain">{"  "}</TokenSpan>
                  <TokenSpan type="property">apiKey</TokenSpan>
                  <TokenSpan type="punctuation">: </TokenSpan>
                  <TokenSpan type="variable">process</TokenSpan>
                  <TokenSpan type="punctuation">.</TokenSpan>
                  <TokenSpan type="variable">env</TokenSpan>
                  <TokenSpan type="punctuation">.</TokenSpan>
                  <TokenSpan type="variable">TEXTBUBBLES_API_KEY</TokenSpan>
                  {"\n"}
                  <TokenSpan type="punctuation">{"});"}</TokenSpan>
                  {"\n\n"}
                  <TokenSpan type="keyword">await</TokenSpan>
                  <TokenSpan type="plain"> client</TokenSpan>
                  <TokenSpan type="punctuation">.</TokenSpan>
                  <TokenSpan type="property">messages</TokenSpan>
                  <TokenSpan type="punctuation">.</TokenSpan>
                  <TokenSpan type="function">send</TokenSpan>
                  <TokenSpan type="punctuation">{"({"}</TokenSpan>
                  {"\n"}
                  <TokenSpan type="plain">{"  "}</TokenSpan>
                  <TokenSpan type="property">to</TokenSpan>
                  <TokenSpan type="punctuation">: </TokenSpan>
                  <TokenSpan type="string">{'"+14155551234"'}</TokenSpan>
                  <TokenSpan type="punctuation">,</TokenSpan>
                  {"\n"}
                  <TokenSpan type="plain">{"  "}</TokenSpan>
                  <TokenSpan type="property">content</TokenSpan>
                  <TokenSpan type="punctuation">{": { "}</TokenSpan>
                  <TokenSpan type="property">text</TokenSpan>
                  <TokenSpan type="punctuation">: </TokenSpan>
                  <TokenSpan type="string">
                    {'"Hello from TextBubbles! 💬"'}
                  </TokenSpan>
                  <TokenSpan type="punctuation">{" },"}</TokenSpan>
                  {"\n"}
                  <TokenSpan type="plain">{"  "}</TokenSpan>
                  <TokenSpan type="property">effect</TokenSpan>
                  <TokenSpan type="punctuation">: </TokenSpan>
                  <TokenSpan type="string">{'"confetti"'}</TokenSpan>
                  {"\n"}
                  <TokenSpan type="punctuation">{"});"}</TokenSpan>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
