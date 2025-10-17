import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { SiOrcid } from "react-icons/si";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mahfujr403/",
      label: "LinkedIn",
    },
    {
      icon: BookOpen,
      url: "https://www.researchgate.net/profile/Md-Mahfujur-Rahman-16",
      label: "ResearchGate",
    },
    {
      icon: GraduationCap,
      url: "https://scholar.google.com/citations?user=ssuw-WEAAAAJ&hl=en",
      label: "Google Scholar",
    },
    { icon: Github, url: "https://github.com/mahfujr403/", label: "GitHub" },
    {
      icon: SiOrcid,
      url: "https://orcid.org/my-orcid?orcid=0009-0001-3674-7152",
      label: "ORCID",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };


    const scrollToResearch = () => {
    const element = document.getElementById("research");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };



  // Typewriter loop state
const phrases = [
  "AI & DL Researcher",
  "Computer Vision Expert",
  "AI Systems Researcher",
  "Vision AI Specialist"
];
const [displayedText, setDisplayedText] = useState("");
const [phraseIndex, setPhraseIndex] = useState(0);
const [letterIndex, setLetterIndex] = useState(0);
const [deleting, setDeleting] = useState(false);

useEffect(() => {
  const currentPhrase = phrases[phraseIndex];
  let timer;

  if (!deleting) {
    if (letterIndex < currentPhrase.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
      }, 110); // typing speed
    } else {
      // Phrase complete, wait 1s before deleting
      timer = setTimeout(() => {
        setDeleting(true);
      }, 1000);
    }
  } else {
    if (letterIndex > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);
      }, 50); // deleting speed
    } else {
      // Finished deleting, move to next phrase
      setDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }
  }
  return () => clearTimeout(timer);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [letterIndex, deleting, phraseIndex]);


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4 mb-2">
              <h2 className="text-lg sm:text-xl font-medium animate-slide-up">
                Hello, I'm
              </h2>

              {/* Professional name animation */}
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text leading-tight 
             transform translate-x-8 animate-title-reveal"
              >
                Md. Mahfujur Rahman
              </h1>

              {/* Typewriter effect for designation */}
              <div className="text-2xl sm:text-3xl text-muted-foreground font-light h-10">
                <span className="border-r-8 font-mono font-semibold border-primary pr-1 animate-caret">
                  {displayedText}
                </span>
              </div>
            </div>

            <p
              className="text-muted-foreground text-lg text-justify mt-2 leading-relaxed max-w-xl 
              opacity-0 transform translate-y-4 
              animate-fade-in-up-desc"
            >
              Exploring Deep Learning and Intelligent Vision Systems. Passionate
              about advancing OCR, Handwritten Text Recognition, and Medical
              Image Classification through innovative research.
            </p>
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:mahfujr403@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  mahfujr403@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a
                  href="tel:+8801771431724"
                  className="hover:text-primary transition-colors"
                >
                  +880 177 143 1724
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/60 transition-transform transform hover:scale-105"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToResearch}
                className="border-border hover:border-primary transition-transform transform hover:scale-105"
              >
                View Research
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <div key={index} className="relative flex-shrink-0 group">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-card hover:bg-primary transition-colors flex items-center justify-center transition-transform transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="text-foreground" size={20} />
                  </a>
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
              <div
                className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>

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

      {/* Tailwind animations */}
      <style>{`
        @keyframes caret {
          0%, 50%, 100% { border-color: transparent; }
          25%, 75% { border-color: currentColor; }
        }
        .animate-caret {
          animation: caret 1s step-end infinite;
        }

         /* Fade-in + slide from right */
        @keyframes fade-in-up-gradient {
          0% { opacity: 0; transform: translateX(32px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in-up-gradient {
          animation: fade-in-up-gradient 1.5s ease-out forwards;
        }

        @keyframes fade-in-up-desc {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up-desc {
          animation: fade-in-up-desc 1s ease-out forwards;
          animation-delay: 0.5s; /* delay to appear after the name */
        }
    `}</style>
    </section>
  );
};

export default Hero;
