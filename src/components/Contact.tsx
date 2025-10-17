import { Mail, Phone, Linkedin, Github, BookOpen, GraduationCap, MapPin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    title: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      url: "https://www.linkedin.com/in/mahfujr403/",
      color: "hover:bg-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/mahfujr403",
      color: "hover:bg-gray-700",
    },
    {
      icon: GraduationCap,
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=ssuw-WEAAAAJ&hl=en",
      color: "hover:bg-blue-500",
    },
    {
      icon: BookOpen,
      label: "ResearchGate",
      url: "https://www.researchgate.net/profile/Md-Mahfujur-Rahman-16",
      color: "hover:bg-cyan-600",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message || !formData.title) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // IMPORTANT: Replace these with your actual EmailJS credentials
      const serviceId = "service_6xccf7r"; // Get from EmailJS dashboard
      const templateId = "template_sake0t9"; // Get from EmailJS dashboard
      const publicKey = "rrs2rPgEKeghP7rvu"; // Get from EmailJS dashboard

      // Import emailjs dynamically or install via: npm install @emailjs/browser
      const emailjs = (await import('@emailjs/browser')).default;

      const templateParams = {
        name: formData.name,
        title: formData.title,
        from_email: formData.email,
        message: formData.message,
        to_email: "mahfujr403@gmail.com"
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default"
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        title : ""
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email or other methods.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-card/30  animate-fade-in-up">
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

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6 animate-slide-up">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Subject *</Label>
                    <Input
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Enter the topic or subject you’d like to discuss"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or question..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="min-h-[150px]"
                    />
                  </div>
        

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information & Social Links - Takes 1 column */}
            <div className="space-y-6 animate-slide-up">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <method.icon className="text-primary group-hover:text-primary-foreground" size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{method.label}</div>
                        <div className="text-sm text-foreground font-medium">{method.value}</div>
                      </div>
                    </a>
                  ))}

                  <div className="flex items-start gap-3 p-2 rounded-lg">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-primary" size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Location</div>
                      <div className="text-sm text-foreground font-medium">Rajshahi, Bangladesh</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary hover:bg-primary transition-all group"
                    >
                      <social.icon className="text-foreground group-hover:text-primary-foreground" size={20} />
                      <span className="text-xs text-foreground group-hover:text-primary-foreground font-medium text-center">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </Card>

              {/* <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Research Interests</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Deep Learning & Neural Networks</p>
                  <p>• Optical Character Recognition (OCR)</p>
                  <p>• Handwritten Text Recognition</p>
                  <p>• Computer Vision Applications</p>
                  <p>• Medical Image Classification</p>
                  <p>• Intelligent Vision Systems</p>
                </div>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;