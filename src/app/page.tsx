import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const stats = [
  { value: "500+", label: "Haircuts & connections" },
  { value: "12", label: "Shelters & centers served" },
  { value: "50+", label: "Volunteers" },
];

const pillars = [
  {
    title: "Respect Autism",
    description: "Sensory-friendly, welcoming spaces where everyone feels valued.",
  },
  {
    title: "Mental Health",
    description: "The barber chair as a safe place for conversation and dignity.",
  },
  {
    title: "Homelessness",
    description: "Meeting people where they are—in shelters and community spaces.",
  },
  {
    title: "Substance Recovery",
    description: "Supporting recovery centers with connection and care.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero - bold, editorial */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-patriot-blue/5" />
        <div className="absolute top-0 left-0 right-0 h-1 barber-stripe" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <p className="font-display text-hope-red font-semibold text-sm uppercase tracking-widest mb-6">
              Rhode Island
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight">
              More than a haircut—
              <br />
              <span className="text-patriot-blue">a chance to be seen.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Hope Cuts RI brings the barber chair to shelters, recovery centers, and communities. 
              Mental health. Autism awareness. Homelessness. Substance recovery. 
              Because connection changes everything.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/get-involved#donate"
                className="inline-flex items-center justify-center min-h-[52px] px-8 bg-hope-red text-white font-semibold rounded-full hover:bg-hope-red/90 transition-all hover:scale-[1.02]"
              >
                Donate
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center min-h-[52px] px-8 border-2 border-patriot-blue text-patriot-blue font-semibold rounded-full hover:bg-patriot-blue hover:text-white transition-all"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact - tight stats */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-16">
            Our Impact
          </h2>
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl sm:text-5xl font-bold text-patriot-blue">
                  {stat.value}
                </p>
                <p className="mt-2 text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story block - logo + copy */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ImagePlaceholder
              src={null}
              alt="Hope Cuts RI community"
              placeholderLabel="Community photo → add home-story.jpg"
              priority
            />
            <div>
              <p className="font-display text-patriot-blue font-semibold text-sm uppercase tracking-widest mb-4">
                The chair where hope meets community
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Free haircuts. A listening ear. Rhode Island.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                From shelters to recovery centers, we meet people where they are. 
                Together we can.
              </p>
              <Link
                href="/mission"
                className="font-semibold text-patriot-blue hover:underline"
              >
                Our Mission →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars - cleaner cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What We Stand For
          </h2>
          <p className="text-slate-600 mb-16 max-w-2xl">
            God 1st. Family. Integrity. Compassion. Connection.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group"
              >
                <div className="w-12 h-1 bg-hope-red mb-4" />
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-patriot-blue transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-patriot-blue text-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 barber-stripe" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Together we can.
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-10">
            Join us. Volunteer. Request a visit. Bring dignity and connection to Rhode Island.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved#volunteer"
              className="inline-flex items-center justify-center min-h-[52px] px-8 bg-white text-patriot-blue font-semibold rounded-full hover:bg-white/95 transition-all"
            >
              Volunteer
            </Link>
            <Link
              href="/get-involved#request-visit"
              className="inline-flex items-center justify-center min-h-[52px] px-8 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-patriot-blue transition-all"
            >
              Request a Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
