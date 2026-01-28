import React from "react";
import foodieLogo from "@/assets/Foodie-Red.webp";
import spireLogo from "@/assets/Spire-Black.webp";
import benchxLogo from "@/assets/benchxcapital.webp";
import webullLogo from "@/assets/webull.webp";
import lunoLogo from "@/assets/luno.webp";
import moomooLogo from "@/assets/moomoo.webp";
import microleapLogo from "@/assets/microleap.webp";
import gambitCustody from "@/assets/gambitCustody.webp";
import gambitTrustees from "@/assets/gambitTrustees.webp";

const placeholderImg = (label = "Logo") => `https://via.placeholder.com/280x140?text=${encodeURIComponent(label)}`;

const coOrganizers = [foodieLogo, spireLogo];
const strategicPartners = [benchxLogo];
const platinumSponsors = [
  gambitTrustees, // Digital Trustees (alphabetical order per request)
  gambitCustody,
  lunoLogo,
  moomooLogo,
  webullLogo,
  placeholderImg("Platinum+4"),
];
const goldSponsors = Array.from({ length: 4 }).map((_, i) => placeholderImg(`Gold+${i+1}`));
const supportingPartners = Array.from({ length: 4 }).map((_, i) => placeholderImg(`Supporting+${i+1}`));
const silverSponsors = [microleapLogo, ...Array.from({ length: 3 }).map((_, i) => placeholderImg(`Silver+${i+2}`))];
const giftPartners = Array.from({ length: 4 }).map((_, i) => placeholderImg(`Gift+${i+1}`));

const baseUrl = "";

// Map specific logo imports to external URLs for hyperlinking
const logoLinkMap: Record<string, string> = {
  [foodieLogo]: "https://foodiemedia.com/",
  [spireLogo]: "https://www.financelang.com",
  [benchxLogo]: "https://www.benchxcapital.com/",
};

interface LogoGridProps {
  title: string;
  logos: string[];
  fullUrls?: boolean;
  hideCaption?: boolean;
  logoOnly?: boolean;
  // Optional custom classes for different layouts
  columnsClass?: string;
  cardClass?: string;
  imgClass?: string;
  containerClass?: string;
}

const formatAlt = (nameOrFilename: string) => {
  if (!nameOrFilename) return "logo";
  // Remove query params, directories, and extensions, then normalize separators
  const base = nameOrFilename.split("?")[0].split("/").pop()?.split("\\").pop() || nameOrFilename;
  const cleaned = base
    .replace(/^img[_-]?/i, "")
    .replace(/\.(jpg|jpeg|png|svg|webp)$/i, "")
    .replace(/[_-]+/g, " ")
    .trim();
  return cleaned
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
};

const LogoGrid = ({ title, logos, fullUrls, hideCaption, logoOnly, columnsClass, cardClass, imgClass, containerClass }: LogoGridProps) => {
  // Determine a responsive columns class for small counts on mobile
  // Show two columns on the smallest screens to match co-organiser layout
  const mobileColsClass = "grid-cols-2";

  const colsClass = columnsClass ?? "lg:grid-cols-4";
  const container = containerClass ?? "max-w-6xl";

  return (
    <div className="mb-16 w-full">
      <h3 className="text-2xl font-bold text-foreground text-center mb-8">{title}</h3>
      <div className={`w-full ${container} mx-auto px-4 sm:px-6`}>
        <div className={`grid ${mobileColsClass} sm:grid-cols-2 md:grid-cols-3 ${colsClass} gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center`}>
              {logos.map((logo, index) => {
                const href = logoLinkMap[(fullUrls ? logo : logo) as string];
                return (
                  <div
                    key={index}
                    className={
                      cardClass ??
                      "bg-white rounded-xl p-4 sm:p-6 flex items-center justify-center w-full sm:w-64 h-36 sm:h-44 shadow-sm"
                    }
                  >
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <img
                          src={fullUrls ? logo : `${baseUrl}${logo}`}
                          alt={formatAlt(fullUrls ? logo : logo)}
                          title={formatAlt(fullUrls ? logo : logo)}
                          className={imgClass ?? "max-w-[75%] max-h-[65%] object-contain"}
                        />
                      </a>
                    ) : (
                      <img
                        src={fullUrls ? logo : `${baseUrl}${logo}`}
                        alt={formatAlt(fullUrls ? logo : logo)}
                        title={formatAlt(fullUrls ? logo : logo)}
                        className={imgClass ?? "max-w-[75%] max-h-[65%] object-contain"}
                      />
                    )}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

const Exhibitors = () => {
  return (
    <section className="py-20 bg-background" id="exhibitors" aria-labelledby="exhibitors-title">
      <div className="section-container flex flex-col items-center">
        <div className="mb-12">
          <h2 id="exhibitors-title" className="text-3xl font-bold text-primary text-center mb-6">Supporting Partners & Sponsors</h2>
          <p className="text-center text-muted-foreground">Below are placeholder logos for the different sponsor categories. Order updated per feedback.</p>
        </div>

        {/* Centered Co-organizers block (custom layout to ensure exact centering) */}
        <div className="w-full flex flex-col items-center justify-center py-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Co-organisers</h3>
          <div className="flex justify-center">
            <div className="inline-grid grid-cols-2 gap-6">
              {coOrganizers.map((logo, idx) => {
                const href = logoLinkMap[logo as string];
                return (
                  <div key={idx} className="bg-white rounded-xl p-4 sm:p-6 flex items-center justify-center w-full sm:w-64 h-36 sm:h-44 shadow-sm">
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt={formatAlt(logo)} className="max-w-[85%] max-h-[60%] object-contain" />
                      </a>
                    ) : (
                      <img src={logo} alt={formatAlt(logo)} className="max-w-[85%] max-h-[60%] object-contain" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Centered Strategic Partner block */}
        <div className="w-full flex flex-col items-center justify-center py-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Strategic Partner</h3>
          <div className="flex justify-center">
            <div className="inline-grid grid-cols-1 gap-6">
              {strategicPartners.map((logo, idx) => {
                const href = logoLinkMap[logo as string];
                return (
                  <div key={idx} className="bg-white rounded-xl p-4 sm:p-6 flex items-center justify-center w-full sm:w-64 h-36 sm:h-44 shadow-sm">
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt={formatAlt(logo)} className="max-w-[85%] max-h-[60%] object-contain" />
                      </a>
                    ) : (
                      <img src={logo} alt={formatAlt(logo)} className="max-w-[85%] max-h-[60%] object-contain" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <LogoGrid title="Supporting Partners" logos={supportingPartners} fullUrls hideCaption logoOnly />
        <LogoGrid title="Platinum Sponsors" logos={platinumSponsors} fullUrls hideCaption logoOnly />
        <LogoGrid title="Gold Sponsors" logos={goldSponsors} fullUrls hideCaption logoOnly />
        <LogoGrid title="Silver Sponsors" logos={silverSponsors} fullUrls hideCaption logoOnly />
        <LogoGrid title="Gift Partners" logos={giftPartners} fullUrls hideCaption logoOnly />
      </div>
    </section>
  );
};

export default Exhibitors;
