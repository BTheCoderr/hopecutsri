import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const values = [
  { title: "God 1st", description: "Faith guides our mission and our care for every person." },
  { title: "Family", description: "We treat everyone like family—valued, seen, and heard." },
  { title: "Integrity", description: "We show up with honesty, consistency, and respect." },
  { title: "Compassion", description: "We meet people with empathy, not judgment." },
  { title: "Connection", description: "The barber chair is where listening and encouragement happen." },
];

export default function MissionPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Hope Cuts RI exists to bring hope, dignity, and connection through the
            barber chair. We believe everyone deserves to feel seen—especially
            those facing mental health challenges, autism, homelessness, or
            substance recovery.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
                Together we can
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We don&apos;t just cut hair. We offer a listening ear, a moment
                of dignity, and the message that you matter. The barber chair
                has always been a place of conversation and trust—we bring that
                to Rhode Island&apos;s shelters, recovery centers, and community
                spaces.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our volunteers—barbers and supporters alike—show up with love,
                integrity, and compassion. We believe that connection changes
                everything.
              </p>
            </div>
            <ImagePlaceholder
              src={null}
              alt="Hope Cuts RI team"
              placeholderLabel="Mission photo → add mission-together.jpg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-12">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-white rounded-xl border border-slate-200"
              >
                <h3 className="font-display font-bold text-lg text-patriot-blue mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
