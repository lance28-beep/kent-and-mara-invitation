"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Instagram,
  Twitter,
  Facebook,
  MapPin,
  Calendar,
  Clock,
  Heart,
  Music2,
} from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const quotes = [
    "In every love story, there's a moment when two hearts become one, and ours is just beginning.",
    "Two souls, one heart—forever entwined in the journey of love and faith together.",
    "Love is not about finding the perfect person, but learning to see an imperfect person perfectly.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
      }, 3000);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting) {
      if (displayedText.length > 0) {
        const deleteTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 30);
        return () => clearTimeout(deleteTimeout);
      } else {
        setIsDeleting(false);
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      }
    } else {
      const currentQuote = quotes[currentQuoteIndex];
      if (displayedText.length < currentQuote.length) {
        const typeTimeout = setTimeout(() => {
          setDisplayedText(currentQuote.slice(0, displayedText.length + 1));
        }, 50);
        return () => clearTimeout(typeTimeout);
      } else {
        setIsPaused(true);
        setIsDeleting(true);
      }
    }
  }, [displayedText, isDeleting, isPaused, currentQuoteIndex, quotes]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const nav = [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#story" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Snap & Share", href: "#snap-share" },
    { label: "RSVP", href: "#guest-list" },
  ] as const;

  return (
    <footer className="relative z-20 mt-16 overflow-hidden bg-[#E8DCC8]">
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Wedding date presentation */}
        <motion.div
          className="flex justify-center px-4 mb-16"
          variants={fadeInUp}
        >
          <div className="max-w-2xl w-full">
            {/* Save The Date Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              {/* Top decorative line */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#1A1A1A]/50" />
                <div className="w-1.5 h-1.5 bg-[#1A1A1A]/60 rounded-full" />
                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#1A1A1A]/50" />
              </div>

              {/* Save The Date text */}
              <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A] uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6">
                Save The Date
              </p>

              {/* Bottom decorative line */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#1A1A1A]/50" />
                <div className="w-1.5 h-1.5 bg-[#1A1A1A]/60 rounded-full" />
                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#1A1A1A]/50" />
              </div>
            </div>

            {/* Date Section - Elegant Layout */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              {/* Month - Elegant script style */}
              <div className="mb-4 sm:mb-5 md:mb-6">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-ephesis)] text-[#1A1A1A] leading-none">
                  January
                </p>
              </div>

              {/* Day and Year - Horizontal layout with divider */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                {/* Day - Large and bold focal point */}
                <p className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-[family-name:var(--font-crimson)] font-bold text-[#3C3C3C] leading-none drop-shadow-lg">
                  11
                </p>

                {/* Vertical divider */}
                <div className="h-16 sm:h-20 md:h-24 lg:h-28 w-px bg-[#1A1A1A]/50" />

                {/* Year - Elegant and refined */}
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-crimson)] font-light text-[#1A1A1A] leading-none">
                  2026
                </p>
              </div>

              {/* Day of Week */}
              <p className="text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-crimson)] font-light text-[#1A1A1A]/80 mb-6 sm:mb-8">
                Sunday
              </p>
            </div>

            {/* Time Section */}
            <div className="text-center">
              {/* Top decorative line */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#1A1A1A]/50" />
                <div className="w-1.5 h-1.5 bg-[#1A1A1A]/60 rounded-full" />
                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#1A1A1A]/50" />
              </div>

              {/* Time */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A] tracking-wide mb-4 sm:mb-5">
                4 O'CLOCK
              </p>

              {/* Bottom decorative line */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#1A1A1A]/50" />
                <div className="w-1.5 h-1.5 bg-[#1A1A1A]/60 rounded-full" />
                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#1A1A1A]/50" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Couple Info */}
          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-[#E8DCC8]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-ephesis)] text-[#1A1A1A]">
                  Kenneth & Angel
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-[family-name:var(--font-crimson)] text-[#1A1A1A]">
                  <Calendar className="w-5 h-5 text-[#1A1A1A]/70" />
                  <span className="text-lg">January 11, 2026 • Sunday</span>
                </div>
                <div className="flex items-center gap-3 font-[family-name:var(--font-crimson)] text-[#1A1A1A]">
                  <MapPin className="w-5 h-5 text-[#1A1A1A]/70" />
                  <span>Nature's Village Resort, Talisay City, Negros Occidental 6115, Philippines</span>
                </div>
              </div>
            </div>

            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#1A1A1A]/20 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="font-[family-name:var(--font-crimson)] text-[#1A1A1A] italic text-lg leading-relaxed min-h-[80px]">
                "{displayedText}
                <span className="inline-block w-0.5 h-6 bg-[#1A1A1A] ml-1 animate-pulse">
                  |
                </span>
                "
              </blockquote>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-[#1A1A1A]/70 rounded-full" />
                <div className="w-2 h-2 bg-[#1A1A1A]/50 rounded-full" />
                <div className="w-2 h-2 bg-[#1A1A1A]/70 rounded-full" />
              </div>
            </motion.div>
          </motion.div>

          {/* Event Details quick tiles */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#1A1A1A]/20 hover:border-[#1A1A1A]/40 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center shadow-md">
                  <Clock className="w-5 h-5 text-[#E8DCC8]" />
                </div>
                <h4 className="font-[family-name:var(--font-crimson)] font-bold text-xl text-[#1A1A1A]">
                  Ceremony
                </h4>
              </div>
              <div className="space-y-3 font-[family-name:var(--font-crimson)] text-[#1A1A1A] text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#1A1A1A]/70" />
                  <span>Camp Edgar Garden</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#1A1A1A]/70" />
                  <span>4 O'CLOCK</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#1A1A1A]/20 hover:border-[#1A1A1A]/40 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center shadow-md">
                  <Heart className="w-5 h-5 text-[#E8DCC8]" />
                </div>
                <h4 className="font-[family-name:var(--font-crimson)] font-bold text-xl text-[#1A1A1A]">
                  Reception
                </h4>
              </div>
              <div className="space-y-3 font-[family-name:var(--font-crimson)] text-[#1A1A1A] text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#1A1A1A]/70" />
                  <span>Padre Pio BC</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#1A1A1A]/70" />
                  <span>Following Ceremony</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact + Quick Links */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h4 className="font-[family-name:var(--font-crimson)] font-bold text-xl mb-6 flex items-center gap-3 text-[#1A1A1A]">
                <div className="w-2 h-8 bg-[#1A1A1A]/50 rounded-full" /> Follow
                Us
              </h4>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/60 border-2 border-[#1A1A1A]/20 hover:border-[#1A1A1A]/40 hover:bg-white/80 transition-all hover:scale-110 shadow-md"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-[#1A1A1A]" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/60 border-2 border-[#1A1A1A]/20 hover:border-[#1A1A1A]/40 hover:bg-white/80 transition-all hover:scale-110 shadow-md"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#1A1A1A]" />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/60 border-2 border-[#1A1A1A]/20 hover:border-[#1A1A1A]/40 hover:bg-white/80 transition-all hover:scale-110 shadow-md"
                  aria-label="TikTok"
                >
                  <Music2 className="w-5 h-5 text-[#1A1A1A]" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/60 border-2 border-[#1A1A1A]/20 hover:border-[#1A1A1A]/40 hover:bg-white/80 transition-all hover:scale-110 shadow-md"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-[#1A1A1A]" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-[family-name:var(--font-crimson)] font-bold text-lg mb-4 text-[#1A1A1A]">
                Quick Links
              </h5>
              <div className="space-y-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors duration-200 font-[family-name:var(--font-crimson)] text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          className="border-t border-[#1A1A1A]/20 pt-8"
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-[#1A1A1A] font-[family-name:var(--font-crimson)] text-sm">
                © {year} Kenneth & Angel. All rights reserved.
              </p>
              <p className="text-[#1A1A1A]/80 font-[family-name:var(--font-crimson)] text-sm mt-1">
                Made with 💕 for our special day
              </p>
            </div>

            <div className="text-center md:text-right space-y-1">
              <p className="text-[#1A1A1A]/70 font-[family-name:var(--font-crimson)] text-xs">
                Developed by{" "}
                <a
                  href="https://lance28-beep.github.io/portfolio-website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A1A1A] hover:text-[#3C3C3C] transition-colors duration-200 underline decoration-[#1A1A1A]/40 hover:decoration-[#1A1A1A]/70 font-semibold"
                >
                  Lance Valle
                </a>
              </p>
              <p className="text-[#1A1A1A]/70 font-[family-name:var(--font-crimson)] text-xs">
                Want a website like this? Visit{" "}
                <a
                  href="https://www.facebook.com/WeddingInvitationNaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A1A1A] hover:text-[#3C3C3C] transition-colors duration-200 underline decoration-[#1A1A1A]/40 hover:decoration-[#1A1A1A]/70 font-semibold"
                >
                  Wedding Invitation Naga
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
