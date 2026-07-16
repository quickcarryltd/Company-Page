import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalSection from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Terms of Service — QuickCarry",
  description:
    "The terms governing use of QuickCarry's delivery platform, effective May 1, 2026.",
};

const EFFECTIVE_DATE = "May 1, 2026";

const sections: {
  title: string;
  paragraphs: string[];
  list?: string[];
}[] = [
  {
    title: "Acceptance of terms",
    paragraphs: [
      `These Terms of Service ("Terms") govern your access to and use of QuickCarry's website, mobile application, and delivery services (together, the "Service"), operated by QuickCarry ("QuickCarry", "we", "us"). By creating an account, joining the waitlist, or otherwise using the Service, you agree to be bound by these Terms. If you don't agree, don't use the Service.`,
      "These Terms apply to everyone who uses QuickCarry: customers requesting deliveries, riders fulfilling them, and businesses using merchant tools like the Business Wallet.",
    ],
  },
  {
    title: "Who can use QuickCarry",
    paragraphs: [
      "You must be at least 18 years old and able to form a binding contract under Nigerian law to create an account. Riders must additionally meet QuickCarry's onboarding requirements, including a valid means of identification, a roadworthy vehicle where applicable, and any documentation requested during verification.",
      "You're responsible for keeping your account credentials confidential and for all activity under your account.",
    ],
  },
  {
    title: "The service we provide",
    paragraphs: [
      "QuickCarry operates a platform connecting customers who need something delivered with independent riders who fulfil those deliveries, and provides supporting tools — pricing, tracking, insurance, and wallets — for customers and businesses.",
    ],
    list: [
      "Instant, scheduled, and multi-stop delivery requests",
      "AI Price Lock, which holds a quoted price for 10 minutes from the time of quote",
      "Optional Delivery Insurance on individual orders",
      "Business Wallet and Delivery Credits for merchant accounts",
      "QuickCarry Plus, an optional paid subscription with enhanced benefits",
    ],
  },
  {
    title: "Riders are independent contractors",
    paragraphs: [
      "Riders on QuickCarry operate as independent contractors, not employees, agents, or partners of QuickCarry. Riders set their own availability through Shift Mode and are free to accept or decline delivery requests, subject to QuickCarry's standard performance and cancellation policies.",
      "Rider Score reflects punctuality, cancellation rate, professionalism, and delivery quality, and may affect a rider's access to demand, incentives, and continued use of the platform.",
    ],
  },
  {
    title: "Pricing, payments, and wallets",
    paragraphs: [
      "Delivery fees are calculated based on distance, vehicle type, and demand, and are shown to you before you confirm a request. Once confirmed under AI Price Lock, that price is honoured for 10 minutes.",
      "Business Wallet balances and Delivery Credits are non-transferable outside your business account and are used solely to pay for QuickCarry deliveries and related fees. Wallet balances do not accrue interest.",
    ],
  },
  {
    title: "Delivery Insurance",
    paragraphs: [
      'Delivery Insurance is an optional add-on, purchased per order, that covers loss or damage to a package in QuickCarry\'s custody between pickup and drop-off, verified against the pickup and drop-off photos captured for that order. It does not cover items that violate our prohibited items policy, pre-existing damage, or loss reported outside the claims window stated in-app at checkout.',
    ],
  },
  {
    title: "QuickCarry Plus",
    paragraphs: [
      "QuickCarry Plus is a monthly subscription offering priority rider matching during peak hours, reduced surge pricing, increased cashback, elevated Delivery Insurance coverage, priority matching with a favorite rider where available, and early access to new cities and features.",
      "Plus subscriptions renew monthly until cancelled and are billed to the payment method on file. Benefits apply prospectively from the date of subscription and don't apply retroactively to past orders.",
    ],
  },
  {
    title: "Prohibited items and conduct",
    paragraphs: [
      "You may not use QuickCarry to send illegal goods, weapons, hazardous materials, currency, or any item prohibited under Nigerian law. QuickCarry may refuse, suspend, or cancel any delivery it reasonably believes violates this policy.",
    ],
    list: [
      "No harassment, threats, or abusive behavior toward riders, merchants, or customers",
      "No fraudulent orders, payment disputes, or manipulation of pricing or promotions",
      "No use of the platform to circumvent QuickCarry's fees",
    ],
  },
  {
    title: "Cancellations and refunds",
    paragraphs: [
      "You may cancel a delivery request before a rider is assigned at no charge. Cancellations after a rider has been assigned or has arrived at pickup may incur a cancellation fee, shown to you at the time of cancellation.",
      "Refunds for failed, undelivered, or insured lost/damaged orders are processed to your original payment method or QuickCarry Wallet, at QuickCarry's discretion, within a reasonable time after the claim is resolved.",
    ],
  },
  {
    title: "Limitation of liability",
    paragraphs: [
      'To the fullest extent permitted by law, QuickCarry provides the Service "as is" and is not liable for indirect, incidental, or consequential damages arising from your use of the Service. For uninsured deliveries, QuickCarry\'s liability for loss or damage to a package is limited to the delivery fee paid for that order.',
    ],
  },
  {
    title: "Termination",
    paragraphs: [
      "You may stop using QuickCarry at any time. We may suspend or terminate your access to the Service if you violate these Terms, engage in fraudulent activity, or pose a risk to other users of the platform.",
    ],
  },
  {
    title: "Governing law",
    paragraphs: [
      "These Terms are governed by the laws of the Federal Republic of Nigeria. Disputes arising from these Terms or your use of the Service are subject to the exclusive jurisdiction of the courts sitting in Abuja, Federal Capital Territory.",
    ],
  },
  {
    title: "Changes to these terms",
    paragraphs: [
      "We may update these Terms as QuickCarry's services evolve. We'll post the revised Terms with an updated effective date, and material changes will be communicated in-app or by email ahead of taking effect.",
    ],
  },
  {
    title: "Contact us",
    paragraphs: [
      "Questions about these Terms can be sent to hello@quickcarry.ng or +234 803 365 1598.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description={`Effective ${EFFECTIVE_DATE}`}
      />
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {sections.map((section, i) => (
            <LegalSection key={section.title} index={i + 1} {...section} />
          ))}
        </div>
      </section>
    </>
  );
}
