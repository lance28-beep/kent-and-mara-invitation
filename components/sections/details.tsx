"use client"

import { Section } from "@/components/section"
import { Shirt, Copy, Check, Navigation, MapPin, Gift, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { QRCodeSVG } from "qrcode.react"
import StarBorder from "@/components/ui/StarBorder"

const CEREMONY_IMAGES = [
  "/Details/ceremony1.png",
] as const
const RECEPTION_IMAGES = [
  "/Details/reception1.jpg",
] as const
const VENUE_IMAGE_INTERVAL_MS = 4000

export function Details() {
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set())
  const [ceremonyImageIndex, setCeremonyImageIndex] = useState(0)
  const [receptionImageIndex, setReceptionImageIndex] = useState(0)

  // Rotate venue images every 4 seconds with smooth crossfade
  useEffect(() => {
    const ceremonyId = setInterval(() => {
      setCeremonyImageIndex((i) => (i + 1) % CEREMONY_IMAGES.length)
    }, VENUE_IMAGE_INTERVAL_MS)
    
    const receptionId = setInterval(() => {
      setReceptionImageIndex((i) => (i + 1) % RECEPTION_IMAGES.length)
    }, VENUE_IMAGE_INTERVAL_MS)

    return () => {
      clearInterval(ceremonyId)
      clearInterval(receptionId)
    }
  }, [])

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
  const ceremonyVenueName = "Municipal Trial Court 2nd Floor"
  const ceremonyVenueDetail = "Prosperidad, Agusan del Sur"
  const ceremonyVenue = `${ceremonyVenueName}, ${ceremonyVenueDetail}`
  const ceremonyMapsLink = `https://maps.google.com/?q=${encodeURIComponent(ceremonyVenue)}`

  const receptionVenueName = "RCBI Hotel 5th Floor"
  const receptionVenueDetail = "National Highway, San Isidro"
  const receptionAddress = "San Francisco, Agusan del Sur"
  const receptionVenue = `${receptionVenueName}, ${receptionVenueDetail}, ${receptionAddress}`
  const receptionMapsLink = "https://www.google.com/maps/place/Rcbi+Hotel,+San+Francisco,+Agusan+del+Sur/@8.4855457,125.9711051,16z/data=!4m6!3m5!1s0x32fdfccdde0b68b1:0xa584f08778072c0e!8m2!3d8.4855457!4d125.9711051!16s%2Fg%2F11sg8r1zgl?g_ep=Eg1tbF8yMDI2MDIxMV8wIJvbDyoASAJQAg%3D%3D&fbclid=IwY2xjawQAfZlleHRuA2FlbQIxMABicmlkETJYUlR6UkM3aklnd1BtSnB6c3J0YwZhcHBfaWQPNTE0NzcxNTY5MjI4MDYxAAEenYhRlPqiNQXgtKZ6D8KqqXMVmy-vxGTxuEuIU3xJhbp6xk-JKQKx1DrC78A_aem_3XmPgsGbGejA3yQs3FaIzA"

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
        
              {/* Ceremony Card */}
              <StarBorder
                as="div"
                className="relative group w-full"
                color="#FFD700"
                speed="5s"
              >
          {/* Main card */}
          <div 
            className="relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #0D1C7A 0%, #0E228C 50%, #0F299F 100%)',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.6), 0 30px 90px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1C7A] via-[#0E228C] to-[#0F299F] z-0" />
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
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden">
                {CEREMONY_IMAGES.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Ceremony Venue"
                    fill
                    className={`object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 ${
                      i === ceremonyImageIndex ? "opacity-100 z-[1]" : "opacity-0 z-0"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                    priority={i === 0}
                  />
                ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[2] pointer-events-none" />
              
              {/* Venue name overlay */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 right-3 sm:right-4 md:right-6 z-10 isolate pointer-events-none">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-ephesis)] text-zinc-300 mb-1 sm:mb-2 drop-shadow-lg">
                  The Ceremony
                </p>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[family-name:var(--font-crimson)] font-normal text-white mb-0.5 sm:mb-1 drop-shadow-lg uppercase tracking-[0.1em] leading-tight">
                  Municipal Trial Court
                  <span className="block text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] font-light text-zinc-300 mt-0.5">2nd Floor</span>
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-white/95 drop-shadow-md tracking-wide">
                  Prosperidad, Agusan del Sur
                </p>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="relative z-10 p-3 sm:p-5 md:p-7 lg:p-9">
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
                    <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] text-zinc-400 leading-relaxed mt-1">
                      {ceremonyVenueDetail}
                    </p>
                  </div>
                  {/* QR Code */}
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
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#0D1C7A] hover:bg-[#0F299F] text-zinc-100 rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/20"
                  aria-label="Get directions to ceremony venue"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={() => copyToClipboard(ceremonyVenue, 'ceremony')}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#0D1C7A]/50 border-2 border-white/20 hover:border-white/30 hover:bg-[#0F299F]/50 text-zinc-200 rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
        </StarBorder>

              {/* Reception Card */}
              <StarBorder
                as="div"
                className="relative group w-full"
                color="#FFD700"
                speed="5s"
              >
          {/* Main card */}
          <div 
            className="relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #0D1C7A 0%, #0E228C 50%, #0F299F 100%)',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.6), 0 30px 90px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1C7A] via-[#0E228C] to-[#0F299F] z-0" />
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
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden">
                {RECEPTION_IMAGES.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Reception Venue"
                    fill
                    className={`object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 ${
                      i === receptionImageIndex ? "opacity-100 z-[1]" : "opacity-0 z-0"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                    priority={false}
                  />
                ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[2] pointer-events-none" />
              
              {/* Venue name overlay */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 right-3 sm:right-4 md:right-6 z-10 isolate pointer-events-none">
                <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-ephesis)] text-zinc-300 mb-1 sm:mb-2 drop-shadow-lg">
                  The Reception
                </p>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[family-name:var(--font-crimson)] font-normal text-white mb-0.5 sm:mb-1 drop-shadow-lg uppercase tracking-[0.1em] leading-tight">
                  RCBI Hotel
                  <span className="block text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] font-light text-zinc-300 mt-0.5">5th Floor</span>
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-white/95 drop-shadow-md tracking-wide">
                  San Francisco, Agusan del Sur
                </p>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="relative z-10 p-3 sm:p-5 md:p-7 lg:p-9">
              <div className="bg-zinc-900/50 rounded-xl p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 border border-white/10">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-zinc-300 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] font-semibold text-zinc-300 mb-1.5 sm:mb-2 uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-[family-name:var(--font-crimson)] text-zinc-200 leading-relaxed">
                      {receptionVenueName}
                    </p>
                    <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] text-zinc-400 leading-relaxed mt-1">
                      {receptionVenueDetail}
                    </p>
                    <p className="text-[10px] sm:text-xs md:text-sm font-[family-name:var(--font-crimson)] text-zinc-400 leading-relaxed">
                      {receptionAddress}
                    </p>
                  </div>
                  {/* QR Code */}
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-shrink-0">
                    <div className="bg-white p-1.5 sm:p-2 md:p-2.5 rounded-lg border border-white/20 shadow-sm">
                      <QRCodeSVG
                        value={receptionMapsLink}
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
                  onClick={() => openInMaps(receptionMapsLink)}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#0D1C7A] hover:bg-[#0F299F] text-zinc-100 rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/20"
                  aria-label="Get directions to reception venue"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Get Directions</span>
                </button>
                 <button
                  onClick={() => copyToClipboard(receptionVenue, 'reception')}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#0D1C7A]/50 border-2 border-white/20 hover:border-white/30 hover:bg-[#0F299F]/50 text-zinc-200 rounded-lg font-[family-name:var(--font-crimson)] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Copy reception venue address"
                >
                  {copiedItems.has('reception') ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 text-zinc-300" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  )}
                  <span>{copiedItems.has('reception') ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>
          </div>
        </StarBorder>
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
      
        </div>

        {/* Attire Image - blue container */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <StarBorder
            as="div"
            className="w-full max-w-2xl relative group"
            color="#FFD700"
            speed="5s"
          >
            <div 
              className="relative rounded-xl sm:rounded-2xl p-2 sm:p-3 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0D1C7A 0%, #0E228C 50%, #0F299F 100%)',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.6), 0 30px 90px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D1C7A] via-[#0E228C] to-[#0F299F] z-0" />
              <div 
                className="absolute inset-0 opacity-60"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%)',
                }}
              />
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] rounded-lg overflow-hidden bg-white/5">
                <Image
                  src="/Details/Attireguide.png"
                  alt="Attire guidelines"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 672px"
                />
              </div>
            </div>
          </StarBorder>
        </div>

        {/* Attire Cards */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          {/* Guest Attire */}
          <StarBorder
            as="div"
            className="relative group w-full"
            color="#FFD700"
            speed="5s"
          >
            <div 
              className="relative rounded-xl sm:rounded-2xl p-4 sm:p-7 md:p-9 transition-all duration-300 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0D1C7A 0%, #0E228C 50%, #0F299F 100%)',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.6), 0 30px 90px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D1C7A] via-[#0E228C] to-[#0F299F] z-0" />
              <div 
                className="absolute inset-0 opacity-60"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%)',
                }}
              />
              <div className="absolute inset-0 border border-white/10 rounded-xl sm:rounded-2xl" />
              
              <div className="relative z-10">
           
                
                {/* Guest Dress Code Text */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-7 sm:mb-8 md:mb-10">
                  <div className="bg-[#0F299F]/30 rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 h-full">
                    <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] font-semibold text-zinc-200 mb-2 sm:mb-3 uppercase tracking-wide">
                      For Gentlemen
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-zinc-300 leading-relaxed">
                      We invite you to dress in formal attire inspired by our motif — Navy Blue, Royal Blue, Gold, or White. Suits and ties are most preferred. If you want a simpler look, a long‑sleeved shirt in these shades is also a comfortable option.
                    </p>
                  </div>
                  <div className="bg-[#0F299F]/30 rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 h-full">
                    <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] font-semibold text-zinc-200 mb-2 sm:mb-3 uppercase tracking-wide">
                      For Ladies
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] text-zinc-300 leading-relaxed">
                      Grace the celebration in elegant attire inspired by our motif — Navy Blue, Royal Blue, Gold, or White. Whether glittery, silky, or simply refined, choose the style that makes you feel radiant and comfortable as you celebrate with us.
                    </p>
                  </div>
                </div>

                {/* Decorative divider */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-7">
                  <div className="h-px w-12 sm:w-16 md:w-20 bg-zinc-500/40" />
                  <div className="w-1.5 h-1.5 bg-zinc-500/50 rounded-full" />
                  <div className="h-px w-12 sm:w-16 md:w-20 bg-zinc-500/40" />
                </div>
                
                {/* Color Palette Image */}
                <div className="text-center bg-[#0F299F]/30 rounded-xl p-4 sm:p-6 border border-white/10 overflow-hidden mt-7">
                    <p className="text-base sm:text-lg font-[family-name:var(--font-crimson)] font-semibold text-zinc-200 mb-4 uppercase tracking-wide">
                      Color Palette
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                      <div className="flex flex-col items-center gap-2">
                         <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white/20 shadow-lg" style={{ backgroundColor: '#BD974C' }} />
                         <span className="text-[10px] text-zinc-400 font-mono">#BD974C</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                         <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white/20 shadow-lg" style={{ backgroundColor: '#0F299F' }} />
                         <span className="text-[10px] text-zinc-400 font-mono">#0F299F</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                         <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white/20 shadow-lg" style={{ backgroundColor: '#0D1C7A' }} />
                         <span className="text-[10px] text-zinc-400 font-mono">#0D1C7A</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </StarBorder>
        </div>

        {/* Important Reminders Section */}
        <StarBorder
          as="div"
          className="relative group mt-10 sm:mt-14 md:mt-16 w-full"
          color="#FFD700"
          speed="5s"
        >
          <div 
            className="relative rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-9 transition-all duration-300 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0D1C7A 0%, #0E228C 50%, #0F299F 100%)',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.6), 0 30px 90px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1C7A] via-[#0E228C] to-[#0F299F] z-0" />
            <div 
              className="absolute inset-0 opacity-60"
              style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%)',
              }}
            />
            <div className="absolute inset-0 border border-white/10 rounded-xl sm:rounded-2xl" />
            
            <div className="relative z-10">
              <h4 className="text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-crimson)] font-semibold text-zinc-200 mb-6 sm:mb-7 md:mb-8 uppercase tracking-[0.12em] text-center">
              Gentle Reminder
              </h4>
              
              {/* Reminders List */}
              <div className="space-y-5 sm:space-y-6 md:space-y-7">
                {/* Celebration Details */}

                {/* Invitation Only - icon + message */}
                <div className="bg-zinc-900/50 rounded-xl p-5 sm:p-6 md:p-7 border border-white/10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-300 mt-0.5 flex-shrink-0" aria-hidden />
                    <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-zinc-200 leading-relaxed">
                    With love, we kindly ask that this invitation not be shared and be honored only by those who received it.
                    </p>
                  </div>
                </div>

                {/* Gifts - icon + message */}
                <div className="bg-zinc-900/50 rounded-xl p-5 sm:p-6 md:p-7 border border-white/10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Shirt className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-300 mt-0.5 flex-shrink-0" aria-hidden />
                      <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-zinc-200 leading-relaxed">
                        Please no slippers or overly casual outfits.
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StarBorder>
      </div>
    </Section>
  )
}

