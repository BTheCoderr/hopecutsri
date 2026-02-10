import Link from "next/link";

const links = [
  { href: "/mission", label: "Our Mission" },
  { href: "/impact", label: "Our Impact" },
  { href: "/services", label: "Services" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display font-bold text-xl mb-3">Hope Cuts RI</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Rhode Island nonprofit. The barber chair as a place for connection,
              encouragement, and hope. Together we can.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <p className="text-white/80 text-sm">Rhode Island</p>
            <Link
              href="/contact"
              className="inline-block mt-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Hope Cuts RI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
