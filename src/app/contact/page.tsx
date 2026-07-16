import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — QuickCarry",
  description:
    "Get in touch with QuickCarry — call +234 803 365 1598, email us, or send a message about delivery, riding, or partnering with us in Abuja.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+234 803 365 1598",
    href: "tel:+2348033651598",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@quickcarry.ng",
    href: "mailto:hello@quickcarry.ng",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Abuja, Nigeria",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 1 business day",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to QuickCarry."
        description="Questions about launch timing, becoming a rider, or setting up a business account — reach us directly or send a message below."
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black uppercase tracking-tight text-ink">
              Reach us directly
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-1">
              {contactDetails.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex h-full flex-col gap-3 bg-cream p-6">
                    <Icon className="h-5 w-5 text-ink" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-ink/50">
                        {label}
                      </p>
                      <p className="mt-1 text-base font-bold text-ink">
                        {value}
                      </p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="hover:bg-ink/[0.03]">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </div>

          <div className="border-2 border-ink bg-cream p-8 shadow-[8px_8px_0_0_#0e0e10] lg:col-span-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-ink">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-ink/60">
              We&apos;re pre-launch, so a real human reads every message.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
