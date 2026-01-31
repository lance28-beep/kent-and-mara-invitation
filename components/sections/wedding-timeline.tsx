"use client"

import { Heart } from "lucide-react"
import Image from "next/image"

interface TimelineEvent {
  time: string
  event: string
  image: string
}

const timelineEvents: TimelineEvent[] = [
  { time: "4:00 PM", event: "Ceremony", image: "/TimelineImage/Ceremony.png" },
  { time: "5:00 PM", event: "Photo Taking", image: "/TimelineImage/PhotoTaking.png" },
  { time: "5:30 PM", event: "Cocktail Hour", image: "/TimelineImage/CocktailHour.png" },
  { time: "6:00 PM", event: "Start of the Program", image: "/TimelineImage/StartoftheProgram.png" },
  { time: "7:00 PM", event: "Dinner Time", image: "/TimelineImage/DinnerTime.png" },
  { time: "9:00 PM", event: "After Party", image: "/TimelineImage/AfterParty.png" },
]

export function WeddingTimeline() {
  return (
    <section
      id="timeline"
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-transparent"
    >
      {/* Section Header - same as Entourage */}
      <div className="relative z-10 text-center mb-6 sm:mb-10 md:mb-12 px-3 sm:px-4 md:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-crimson)] font-normal text-zinc-100 mb-3 sm:mb-4 md:mb-6 uppercase tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em]">
          Wedding Timeline
        </h2>

        <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-zinc-400 font-light max-w-xl mx-auto leading-relaxed tracking-wide px-2 sm:px-4">
          Join us throughout the day
        </p>
      </div>

      {/* Central Card Container - same dark card as Entourage */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="relative group">
          <div
            className="relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #050505 100%)",
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.6), 0 30px 90px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#050505] z-0" />
            <div
              className="absolute inset-0 opacity-60 z-0"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(255,255,255,0.01)] to-transparent opacity-50 z-0" />

            {/* Elegant border */}
            <div
              className="absolute inset-0 rounded-xl sm:rounded-2xl z-0"
              style={{
                padding: "1px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <div className="absolute inset-[1px] rounded-xl sm:rounded-2xl border border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(255,255,255,0.15)] transition-colors z-0" />

            {/* Card content */}
            <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10">
              {/* Timeline Events */}
              <div className="relative">
                <div className="absolute left-8 sm:left-10 md:left-12 lg:left-16 xl:left-[4.5rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-zinc-500/20 via-zinc-500/30 to-zinc-500/20 hidden sm:block" />

                <div className="space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
                  {timelineEvents.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
                        <div className="flex-shrink-0 relative z-10">
                          <Image
                            src={item.image}
                            alt={item.event}
                            width={96}
                            height={96}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain brightness-0 invert"
                          />
                        </div>

                        <div className="flex-1 pt-1 sm:pt-2 md:pt-3 lg:pt-4">
                          <div className="mb-2 sm:mb-3 md:mb-4">
                            <span className="inline-block text-[10px] sm:text-xs md:text-sm lg:text-base font-[family-name:var(--font-crimson)] font-semibold text-zinc-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] bg-zinc-500/20 px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full border border-zinc-500/30">
                              {item.time}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-[family-name:var(--font-crimson)] font-normal text-zinc-100 leading-tight">
                            {item.event}
                          </h3>
                        </div>
                      </div>

                      {index < timelineEvents.length - 1 && (
                        <div className="absolute left-8 top-20 sm:hidden w-0.5 h-6 bg-gradient-to-b from-zinc-500/20 to-zinc-500/30" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative divider - same as Entourage */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 py-4 sm:py-5 my-8 sm:my-10 md:my-12 lg:my-16 xl:my-20">
                <div className="h-px w-12 sm:w-16 md:w-20 bg-zinc-500/40" />
                <div className="w-1.5 h-1.5 bg-zinc-500/50 rounded-full" />
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-zinc-500" fill="currentColor" />
                <div className="w-1.5 h-1.5 bg-zinc-500/50 rounded-full" />
                <div className="h-px w-12 sm:w-16 md:w-20 bg-zinc-500/40" />
              </div>

              {/* Reminder Message - dark inset card */}
              <div className="relative rounded-lg sm:rounded-xl border border-[rgba(255,255,255,0.08)] bg-black/40 p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[family-name:var(--font-crimson)] text-zinc-300 leading-relaxed text-center">
                    It took us a full year to plan this wedding, and we truly hope it&apos;s an evening everyone enjoys.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[family-name:var(--font-crimson)] text-zinc-300 leading-relaxed text-center">
                    We kindly ask our guests to stay with us until the end of the program, as we&apos;ve planned something special and meaningful to conclude the celebration. If you do need to leave earlier, we would absolutely love the chance to personally thank you and say goodbye before you go—perhaps after the same-day video is played.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[family-name:var(--font-crimson)] text-zinc-300 leading-relaxed text-center">
                    Your presence means so much to us, and we&apos;re incredibly grateful to be celebrating this moment together.
                  </p>

                  {/* Closing message */}
                  <div className="pt-3 sm:pt-4 md:pt-6">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                      <div className="h-px w-8 sm:w-12 md:w-16 bg-zinc-500/40" />
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-zinc-500" fill="currentColor" />
                      <div className="h-px w-8 sm:w-12 md:w-16 bg-zinc-500/40" />
                    </div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-[family-name:var(--font-ephesis)] text-zinc-100 text-center italic">
                      Don&apos;t eat and run
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
