"use client";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import Copy from "./Copy";

const SERVICES = [
  "Web Development",
  "UI/UX Design",
  "Mobile App Development",
  "Consulting",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setSubmitting(true);
    // For now, just log the form data
    console.log(form);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: "", email: "", service: SERVICES[0], message: "" });
    }, 1000);
  }

  return (
    <div className="wrapper py-24">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
              <Copy>Every projects starts with a plan</Copy>
            </h1>
            <p className="text-lg text-neutral-800">
              <Copy>
                Have an idea? Fill the form and we'll get back to you in 24
                hours.
              </Copy>
            </p>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 w-full lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-2xl shadow"
          >
            <div>
              <label className="block mb-2 font-medium">Name</label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary-200"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary-200"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Service</label>

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary-200"
              >
                <option value="" disabled>
                  Select a service...
                </option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary-200"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary-300 text-neutral-900 font-semibold py-3 rounded-full hover:bg-primary-300/90 transition-colors"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
              {submitted && (
                <div className="text-green-600 mt-4 text-center">
                  Thank you! Your message has been sent.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
