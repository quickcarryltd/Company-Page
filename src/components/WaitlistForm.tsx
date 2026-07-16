"use client";

import { useState, type FormEvent } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

type Role = "customer" | "rider" | "business";

const roles: { value: Role; label: string }[] = [
  { value: "customer", label: "Customer" },
  { value: "rider", label: "Rider" },
  { value: "business", label: "Business" },
];

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("customer");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-3 border-2 border-ink bg-cream p-8 text-center">
        <CheckCircleIcon className="h-10 w-10 text-ink" />
        <p className="text-lg font-black uppercase tracking-tight text-ink">
          You&apos;re on the list
        </p>
        <p className="text-sm text-ink/70">
          We&apos;ll email {email} the moment QuickCarry launches in Abuja.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-xl flex-col gap-4"
      noValidate
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-2 border-ink bg-cream px-5 py-3.5 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-ink"
        />
        <button
          type="submit"
          className="shrink-0 border-2 border-ink bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
        >
          Notify me
        </button>
      </div>

      <div className="flex items-center justify-center gap-2">
        {roles.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setRole(value)}
            className={`border-2 border-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
              role === value ? "bg-ink text-cream" : "bg-transparent text-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {error && (
        <p className="text-center text-sm font-bold text-ink">{error}</p>
      )}
    </form>
  );
}
