import Navigation from "@/components/Navigation";
import AIBackground from "@/components/AIBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ICPCShowcase from "@/components/ICPC";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AIBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Research />
        <ICPCShowcase />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
