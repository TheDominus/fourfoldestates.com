import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { ConstructionUpdates } from "@/components/ConstructionUpdates";
import { LocationMap } from "@/components/LocationMap";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <ConstructionUpdates />
        <LocationMap />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Index;
