import { WaitlistForm } from "@/app/components/WaitlistForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6">
      <main className="w-full max-w-lg text-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-3">
          Platnm
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          Coming soon
        </p>
        <p className="text-zinc-500 text-sm sm:text-base mb-10 max-w-sm mx-auto">
          A new way to share and remember music.
        </p>
        <WaitlistForm />
      </main>
    </div>
  );
}
