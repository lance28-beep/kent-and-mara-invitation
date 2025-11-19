"use client"

import { Section } from "@/components/section"
import { Shirt, Copy, Check, Navigation, MapPin } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Details() {
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set())

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItems(prev => new Set(prev).add(itemId))
      setTimeout(() => {
        setCopiedItems(prev => {
          const newSet = new Set(prev)
          newSet.delete(itemId)
          return newSet
        })
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  // Updated venue information
  const ceremonyVenueName = "Camp Edgar Garden"
  const ceremonyVenueDetail = "Nature's Village Resort"
  const ceremonyAddress = "Talisay City, Negros Occidental 6115, Philippines"
  const ceremonyVenue = `${ceremonyVenueName}, ${ceremonyVenueDetail}, ${ceremonyAddress}`
  const ceremonyMapsLink = `https://maps.google.com/?q=${encodeURIComponent(ceremonyVenue)}`

  const receptionVenueName = "Padre Pio BC"
  const receptionVenueDetail = "Nature's Village Resort"
  const receptionAddress = "Talisay City, Negros Occidental 6115, Philippines"
  const receptionVenue = `${receptionVenueName}, ${receptionVenueDetail}, ${receptionAddress}`
  const receptionMapsLink = `https://maps.google.com/?q=${encodeURIComponent(receptionVenue)}`

  const openInMaps = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }


  return (
    <Section id="details" className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#E8DCC8]/50">
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-crimson)] font-normal text-[#1A1A1A] mb-6 sm:mb-8 uppercase tracking-[0.12em] sm:tracking-[0.15em] drop-shadow-sm">
          Event Details
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] text-[#1A1A1A] font-light max-w-xl mx-auto leading-relaxed tracking-wide drop-shadow-sm px-4">
          Everything you need to know about our special day
        </p>
      </div>

      {/* Venue and Event Information */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20 space-y-10 sm:space-y-14 md:space-y-16">
        
        {/* Ceremony Card */}
        <div className="relative group">
          {/* Subtle glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#1A1A1A]/20 to-[#1A1A1A]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
          {/* Main card */}
          <div className="relative bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#1A1A1A]/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#1A1A1A]/60">
            {/* Venue Image */}
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden">
              <Image
                src="/Details/Camp_Edgar-1_optimized_250.jpg"
                alt="Camp Edgar Garden"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Venue name overlay */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 right-4 sm:right-6 md:right-8">
                <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-ephesis)] text-white/90 mb-2 sm:mb-3 drop-shadow-lg">
                  Ceremony
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-crimson)] font-normal text-white mb-1 sm:mb-2 drop-shadow-lg uppercase tracking-[0.1em]">
                  Camp Edgar Garden
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-white/95 drop-shadow-md tracking-wide">
                  Nature's Village Resort
                </p>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="p-5 sm:p-7 md:p-9 lg:p-11">
              {/* Date Section */}
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                {/* Day name */}
                <p className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] uppercase tracking-[0.2em] mb-3 sm:mb-4">
                  Sunday
                </p>
                
                {/* Month - Script style */}
                <div className="mb-4 sm:mb-5">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-ephesis)] text-[#1A1A1A] leading-none">
                    January
                  </p>
                </div>
                
                {/* Day and Year */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-7 md:mb-8">
                  <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-crimson)] font-normal text-[#1A1A1A] leading-none">
                    11
                  </p>
                  <div className="h-12 sm:h-16 md:h-20 lg:h-24 w-0.5 bg-[#1A1A1A]/50" />
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-crimson)] font-light text-[#1A1A1A] leading-none">
                    2026
                  </p>
                </div>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="h-px w-10 sm:w-14 md:w-20 bg-[#1A1A1A]/50" />
                  <div className="w-1.5 h-1.5 bg-[#1A1A1A]/60 rounded-full" />
                  <div className="h-px w-10 sm:w-14 md:w-20 bg-[#1A1A1A]/50" />
                </div>

                {/* Time */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] tracking-wide">
                  4 O'CLOCK
                </p>
              </div>

              {/* Location Details */}
              <div className="bg-[#E8DCC8]/20 rounded-xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 border border-[#1A1A1A]/15">
                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A1A1A] mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] mb-2 uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#1A1A1A] leading-relaxed">
                      {ceremonyVenueName}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-[#1A1A1A]/70 leading-relaxed mt-1">
                      {ceremonyVenueDetail}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-[#1A1A1A]/70 leading-relaxed">
                      {ceremonyAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => openInMaps(ceremonyMapsLink)}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 bg-[#1A1A1A] hover:bg-[#3C3C3C] text-[#E8DCC8] rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                  aria-label="Get directions to ceremony venue"
                >
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={() => copyToClipboard(ceremonyVenue, 'ceremony')}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 bg-white border-2 border-[#1A1A1A]/30 hover:border-[#1A1A1A]/50 hover:bg-[#E8DCC8]/20 text-[#1A1A1A] rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Copy ceremony venue address"
                >
                  {copiedItems.has('ceremony') ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  )}
                  <span>{copiedItems.has('ceremony') ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reception Card */}
        <div className="relative group">
          {/* Subtle glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#1A1A1A]/20 to-[#1A1A1A]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
          {/* Main card */}
          <div className="relative bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#1A1A1A]/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#1A1A1A]/60">
            {/* Venue Image */}
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden">
              <Image
                src="/Details/3-3.jpg"
                alt="Padre Pio BC"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Venue name overlay */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 right-4 sm:right-6 md:right-8">
                <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-ephesis)] text-white/90 mb-2 sm:mb-3 drop-shadow-lg">
                  Reception
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-crimson)] font-normal text-white mb-1 sm:mb-2 drop-shadow-lg uppercase tracking-[0.1em]">
                  Padre Pio BC
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-white/95 drop-shadow-md tracking-wide">
                  Nature's Village Resort
                </p>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="p-5 sm:p-7 md:p-9 lg:p-11">
              {/* Location Details */}
              <div className="bg-[#E8DCC8]/20 rounded-xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 border border-[#1A1A1A]/15">
                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A1A1A] mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] mb-2 uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#1A1A1A] leading-relaxed">
                      {receptionVenueName}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-[#1A1A1A]/70 leading-relaxed mt-1">
                      {receptionVenueDetail}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-[#1A1A1A]/70 leading-relaxed">
                      {receptionAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => openInMaps(receptionMapsLink)}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 bg-[#1A1A1A] hover:bg-[#3C3C3C] text-[#E8DCC8] rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                  aria-label="Get directions to reception venue"
                >
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={() => copyToClipboard(receptionVenue, 'reception')}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 bg-white border-2 border-[#1A1A1A]/30 hover:border-[#1A1A1A]/50 hover:bg-[#E8DCC8]/20 text-[#1A1A1A] rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Copy reception venue address"
                >
                  {copiedItems.has('reception') ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  )}
                  <span>{copiedItems.has('reception') ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attire Information */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="h-px w-10 sm:w-14 md:w-20 bg-[#1A1A1A]/50" />
            <Shirt className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A1A1A]" />
            <div className="h-px w-10 sm:w-14 md:w-20 bg-[#1A1A1A]/50" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-[family-name:var(--font-crimson)] font-normal text-[#1A1A1A] mb-3 sm:mb-4 uppercase tracking-[0.12em]">
            Attire Guidelines
          </h3>
          <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#1A1A1A]/70 font-light">
            Please dress according to the guidelines below
          </p>
        </div>

        {/* Attire Cards */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          {/* Principal Sponsors */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#1A1A1A]/15 to-[#1A1A1A]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            
            <div className="relative bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-9 border-2 border-[#1A1A1A]/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] mb-6 sm:mb-7 md:mb-8 uppercase tracking-[0.12em] text-center">
                Principal Sponsors
              </h4>
              
              {/* Attire Requirements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-7 sm:mb-8 md:mb-10">
                {/* Men */}
                <div className="relative bg-gradient-to-br from-[#E8DCC8]/30 via-[#E8DCC8]/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#1A1A1A]/20 hover:border-[#1A1A1A]/40 transition-all duration-300 hover:shadow-md group/card">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#1A1A1A] rounded-full mb-4 sm:mb-5 group-hover/card:scale-105 transition-transform duration-300">
                      <span className="text-[#E8DCC8] text-xl sm:text-2xl font-[family-name:var(--font-crimson)] font-semibold">M</span>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] mb-3 sm:mb-4 uppercase tracking-wide">
                      Men
                    </p>
                    <ul className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#1A1A1A]/70 leading-relaxed space-y-1 text-left">
                      <li>• Black suit</li>
                      <li>• White dress shirt</li>
                      <li>• Tie</li>
                      <li>• Black dress pants</li>
                      <li>• Black dress shoes</li>
                    </ul>
                  </div>
                </div>

                {/* Women */}
                <div className="relative bg-gradient-to-br from-[#E8DCC8]/30 via-[#E8DCC8]/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#1A1A1A]/20 hover:border-[#1A1A1A]/40 transition-all duration-300 hover:shadow-md group/card">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#1A1A1A] rounded-full mb-4 sm:mb-5 group-hover/card:scale-105 transition-transform duration-300">
                      <span className="text-[#E8DCC8] text-xl sm:text-2xl font-[family-name:var(--font-crimson)] font-semibold">W</span>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] mb-3 sm:mb-4 uppercase tracking-wide">
                      Women
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#1A1A1A]/70 leading-relaxed">
                      Pastel-colored gowns
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-7">
                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#1A1A1A]/40" />
                <div className="w-1.5 h-1.5 bg-[#1A1A1A]/50 rounded-full" />
                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#1A1A1A]/40" />
              </div>
              
              {/* Color Palette - Single instance at bottom */}
              <div className="text-center bg-gradient-to-br from-[#1A1A1A]/5 via-transparent to-[#1A1A1A]/5 rounded-xl p-5 sm:p-6 md:p-7">
                <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] uppercase tracking-wider mb-4 sm:mb-5">
                  Color Palette for Women
                </p>
                <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-3 border-white bg-[#FFB3BA] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1A1A1A]/20" />
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A]/70">Pastel Pink</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-3 border-white bg-[#BAE1FF] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1A1A1A]/20" />
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A]/70">Pastel Blue</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-3 border-white bg-[#FFFFBA] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1A1A1A]/20" />
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A]/70">Pastel Yellow</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-3 border-white bg-[#BAFFC9] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1A1A1A]/20" />
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A]/70">Pastel Green</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-3 border-white bg-[#E0BBE4] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1A1A1A]/20" />
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A]/70">Pastel Lavender</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guests */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#1A1A1A]/15 to-[#1A1A1A]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            
            <div className="relative bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-9 border-2 border-[#1A1A1A]/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] mb-6 sm:mb-7 md:mb-8 uppercase tracking-[0.12em] text-center">
                Guests
              </h4>
              
              {/* Attire Requirements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-7 sm:mb-8 md:mb-10">
                {/* Men */}
                <div className="relative bg-gradient-to-br from-[#E8DCC8]/30 via-[#E8DCC8]/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#1A1A1A]/20 hover:border-[#1A1A1A]/40 transition-all duration-300 hover:shadow-md group/card">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#1A1A1A] rounded-full mb-4 sm:mb-5 group-hover/card:scale-105 transition-transform duration-300">
                      <span className="text-[#E8DCC8] text-xl sm:text-2xl font-[family-name:var(--font-crimson)] font-semibold">M</span>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] mb-3 sm:mb-4 uppercase tracking-wide">
                      Men
                    </p>
                    <ul className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#1A1A1A]/70 leading-relaxed space-y-1 text-left">
                      <li>• Long-sleeved formal shirt</li>
                      <li className="text-xs sm:text-sm md:text-base">(with or without a jacket)</li>
                      <li>• Muted tones: light grey, beige, taupe, champagne, or soft brown</li>
                      <li>• Dress pants</li>
                      <li>• Dress shoes</li>
                    </ul>
                  </div>
                </div>

                {/* Women */}
                <div className="relative bg-gradient-to-br from-[#E8DCC8]/30 via-[#E8DCC8]/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#1A1A1A]/20 hover:border-[#1A1A1A]/40 transition-all duration-300 hover:shadow-md group/card">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#1A1A1A] rounded-full mb-4 sm:mb-5 group-hover/card:scale-105 transition-transform duration-300">
                      <span className="text-[#E8DCC8] text-xl sm:text-2xl font-[family-name:var(--font-crimson)] font-semibold">W</span>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] mb-3 sm:mb-4 uppercase tracking-wide">
                      Women
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#1A1A1A]/70 leading-relaxed">
                      Formal wear in pastel shades
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-7">
                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#1A1A1A]/40" />
                <div className="w-1.5 h-1.5 bg-[#1A1A1A]/50 rounded-full" />
                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#1A1A1A]/40" />
              </div>
              
              {/* Color Palette - Single instance at bottom */}
              <div className="text-center bg-gradient-to-br from-[#1A1A1A]/5 via-transparent to-[#1A1A1A]/5 rounded-xl p-5 sm:p-6 md:p-7">
                <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] uppercase tracking-wider mb-4 sm:mb-5">
                  Suggested Color Palette
                </p>
                <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-3 border-white bg-[#FFB3BA] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1A1A1A]/20" />
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A]/70">Pastel Pink</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-3 border-white bg-[#BAE1FF] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1A1A1A]/20" />
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A]/70">Pastel Blue</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-3 border-white bg-[#BAFFC9] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1A1A1A]/20" />
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A]/70">Pastel Green</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-3 border-white bg-[#E0BBE4] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1A1A1A]/20" />
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A]/70">Pastel Lavender</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-3 border-white bg-[#D3D3D3] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1A1A1A]/20" />
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A]/70">Light Grey</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-3 border-white bg-[#E8DCC8] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1A1A1A]/20" />
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A]/70">Beige</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-3 border-white bg-[#8B7355] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1A1A1A]/20" />
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A]/70">Taupe</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-3 border-white bg-[#F5E6D3] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1A1A1A]/20" />
                    <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-[#1A1A1A]/70">Champagne</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Reminders Section */}
        <div className="relative group mt-10 sm:mt-14 md:mt-16">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#1A1A1A]/15 to-[#1A1A1A]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
          <div className="relative bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-9 border-2 border-[#1A1A1A]/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <h4 className="text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] mb-6 sm:mb-7 md:mb-8 uppercase tracking-[0.12em] text-center">
              Important Reminders
            </h4>
            
            {/* Reminders List */}
            <div className="space-y-5 sm:space-y-6 md:space-y-7">
              {/* Perfume Allergy */}
              <div className="bg-gradient-to-br from-[#E8DCC8]/30 via-[#E8DCC8]/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#1A1A1A]/20">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#1A1A1A] leading-relaxed">
                  <span className="font-semibold">Scent-Free Request:</span> The bride has a sensitivity to fragrances. We kindly ask all guests to refrain from wearing perfume, cologne, or any scented products.
                </p>
              </div>

              {/* No Plus Ones */}
              <div className="bg-gradient-to-br from-[#E8DCC8]/30 via-[#E8DCC8]/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#1A1A1A]/20">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#1A1A1A] leading-relaxed">
                  <span className="font-semibold">Invitation Only:</span> Due to limited space, we are unable to accommodate additional guests beyond those named on your invitation.
                </p>
              </div>

              {/* Adults Only */}
              <div className="bg-gradient-to-br from-[#E8DCC8]/30 via-[#E8DCC8]/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#1A1A1A]/20">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#1A1A1A] leading-relaxed">
                  <span className="font-semibold">Adult-Only Celebration:</span> This is an adults-only event. We appreciate your understanding that children are not included, with the exception of those specifically invited from our immediate family.
                </p>
              </div>

              {/* No Gifts */}
              <div className="bg-gradient-to-br from-[#E8DCC8]/30 via-[#E8DCC8]/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#1A1A1A]/20">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#1A1A1A] leading-relaxed">
                  <span className="font-semibold">Gift Policy:</span> Your presence is the greatest gift! However, if you wish to honor us with a gift, we would gratefully accept monetary contributions as we prepare for our new journey together and upcoming migration.
                </p>
              </div>

              {/* Dress Code Reminder */}
              <div className="bg-gradient-to-br from-[#E8DCC8]/30 via-[#E8DCC8]/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#1A1A1A]/20">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#1A1A1A] leading-relaxed">
                  <span className="font-semibold">Dress Code Compliance:</span> We kindly request that all guests adhere to the dress code specified on their invitation to maintain the elegance of our celebration.
                </p>
              </div>
            </div>

            {/* Thank You Note */}
            <div className="mt-7 sm:mt-8 md:mt-9 pt-6 sm:pt-7 md:pt-8 border-t border-[#1A1A1A]/20">
              <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#1A1A1A] text-center leading-relaxed italic">
                Thank you for your understanding and cooperation. We look forward to celebrating with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

