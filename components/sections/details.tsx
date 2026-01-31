"use client"

import { Section } from "@/components/section"
import { Shirt, Copy, Check, Navigation, MapPin } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { QRCodeSVG } from "qrcode.react"

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

  // Venue information (aligned with hero and FAQ)
  const ceremonyVenueName = "Twin Lakes Tagaytay, Glass House"
  const ceremonyVenueDetail = ""
  const ceremonyAddress = "Tagaytay, Philippines"
  const ceremonyVenue = `${ceremonyVenueName}, ${ceremonyAddress}`
  const ceremonyMapsLink = `https://maps.google.com/?q=${encodeURIComponent(ceremonyVenue)}`

  const openInMaps = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }


  return (
    <Section id="details" className="relative py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
          <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-crimson)] font-normal text-zinc-100 mb-4 sm:mb-6 uppercase tracking-[0.12em] sm:tracking-[0.15em]">
          Event Details
        </h2>
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
          <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
        </div>
        <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-zinc-400 font-light max-w-xl mx-auto leading-relaxed tracking-wide px-4">
          Everything you need to know about our special day
        </p>
      </div>

      {/* Venue and Event Information */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 md:mb-16 space-y-6 sm:space-y-10 md:space-y-14">
        
        {/* Ceremony Card */}
        <div className="relative group">
          {/* Main card */}
          <div 
            className="relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #050505 100%)',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.6), 0 30px 90px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#050505] z-0" />
            <div 
              className="absolute inset-0 opacity-60 z-0"
              style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(255,255,255,0.01)] to-transparent opacity-50 z-0" />
            
            {/* Elegant border */}
            <div 
              className="absolute inset-0 rounded-xl sm:rounded-2xl z-0"
              style={{
                padding: '1px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <div className="absolute inset-[1px] rounded-xl sm:rounded-2xl border border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(255,255,255,0.15)] transition-colors z-0" />
            {/* Venue Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
              <Image
                src="/Details/TwinLakesTagaytayGlassHouse.jpg"
                alt="Twin Lakes Tagaytay, Glass House"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Venue name overlay */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 right-3 sm:right-4 md:right-6">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-ephesis)] text-zinc-300 mb-1 sm:mb-2 drop-shadow-lg">
                  Ceremony & Reception
                </p>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[family-name:var(--font-crimson)] font-normal text-white mb-0.5 sm:mb-1 drop-shadow-lg uppercase tracking-[0.1em] leading-tight">
                  Twin Lakes Tagaytay
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-white/95 drop-shadow-md tracking-wide">
                  Glass House
                </p>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="relative z-10 p-3 sm:p-5 md:p-7 lg:p-9">
              {/* Date Section */}
              <div className="text-center mb-5 sm:mb-8 md:mb-10">
                {/* Day name */}
                <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] font-semibold text-zinc-400 uppercase tracking-[0.2em] mb-2 sm:mb-3">
                  Sunday
                </p>
                
                {/* Month - Script style */}
                <div className="mb-2 sm:mb-4">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-ephesis)] text-zinc-200 leading-none">
                    March
                  </p>
                </div>
                
                {/* Day and Year */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-7">
                  <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-crimson)] font-normal text-zinc-50 leading-none">
                    15
                  </p>
                  <div className="h-10 sm:h-12 md:h-16 lg:h-20 w-[2px] bg-gradient-to-b from-zinc-600 via-zinc-500 to-zinc-600" />
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-crimson)] font-light text-zinc-200 leading-none">
                    2026
                  </p>
                </div>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="h-[1px] w-8 sm:w-10 md:w-14 bg-gradient-to-r from-transparent via-zinc-500 to-zinc-500" />
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-zinc-500 rounded-full" />
                  <div className="h-[1px] w-8 sm:w-10 md:w-14 bg-gradient-to-l from-transparent via-zinc-500 to-zinc-500" />
                </div>

                {/* Time */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[family-name:var(--font-crimson)] font-semibold text-zinc-200 tracking-wide">
                  4:00 PM
                </p>
              </div>

              {/* Location Details */}
              <div className="bg-zinc-900/50 rounded-xl p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 border border-white/10">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-zinc-300 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] font-semibold text-zinc-300 mb-1.5 sm:mb-2 uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-[family-name:var(--font-crimson)] text-zinc-200 leading-relaxed">
                      {ceremonyVenueName}
                    </p>
                    {ceremonyVenueDetail && (
                      <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] text-zinc-400 leading-relaxed mt-1">
                        {ceremonyVenueDetail}
                      </p>
                    )}
                    <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] text-zinc-400 leading-relaxed">
                      {ceremonyAddress}
                    </p>
                  </div>
                  {/* QR Code for Ceremony - Right side */}
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-shrink-0">
                    <div className="bg-white p-1.5 sm:p-2 md:p-2.5 rounded-lg border border-white/20 shadow-sm">
                      <QRCodeSVG
                        value={ceremonyMapsLink}
                        size={80}
                        level="M"
                        includeMargin={false}
                        fgColor="#000000"
                        bgColor="#FFFFFF"
                      />
                    </div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-[family-name:var(--font-crimson)] text-zinc-400 italic text-center max-w-[80px]">
                      Scan for directions
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <button
                  onClick={() => openInMaps(ceremonyMapsLink)}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/20"
                  aria-label="Get directions to ceremony venue"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={() => copyToClipboard(ceremonyVenue, 'ceremony')}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-zinc-900/50 border-2 border-white/20 hover:border-white/30 hover:bg-zinc-800/50 text-zinc-200 rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Copy ceremony venue address"
                >
                  {copiedItems.has('ceremony') ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 text-zinc-300" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  )}
                  <span>{copiedItems.has('ceremony') ? 'Copied!' : 'Copy Address'}</span>
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
            <div className="h-px w-10 sm:w-14 md:w-20 bg-zinc-500/50" />
            <Shirt className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-300" />
            <div className="h-px w-10 sm:w-14 md:w-20 bg-zinc-500/50" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-[family-name:var(--font-crimson)] font-normal text-zinc-100 mb-3 sm:mb-4 uppercase tracking-[0.12em]">
            Attire Guidelines
          </h3>
          <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-zinc-400 font-light">
            Please dress according to the guidelines below
          </p>
        </div>

        {/* Attire Cards */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          {/* Guest Attire */}
          <div className="relative group">
            <div 
              className="relative rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-9 transition-all duration-300 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #050505 100%)',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.6), 0 30px 90px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#050505]" />
              <div 
                className="absolute inset-0 opacity-60"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%)',
                }}
              />
              <div className="absolute inset-0 border border-white/10 rounded-xl sm:rounded-2xl" />
              
              <div className="relative z-10">
                <h4 className="text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-crimson)] font-semibold text-zinc-200 mb-6 sm:mb-7 md:mb-8 uppercase tracking-[0.12em] text-center">
                  Guest Attire
                </h4>
                
                {/* Guest Dress Code Text */}
                <div className="text-center mb-7 sm:mb-8 md:mb-10">
                  <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] text-zinc-200 leading-relaxed mb-4">
                    <span className="font-semibold">Gentlemen:</span> Black slacks or formal black wear—black suit, pants and tie
                  </p>
                  <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] text-zinc-200 leading-relaxed">
                    <span className="font-semibold">Ladies:</span> Elegant black (silky or glittery black are welcome)
                  </p>
                </div>

                {/* Decorative divider */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-7">
                  <div className="h-px w-12 sm:w-16 md:w-20 bg-zinc-500/40" />
                  <div className="w-1.5 h-1.5 bg-zinc-500/50 rounded-full" />
                  <div className="h-px w-12 sm:w-16 md:w-20 bg-zinc-500/40" />
                </div>
                
                {/* Color Palette - Elegant Black */}
                <div className="text-center bg-zinc-900/50 rounded-xl p-5 sm:p-6 md:p-7 border border-white/10">
                  <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] font-semibold text-zinc-300 uppercase tracking-wider mb-4 sm:mb-5">
                    Color Palette — Elegant Black Attire
                  </p>
                  <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                    <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-2 border-white/20 bg-[#0a0a0a] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-white/20" />
                      <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-zinc-400">Black</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-2 border-white/20 bg-[#262626] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#262626]/40" />
                      <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-zinc-400">Charcoal</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-2 border-white/20 bg-[#404040] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#404040]/40" />
                      <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-zinc-400">Slate</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-2 border-white/20 bg-[#1e293b] hover:scale-110 hover:shadow-xl transition-all duration-300 ring-2 ring-[#1e293b]/40" />
                      <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] font-medium text-zinc-400">Gunmetal</span>
                    </div>
                  </div>
                  <p className="mt-5 text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-zinc-400 leading-relaxed">
                    We kindly request elegant black or formal dark attire. Please avoid printed outfits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Principal Sponsors Attire */}
          <div className="relative group">
            <div 
              className="relative rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-9 transition-all duration-300 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #050505 100%)',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.6), 0 30px 90px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#050505]" />
              <div 
                className="absolute inset-0 opacity-60"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%)',
                }}
              />
              <div className="absolute inset-0 border border-white/10 rounded-xl sm:rounded-2xl" />
              
              <div className="relative z-10">
                <h4 className="text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-crimson)] font-semibold text-zinc-200 mb-6 sm:mb-7 md:mb-8 uppercase tracking-[0.12em] text-center">
                  Principal Sponsors' Attire
                </h4>
                
                {/* Sponsors Dress Code Text */}
                <div className="text-center">
                  <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] text-zinc-200 leading-relaxed mb-4">
                    <span className="font-semibold">Gentlemen:</span> Black slacks or formal black wear—black suit, pants and tie
                  </p>
                  <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] text-zinc-200 leading-relaxed">
                    <span className="font-semibold">Ladies:</span> Elegant black (silky or glittery black are welcome)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Reminders Section */}
        <div className="relative group mt-10 sm:mt-14 md:mt-16">
          <div 
            className="relative rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-9 transition-all duration-300 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #050505 100%)',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.6), 0 30px 90px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#050505]" />
            <div 
              className="absolute inset-0 opacity-60"
              style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%)',
              }}
            />
            <div className="absolute inset-0 border border-white/10 rounded-xl sm:rounded-2xl" />
            
            <div className="relative z-10">
              <h4 className="text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-crimson)] font-semibold text-zinc-200 mb-6 sm:mb-7 md:mb-8 uppercase tracking-[0.12em] text-center">
                Important Reminders
              </h4>
              
              {/* Reminders List */}
              <div className="space-y-5 sm:space-y-6 md:space-y-7">
                {/* Attendance Limited */}
                <div className="bg-zinc-900/50 rounded-xl p-5 sm:p-6 md:p-7 border border-white/10">
                  <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-zinc-200 leading-relaxed">
                    <span className="font-semibold">Invitation Only:</span> As we celebrate this moment with our closest loved ones, we kindly ask that attendance be limited to those named on the invitation.
                  </p>
                </div>

                {/* No Boxed Gifts */}
                <div className="bg-zinc-900/50 rounded-xl p-5 sm:p-6 md:p-7 border border-white/10">
                  <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-zinc-200 leading-relaxed">
                    <span className="font-semibold">Gift Policy:</span> We kindly ask for no boxed gifts. Monetary gifts are welcome but never expected.
                  </p>
                </div>

                {/* Adults Only */}
                <div className="bg-zinc-900/50 rounded-xl p-5 sm:p-6 md:p-7 border border-white/10">
                  <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-zinc-200 leading-relaxed">
                    <span className="font-semibold">Adults-Only Event:</span> We love your little ones, but to keep the celebration intimate, we kindly request an adults-only event. (Children in our family and the entourage are the exception)
                  </p>
                </div>

                {/* No Photos */}
                <div className="bg-zinc-900/50 rounded-xl p-5 sm:p-6 md:p-7 border border-white/10">
                  <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-zinc-200 leading-relaxed">
                    <span className="font-semibold">Photo Policy:</span> We'd love for everyone to be fully present. Please avoid posting photos during the celebration or ahead of time—our photographers will take care of the memories.
                  </p>
                </div>
              </div>

              {/* Thank You Note */}
              <div className="mt-7 sm:mt-8 md:mt-9 pt-6 sm:pt-7 md:pt-8 border-t border-white/10">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-zinc-300 text-center leading-relaxed italic">
                  Thank you for your understanding and cooperation. We look forward to celebrating with you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

