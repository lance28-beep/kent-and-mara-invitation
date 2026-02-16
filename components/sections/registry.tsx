"use client";

import { useState } from "react";
import { Section } from "@/components/section";
import { Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Registry() {
  const [activeQR, setActiveQR] = useState<"QR1" | "QR2">("QR1");

  return (
    <Section
      id="registry"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* Section Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-crimson)] font-normal text-zinc-100 mb-4 sm:mb-6 uppercase tracking-[0.12em] sm:tracking-[0.15em]">
          Gift Registry
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-zinc-400 font-light max-w-xl mx-auto leading-relaxed tracking-wide px-4">
          Your presence is the greatest gift we could ask for
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="relative group">
          <div
            className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-14 transition-all duration-300 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #0D1C7A 0%, #0E228C 50%, #0F299F 100%)",
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.6), 0 30px 90px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1C7A] via-[#0E228C] to-[#0F299F] z-0" />
            <div
              className="absolute inset-0 opacity-60 z-0"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%)",
              }}
            />
            <div className="absolute inset-0 border border-white/10 rounded-xl sm:rounded-2xl z-0" />

            <div className="relative z-10 flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10">
              {/* Heart icon */}
              <div className="bg-[#0F299F]/50 p-2.5 sm:p-3 rounded-full shadow-lg border border-white/10">
                <Heart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-zinc-200" />
              </div>

              {/* Main message */}
              <div className="text-center space-y-5 sm:space-y-6 max-w-2xl">
                {/* First message */}
                <div>
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div className="h-px w-12 sm:w-16 md:w-20 bg-white/20" />
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
                    <div className="h-px w-12 sm:w-16 md:w-20 bg-white/20" />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-[family-name:var(--font-crimson)] font-light text-zinc-200 leading-relaxed tracking-wide">
                    Your presence at our wedding is the most precious gift.
                  </p>
                </div>

                {/* Second message */}
                <div>
                  <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] font-light text-zinc-400 leading-relaxed tracking-wide">
                    We kindly ask for no boxed gifts. Monetary gifts are welcome
                    but never expected.
                  </p>
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
                    <div className="h-px w-12 sm:w-16 md:w-20 bg-white/20" />
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
                    <div className="h-px w-12 sm:w-16 md:w-20 bg-white/20" />
                  </div>
                </div>

                {/* QR Code Section */}
                <div className="mt-6 sm:mt-8 md:mt-10">
                  <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                    <div className="text-center">
                      <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] font-semibold text-zinc-200 mb-1.5 sm:mb-2 uppercase tracking-wider">
                        Scan to send gift
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-400 font-[family-name:var(--font-crimson)]">
                        Thank you for your generosity
                      </p>
                    </div>

                    {/* Toggle Buttons */}
                    <div className="flex items-center gap-3 bg-[#0F299F]/20 p-1 rounded-lg border border-white/10">
                      <button
                        onClick={() => setActiveQR("QR1")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 font-[family-name:var(--font-crimson)] ${
                          activeQR === "QR1"
                            ? "bg-[#0D1C7A] text-white shadow-lg"
                            : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                        }`}
                      >
                        Option 1
                      </button>
                      <button
                        onClick={() => setActiveQR("QR2")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 font-[family-name:var(--font-crimson)] ${
                          activeQR === "QR2"
                            ? "bg-[#0D1C7A] text-white shadow-lg"
                            : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                        }`}
                      >
                        Option 2
                      </button>
                    </div>

                    {/* QR Code Display */}
                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 bg-white rounded-xl p-3 sm:p-4 border border-white/20 shadow-lg transition-all duration-500 ease-in-out">
                      <div className={`absolute inset-0 p-3 sm:p-4 transition-opacity duration-500 ${activeQR === 'QR1' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                        <Image
                          src="/QR/QR1.png"
                          alt="QR Code 1"
                          fill
                          className="object-contain rounded-lg"
                          sizes="(max-width: 768px) 176px, 240px"
                        />
                      </div>
                      <div className={`absolute inset-0 p-3 sm:p-4 transition-opacity duration-500 ${activeQR === 'QR2' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                        <Image
                          src="/QR/QR2.png"
                          alt="QR Code 2"
                          fill
                          className="object-contain rounded-lg"
                          sizes="(max-width: 768px) 176px, 240px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
