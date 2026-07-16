import {
  CubeIcon,
  PaperAirplaneIcon,
  CalendarDaysIcon,
  MapIcon,
  LockClosedIcon,
  UsersIcon,
  WalletIcon,
  SignalIcon,
  ScaleIcon,
  ShieldCheckIcon,
  CameraIcon,
  QrCodeIcon,
  StarIcon,
  FireIcon,
  BanknotesIcon,
  ClockIcon,
  GiftIcon,
  TrophyIcon,
  HomeIcon,
  CurrencyDollarIcon,
  PresentationChartBarIcon,
  ClipboardDocumentCheckIcon,
  UserPlusIcon,
  MapPinIcon,
  ArchiveBoxIcon,
  TruckIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import type { ComponentType, SVGProps } from "react";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export type Feature = {
  icon: IconType;
  title: string;
  description: string;
};

export const coreProducts: Feature[] = [
  {
    icon: CubeIcon,
    title: "Instant Delivery",
    description:
      "Food, groceries, pharmacy, fashion, electronics, and documents — delivered in minutes.",
  },
  {
    icon: PaperAirplaneIcon,
    title: "Send Anything",
    description:
      "Parcels, gifts, documents, luggage, or business inventory, moved between homes and offices.",
  },
  {
    icon: CalendarDaysIcon,
    title: "Scheduled Delivery",
    description:
      "Book for today, tomorrow, next week, or set up recurring runs. Built for businesses.",
  },
  {
    icon: MapIcon,
    title: "Multi-stop Delivery",
    description:
      "One rider, several drop-offs — perfect for boutiques, restaurants, offices, and vendors.",
  },
];

export const differentiators: Feature[] = [
  {
    icon: LockClosedIcon,
    title: "AI Price Lock",
    description:
      "Request a delivery and your price is locked for 10 minutes. No surprises at checkout.",
  },
  {
    icon: UsersIcon,
    title: "Group Delivery",
    description:
      "Customers heading to the same area share a rider and split the cost — Pool, for deliveries.",
  },
  {
    icon: SignalIcon,
    title: "Smart ETA",
    description:
      "“Rider is 2.3 km away, traffic is moderate, arriving in 12 mins.” Live confidence, not guesses.",
  },
  {
    icon: ScaleIcon,
    title: "Price Comparison",
    description:
      "See bike, car, van, and truck pricing side by side before you commit.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Delivery Insurance",
    description:
      "Tick “Protect my package” for ₦100. Damaged or lost, QuickCarry covers it.",
  },
  {
    icon: CameraIcon,
    title: "Photo Verification",
    description:
      "Photos at pickup and drop-off from both merchant and customer. No disputes.",
  },
  {
    icon: QrCodeIcon,
    title: "QR Delivery",
    description:
      "Skip typing OTPs — the rider scans a QR code and you're done, faster.",
  },
  {
    icon: WalletIcon,
    title: "Business Wallet",
    description:
      "Businesses preload ₦50k–₦500k for discounts, monthly invoices, and analytics.",
  },
];

export const riderFeatures: Feature[] = [
  {
    icon: StarIcon,
    title: "Rider Score",
    description:
      "Beyond star ratings: punctuality, cancellation rate, professionalism, and delivery quality.",
  },
  {
    icon: FireIcon,
    title: "Heat Map",
    description:
      "See the areas with the highest demand, best earnings, and active incentives.",
  },
  {
    icon: BanknotesIcon,
    title: "Instant Cash Out",
    description: "Withdraw your earnings anytime, no waiting for payout days.",
  },
  {
    icon: ClockIcon,
    title: "Shift Mode",
    description:
      "Go online for a morning, evening, or weekend shift so businesses can plan capacity.",
  },
];

export const rewardFeatures: Feature[] = [
  {
    icon: TrophyIcon,
    title: "Subscription — QuickCarry Plus",
    description:
      "₦2,000/month for priority riders, elevated insurance, 2x cashback, and lower surge pricing.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Cashback",
    description: "Spend ₦10,000, earn ₦300 back to use on future deliveries.",
  },
  {
    icon: GiftIcon,
    title: "Referral Levels",
    description:
      "Bronze, Silver, Gold, Diamond — each level unlocks cheaper delivery and higher rewards.",
  },
  {
    icon: HomeIcon,
    title: "Family Account",
    description:
      "One wallet, multiple users — built for parents, companies, and schools.",
  },
];

export const merchantFeatures: Feature[] = [
  {
    icon: PresentationChartBarIcon,
    title: "Merchant Dashboard",
    description:
      "Sales, delivery performance, repeat customers, peak hours, failed deliveries, and revenue trends.",
  },
];

export const trackingMilestones: { label: string; icon: IconType }[] = [
  { label: "Order received", icon: ClipboardDocumentCheckIcon },
  { label: "Rider assigned", icon: UserPlusIcon },
  { label: "Rider at pickup", icon: MapPinIcon },
  { label: "Package collected", icon: ArchiveBoxIcon },
  { label: "En route", icon: TruckIcon },
  { label: "Nearby", icon: SignalIcon },
  { label: "Delivered", icon: CheckCircleIcon },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "Where and when is QuickCarry launching?",
    answer:
      "We're launching first in Abuja. Join the waitlist and we'll email you the moment booking opens in your area.",
  },
  {
    question: "How does AI Price Lock work?",
    answer:
      "When you request a delivery, QuickCarry locks your quoted price for 10 minutes — no re-quoting, no surge surprises between requesting and confirming.",
  },
  {
    question: "What's covered by Delivery Insurance?",
    answer:
      "Tick “Protect my package” for ₦100 on any delivery. If it's damaged or lost in transit, QuickCarry covers it — verified with the pickup and drop-off photos every rider takes.",
  },
  {
    question: "How do I become a QuickCarry rider?",
    answer:
      "Join the waitlist and select “Rider.” We'll reach out with onboarding steps, including how Rider Score, Shift Mode, and instant cash out work once we launch in your area.",
  },
  {
    question: "What is the Business Wallet?",
    answer:
      "Businesses preload ₦50,000, ₦100,000, or ₦500,000 for discounted rates, monthly invoicing, and a dashboard covering sales, peak hours, and rider performance.",
  },
  {
    question: "What is Group Delivery?",
    answer:
      "Customers heading to the same area can share a rider and split the cost — like ride pooling, but for deliveries.",
  },
  {
    question: "What does QuickCarry Plus include?",
    answer:
      "For ₦2,000/month: priority riders during peak hours, lower surge pricing, 2x cashback on every order, elevated delivery insurance coverage, priority matching with your favorite rider, and early access to new cities and features.",
  },
  {
    question: "How can businesses or partners get in touch?",
    answer:
      "Call +234 803 365 1598, email hello@quickcarry.ng, or use the contact form — we read every message and reply within a business day.",
  },
];
