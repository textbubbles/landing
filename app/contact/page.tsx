import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us - TextBubbles",
  description:
    "Get in touch with the TextBubbles team. Tell us about your use case and we'll help you get started.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Get in touch and let our team help you get started.
          </p>
        </div>

        <div className="max-w-lg mx-auto space-y-6">
          {/* iMessage option */}
          <div className="glow-blue rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1e] p-6 flex flex-col sm:flex-row items-center gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-imessage-blue flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Chat with us
              </h2>
            </div>
            <div className="flex flex-col items-center gap-1.5 shrink-0">
              <a
                href="sms:+16282895642"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-imessage-blue text-white text-sm font-medium hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Open in iMessage
              </a>
              <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                +1 (628) 289-5642
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
            <span className="text-sm text-gray-400 dark:text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
          </div>

          {/* Form option */}
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1e] p-8">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
