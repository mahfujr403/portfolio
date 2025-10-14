// import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Mail, Phone, Linkedin, Github, BookOpen, GraduationCap } from "lucide-react";
import { SiResearchgate, SiGooglescholar, SiOrcid } from "react-icons/si";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import { userInfo } from "os";

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/mahfujr403/", label: "LinkedIn", user: "mahfujr403" },
    {icon : BookOpen, url: "https://www.researchgate.net/profile/Md-Mahfujur-Rahman-16", label: "ResearchGate", user: "Mahfujur-Rahman_16"},
    {icon : GraduationCap, url: "https://scholar.google.com/citations?user=ssuw-WEAAAAJ&hl=en", label: "Google Scholar", user:"ssuw-WEAAAAJ&hl"},
    { icon: Github, url: "https://github.com/mahfujr403/", label: "GitHub", user: "mahfujr403" },
    {icon : SiOrcid, url: "https://orcid.org/my-orcid?orcid=0009-0001-3674-7152", label: "ORCID", user: "0009-0001-3674-7152"},
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-primary text-lg sm:text-xl font-medium animate-slide-up">
                Hello, I'm
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text animate-title-reveal leading-tight">
                Md. Mahfujur Rahman
              </h1>
              <div className="text-2xl sm:text-3xl text-muted-foreground font-light animate-slide-up" style={{ animationDelay: "0.2s" }}>
                AI Researcher & Deep Learning Specialist
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Exploring Deep Learning and Intelligent Vision Systems. Passionate about advancing OCR, 
              Handwritten Text Recognition, and Medical Image Classification through innovative research.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:mahfujr403@gmail.com" className="hover:text-primary transition-colors">
                  mahfujr403@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+8801771431724" className="hover:text-primary transition-colors">
                  +880 177 143 1724
                </a>
              </div>
            </div>
            



            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/60 transition-transform transform hover:scale-105">
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("#research", "_self")}
                className="border-border hover:border-primary transition-transform transform hover:scale-105"
              >
                View Research
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                // <a
                //   key={index}
                //   href={social.url}
                //   target="_blank"
                //   rel="noopener noreferrer"
                //   className="p-2 rounded-lg bg-card hover:bg-primary transition-colors group"
                //   aria-label={social.label}
                // >
                //   <social.icon size={20} className="text-foreground group-hover:text-primary-foreground" />
                // </a>
                <div key={index} className="relative flex-shrink-0 group">
                  {/* Icon button */}
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-card hover:bg-primary transition-colors flex items-center justify-center transition-transform transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="text-foreground" size={20} />
                  </a>

                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                    {social.label}
                  </span>
                </div>
   
        
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative group">
              {/* Animated gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 rounded-full blur-3xl opacity-40 animate-glow-pulse"></div>
              
              {/* Rotating ring effect */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: "20s" }}></div>
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-full"></div>
                <img
                  src={profileImage}
                  alt="Md. Mahfujur Rahman"
                  className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-full object-cover border-4 border-background"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
