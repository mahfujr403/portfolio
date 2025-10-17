import { useState } from "react";
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
import { ResearchModal } from "./ProjectDetail";
import ResearchSummary from "./ResearchSummary";
import ResearchCard from "./ResearchCard";



const Research = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filterType, setFilterType] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 3;


  // Filter projects based on publicationType
  const filteredProjects = filterType === "all"
    ? projects
    : projects.filter(project => project.publicationType === filterType);

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
                value="Conference Paper"
                className="text-xs sm:text-sm px-3 py-1.5 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                Conference
              </ToggleGroupItem>

              <ToggleGroupItem
                value="Book Chapter"
                className="text-xs sm:text-sm px-3 py-1.5 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                Book Chapter
              </ToggleGroupItem>

              <ToggleGroupItem
                value="Journal"
                className="text-xs sm:text-sm px-3 py-1.5 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                Journal
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
          <ResearchCard
            currentProjects={currentProjects}
            nextProjects={nextProjects}
            filteredProjects={filteredProjects}
            filterType={filterType}
            currentPage={currentPage}
            nextPage={nextPage}
            isTransitioning={isTransitioning}
            startIndex={startIndex}
            handleViewDetails={handleViewDetails}
            handleFilterChange={handleFilterChange}
          />


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
            <div className="flex justify-center mt-3 sm:mt-4">
              <Pagination>
                <PaginationContent className="flex-wrap gap-1">
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={`${currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
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
                      className={`${currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"
                        } text-xs sm:text-sm px-2 sm:px-3 py-1.5`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

          {/* Results Info */}
          {filteredProjects.length > 0 && (
          <div className="text-center text-xs sm:text-sm text-muted-foreground mt-4">
            Showing {startIndex + 1} - {Math.min(endIndex, filteredProjects.length)} of{" "}
            {filteredProjects.length} {filterType === "all" ? "" : filterType} research projects
          </div> 
          )}

          {/* Modal popup*/}
          <ResearchModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          {/* Research Impact Summary */}
          <ResearchSummary />

        </div>
      </div>
    </section >
  );
};

export default Research;