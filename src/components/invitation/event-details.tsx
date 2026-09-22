"use client";

import { motion } from "framer-motion";
import {
  CalendarPlus,
  Clock,
  Heart,
  MapPin,
  Moon,
  Navigation,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { toast } from "sonner";
import { Reveal, Arabesque, Corners, SectionHeading, Skyline } from "./atmosphere";
import { Button } from "@/components/ui/button";
import { downloadInvite, openGoogleCalendar } from "@/lib/calendar";
import { wedding } from "@/lib/wedding";

export function EventDetails() {
  const addToCalendar = () => {
    openGoogleCalendar();
    toast.success("Opening Google Calendar...", {
      description: `${wedding.dateLabel} · ${wedding.venue.name}`,
    });
  };

  return (
    <section className="surface-dawn relative overflow-hidden px-6 py-20">
      <Arabesque opacity={0.07} size={140} />
      <div className="relative mx-auto max-w-md">
        <SectionHeading kicker="Join the celebration" title="Event Details" />

        <Reveal delay={0.08} className="mt-10">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="gilded-card relative rounded-3xl p-7 text-center"
          >
            <Corners />
            <p className="font-display text-3xl text-gilded">{wedding.dateLabel}</p>
            <p className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-gold" />
              {wedding.timeLabel}
            </p>
            <div className="my-5 h-px bg-gold/20" />
            <p className="flex items-center justify-center gap-2 font-display text-xl text-foreground">
              <MapPin className="h-4 w-4 text-gold" />
              {wedding.venue.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {wedding.venue.address}
            </p>

            <motion.div whileTap={{ scale: 0.97 }}>
              <Button
                onClick={addToCalendar}
                size="lg"
                className="group relative mt-7 h-12 w-full overflow-hidden rounded-full bg-gold text-base font-medium text-gold-foreground shadow-soft hover:bg-gold/90"
              >
                <span
                  aria-hidden
                  className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gold-foreground/25 transition-all duration-700 group-hover:left-[110%]"
                />
                <CalendarPlus className="mr-2 h-5 w-5" />
                Add to Calendar
              </Button>
            </motion.div>
          </motion.div>
        </Reveal>

        {/* Wedding Itinerary Timeline */}
        <Reveal delay={0.14} className="mt-6">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="gilded-card relative rounded-3xl p-7"
          >
            <Corners />
            <div className="text-center mb-6">
              <p className="text-[0.68rem] uppercase tracking-[0.32em] text-gold">Program Schedule</p>
              <h3 className="mt-1 font-display text-2xl text-foreground">Wedding Itinerary</h3>
            </div>

            <div className="relative space-y-6 before:absolute before:left-5 before:top-3.5 before:bottom-3.5 before:w-px before:bg-gradient-to-b before:from-gold/50 via-gold/30 before:to-gold/10">
              {wedding.itinerary.map((item, idx) => {
                const icons = [Sparkles, Heart, UtensilsCrossed, Moon];
                const ItemIcon = icons[idx % icons.length];
                return (
                  <div key={item.title} className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-card/95 text-gold shadow-soft">
                      <ItemIcon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 pt-0.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-display text-lg font-semibold text-foreground tracking-wide">
                          {item.title}
                        </span>
                        <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                          {item.time}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.18} className="mt-6">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="gilded-card relative overflow-hidden rounded-3xl"
          >
            <div className="relative">
              <img
                src={wedding.venue.preview}
                alt={`Map preview of ${wedding.venue.name}`}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <motion.span
                aria-hidden
                className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blossom/40"
                animate={{ scale: [1, 2.1], opacity: [0.6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              />
            </div>
            <div className="p-5">
              <p className="font-display text-lg text-foreground">Find your way</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Easy approach and parking available at {wedding.venue.name}.
              </p>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="mt-4 h-12 w-full rounded-full border-gold/40 text-base text-foreground hover:bg-blossom/20"
                >
                  <a href={wedding.venue.mapsUrl} target="_blank" rel="noreferrer noopener">
                    <Navigation className="mr-2 h-5 w-5 text-gold" />
                    Get Directions
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Reveal>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <Skyline />
      </div>
    </section>
  );
}
