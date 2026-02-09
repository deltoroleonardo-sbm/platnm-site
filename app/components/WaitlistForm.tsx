"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="text-[#ABABAB]">
        you&apos;re in — stay tuned.
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-md mx-auto">
    <form onSubmit={handleSubmit} className="flex flex-row gap-2 w-full items-center justify-center">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="name@email.com"
        required
        disabled={status === "loading"}
        className="flex-1 min-w-0 h-12 px-5 rounded-full bg-black border border-white text-white placeholder:text-[#A0A0A0] focus:outline-none disabled:opacity-60"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="h-12 px-6 rounded-full bg-white text-black font-medium shrink-0 focus:outline-none disabled:opacity-60 hover:bg-white/90 transition-colors"
      >
        sign up
      </button>
    </form>
      {message && status === "error" && (
        <p role="alert" className="text-red-400 text-sm">
          {message}
        </p>
      )}
    </div>
  );
}
