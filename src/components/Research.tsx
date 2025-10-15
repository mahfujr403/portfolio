import { useState } from "react";
import { FileText, ExternalLink, Code, X, Award, Book, Image } from "lucide-react";
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
import projects from "@/lib/projects.ts";
import { TechScroll } from "@/lib/scroll";
import{ ResearchModal } from "./ProjectDetail";



const Research = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filterType, setFilterType] = useState<string>("published");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 3;

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

    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);

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
      setCurrentPage(1);
      setNextPage(1);
    }
  };

  // Handle view details
  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
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
        pages.push("ellipsis");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <section
      id="research"
      className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 animate-fade-in-up"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-8 sm:space-y-10">
          {/* Section Header */}
          <div className="text-center space-y-2 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold animate-title-reveal text-center">
              <span className="gradient-title">Research & Projects</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto text-justify">
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
              className="bg-card border border-border rounded-lg p-1 flex-wrap gap-1 sm:gap-2"
            >
              <ToggleGroupItem
                value="published"
                className="text-xs sm:text-sm px-3 py-1.5 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                Published
              </ToggleGroupItem>
              <ToggleGroupItem
                value="ongoing"
                className="text-xs sm:text-sm px-3 py-1.5 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                On Going
              </ToggleGroupItem>
              <ToggleGroupItem
                value="all"
                className="text-xs sm:text-sm px-3 py-1.5 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                All
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Projects Grid */}
          <div className="relative min-h-[400px] sm:min-h-[600px]">
            {/* Current page cards */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 ease-in-out ${
                isTransitioning
                  ? "opacity-0 scale-75 -z-10"
                  : "opacity-100 scale-100 z-0"
              } ${currentProjects.length < 3 && currentProjects.length > 0 ? "lg:justify-items-center" : ""}`}
              key={`current-${currentPage}`}
              style={{
                gridTemplateColumns:
                  currentProjects.length < 3 && currentProjects.length > 0
                    ? "repeat(auto-fit, minmax(0, 400px))"
                    : undefined,
                justifyContent:
                  currentProjects.length < 3 && currentProjects.length > 0 ? "center" : undefined,
              }}
            >
              {currentProjects.map((project, index) => (
                <Card
                  key={startIndex + index}
                  className="group/card relative flex flex-col bg-gradient-to-br from-card via-card to-card/50 border border-border/50 shadow-lg overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-2 w-full max-w-md mx-auto"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                  {/* Banner */}
                  {project.banner && (
                    <div className="relative overflow-hidden h-40 sm:h-48">
                      <img
                        src={project.banner}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                        loading="lazy"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"></div>

                      {/* Status badge */}
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border ${
                            project.status === "Published"
                              ? "bg-green-500/90 text-white border-green-400"
                              : "bg-orange-500/90 text-white border-orange-400"
                          } shadow-lg`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="relative p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight transition-colors duration-300 group-hover/card:text-primary line-clamp-3">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>
                      {project.conference && (
                        <div className="flex items-center gap-2 pt-1">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          <span className="text-xs font-semibold text-primary">
                            {project.conference}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Technologies */}
                    <TechScroll technologies={project.technologies} />

                    {/* AI Contribution with icon */}
                    <div className="relative bg-gradient-to-r from-primary/10 via-orange-500/10 to-primary/10 border-l-4 border-primary rounded-r-lg p-3 backdrop-blur-sm">
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-primary uppercase tracking-wide">
                            Key Contributions
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {project.aiContribution}
                        </p>
                      </div>
                    </div>

                    {/* Publication Details */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs pt-2 border-t border-border/50">
                      {project.publisher && (
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Publisher:</span>{" "}
                            {project.publisher}
                          </span>
                        </div>
                      )}
                      {project.publicationType && (
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Type:</span>{" "}
                            {project.publicationType}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* View Details Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="relative mt-2 w-full justify-between text-foreground bg-secondary/50 border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 overflow-hidden group/btn text-xs sm:text-sm py-2 sm:py-2.5"
                      onClick={() => handleViewDetails(project)}
                    >
                      <span className="relative z-10 font-semibold">Explore Details</span>
                      <ExternalLink
                        size={16}
                        className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Next page cards (coming forward) */}
            {isTransitioning && (
              <div
                className={`absolute top-0 left-0 right-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 z-10 opacity-0 ${
                  nextProjects.length < 3 && nextProjects.length > 0 ? "lg:justify-items-center" : ""
                }`}
                key={`next-${nextPage}`}
                style={{
                  animation: "zoomIn 700ms ease-in-out forwards",
                  gridTemplateColumns:
                    nextProjects.length < 3 && nextProjects.length > 0
                      ? "repeat(auto-fit, minmax(0, 400px))"
                      : undefined,
                  justifyContent:
                    nextProjects.length < 3 && nextProjects.length > 0 ? "center" : undefined,
                }}
              >
                {nextProjects.map((project, index) => (
                  <Card
                    key={startIndex + index}
                    className="flex flex-col bg-card border border-border shadow-sm transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 group w-full max-w-md mx-auto"
                  >
                    {/* Banner */}
                    {project.banner && (
                      <img
                        src={project.banner}
                        alt={project.title}
                        className="w-full h-40 object-cover rounded-t-lg border-b border-border transition-transform duration-300 hover:scale-[1.015]"
                        loading="lazy"
                      />
                    )}

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-1">
                      {/* Title & Description */}
                      <div className="text-left">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground text-justify mt-0.5">
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
                        className="mt-0 w-full justify-between text-muted-foreground border border-border hover:bg-primary/10 transition-all duration-300 text-xs sm:text-sm py-2 sm:py-2.5"
                        onClick={() => handleViewDetails(project)}
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

            /* Hide scrollbar for Chrome, Safari and Opera */
            .overflow-x-scroll::-webkit-scrollbar {
              display: none;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            .overflow-x-scroll {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }

            @media (max-width: 640px) {
              .container {
                padding-left: 1rem;
                padding-right: 1rem;
              }
              .grid {
                grid-template-columns: 1fr !important;
                justify-content: center;
              }
            }
          `}</style>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 sm:mt-8">
              <Pagination>
                <PaginationContent className="flex-wrap gap-1">
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={`${
                        currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
                      } text-xs sm:text-sm px-2 sm:px-3 py-1.5`}
                    />
                  </PaginationItem>

                  {getPageNumbers().map((page, idx) => (
                    <PaginationItem key={idx}>
                      {page === "ellipsis" ? (
                        <PaginationEllipsis className="text-xs sm:text-sm" />
                      ) : (
                        <PaginationLink
                          onClick={() => handlePageChange(page as number)}
                          isActive={currentPage === page}
                          className="cursor-pointer text-xs sm:text-sm px-2 sm:px-3 py-1.5"
                        >
                          {page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      className={`${
                        currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"
                      } text-xs sm:text-sm px-2 sm:px-3 py-1.5`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

          {/* Results Info */}
          <div className="text-center text-xs sm:text-sm text-muted-foreground mt-4">
            Showing {startIndex + 1} - {Math.min(endIndex, filteredProjects.length)} of{" "}
            {filteredProjects.length} {filterType === "all" ? "" : filterType} research projects
          </div>


          {/* Modal */}
          <ResearchModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default Research;