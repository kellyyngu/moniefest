import heroBg from "@/assets/malaysia.png";
import { Link } from "react-router-dom";

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
  return (
    <section className="py-20 bg-background" id="programme">
      <div className="container mx-auto px-4">
        {/* Main Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            MONIE Fest — A Large-Scale Financial Lifestyle Festival
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            MONIE Fest is a large-scale financial lifestyle festival focused on money, investing, banking, and everyday financial decisions. Co-created by Foodie Media and Spire Digital, the event brings leading financial institutions and lifestyle brands together to engage 25,000–30,000 retail attendees in one location.
          </p>
        </div>

        {/* MONIE Fest positioning block — redesigned (full-width, decorative, not a card) */}
        <div className="max-w-5xl mx-auto text-center mb-12 relative px-4">
          {/* Decorative background shapes */}
          <div className="pointer-events-none absolute inset-x-0 -top-8 -z-10 flex justify-center">
            <div className="w-[86%] h-28 rounded-xl opacity-10 blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(72,187,120,0.25), transparent 40%)' }} />
          </div>

          <div className="relative z-10 py-8 sm:py-12">
            <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">Designed to go beyond traditional finance events, MONIE Fest combines</h4>

            <div className="flex flex-col sm:flex-row items-stretch gap-6 justify-center">
              <div className="flex-1 text-center">
                <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#46d36b] to-[#1fbf3a] shadow-[0_10px_30px_rgba(34,197,94,0.12)] text-black font-extrabold tracking-wide transform transition hover:scale-105 animate-float" style={{ animationDuration: '6s' }}>
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
                <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#7ef3a7] to-[#4ade80] shadow-[0_10px_30px_rgba(72,187,120,0.09)] text-black font-extrabold tracking-wide transform transition hover:scale-105 animate-float" style={{ animationDuration: '5.2s' }}>
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
                <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#a7f3d0] to-[#34d399] shadow-[0_10px_30px_rgba(16,185,129,0.08)] text-black font-extrabold tracking-wide transform transition hover:scale-105 animate-float" style={{ animationDuration: '6.6s' }}>
                  LIFESTYLE EXPERIENCES
                </div>
                <p className="mt-3 text-sm text-muted-foreground max-w-xs mx-auto">Immersive brand activations, live demos and curated experiences for all ages.</p>
              </div>
            </div>

            <div className="mt-6 max-w-3xl mx-auto text-center text-muted-foreground space-y-4">
              <p className="text-base md:text-lg">To make money topics more accessible and engaging to young Malaysians and seasoned investors.</p>
              <p className="text-base md:text-lg">The festival expands financial participation by reaching audiences outside the existing investor community and creating a more inclusive, lifestyle-driven approach to financial literacy.</p>
            </div>

            <div className="mt-10 flex justify-center">
              <Link to="/programme" className="inline-block px-6 py-3 rounded-md bg-transparent border border-primary text-primary hover:bg-primary/8 transition">See Programme</Link>
            </div>
          </div>
        </div>

        {/* Two professional info cards */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <article tabIndex={0} role="button" aria-label="ENGAGE, LEARN, AND CONNECT!" className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-card border border-border focus:outline-none">
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${heroBg})` }} />
            <div className="relative p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary-foreground">
                  <Icon name="engage" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-navy-deep">WHAT IS MONIE FEST?</h3>
              </div>

              <div className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed transition-all duration-300 ease-in-out max-h-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:max-h-96 group-hover:pointer-events-auto group-focus:opacity-100 group-focus:max-h-96 group-focus:pointer-events-auto">
                <p className="mb-3">MONIE Fest is a festival blending finance and lifestyle — covering money, investing, banking, and everyday financial choices.</p>
                <p className="mb-3">Co-created by Foodie Media and Spire Digital, MONIE Fest brings together industry leaders and lifestyle brands for a dynamic, consumer-focused experience.</p>
                <p className="mt-2 text-sm text-muted-foreground">Perfect for anyone looking to learn, compare, and take action on their personal finances.</p>
              </div>
            </div>
          </article>

          <article tabIndex={0} role="button" aria-label="EXCLUSIVE INVESTOR RELATIONS ACCESS!" className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-card border border-border focus:outline-none">
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${heroBg})` }} />
            <div className="relative p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary-foreground">
                  <Icon name="conference" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-navy-deep">AUDIENCE & PARTNERS</h3>
              </div>

              <div className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed transition-all duration-300 ease-in-out max-h-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:max-h-96 group-hover:pointer-events-auto group-focus:opacity-100 group-focus:max-h-96 group-focus:pointer-events-auto">
                <p className="mb-3">MONIE Fest connects leading financial institutions and lifestyle brands in a single destination.</p>
                <p className="mb-3">The festival is designed to engage a broad consumer audience, with expected attendance of 25,000–30,000 retail visitors.</p>
                <p className="mt-2 text-sm text-muted-foreground">Ideal for brands, partners and attendees seeking high-impact consumer engagement.</p>
              </div>
            </div>
          </article>
        </div>

        
      </div>
    </section>
  );
};

export default About;
