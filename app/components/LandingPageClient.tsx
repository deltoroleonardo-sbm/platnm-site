"use client";

import Link from "next/link";
import { useCallback } from "react";
import { LandingVideo } from "@/app/components/LandingVideo";

export function LandingPageClient() {
  const detailsId = "details";
  const appStoreUrl = "https://apps.apple.com/us/app/platnm/id6758260157";

  const handleEnded = useCallback(() => {
    document.getElementById(detailsId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <div className="bg-black">
      <LandingVideo src="/landing.mp4" onEnded={handleEnded} />

      <section id={detailsId} className="min-h-[100svh] bg-black flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center justify-center w-full max-w-lg text-center">
            <h1 className="font-benzin font-extrabold text-white text-5xl sm:text-6xl mb-2">
              platnm
            </h1>
            <p className="text-white text-lg sm:text-xl mb-10">put people on</p>

            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-full bg-white text-black font-medium inline-flex items-center justify-center hover:bg-white/90 transition-colors"
            >
              download on the app store
            </a>
          </div>
        </main>

        <footer className="py-6 text-center">
          <Link href="/privacy" className="text-gray-500 text-sm hover:text-gray-400">
            Privacy Policy
          </Link>
          <span className="text-gray-500 text-sm mx-2">|</span>
          <Link href="/terms" className="text-gray-500 text-sm hover:text-gray-400">
            Terms
          </Link>
        </footer>
      </section>
    </div>
  );
}

