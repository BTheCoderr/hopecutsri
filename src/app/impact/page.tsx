"use client";

import { useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const stats = [
  { value: "500+", label: "Haircuts & meaningful conversations" },
  { value: "12", label: "Shelters & recovery centers served" },
  { value: "50+", label: "Volunteers giving their time" },
  { value: "4", label: "Core pillars of impact" },
];

const pillars = [
  "Autism Awareness",
  "Mental Health",
  "Homelessness",
  "Substance Recovery",
] as const;

const stories = [
  {
    pillar: "Mental Health" as const,
    quote:
      "That haircut was the first time in months someone looked me in the eye and said I mattered.",
    attribution: "Anonymous",
  },
  {
    pillar: "Homelessness" as const,
    quote:
      "They didn't just cut my hair. They asked how I was. It sounds small, but it wasn't.",
    attribution: "Shelter resident",
  },
  {
    pillar: "Substance Recovery" as const,
    quote:
      "The chair became a safe space to talk. No judgment. Just care.",
    attribution: "Recovery center participant",
  },
  {
    pillar: "Autism Awareness" as const,
    quote:
      "They took time to understand. My son felt comfortable for the first time in a barber setting.",
    attribution: "Parent",
  },
];

export default function ImpactPage() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const filteredStories =
    activePillar === null
      ? stories
      : stories.filter((s) => s.pillar === activePillar);

  return (
    <>
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Our Impact
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Numbers tell part of the story. The rest is in the faces, the
            conversations, and the hope we see when someone feels valued again.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-10">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200"
              >
                <p className="text-3xl font-bold text-patriot-blue">
                  {stat.value}
                </p>
                <p className="mt-2 text-slate-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <ImagePlaceholder
              src={null}
              alt="Impact gallery"
              placeholderLabel="Impact photo → add impact-gallery.jpg"
            />
            <ImagePlaceholder
              src={null}
              alt="Community moment"
              placeholderLabel="Community photo → add impact-community.jpg"
            />
          </div>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            Stories from the Chair
          </h2>
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              type="button"
              onClick={() => setActivePillar(null)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors min-h-[44px] ${
                activePillar === null
                  ? "bg-patriot-blue text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-patriot-blue/30"
              }`}
            >
              All
            </button>
            {pillars.map((pillar) => (
              <button
                key={pillar}
                type="button"
                onClick={() => setActivePillar(pillar)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors min-h-[44px] ${
                  activePillar === pillar
                    ? "bg-patriot-blue text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-patriot-blue/30"
                }`}
              >
                {pillar}
              </button>
            ))}
          </div>
          <div className="space-y-6">
            {filteredStories.map((story, i) => (
              <blockquote
                key={i}
                className="p-6 bg-white rounded-xl border border-slate-200"
              >
                <p className="text-slate-900 text-lg italic">&ldquo;{story.quote}&rdquo;</p>
                <footer className="mt-3 text-slate-600 text-sm">
                  — {story.attribution}
                  <span className="text-patriot-blue font-medium ml-1">
                    ({story.pillar})
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
