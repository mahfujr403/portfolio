import { Mail, Phone, Linkedin, Github, BookOpen, GraduationCap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "mahfujr403@gmail.com",
      link: "mailto:mahfujr403@gmail.com",
    },
    {
      icon: Phone,
      label: "Primary Phone",
      value: "+880 177 143 1724",
      link: "tel:+8801771431724",
    },
    {
      icon: Phone,
      label: "Secondary Phone",
      value: "+880 152 176 8694",
      link: "tel:+8801521768694",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/mahfujur-rahman",
      color: "hover:bg-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/mahfujur-rahman",
      color: "hover:bg-gray-700",
    },
    {
      icon: GraduationCap,
      label: "Google Scholar",
      url: "https://scholar.google.com",
      color: "hover:bg-blue-500",
    },
    {
      icon: BookOpen,
      label: "ResearchGate",
      url: "https://researchgate.net",
      color: "hover:bg-cyan-600",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold animate-title-reveal">
              <span className="gradient-title">Get In Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate on research projects or discuss opportunities in AI and deep learning
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-slide-up">
              <Card className="p-6 bg-card border-border">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                  
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <method.icon className="text-primary group-hover:text-primary-foreground" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{method.label}</div>
                        <div className="text-foreground font-medium">{method.value}</div>
                      </div>
                    </a>
                  ))}

                  <div className="flex items-start gap-4 p-3 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="text-foreground font-medium">Rajshahi, Bangladesh</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Links & Quick Info */}
            <div className="space-y-6 animate-slide-up">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary hover:bg-primary transition-all group`}
                    >
                      <social.icon className="text-foreground group-hover:text-primary-foreground" size={24} />
                      <span className="text-sm text-foreground group-hover:text-primary-foreground font-medium">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Research Interests</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Deep Learning & Neural Networks</p>
                  <p>• Optical Character Recognition (OCR)</p>
                  <p>• Handwritten Text Recognition</p>
                  <p>• Computer Vision Applications</p>
                  <p>• Medical Image Classification</p>
                  <p>• Intelligent Vision Systems</p>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="mailto:mahfujr403@gmail.com" className="flex items-center gap-2">
                <Mail size={20} />
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
