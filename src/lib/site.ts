/**
 * Consistent color & layout tokens for Hope Cuts RI
 */

export const section = {
  /** Light intro/hero backgrounds */
  intro: "bg-slate-50",
  /** Slightly blue-tinted intro (alternate) */
  introAlt: "bg-patriot-blue/5",
  /** White content sections */
  white: "bg-white",
  /** Light gray content sections */
  muted: "bg-slate-50",
  /** CTA / footer */
  cta: "bg-patriot-blue",
} as const;

export const text = {
  heading: "font-display font-bold text-slate-900",
  subheading: "text-slate-600",
  accent: "text-patriot-blue",
  accentRed: "text-hope-red",
} as const;
