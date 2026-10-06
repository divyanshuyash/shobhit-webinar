"use client";

import { FormEvent } from "react";
import { Clock3, MessageSquareText } from "lucide-react";
import { brand } from "@/data/constants";

export function ContactMessageForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const type = String(form.get("type") ?? "General Contact").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = `Website inquiry: ${type}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone || "Not provided"}`,
      `Inquiry type: ${type}`,
      "",
      "Message:",
      message
    ].join("\n");

    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="x-form-grid" onSubmit={handleSubmit}>
      <label>
        Full Name*
        <input className="x-input" name="name" placeholder="Your full name" required />
      </label>
      <label>
        Email Address*
        <input className="x-input" name="email" type="email" placeholder="you@example.com" required />
      </label>
      <label>
        Phone / WhatsApp
        <input className="x-input" name="phone" placeholder="Contact number" />
      </label>
      <label>
        Inquiry Type*
        <select className="x-input" name="type" defaultValue="" required>
          <option value="" disabled>Select an option</option>
          <option>Webinar Support</option>
          <option>Partnerships & Business Inquiries</option>
          <option>Speaking Invitations</option>
          <option>General Contact</option>
        </select>
      </label>
      <label className="is-wide">
        How can we help you?*
        <textarea className="x-input" name="message" placeholder="Tell us a little about your inquiry" required />
      </label>
      <label className="is-wide x-consent">
        <input type="checkbox" name="consent" required />
        <span>I agree to receive relevant information from Shobhit Singhal.</span>
      </label>
      <div className="is-wide x-form-action">
        <button className="x-button" type="submit">Send message <MessageSquareText size={14} /></button>
        <small><Clock3 size={13} /> Your email app will open with your message ready to send.</small>
      </div>
    </form>
  );
}
