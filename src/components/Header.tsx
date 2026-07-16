import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "/#products", label: "Products" },
  { href: "/#features", label: "Features" },
  { href: "/#riders", label: "Riders" },
  { href: "/#business", label: "Business" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQs" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-white">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-icon.png"
            alt=""
            width={378}
            height={253}
            className="h-9 w-auto"
            priority
          />
          <span className="text-lg font-black uppercase tracking-tight text-ink">
            QuickCarry
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wide text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden text-sm font-bold uppercase tracking-wide text-ink/70 hover:text-ink sm:block"
          >
            Contact
          </Link>
          <Link
            href="/#waitlist"
            className="whitespace-nowrap border-2 border-ink bg-volt px-3 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_#0e0e10] sm:px-4 sm:text-sm"
          >
            <span className="sm:hidden">Join</span>
            <span className="hidden sm:inline">Join waitlist</span>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
