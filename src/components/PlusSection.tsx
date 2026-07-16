import { Check } from "lucide-react";
import { rewardFeatures } from "@/lib/content";
import SectionHeading from "./SectionHeading";

const plusPerks = [
  "Priority riders during peak hours",
  "Lower surge pricing, always",
  "2x cashback on every order",
  "Elevated delivery insurance coverage, included",
  "Priority matching with your favorite rider",
  "Early access to new cities and features",
];

export default function PlusSection() {
  return (
    <section id="plus" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow="Rewards"
          title="QuickCarry Plus, and ways to earn back."
          description="Loyalty that compounds — a subscription for regulars, cashback for everyone, referral tiers that keep giving."
          theme="ink"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="border-2 border-gold bg-gold p-8 text-ink shadow-[8px_8px_0_0_#faf6ec20] lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-widest">
              QuickCarry Plus
            </span>
            <p className="mt-3 flex items-baseline gap-1">
              <span className="text-5xl font-black">₦2,000</span>
              <span className="font-bold text-ink/70">/month</span>
            </p>
            <ul className="mt-6 space-y-3">
              {plusPerks.map((perk) => (
                <li key={perk} className="flex items-start gap-2 text-sm font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>
            <a
              href="#waitlist"
              className="mt-8 block border-2 border-ink bg-ink py-3 text-center text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-ink/80"
            >
              Get notified at launch
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3">
            {rewardFeatures
              .filter((f) => f.title !== "Subscription — QuickCarry Plus")
              .map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="border-2 border-cream/25 bg-ink p-6 transition-colors hover:border-gold"
                >
                  <Icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-4 text-base font-black uppercase tracking-tight text-cream">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
                    {description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
