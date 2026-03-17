"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type LandingVideoProps = {
  src: string;
  onEnded?: () => void;
  poster?: string;
};

export function LandingVideo({ src, onEnded, poster }: LandingVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [needsGesture, setNeedsGesture] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

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
        setNeedsGesture(false);
        setHasStarted(true);
      } catch {
        setNeedsGesture(true);
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
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        playsInline
        controls={false}
        muted={false}
        preload="auto"
        onEnded={onEnded}
        onPlay={() => setHasStarted(true)}
      />

      {needsGesture && (
        <button
          type="button"
          onClick={() => void tryStart({ withSound: true })}
          className="absolute inset-0 flex items-center justify-center bg-black/40 px-6 text-center"
          aria-label="Play video with sound"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-white text-black h-12 px-6 font-medium hover:bg-white/90 transition-colors">
            tap to play with sound
          </span>
        </button>
      )}

      {!needsGesture && hasStarted && (
        <button
          type="button"
          onClick={() => {
            const v = videoRef.current;
            if (!v) return;
            v.muted = !v.muted;
          }}
          className="absolute right-4 top-4 rounded-full border border-white/70 bg-black/40 px-4 py-2 text-sm text-white hover:bg-black/55 transition-colors"
          aria-label="Toggle sound"
        >
          sound
        </button>
      )}
    </div>
  );
}

