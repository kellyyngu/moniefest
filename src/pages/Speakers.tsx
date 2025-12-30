import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/malaysia.png";

type Speaker = { name: string; title?: string; company?: string };

const speakers: Speaker[] = [
  { name: "Speaker 1", title: "Panelist", company: "Organization" },
  { name: "Speaker 2", title: "Panelist", company: "Organization" },
  { name: "Speaker 3", title: "Panelist", company: "Organization" },
  { name: "Speaker 4", title: "Panelist", company: "Organization" },
  { name: "Speaker 5", title: "Panelist", company: "Organization" },
  { name: "Speaker 6", title: "Panelist", company: "Organization" },
  { name: "Speaker 7", title: "Panelist", company: "Organization" },
  { name: "Speaker 8", title: "Panelist", company: "Organization" },
];

const SpeakerCard = ({ s }: { s: Speaker }) => (
  <div className="w-full max-w-xs bg-card rounded-lg p-5 shadow hover:shadow-md transition transform hover:-translate-y-1">
    <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-navy-light to-navy-deep flex items-center justify-center text-primary-foreground font-bold text-2xl mb-4">
      {s.name.split(" ").map((n) => n[0]).slice(0,2).join("")}
    </div>
    <div className="text-center">
      <p className="font-semibold text-navy-deep text-lg">{s.name}</p>
      <p className="text-sm text-primary italic mt-1">{s.title}</p>
      <p className="text-sm text-muted-foreground mt-1">{s.company}</p>
    </div>
  </div>
);

const SpeakersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative min-h-[44vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="absolute inset-0 hero-gradient opacity-60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white text-center tracking-tight max-w-4xl mx-auto leading-tight drop-shadow-xl">
            Speakers
          </h1>
          <p className="mt-3 text-sm md:text-lg text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Meet the experts and leaders joining our panels and sessions. Their combined experience spans research, asset management and corporate leadership.
          </p>
        </div>
      </section>

      <main className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start justify-items-center">
            {speakers.map((s, i) => (
              <SpeakerCard key={i} s={s} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SpeakersPage;
