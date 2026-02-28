import Link from "next/link";
import { WaitlistForm } from "@/app/components/WaitlistForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center justify-center w-full max-w-lg text-center">
          <h1 className="font-benzin font-extrabold text-white text-5xl sm:text-6xl mb-2">
            platnm
          </h1>
          <p className="text-white text-lg sm:text-xl mb-12">put people on</p>
          <WaitlistForm />
        </div>
      </main>
      <footer className="py-6 text-center">
        <Link
          href="/privacy"
          className="text-gray-500 text-sm hover:text-gray-400"
        >
          Privacy Policy
        </Link>
        <span className="text-gray-500 text-sm mx-2">|</span>
        <Link
          href="/terms"
          className="text-gray-500 text-sm hover:text-gray-400"
        >
          Terms
        </Link>
      </footer>
    </div>
  );
}
