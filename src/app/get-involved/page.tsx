"use client";

import { useState } from "react";

const donateAmounts = [25, 50, 100, 250, 500];

export default function GetInvolvedPage() {
  const [donateAmount, setDonateAmount] = useState<number | null>(null);
  const [donateCustom, setDonateCustom] = useState("");
  const [donateMonthly, setDonateMonthly] = useState(false);
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
  };

  const handleRequestSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRequestSubmitted(true);
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Donate, volunteer, or request a visit. Every action helps us bring
            hope and connection to Rhode Island.
          </p>
        </div>
      </section>

      <section id="donate" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Donate</h2>
          <p className="text-slate-600 mb-8">
            Your $25 helps give 3 haircuts and meaningful conversations. Every
            gift matters.
          </p>
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <p className="text-sm font-medium text-slate-600 mb-3">
              Select an amount
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {donateAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => {
                    setDonateAmount(amount);
                    setDonateCustom("");
                  }}
                  className={`min-h-[48px] min-w-[80px] px-4 rounded-lg font-semibold transition-colors ${
                    donateAmount === amount
                      ? "bg-hope-red text-white"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-hope-red/50"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="flex gap-3 mb-6">
              <input
                type="number"
                placeholder="Custom amount"
                value={donateCustom}
                onChange={(e) => {
                  setDonateCustom(e.target.value);
                  setDonateAmount(null);
                }}
                className="flex-1 min-h-[48px] px-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
              />
            </div>
            <label className="flex items-center gap-3 cursor-pointer mb-6">
              <input
                type="checkbox"
                checked={donateMonthly}
                onChange={(e) => setDonateMonthly(e.target.checked)}
                className="w-5 h-5 rounded border-slate-300 text-patriot-blue focus:ring-patriot-blue"
              />
              <span className="text-slate-700">Make it monthly</span>
            </label>
            <button
              type="button"
              className="w-full min-h-[48px] bg-hope-red text-white font-semibold rounded-lg hover:bg-hope-red/90 transition-colors"
            >
              Donate via Stripe (Coming Soon)
            </button>
            <p className="mt-3 text-xs text-slate-500 text-center">
              Hope Cuts RI is a 501(c)(3) nonprofit. Donations are tax-deductible.
            </p>
          </div>
        </div>
      </section>

      <section id="volunteer" className="py-20 bg-slate-50 scroll-mt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Volunteer</h2>
          <p className="text-slate-600 mb-8">
            Barbers and non-barbers welcome. We need haircuts, support, and
            community.
          </p>
          {volunteerSubmitted ? (
            <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center">
              <p className="text-lg font-medium text-patriot-blue">
                Thank you for signing up!
              </p>
              <p className="text-slate-600 mt-2">
                We&apos;ll be in touch with next steps for orientation and
                training.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleVolunteerSubmit}
              className="p-6 rounded-2xl bg-white border border-slate-200 space-y-6"
            >
              <div>
                <label htmlFor="vol-name" className="block text-sm font-medium text-slate-700 mb-1">
                  Name *
                </label>
                <input
                  id="vol-name"
                  name="name"
                  type="text"
                  required
                  className="w-full min-h-[48px] px-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="vol-email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email *
                </label>
                <input
                  id="vol-email"
                  name="email"
                  type="email"
                  required
                  className="w-full min-h-[48px] px-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="vol-role" className="block text-sm font-medium text-slate-700 mb-1">
                  I am a...
                </label>
                <select
                  id="vol-role"
                  name="role"
                  className="w-full min-h-[48px] px-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
                >
                  <option value="barber">Licensed barber</option>
                  <option value="support">Support volunteer (non-barber)</option>
                  <option value="admin">Admin / behind-the-scenes</option>
                </select>
              </div>
              <div>
                <label htmlFor="vol-availability" className="block text-sm font-medium text-slate-700 mb-1">
                  Availability
                </label>
                <input
                  id="vol-availability"
                  name="availability"
                  type="text"
                  placeholder="e.g., Weekends, weekday mornings"
                  className="w-full min-h-[48px] px-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full min-h-[48px] bg-patriot-blue text-white font-semibold rounded-lg hover:bg-patriot-blue/90 transition-colors"
              >
                Sign Up to Volunteer
              </button>
            </form>
          )}
        </div>
      </section>

      <section id="request-visit" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Request a Visit
          </h2>
          <p className="text-slate-600 mb-8">
            Shelters, recovery centers, and community organizations: we can
            bring Hope Cuts RI to you.
          </p>
          {requestSubmitted ? (
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-lg font-medium text-patriot-blue">
                Request received!
              </p>
              <p className="text-slate-600 mt-2">
                We&apos;ll reach out to coordinate a visit. Thank you.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleRequestSubmit}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-6"
            >
              <div>
                <label htmlFor="req-org" className="block text-sm font-medium text-slate-700 mb-1">
                  Organization name *
                </label>
                <input
                  id="req-org"
                  name="org"
                  type="text"
                  required
                  className="w-full min-h-[48px] px-4 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="req-contact" className="block text-sm font-medium text-slate-700 mb-1">
                  Contact name *
                </label>
                <input
                  id="req-contact"
                  name="contact"
                  type="text"
                  required
                  className="w-full min-h-[48px] px-4 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="req-email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email *
                </label>
                <input
                  id="req-email"
                  name="email"
                  type="email"
                  required
                  className="w-full min-h-[48px] px-4 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="req-location" className="block text-sm font-medium text-slate-700 mb-1">
                  Location / address
                </label>
                <input
                  id="req-location"
                  name="location"
                  type="text"
                  className="w-full min-h-[48px] px-4 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="req-population" className="block text-sm font-medium text-slate-700 mb-1">
                  Population served
                </label>
                <input
                  id="req-population"
                  name="population"
                  type="text"
                  placeholder="e.g., Shelter residents, recovery program"
                  className="w-full min-h-[48px] px-4 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="req-dates" className="block text-sm font-medium text-slate-700 mb-1">
                  Preferred dates / time window
                </label>
                <input
                  id="req-dates"
                  name="dates"
                  type="text"
                  placeholder="e.g., Weekday mornings, flexible"
                  className="w-full min-h-[48px] px-4 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-patriot-blue focus:border-transparent outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full min-h-[48px] bg-patriot-blue text-white font-semibold rounded-lg hover:bg-patriot-blue/90 transition-colors"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
