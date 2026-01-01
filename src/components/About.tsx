import heroBg from "@/assets/malaysia.png";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ProgrammePreview from "./ProgrammePreview";

const Icon = ({ name }: { name: string }) => {
  if (name === 'engage') {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 7h18M7 11h10M5 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const About = () => {
  const [showIntro, setShowIntro] = useState(true);
  const introMeasureRef = useRef<HTMLDivElement | null>(null);
  const previewMeasureRef = useRef<HTMLDivElement | null>(null);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (showIntro) {
      t = setTimeout(() => setShowIntro(false), 3000);
    }
    return () => clearTimeout(t);
  }, [showIntro]);

  useEffect(() => {
    const measure = () => {
      const a = introMeasureRef.current?.offsetHeight ?? 0;
      const b = previewMeasureRef.current?.offsetHeight ?? 0;
      const max = Math.max(a, b, 300); // ensure a reasonable minimum
      setMeasuredHeight(max);
    };

    // Measure after paint
    requestAnimationFrame(measure);

    const onResize = () => requestAnimationFrame(measure);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className="py-10 bg-background" id="programme">
      <div className="container mx-auto px-4">
        {/* Main Description removed per user request */}

        {/* MONIE Fest positioning block — redesigned (full-width, decorative, not a card) */}
        <div className="max-w-5xl mx-auto text-center mb-12 relative px-4">
          {/* Decorative background shapes */}
          <div className="pointer-events-none absolute inset-x-0 -top-8 -z-10 flex justify-center">
            <div className="w-[86%] h-28 rounded-xl opacity-10 blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(72,187,120,0.25), transparent 40%)' }} />
          </div>

          <div className="relative z-10 py-8 sm:py-12">
            <div
              className="flex items-center"
              style={measuredHeight ? { height: `${measuredHeight}px` } : undefined}
            >
            {showIntro ? (
              <div className="w-full flex flex-col justify-center overflow-visible absolute inset-0" style={!measuredHeight ? undefined : {position: 'absolute'}}>
                <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">Designed to go beyond traditional finance events, MONIE Fest combines</h4>

                <div className="flex flex-col sm:flex-row items-stretch gap-6 justify-center">
                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center justify-center px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.12)] font-extrabold tracking-wide transform transition hover:scale-105 animate-float" style={{ animationDuration: '6s', background: 'linear-gradient(90deg, hsl(var(--cta-start)) 0%, hsl(var(--cta-end)) 100%)', color: '#000000' }}>
                      INVESTMENT EDUCATION
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground max-w-xs mx-auto">Practical workshops, expert panels and hands-on demos to build real skills.</p>
                  </div>

                  <div className="hidden sm:flex items-center px-2">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="plus-animate text-muted-foreground" aria-hidden style={{display: 'block'}}>
                      <circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.02)" />
                      <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center justify-center px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(72,187,120,0.09)] font-extrabold tracking-wide transform transition hover:scale-105 animate-float" style={{ animationDuration: '5.2s', background: 'linear-gradient(90deg, hsl(var(--cta-start)) 0%, hsl(var(--cta-end)) 100%)', color: '#000000' }}>
                      FINANCIAL CONTENT
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground max-w-xs mx-auto">High-quality talks, case studies and content that connect finance to everyday life.</p>
                  </div>

                  <div className="hidden sm:flex items-center px-2">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="plus-animate text-muted-foreground" aria-hidden style={{display: 'block', animationDuration: '2.2s'}}>
                      <circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.02)" />
                      <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center justify-center px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.08)] font-extrabold tracking-wide transform transition hover:scale-105 animate-float" style={{ animationDuration: '6.6s', background: 'linear-gradient(90deg, hsl(var(--cta-start)) 0%, hsl(var(--cta-end)) 100%)', color: '#000000' }}>
                      LIFESTYLE EXPERIENCES
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground max-w-xs mx-auto">Immersive brand activations, live demos and curated experiences for all ages.</p>
                  </div>
                </div>

                <div className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground space-y-3">
                  <p className="text-base md:text-lg">To make money topics more accessible and engaging to young Malaysians and seasoned investors.</p>
                  <p className="text-base md:text-lg">The festival expands financial participation by reaching audiences outside the existing investor community and creating a more inclusive, lifestyle-driven approach to financial literacy.</p>
                </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center absolute inset-0">
                  <ProgrammePreview autoplayOnce onFinished={() => setShowIntro(true)} />
                </div>
              )}
            </div>
          </div>
        </div>

          {/* Hidden measurement block (does not impact layout) */}
          <div aria-hidden style={{ position: "absolute", left: -9999, top: 0, visibility: "hidden", pointerEvents: "none" }}>
            <div ref={introMeasureRef} className="w-[min(860px,100%)]">
              <div className="w-full flex flex-col justify-center">
                <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">Designed to go beyond traditional finance events, MONIE Fest combines</h4>
                <div className="flex flex-col sm:flex-row items-stretch gap-6 justify-center">
                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center justify-center px-6 py-3 rounded-full font-extrabold tracking-wide">INVESTMENT EDUCATION</div>
                    <p className="mt-3 text-sm text-muted-foreground max-w-xs mx-auto">Practical workshops, expert panels and hands-on demos to build real skills.</p>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center justify-center px-6 py-3 rounded-full font-extrabold tracking-wide">FINANCIAL CONTENT</div>
                    <p className="mt-3 text-sm text-muted-foreground max-w-xs mx-auto">High-quality talks, case studies and content that connect finance to everyday life.</p>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center justify-center px-6 py-3 rounded-full font-extrabold tracking-wide">LIFESTYLE EXPERIENCES</div>
                    <p className="mt-3 text-sm text-muted-foreground max-w-xs mx-auto">Immersive brand activations, live demos and curated experiences for all ages.</p>
                  </div>
                </div>
                <div className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground space-y-3">
                  <p className="text-base md:text-lg">To make money topics more accessible and engaging to young Malaysians and seasoned investors.</p>
                  <p className="text-base md:text-lg">The festival expands financial participation by reaching audiences outside the existing investor community and creating a more inclusive, lifestyle-driven approach to financial literacy.</p>
                </div>
              </div>
            </div>

            <div ref={previewMeasureRef} className="w-[min(860px,100%)] mt-6">
              <div className="mt-8 max-w-4xl mx-auto">
                <div className="relative bg-card border border-border rounded-xl p-4 md:p-6 shadow-md">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                    <div className="flex-shrink-0 bg-gradient-to-br from-primary to-green-400 text-black font-semibold px-3 py-1 rounded-md text-sm">11:00 - 12:00</div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-lg md:text-xl">Demystifying Personal Investing</div>
                      <div className="mt-2 flex items-center gap-4">
                        <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-white text-sm font-medium">AT</div><div className="text-sm text-white/90">Alice Tan</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* 'What is MONIE Fest?' card removed from here and placed into page flow (Index) */}

        
      </div>
    </section>
  );
};

export default About;
