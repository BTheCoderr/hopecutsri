"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Questions, ideas, or want to partner? We&apos;d love to hear from
            you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-slate-600 mb-6">
                Whether you have a question about volunteering, a partnership
                idea, or want to learn more about our work—reach out.
              </p>
              <div className="space-y-4">
                <p className="font-medium text-slate-900">Hope Cuts RI</p>
                <p className="text-slate-600">Rhode Island</p>
                <p className="text-slate-600">
                  <a
                    href="mailto:info@hopecuts.org"
                    className="text-patriot-blue hover:underline"
                  >
                    info@hopecuts.org
                  </a>
                </p>
              </div>
            </div>
            <div>
              {submitted ? (
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-lg font-medium text-patriot-blue">
                    Thank you for reaching out!
                  </p>
                  <p className="text-slate-600 mt-2">
                    We&apos;ll get back to you as soon as we can.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-6"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      className="w-full min-h-[48px] px-4 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      className="w-full min-h-[48px] px-4 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="e.g., Volunteer inquiry"
                      className="w-full min-h-[48px] px-4 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full min-h-[48px] bg-patriot-blue text-white font-semibold rounded-lg hover:bg-patriot-blue/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
