import { FileText, ExternalLink, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Research = () => {
  const projects = [
    {
      title: "Enhanced Face Recognition System",
      description: "Developed an advanced face recognition system with integrated user interface for BIM 2025 conference paper. Implemented state-of-the-art deep learning models for accurate facial identification.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
      status: "Published - IEEE Conference",
      hasUI: true,
    },
    {
      title: "Handwritten Text Recognition",
      description: "Research on OCR systems for handwritten text with focus on Bangla script. Achieved high accuracy rates using convolutional neural networks and attention mechanisms.",
      technologies: ["Python", "TensorFlow", "CNN", "Attention Mechanism"],
      status: "In Progress",
      hasUI: false,
    },
    {
      title: "Medical Image Classification",
      description: "Deep learning approach for automated medical image analysis and disease classification. Contributing to improved diagnostic accuracy using computer vision techniques.",
      technologies: ["Python", "Keras", "Medical Imaging", "CNN"],
      status: "Published - Book Chapter",
      hasUI: false,
    },
  ];

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold animate-title-reveal">
              <span className="gradient-title">Research & Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exploring cutting-edge AI research in computer vision, OCR, and intelligent systems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 group flex flex-col"
              >
                <div className="flex-1 space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FileText className="text-primary" size={24} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs rounded-md bg-secondary text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-primary font-medium">{project.status}</span>
                      {project.hasUI && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Code size={14} />
                          UI Integrated
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-4 pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between text-muted-foreground hover:text-primary"
                  >
                    <span>View Details</span>
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Future Plans Note */}
          <div className="text-center animate-fade-in">
            <p className="text-sm text-muted-foreground">
              Currently working on integrating UI components for all research papers and projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
