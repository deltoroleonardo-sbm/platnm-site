"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type LandingVideoProps = {
  src: string;
  onEnded?: () => void;
  poster?: string;
};

export function LandingVideo({ src, onEnded, poster }: LandingVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canEnableSound, setCanEnableSound] = useState(false);
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
        setCanEnableSound(!withSound);
        setHasStarted(true);
      } catch {
        if (withSound) {
          // Fallback: autoplay muted is typically allowed, then let the user enable sound.
          v.muted = true;
          try {
            await v.play();
            setHasStarted(true);
            setCanEnableSound(true);
          } catch {
            // If even muted autoplay fails, we still show a button to start playback.
            setCanEnableSound(true);
          }
        } else {
          setCanEnableSound(true);
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
        className="h-full w-full object-contain sm:object-cover object-top"
        src={src}
        poster={poster}
        playsInline
        controls={false}
        preload="auto"
        onEnded={onEnded}
        onPlay={() => setHasStarted(true)}
      />

      {canEnableSound && (
        <button
          type="button"
          onClick={() => void tryStart({ withSound: true })}
          className="absolute right-4 top-4 rounded-full border border-white/70 bg-black/40 px-4 py-2 text-sm text-white hover:bg-black/55 transition-colors"
          aria-label="Enable sound"
        >
          enable sound
        </button>
      )}

      {hasStarted && (
        <button
          type="button"
          onClick={() => {
            const v = videoRef.current;
            if (!v) return;
            v.muted = !v.muted;
            setCanEnableSound(v.muted);
          }}
          className="absolute left-4 top-4 rounded-full border border-white/70 bg-black/40 px-4 py-2 text-sm text-white hover:bg-black/55 transition-colors"
          aria-label="Toggle sound"
        >
          sound
        </button>
      )}
    </div>
  );
}

