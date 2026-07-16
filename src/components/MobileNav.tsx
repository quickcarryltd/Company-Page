"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { href: "/#products", label: "Products" },
  { href: "/#features", label: "Features" },
  { href: "/#riders", label: "Riders" },
  { href: "/#business", label: "Business" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center border-2 border-ink bg-white text-ink"
      >
        {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b-2 border-ink bg-white px-6 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-3 text-sm font-bold uppercase tracking-wide text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
