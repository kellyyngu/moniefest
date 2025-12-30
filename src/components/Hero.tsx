import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowUpRight, Users } from "lucide-react";
import heroBg from "@/assets/malaysia.png";
import monieHeader from "@/assets/monieHeader.png";

type HeroProps = {
  onOpenEventbrite?: () => void;
};

const Hero = ({ onOpenEventbrite }: HeroProps) => {
  return (
    <>
      <section className="relative hero-section flex items-start justify-center overflow-hidden pt-12 sm:pt-16 md:pt-20 min-h-[70vh] md:min-h-[44vh]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-60" />
      </div>

      {/* Content (follow Programme styling) */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="max-w-xl md:max-w-3xl animate-fade-in mt-0 md:mt-6 lg:mt-10 text-center sm:text-left">
          <div className="block w-full pr-0 sm:pr-8 md:pr-10 pl-0">
            <div className="flex justify-center sm:justify-start mb-4">
              <div
                role="img"
                aria-label="Monie Fest 2026"
                className="w-40 sm:w-64 md:w-80 lg:w-96 logo-fill"
                style={{
                  WebkitMaskImage: `url(${monieHeader})`,
                  maskImage: `url(${monieHeader})`,
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskPosition: 'left center',
                  maskPosition: 'left center',
                  height: 'auto',
                  aspectRatio: '4 / 1'
                }}
              />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-navy-deep">
              THE LARGEST FINANCIAL FESTIVAL IN MALAYSIA
            </h2>

            <div className="flex flex-col gap-2 items-center sm:items-start justify-start mb-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center text-center sm:text-left">
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={18} aria-hidden />
                  <span className="text-navy-deep">Malaysia International Trade and Exhibition Centre, Hall 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-primary" size={18} aria-hidden />
                  <span className="text-navy-deep">10AM - 9PM</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users className="text-primary" size={18} aria-hidden />
                <span className="text-navy-deep">Co-organized: Spire &amp; Foodie</span>
              </div>
            </div>

            <p className="text-sm text-navy-deep/90 mb-6">11 &amp; 12 April 2026</p>

            {/* CTA Button kept as-is */}
            <div className="flex justify-center sm:justify-start w-full">
              <button onClick={() => onOpenEventbrite?.()} aria-label="Buy tickets for Monie Fest 2026" className="cta-pill inline-flex items-center gap-4 w-full sm:w-auto lg:w-auto max-w-xs">
                <span className="cta-pill-label text-white font-semibold">Get ticket</span>
                <span className="cta-pill-icon brand-bg p-3 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="text-white" />
                </span>
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
