import { WaitlistForm } from "@/app/components/WaitlistForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <main className="flex flex-col items-center justify-center w-full max-w-lg text-center">
        <h1 className="font-benzin font-extrabold text-white text-5xl sm:text-6xl mb-2">
          platnm
        </h1>
        <p className="text-white text-lg sm:text-xl mb-12">put people on</p>
        <WaitlistForm />
      </main>
    </div>
  );
}
