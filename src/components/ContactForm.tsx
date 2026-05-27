"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send enquiry via the booking API (reusing the same endpoint)
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.name.split(" ")[0] || formData.name,
          lastName: formData.name.split(" ").slice(1).join(" ") || "",
          email: formData.email,
          phone: "",
          notes: `Subject: ${formData.subject}\n\n${formData.message}`,
          pickupLocation: "General Enquiry",
          dropoffLocation: "General Enquiry",
          pickupDate: new Date().toISOString().split("T")[0],
          returnDate: new Date().toISOString().split("T")[0],
          pickupTime: "10:00",
          returnTime: "10:00",
          carModel: "Enquiry",
          flightNumber: "",
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="rounded-[2.5rem] bg-slate-50 p-8 shadow-sm flex flex-col items-center justify-center text-center gap-4 min-h-[320px]">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <MessageSquare className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-semibold text-slate-950">Message Sent!</h3>
        <p className="text-slate-600">
          Thanks for reaching out. We'll get back to you within 2 business hours.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="mt-2 text-sm font-bold text-orange-600 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[2.5rem] bg-slate-50 p-8 shadow-sm">
      <h3 className="text-2xl font-semibold text-slate-950">Send an Enquiry</h3>
      {submitStatus === "error" && (
        <p className="mt-4 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
          Something went wrong. Please try again or call us directly on{" "}
          <a href="tel:0894794900" className="font-bold underline">
            08 9479 4900
          </a>
          .
        </p>
      )}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3 focus:border-orange-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3 focus:border-orange-500 focus:outline-none"
          />
        </div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Subject"
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 focus:border-orange-500 focus:outline-none"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="How can we help?"
          rows={4}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 focus:border-orange-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MessageSquare className="h-4 w-4" />
          {isSubmitting ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
