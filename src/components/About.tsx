import heroBg from "@/assets/malaysia.png";

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

        {/* MONIE Fest positioning block (theme-matched, clean) */}
        <div className="max-w-4xl mx-auto text-center mb-12 relative">
          <div className="relative overflow-visible">
            {/* decorative blurred gradient */}
            <div className="pointer-events-none absolute -inset-4 rounded-lg opacity-30 -z-10" style={{background: 'linear-gradient(90deg, rgba(255,122,26,0.06), rgba(56,84,255,0.06))', filter: 'blur(18px)'}} />

            <div className="glass-card p-6 rounded-lg border border-border shadow-sm relative z-10">
              <h4 className="font-semibold text-lg text-navy-deep">Designed to go beyond traditional finance events, MONIE Fest combines</h4>

              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full transform transition duration-400 hover:scale-105 hover:shadow-lg animate-float" style={{animationDuration: '6s'}}>
                  INVESTMENT EDUCATION
                </span>

                <span className="text-2xl font-bold text-muted-foreground">+</span>

                <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full transform transition duration-400 hover:scale-105 hover:shadow-lg animate-float" style={{animationDuration: '5.2s', animationDelay: '200ms'}}>
                  FINANCIAL CONTENT
                </span>

                <span className="hidden sm:inline text-2xl font-bold text-muted-foreground">+</span>

                <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full transform transition duration-400 hover:scale-105 hover:shadow-lg animate-float" style={{animationDuration: '6.6s', animationDelay: '400ms'}}>
                  LIFESTYLE EXPERIENCES
                </span>
              </div>

              <div className="mt-6 bg-card p-4 rounded-md border border-border text-left text-muted-foreground">
                <p className="mb-3">To make money topics more accessible and engaging to young Malaysians and seasoned investors.</p>
                <p>The festival expands financial participation by reaching audiences outside the existing investor community and creating a more inclusive, lifestyle-driven approach to financial literacy.</p>
              </div>
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
