import { useState } from "react";
import { FileText, ExternalLink, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { banners } from "@/lib/banner.ts";

const Research = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filterType, setFilterType] = useState<string>("published");
  const itemsPerPage = 3;

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
      status: "Published",
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
      status: "Published",
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
      status: "Published",
      publisher: "Springer",
      conference: "BIM 2025",
      publicationType: "Book Chapter",
    },
    {
      banner: banners["ICDSA 2025"],
      title:
        "Advanced Neural Networks for Sentiment Analysis in Social Media",
      shortDescription:
        "Developing state-of-the-art models for understanding emotions and opinions in multilingual social media content with focus on Bangla language processing.",
      technologies: ["PyTorch", "NLP", "BERT", "Transformers"],
      aiContribution:
        "Novel architecture for multilingual sentiment classification.",
      status: "On Going",
      publisher: null,
      conference: null,
      publicationType: "Research Paper",
    },
    {
      banner: banners["BIM 2025"],
      title:
        "Real-time Object Detection for Autonomous Vehicle Systems",
      shortDescription:
        "Creating efficient deep learning models for real-time object detection and tracking in autonomous driving scenarios with emphasis on edge computing.",
      technologies: ["YOLO", "TensorFlow Lite", "Edge AI", "Computer Vision"],
      aiContribution:
        "Optimized model for edge deployment with high accuracy.",
      status: "On Going",
      publisher: null,
      conference: null,
      publicationType: "Research Paper",
    },
  ];

  // Filter projects based on status
  const filteredProjects = filterType === "all" 
    ? projects 
    : projects.filter(project => 
        filterType === "published" 
          ? project.status === "Published" 
          : project.status === "On Going"
      );

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);
  
  const nextStartIndex = (nextPage - 1) * itemsPerPage;
  const nextEndIndex = nextStartIndex + itemsPerPage;
  const nextProjects = filteredProjects.slice(nextStartIndex, nextEndIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page === currentPage || isTransitioning) return;
    
    setNextPage(page);
    setIsTransitioning(true);
    
    // Wait for animation to complete
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      
      // Scroll to research section when page changes
      const element = document.getElementById("research");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 700);
  };

  // Handle filter change
  const handleFilterChange = (value: string) => {
    if (value) {
      setFilterType(value);
      setCurrentPage(1); // Reset to first page when filter changes
      setNextPage(1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

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

          {/* Filter Toggle */}
          <div className="flex justify-center">
            <ToggleGroup 
              type="single" 
              value={filterType} 
              onValueChange={handleFilterChange}
              className="bg-card border border-border rounded-lg p-1"
            >
              <ToggleGroupItem 
                value="published" 
                className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                Published
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="ongoing"
                className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                On Going
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="all"
                className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                All
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Projects Grid */}
          <div className="relative min-h-[500px]">
            {/* Current page cards */}
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-in-out ${
              isTransitioning 
                ? 'opacity-0 scale-75 -z-10' 
                : 'opacity-100 scale-100 z-0'
            }`}
            key={`current-${currentPage}`}>
              {currentProjects.map((project, index) => (
              <Card
                key={startIndex + index}
                className="flex flex-col bg-card border border-border shadow-sm transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 group"
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
                    <h3 className="text-l font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
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
                        <span className={`${
                          project.status === "Published" 
                            ? "text-green-500" 
                            : "text-orange-500"
                        } font-semibold`}>
                          {project.status}
                        </span>
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
            
            {/* Next page cards (coming forward) */}
            {isTransitioning && (
              <div className="absolute top-0 left-0 right-0 grid md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 opacity-0"
              key={`next-${nextPage}`}
              style={{
                animation: 'zoomIn 700ms ease-in-out forwards'
              }}>
                {nextProjects.map((project, index) => (
              <Card
                key={startIndex + index}
                className="flex flex-col bg-card border border-border shadow-sm transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 group"
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
                    <h3 className="text-l font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
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
            )}
          </div>
          
          <style>{`
            @keyframes zoomIn {
              from {
                opacity: 0;
                transform: scale(1.3);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-2">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {getPageNumbers().map((page, idx) => (
                    <PaginationItem key={idx}>
                      {page === 'ellipsis' ? (
                        <PaginationEllipsis />
                      ) : (
                        <PaginationLink
                          onClick={() => handlePageChange(page as number)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

          {/* Results Info */}
          <div className="text-center text-sm text-muted-foreground">
            Showing {startIndex + 1} - {Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} {filterType === "all" ? "" : filterType} research projects
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