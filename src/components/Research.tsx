import { FileText, ExternalLink, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { banners } from "@/lib/banner.ts";

const Research = () => {
  const projects = [
    {
      banner: banners["BIM 2025"],
      title:
        "Enhancing Face Recognition in Unconstrained Conditions Using Ensemble Deep Learning Models",
      shortDescription:
        "This research develops deep learning-based facial recognition using CNNs and ensemble methods, demonstrating robust identification under challenging real-world conditions.",
      technologies: ["TensorFlow", "OpenCV", "Streamlit", "User Interface"],
      aiContribution:
        "User interface development and feature fusionn for reliable result.",
      status: "Presented",
      publisher: "Springer",
      conference: "BIM 2025",
      publicationType: "Book Chapter",
    },
    {
      banner: banners["ICDSA 2025"],
      title:
        "Recognizing Bangla Numerals: A Deep Learning Approach on a Novel Handwritten Dataset",
      shortDescription:
        "This research improves Bangla handwritten numeral recognition using deep learning and ensemble models, demonstrating effective recognition on a primary dataset.",
      technologies: ["Keras", "TensorFlow", "Deep Learning", "GRAD-CAM"],
      aiContribution:
        "Primary dataset creation and ensemble model for higher accuracy.",
      status: "Presented",
      publisher: "Springer",
      conference: "ICDSA 2025",
      publicationType: "Book Chapter",
    },
    {
      banner: banners["BIM 2025"],
      title:
        "An Integrated Deep Learning Methodology for the Automated Histopathological Differentiation of Lung throughout Colon Cancer",
      shortDescription:
        "This research applies deep learning to classify lung and colon cancer histopathology images, providing accurate, interpretable, AI-assisted diagnostics.",
      technologies: ["GRAD-CAM", "Keras", "CNN", "Medical Imaging"],
      aiContribution:
        "Grad-CAM and ensemble methods to reliably classify histopathology image.",
      status: "Presented",
      publisher: "Springer",
      conference: "BIM 2025",
      publicationType: "Book Chapter",
    },
     {
      banner: banners["ICDSA 2025"],
      title:
        "Recognizing Bangla Numerals: A Deep Learning Approach on a Novel Handwritten Dataset",
      shortDescription:
        "This research improves Bangla handwritten numeral recognition using deep learning and ensemble models, demonstrating effective recognition on a primary dataset.",
      technologies: ["Keras", "TensorFlow", "Deep Learning", "GRAD-CAM"],
      aiContribution:
        "Primary dataset creation and ensemble model for higher accuracy.",
      status: "Presented",
      publisher: "Springer",
      conference: "ICDSA 2025",
      publicationType: "Book Chapter",
    },
    {
      banner: banners["BIM 2025"],
      title:
        "An Integrated Deep Learning Methodology for the Automated Histopathological Differentiation of Lung throughout Colon Cancer",
      shortDescription:
        "This research applies deep learning to classify lung and colon cancer histopathology images, providing accurate, interpretable, AI-assisted diagnostics.",
      technologies: ["GRAD-CAM", "Keras", "CNN", "Medical Imaging"],
      aiContribution:
        "Grad-CAM and ensemble methods to reliably classify histopathology image.",
      status: "Presented",
      publisher: "Springer",
      conference: "BIM 2025",
      publicationType: "Book Chapter",
    },
    
  ];

  return (
  <section
    id="research"
    className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in-up"
  >
    <div className="container mx-auto">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-semibold animate-title-reveal text-center">
            <span className="gradient-title">Research & Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-justify">
            Exploring cutting-edge AI research in computer vision, OCR, and
            intelligent systems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col bg-card border border-border shadow-sm transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
            >
              {/* Banner */}
              {project.banner && (
                <img
                  src={project.banner}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-t-lg border-b border-border transition-transform duration-300 hover:scale-[1.015]"
                />
              )}

              <div className="p-4 flex-1 flex flex-col justify-between space-y-1">
                {/* Title & Description */}
                <div className="text-left">
                  <h3 className="text-l font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground text-justify mt-0.5">
                    {project.shortDescription}
                  </p>
                  {project.conference && (
                    <h4 className="text-xs font-bold text-muted-foreground mt-1.5">
                      {project.conference}
                    </h4>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap justify-around gap-1 text-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-md bg-secondary text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* AI Contribution / Novelty */}
                <div className="bg-muted/30 border-l-4 border-primary/60 rounded-md px-3 py-1 shadow-sm">
                  <span className="text-sm font-semibold text-primary">
                    Contribution:
                  </span>{" "}
                  <span className="text-xs font-semibold text-muted-foreground">
                    {project.aiContribution}
                  </span>
                </div>

                {/* Publication Details */}
                <div className="mt-2 text-xs text-left flex flex-col gap-1">
                  <div className="flex flex-wrap justify-between items-center w-full border-t border-border pt-2 text-primary font-medium">
                    <span>
                      Status:{" "}
                      <span className="text-muted-foreground">{project.status}</span>
                    </span>

                    {project.publisher && (
                      <span>
                        Publisher:{" "}
                        <span className="text-muted-foreground">{project.publisher}</span>
                      </span>
                    )}

                    {project.publicationType && (
                      <span>
                        Type:{" "}
                        <span className="text-muted-foreground">{project.publicationType}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-0 w-full justify-between text-muted-foreground border border-border hover:bg-primary/10 transition-all duration-300"
                >
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Future Plans Note */}
        <div className="text-center animate-fade-in text-justify">
          <p className="text-sm text-muted-foreground">
            Currently working on integrating UI components for all research
            papers and projects
          </p>
        </div>
      </div>
    </div>
  </section>


  );
};

export default Research;
