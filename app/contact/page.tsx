import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Sales - TextBubbles",
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
            Contact Sales
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Tell us about your use case and we&apos;ll get back to you shortly.
          </p>
        </div>
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
