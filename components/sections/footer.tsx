"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
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
    { label: "Countdown", href: "#countdown" },
    { label: "Messages", href: "#messages" },
    { label: "Details", href: "#details" },
    { label: "Entourage", href: "#entourage" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "RSVP", href: "#guest-list" },
    { label: "Registry", href: "#registry" },
    { label: "FAQ", href: "#faq" },
    { label: "Snap & Share", href: "#snap-share" },
  ] as const;

  return (
    <footer
      className="relative z-20 mt-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #0a0a0a 40%, #050505 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Save The Date – aligned with hero section */}
        <motion.div
          className="flex justify-center px-4 mb-16"
          variants={fadeInUp}
        >
          <div className="max-w-xl md:max-w-2xl w-full text-center">
            {/* Monogram – same as hero */}
            <div className="mb-8 sm:mb-9 md:mb-10 flex justify-center">
              <Image
                src="/monogram/monogram.png"
                alt="Jay-R & Jennifer"
                width={240}
                height={240}
                className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 object-contain object-center brightness-0 invert"
              />
            </div>

            {/* Fine divider – hero style */}
            <div className="mb-6 sm:mb-7 md:mb-8 flex justify-center">
              <div className="h-px w-24 sm:w-32 md:w-40 bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
            </div>

            {/* Date + time block – hero structure */}
            <div className="mb-7 sm:mb-9 md:mb-10">
              <p className="text-[11px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] tracking-[0.38em] text-zinc-400 uppercase mb-4 sm:mb-5">
                March
              </p>
              <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-14 mb-3 sm:mb-4">
                <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] tracking-[0.3em] text-zinc-500 uppercase">
                  Sunday
                </p>
                <p className="text-4xl sm:text-5xl md:text-[3.25rem] font-[family-name:var(--font-crimson)] text-zinc-50 leading-none">
                  15
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] tracking-[0.3em] text-zinc-500 uppercase">
                  At 4 PM
                </p>
              </div>
              <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] tracking-[0.3em] text-zinc-400 uppercase">
                2026
              </p>
            </div>

            {/* Fine divider – hero style */}
            <div className="mt-6 sm:mt-7 md:mt-8 mb-6 sm:mb-7 flex justify-center">
              <div className="h-px w-24 sm:w-32 md:w-40 bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
            </div>

            {/* Location block – hero content */}
            <div className="space-y-2 sm:space-y-3 md:space-y-3.5">
              <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] tracking-[0.3em] text-zinc-500 uppercase">
                Ceremony &amp; Reception
              </p>
              <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] tracking-[0.2em] text-zinc-100 uppercase">
                Twin Lakes Tagaytay, Glass House
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] tracking-[0.16em] text-zinc-400 uppercase">
                Tagaytay, Philippines
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Couple Info – aligned with hero */}
          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <div className="mb-8">
              <div className="mb-6">
                <Image
                  src="/monogram/monogram.png"
                  alt="Japoi & Regine"
                  width={80}
                  height={80}
                  className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 object-contain object-center brightness-0 invert"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-crimson)] font-semibold text-zinc-100 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-6">
              Japoi & Regine
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-[family-name:var(--font-crimson)] text-zinc-300 font-medium">
                  <Calendar className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                  <span className="text-base sm:text-lg">March 15, 2026 • Sunday</span>
                </div>
                <div className="flex items-center gap-3 font-[family-name:var(--font-crimson)] text-zinc-300 font-medium">
                  <MapPin className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Twin Lakes Tagaytay, Glass House • Tagaytay, Philippines</span>
                </div>
              </div>
            </div>

            <motion.div
              className="rounded-2xl p-6 border border-white/10 bg-zinc-900/50 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.3), 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="font-[family-name:var(--font-crimson)] text-zinc-300 font-medium italic text-base sm:text-lg leading-relaxed min-h-[80px]">
                "{displayedText}
                <span className="inline-block w-0.5 h-6 bg-zinc-400 ml-1 animate-pulse">
                  |
                </span>
                "
              </blockquote>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-zinc-500 rounded-full" />
                <div className="w-2 h-2 bg-zinc-600 rounded-full" />
                <div className="w-2 h-2 bg-zinc-500 rounded-full" />
              </div>
            </motion.div>
          </motion.div>

          {/* Event Details quick tiles */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <motion.div
              className="rounded-2xl p-6 border border-white/10 bg-zinc-900/50 hover:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.3), 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center border border-white/10">
                  <Clock className="w-5 h-5 text-zinc-200" />
                </div>
                <h4 className="font-[family-name:var(--font-crimson)] font-bold text-lg sm:text-xl text-zinc-200">
                  Ceremony
                </h4>
              </div>
              <div className="space-y-3 font-[family-name:var(--font-crimson)] text-zinc-400 font-medium text-sm sm:text-base">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-zinc-500" />
                  <span>Twin Lakes Tagaytay, Glass House</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-zinc-500" />
                  <span>4:00 PM</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl p-6 border border-white/10 bg-zinc-900/50 hover:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.3), 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center border border-white/10">
                  <Heart className="w-5 h-5 text-zinc-200" />
                </div>
                <h4 className="font-[family-name:var(--font-crimson)] font-bold text-lg sm:text-xl text-zinc-200">
                  Reception
                </h4>
              </div>
              <div className="space-y-3 font-[family-name:var(--font-crimson)] text-zinc-400 font-medium text-sm sm:text-base">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-zinc-500" />
                  <span>Twin Lakes Tagaytay, Glass House</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-zinc-500" />
                  <span>To follow</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact + Quick Links */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h4 className="font-[family-name:var(--font-crimson)] font-bold text-lg sm:text-xl mb-6 flex items-center gap-3 text-zinc-100">
                <div className="w-2 h-8 bg-zinc-500 rounded-full" /> Follow Us
              </h4>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-zinc-800 border border-white/10 hover:border-white/20 hover:bg-zinc-700 transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-zinc-200" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-zinc-800 border border-white/10 hover:border-white/20 hover:bg-zinc-700 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-zinc-200" />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-zinc-800 border border-white/10 hover:border-white/20 hover:bg-zinc-700 transition-all hover:scale-110"
                  aria-label="TikTok"
                >
                  <Music2 className="w-5 h-5 text-zinc-200" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-zinc-800 border border-white/10 hover:border-white/20 hover:bg-zinc-700 transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-zinc-200" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-[family-name:var(--font-crimson)] font-bold text-base sm:text-lg mb-4 text-zinc-100">
                Quick Links
              </h5>
              <div className="space-y-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-zinc-300 font-medium hover:text-zinc-100 transition-colors duration-200 font-[family-name:var(--font-crimson)] text-sm sm:text-base hover:pl-2"
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
          className="border-t border-white/10 pt-8"
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-zinc-300 font-[family-name:var(--font-crimson)] text-sm sm:text-base font-semibold">
                © {year} Japoi & Regine. All rights reserved.
              </p>
              <p className="text-zinc-400 font-[family-name:var(--font-crimson)] text-sm sm:text-base mt-1 font-medium">
                Made with 💕 for our special day
              </p>
            </div>

            <div className="text-center md:text-right space-y-1">
              <p className="text-zinc-400 font-[family-name:var(--font-crimson)] text-xs sm:text-sm font-medium">
                Developed by{" "}
                <a
                  href="https://lance28-beep.github.io/portfolio-website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-zinc-100 transition-colors duration-200 underline decoration-zinc-500 hover:decoration-zinc-300 font-semibold"
                >
                  Lance Valle
                </a>
              </p>
              <p className="text-zinc-400 font-[family-name:var(--font-crimson)] text-xs sm:text-sm font-medium">
                Want a website like this? Visit{" "}
                <a
                  href="https://www.facebook.com/WeddingInvitationNaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-zinc-100 transition-colors duration-200 underline decoration-zinc-500 hover:decoration-zinc-300 font-semibold"
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
