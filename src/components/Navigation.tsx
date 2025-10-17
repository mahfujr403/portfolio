import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isInHomeSection, setIsInHomeSection] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check if we're in the home section
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        setIsInHomeSection(rect.bottom > 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + window.innerHeight / 2; // middle of viewport

      for (const section of sections) {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id); // highlight on click
      setIsMobileMenuOpen(false);
    }
  };


  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Research", id: "research" },
    { name: "Battles", id: "icpc" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">
            <span onClick={() => scrollToSection("home")} className="text-primary cursor-pointer  hover:underline hover:scale-110 inline-block transition-all duration-300">MR</span>
            <span className="text-foreground">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors duration-200 ${activeSection === link.id ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
                  }`}
              >
                {link.name}
              </button>
            ))}

            {/* Profile Image - shown when not in home section */}
            {/* {!isInHomeSection && (
              <div className="relative group animate-fade-in">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary hover:border-primary hover:scale-110 transition-all duration-300 cursor-pointer" onClick={() => scrollToSection("home")}>
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )} */}
            <AnimatePresence>
              {!isInHomeSection && (
                <motion.div
                  key="profile-icon"
                  initial={{ opacity: 0, scale: 0.5, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: 20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group"
                >
                  <div
                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary hover:scale-110 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-primary/30"
                    onClick={() => scrollToSection("home")}
                  >
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Profile Image - shown when not in home section (Mobile) */}
            {!isInHomeSection && (
              <div className="relative group animate-fade-in">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-primary/50 cursor-pointer" onClick={() => scrollToSection("home")}>
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary hover:bg-primary/90">
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;