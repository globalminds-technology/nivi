"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, X, Heart, Wand2, Check } from "lucide-react";

export function FloatingSareeMatch() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if dismissed in this browsing session
    const dismissed = sessionStorage.getItem("nivi_saree_match_popup_dismissed");
    if (!dismissed) {
      // Small graceful entrance delay when website opens
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPopup(false);
    sessionStorage.setItem("nivi_saree_match_popup_dismissed", "true");
  };

  return (
    <div className="fixed bottom-20 md:bottom-8 right-3 md:right-8 z-40 flex flex-col items-end pointer-events-auto">
      {/* Innovative Atelier Card linking to Saree Match - Significantly Enriched & Enlarged */}
      {showPopup && (
        <div className="relative mb-4 w-[355px] sm:w-[440px] md:w-[490px] rounded-[32px] overflow-hidden bg-[#FAF6EE] border-2 border-[#C9A45C]/80 shadow-[0_24px_60px_rgba(7,60,53,0.3)] animate-in fade-in slide-in-from-bottom-6 duration-400">
          
          {/* Top Decorative Banner with Royal Emerald & Gold Gradient */}
          <div className="relative px-6 pt-5 pb-4 bg-gradient-to-r from-[#04201c] via-[#073C35] to-[#0A483F] text-white">
            {/* Background subtle glow effect */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#E5C378]/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-[#E5C378]/20 border border-[#E5C378]/50 flex items-center justify-center text-[#E5C378] shadow-inner">
                  <Wand2 className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-sans font-bold tracking-widest text-[#E5C378] uppercase">
                      AI Saree Stylist
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[9.5px] font-semibold bg-[#E5C378] text-[#073C35] uppercase tracking-wider">
                      Interactive Matchmaker
                    </span>
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#FFFDF9] tracking-tight">
                    Find Your Dream Saree Match
                  </h4>
                </div>
              </div>

              {/* Close 'X' Button with smooth hover effect */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close popup"
                className="h-8 w-8 rounded-full bg-black/25 hover:bg-white/20 text-[#E5C378] hover:text-white border border-[#E5C378]/40 transition-all flex items-center justify-center cursor-pointer shrink-0"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          {/* Card Body with Warm Silk Ivory Tone */}
          <div className="p-5 sm:p-6 space-y-4 bg-gradient-to-b from-[#FFFDF9] to-[#FAF4EA]">
            <p className="text-[13px] sm:text-sm font-serif text-[#3A2D23] leading-relaxed">
              Skip endless scrolling! Tell us your occasion and aesthetic preferences, and let our matchmaker curate the exact handloom weave crafted for you.
            </p>

            {/* Visual Value Props */}
            <div className="grid grid-cols-3 gap-2.5 py-1">
              <div className="flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-white/90 border border-[#C9A45C]/40 shadow-xs">
                <Sparkles className="h-5 w-5 text-[#C9A45C] mb-1.5" />
                <span className="text-xs font-serif font-bold text-[#1E1611]">8 Quick Qs</span>
                <span className="text-[9.5px] text-[#7A624E] font-sans">Under 2 mins</span>
              </div>

              <div className="flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-white/90 border border-[#C9A45C]/40 shadow-xs">
                <Palette className="h-5 w-5 text-[#073C35] mb-1.5" />
                <span className="text-xs font-serif font-bold text-[#1E1611]">Color & Style</span>
                <span className="text-[9.5px] text-[#7A624E] font-sans">Custom palette</span>
              </div>

              <div className="flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-white/90 border border-[#C9A45C]/40 shadow-xs">
                <Heart className="h-5 w-5 text-[#7A1B2D] mb-1.5 fill-[#7A1B2D]/20" />
                <span className="text-xs font-serif font-bold text-[#1E1611]">Curated Fits</span>
                <span className="text-[9.5px] text-[#7A624E] font-sans">100% Handpicked</span>
              </div>
            </div>

            {/* Interactive Call-to-Action Bar */}
            <div className="pt-3 flex items-center justify-between gap-4 border-t border-[#C9A45C]/30">
              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-serif font-semibold text-[#073C35]">
                <Check className="h-4 w-4 text-emerald-600" />
                <span>Instant Silhouette & Weave Guide</span>
              </div>

              <Link
                href="/quiz"
                className="group/btn relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white font-sans text-xs sm:text-sm font-bold transition-all hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-xl overflow-hidden shrink-0"
                style={{
                  background: "linear-gradient(135deg, #0B4B42 0%, #073C35 45%, #7A1B2D 100%)",
                }}
              >
                <span>Take Saree Quiz</span>
                <ArrowRight className="h-4 w-4 text-[#E5C378] group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Downward indicator beak pointing cleanly to the float button */}
          <div className="absolute -bottom-2 right-8 w-4.5 h-4.5 rotate-45 bg-[#FAF4EA] border-r-2 border-b-2 border-[#C9A45C]/80" />
        </div>
      )}

      {/* Floating Action Button: Saree Atelier Jewel */}
      <Link
        href="/quiz"
        className="group relative h-14 w-14 sm:h-15 sm:w-15 rounded-full bg-gradient-to-br from-[#0B4B42] via-[#073C35] to-[#03231F] text-[#FAF7F0] border-2 border-[#C9A45C] shadow-[0_8px_24px_rgba(7,60,53,0.45)] hover:shadow-[0_12px_36px_rgba(201,164,92,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 flex flex-col items-center justify-center p-1 focus:outline-hidden ring-2 ring-[#C9A45C]/20 hover:ring-[#C9A45C]/60"
        aria-label="Find Your Perfect Saree — Saree Matchmaker"
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C378] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C9A45C] border border-[#073C35]" />
        </span>

        <span className="font-serif text-[9.5px] sm:text-[10px] font-bold tracking-widest text-[#FAF7F0] uppercase leading-none">
          SAREE
        </span>
        <span className="text-[7.5px] sm:text-[8px] text-[#E5C378] font-sans font-semibold tracking-wider uppercase leading-none mt-1">
          MATCH
        </span>

        {/* Desktop Hover Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073C35]/95 backdrop-blur-md border border-[#C9A45C]/60 text-white shadow-xl whitespace-nowrap pointer-events-none transition-all duration-300 animate-in fade-in slide-in-from-right-2">
          <span className="font-serif text-xs font-semibold text-[#FFFCF5]">Find Your Perfect Saree</span>
          <span className="text-[10px] text-[#E5C378] font-sans font-medium uppercase tracking-wider">• 2-Min Matchmaker</span>
          <ArrowRight className="h-3 w-3 text-[#E5C378]" />
        </div>
      </Link>
    </div>
  );
}
function Palette(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z" />
    </svg>
  );
}
