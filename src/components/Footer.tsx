import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Instant Delivery", href: "/#products" },
      { label: "Send Anything", href: "/#products" },
      { label: "Scheduled Delivery", href: "/#products" },
      { label: "Multi-stop Delivery", href: "/#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "For Riders", href: "/#riders" },
      { label: "For Business", href: "/#business" },
      { label: "QuickCarry Plus", href: "/#plus" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Terms of Service", href: "/contact" },
      { label: "Privacy Policy", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-white py-16 text-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-icon.png"
                alt=""
                width={378}
                height={253}
                className="h-9 w-auto"
              />
              <span className="text-lg font-black uppercase tracking-tight">
                QuickCarry
              </span>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-ink/70">
              <MapPin className="h-4 w-4 shrink-0 text-navy" />
              Abuja, Nigeria
            </p>
            <a
              href="tel:+2348033651598"
              className="mt-2 flex items-center gap-2 text-sm text-ink/70 hover:text-navy"
            >
              <Phone className="h-4 w-4 shrink-0 text-navy" />
              +234 803 365 1598
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-bold uppercase tracking-widest text-navy">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink/70 hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t-2 border-ink/15 pt-8 sm:flex-row">
          <p className="text-sm text-ink/50">
            © {new Date().getFullYear()} QuickCarry. All rights reserved.
          </p>
          <p className="text-sm text-ink/50">Abuja, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
