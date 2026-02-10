"use client";

import Image from "next/image";
import { useState } from "react";

type ImagePlaceholderProps = {
  /** Path in /public - e.g. "/images/home-story.jpg". Shows placeholder if 404. */
  src?: string | null;
  alt: string;
  aspect?: "4/3" | "16/9" | "1" | "3/4";
  placeholderLabel?: string;
  className?: string;
  priority?: boolean;
};

const aspectClasses = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "1": "aspect-square",
  "3/4": "aspect-[3/4]",
};

function PlaceholderBox({ label, aspect, className }: { label: string; aspect: "4/3" | "16/9" | "1" | "3/4"; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100 ${aspectClasses[aspect]} ${className || ""}`}
    >
      <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center mb-2">
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
        </svg>
      </div>
      <p className="text-slate-500 text-sm text-center px-4">{label}</p>
    </div>
  );
}

export function ImagePlaceholder({
  src,
  alt,
  aspect = "4/3",
  placeholderLabel = "Add to /public/images/",
  className = "",
  priority = false,
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <PlaceholderBox label={placeholderLabel} aspect={aspect} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl ${aspectClasses[aspect]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
