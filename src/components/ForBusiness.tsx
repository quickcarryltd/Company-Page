import {
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  CreditCardIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import SectionHeading from "./SectionHeading";

const dashboardStats = [
  { label: "Revenue trend", value: "+18%", icon: ArrowTrendingUpIcon },
  { label: "Repeat customers", value: "64%", icon: UsersIcon },
  { label: "Failed deliveries", value: "0.4%", icon: ChartBarIcon },
];

const businessPerks = [
  "Preload ₦50,000, ₦100,000, or ₦500,000 into a Business Wallet for discounts and monthly invoices.",
  "Issue Delivery Credits so employees can book runs without touching company cash.",
  "Track sales, peak hours, rider performance, and revenue trends from one dashboard.",
];

export default function ForBusiness() {
  return (
    <section id="business" className="bg-navy py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="For business"
          title="A dashboard that pays for itself."
          description="Preload a wallet, hand out delivery credits, and see exactly where your logistics spend goes."
          theme="navy"
        />

        <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div>
            <ul className="space-y-5">
              {businessPerks.map((perk) => (
                <li key={perk} className="flex gap-4 border-l-2 border-volt pl-4">
                  <p className="text-cream/85">{perk}</p>
                </li>
              ))}
            </ul>

            <a
              href="#waitlist"
              className="group mt-8 inline-flex items-center gap-2 border-2 border-volt bg-volt px-7 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
            >
              Get early business access
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="border-2 border-cream bg-cream p-6 text-ink shadow-[8px_8px_0_0_#0e0e10]">
            <div className="flex items-center justify-between border-b-2 border-ink/10 pb-4">
              <p className="text-sm font-black uppercase tracking-wide">
                Merchant Dashboard
              </p>
              <span className="border border-ink/30 px-2 py-0.5 text-xs font-bold uppercase text-ink/60">
                This week
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {dashboardStats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="border border-ink/15 p-3">
                  <Icon className="h-4 w-4 text-navy" />
                  <p className="mt-2 text-lg font-black">{value}</p>
                  <p className="text-[11px] uppercase tracking-wide text-ink/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 border border-ink/15 p-4">
              <div className="flex items-end gap-1.5">
                {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-navy"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-ink/50">
                <CreditCardIcon className="h-3 w-3" />
                Deliveries per day, last 7 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
