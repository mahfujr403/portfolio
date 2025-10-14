import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Sc. in Computer Science & Engineering",
      detail: "Varendra University, Rajshahi, Bangladesh (Dec 2025)",
    },
    {
      icon: BookOpen,
      title: "Research Focus",
      description: "Deep Learning & Computer Vision",
      detail: "OCR, Handwritten Text Recognition, Medical Image Classification",
    },
    {
      icon: Award,
      title: "Publications",
      description: "Published Researcher",
      detail: "IEEE Conference Papers & Book Chapters in Intelligent Vision Systems",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold animate-title-reveal">
              About <span className="gradient-title">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate undergraduate researcher dedicated to advancing artificial intelligence
              and computer vision technologies
            </p>
          </div>

          {/* Bio */}
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed animate-slide-up">
            <p>
              I am an undergraduate researcher in the Department of Computer Science & Engineering at 
              Varendra University, Bangladesh, specializing in Deep Learning, Optical Character Recognition (OCR), 
              and Handwritten Text Recognition.
            </p>
            <p>
              My research focuses on developing intelligent vision systems and applying cutting-edge deep learning 
              techniques to solve complex problems in computer vision and medical image analysis. I have contributed 
              to multiple IEEE conference papers and authored book chapters in the field of intelligent vision systems.
            </p>
            <p>
              With strong expertise in Python, TensorFlow, OpenCV, and modern AI frameworks, I am committed to 
              pushing the boundaries of what's possible in artificial intelligence research and creating practical 
              solutions that make a real-world impact.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-primary font-medium">{item.description}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
