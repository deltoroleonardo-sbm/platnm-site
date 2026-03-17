"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type LandingVideoProps = {
  src: string;
  onEnded?: () => void;
  poster?: string;
};

export function LandingVideo({ src, onEnded, poster }: LandingVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const canAutoplayUnmuted = useMemo(() => {
    if (typeof window === "undefined") return false;
    // Most browsers block unmuted autoplay; we optimistically try and fall back.
    return true;
  }, []);

  const tryStart = useCallback(
    async (opts?: { withSound?: boolean }) => {
      const v = videoRef.current;
      if (!v) return;

      const withSound = opts?.withSound ?? true;
      v.muted = !withSound;

      try {
        await v.play();
        setHasStarted(true);
        setIsMuted(v.muted);
      } catch {
        if (withSound) {
          // Fallback: autoplay muted is typically allowed, then let the user enable sound.
          v.muted = true;
          try {
            await v.play();
            setHasStarted(true);
            setIsMuted(true);
          } catch {
            // If even muted autoplay fails, we still show a button to start playback.
            setIsMuted(true);
          }
        } else {
          setIsMuted(true);
        }
      }
    },
    []
  );

  useEffect(() => {
    if (!canAutoplayUnmuted) return;
    void tryStart({ withSound: true });
  }, [canAutoplayUnmuted, tryStart]);

  return (
    <div className="relative h-[100svh] w-full bg-black overflow-hidden">
      <video
        ref={videoRef}
        className="h-full w-full object-contain sm:object-cover"
        src={src}
        poster={poster}
        playsInline
        controls={false}
        preload="auto"
        onEnded={onEnded}
        onPlay={() => setHasStarted(true)}
      />

      <button
        type="button"
        onClick={() => {
          const v = videoRef.current;
          if (!v) return;

          if (!hasStarted) {
            void tryStart({ withSound: true });
            return;
          }

          v.muted = !v.muted;
          setIsMuted(v.muted);
        }}
        className="absolute right-4 top-4 rounded-full border border-white/70 bg-black/40 p-2 text-white hover:bg-black/55 transition-colors"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <path d="m23 9-6 6" />
            <path d="m17 9 6 6" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M19 5a10 10 0 0 1 0 14" />
          </svg>
        )}
      </button>
    </div>
  );
}

