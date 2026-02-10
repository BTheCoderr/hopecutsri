import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import Link from "next/link";

const services = [
  {
    title: "Shelter Visits",
    description:
      "We bring the barber chair to homeless shelters across Rhode Island. Free haircuts, conversation, and a moment of dignity for residents.",
    icon: "✂️",
  },
  {
    title: "Recovery Center Outreach",
    description:
      "Partnering with substance abuse recovery programs to offer haircuts and support. The chair becomes a space for honest connection.",
    icon: "💙",
  },
  {
    title: "Autism-Friendly Cuts",
    description:
      "Sensory-aware, patient, and respectful haircuts for individuals on the autism spectrum. We take the time to make everyone feel comfortable.",
    icon: "🌈",
  },
  {
    title: "Community Events",
    description:
      "Pop-up events at churches, community centers, and health fairs. Bringing hope and haircuts to neighborhoods that need connection.",
    icon: "🤝",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Services & Outreach
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            We meet people where they are—shelters, recovery centers, community
            spaces. Every haircut is a chance for connection.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImagePlaceholder
            src={null}
            alt="Services hero"
            aspect="16/9"
            placeholderLabel="Services hero → add services-hero.jpg"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-patriot-blue/20 transition-colors"
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Request a Visit
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Are you a shelter, recovery center, or community organization? We
            can bring Hope Cuts RI to you.
          </p>
          <Link
            href="/get-involved#request-visit"
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-patriot-blue text-white font-semibold rounded-lg hover:bg-patriot-blue/90 transition-colors"
          >
            Request a Visit
          </Link>
        </div>
      </section>
    </>
  );
}
