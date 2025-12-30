import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventbriteModal from "@/components/EventbriteModal";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import PastEvents from "@/components/PastEvents";
import Exhibitors from "@/components/Exhibitors";
// PremierEvent and Pricing sections removed from homepage
import Footer from "@/components/Footer";

const Index = () => {
  const [isEventbriteOpen, setIsEventbriteOpen] = React.useState(false);

  return (
    <main className="min-h-screen">
      <Header onOpenEventbrite={() => setIsEventbriteOpen(true)} />
      <Hero onOpenEventbrite={() => setIsEventbriteOpen(true)} />
      <Stats />
      <About />
      <Testimonials />
      <PastEvents />
      <Exhibitors />
      {/* PremierEvent, Pricing, and Partners removed */}
      <Footer />

      <EventbriteModal
        open={isEventbriteOpen}
        onClose={() => setIsEventbriteOpen(false)}
        eventId="1978806719165"
        height={650}
      />
    </main>
  );
};

export default Index;
