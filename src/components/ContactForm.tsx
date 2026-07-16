"use client";

import { useState, type FormEvent } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Tell us your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setError("Add a message so we know how to help.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 border-2 border-ink bg-volt p-10 text-center">
        <CheckCircleIcon className="h-10 w-10 text-ink" />
        <p className="text-lg font-black uppercase tracking-tight text-ink">
          Message sent
        </p>
        <p className="text-sm text-ink/70">
          Thanks {name.split(" ")[0]} — we&apos;ll reply to {email} shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label
          htmlFor="name"
          className="text-xs font-bold uppercase tracking-widest text-ink/60"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="mt-2 w-full border-2 border-ink bg-cream px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-ink"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="text-xs font-bold uppercase tracking-widest text-ink/60"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="mt-2 w-full border-2 border-ink bg-cream px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-ink"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-xs font-bold uppercase tracking-widest text-ink/60"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
          className="mt-2 w-full border-2 border-ink bg-cream px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-ink"
        />
      </div>

      {error && <p className="text-sm font-bold text-ink">{error}</p>}

      <button
        type="submit"
        className="mt-2 border-2 border-ink bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
      >
        Send message
      </button>
    </form>
  );
}
