"use client";

import { motion } from "framer-motion";
import { Music, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { wedding } from "@/lib/wedding";

export function MusicPlayer({ autoPlayTrigger = false }: { autoPlayTrigger?: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Attempt to play when autoPlayTrigger becomes true (e.g. user opened the invitation)
  useEffect(() => {
    if (!audioRef.current) return;

    if (autoPlayTrigger && !isPlaying && !hasInteracted) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Autoplay waiting for direct user gesture:", err);
          });
      }
    }
  }, [autoPlayTrigger, hasInteracted, isPlaying]);

  const togglePlay = () => {
    setHasInteracted(true);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      toast("Background music paused", { icon: "⏸️" });
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          toast.success("Playing background music", {
            description: "Areeba & Adnan's Wedding Song",
          });
        })
        .catch((err) => {
          console.warn("Audio play error:", err);
        });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={wedding.bgMusic.src} type="audio/mp4" />
        <source src={wedding.bgMusic.srcWebm} type="audio/webm" />
      </audio>

      {/* Floating Ambient Music Controller */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="fixed top-4 right-4 z-[75] sm:top-6 sm:right-6"
      >
        <motion.button
          type="button"
          onClick={togglePlay}
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.05 }}
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
          className={`group relative flex items-center gap-2 rounded-full border px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md shadow-soft transition-all duration-300 ${
            isPlaying
              ? "border-gold/50 bg-card/85 text-foreground shadow-[0_0_15px_rgba(217,160,78,0.25)]"
              : "border-gold/30 bg-card/75 text-muted-foreground hover:text-foreground"
          }`}
        >
          {/* Animated Equalizer Waves when playing */}
          <div className="relative flex h-5 w-5 items-center justify-center">
            {isPlaying ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="flex items-center justify-center"
              >
                <Music className="h-4 w-4 text-gold" />
              </motion.div>
            ) : (
              <VolumeX className="h-4 w-4 text-muted-foreground" />
            )}
          </div>

          {isPlaying && (
            <div className="flex items-end gap-0.5 h-3">
              {[0.4, 0.9, 0.6, 0.8].map((initialHeight, i) => (
                <motion.span
                  key={i}
                  className="w-0.5 rounded-full bg-gold"
                  animate={{
                    height: ["30%", "100%", "30%"],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                  style={{ height: `${initialHeight * 100}%` }}
                />
              ))}
            </div>
          )}

          <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-foreground/80 sm:inline-block hidden">
            {isPlaying ? "Music On" : "Music Off"}
          </span>
        </motion.button>
      </motion.div>
    </>
  );
}
