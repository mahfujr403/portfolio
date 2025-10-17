import { ExternalLink, Image } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TechScroll } from "@/lib/scroll";

interface Project {
  id?: string | number;
  title: string;
  shortDescription?: string;
  banner?: string;
  status?: string;
  conference?: string;
  technologies?: string[];
  aiContribution?: string;
  publisher?: string;
  publicationType?: string;
  // add any additional optional fields here as needed
}

interface ResearchCardProps {
  currentProjects: Project[];
  nextProjects: Project[];
  filteredProjects: Project[];
  filterType: string;
  currentPage: number;
  nextPage: number;
  isTransitioning: boolean;
  startIndex: number;
  handleViewDetails: (project: Project) => void;
  handleFilterChange: (value: string) => void;
}

const ResearchCard =  ({
  currentProjects,
  nextProjects,
  filteredProjects,
  filterType,
  currentPage,
  nextPage,
  isTransitioning,
  startIndex,
  handleViewDetails,
  handleFilterChange,
}: ResearchCardProps) => {
    return (


        <div className="relative min-h-[400px] sm:min-h-[600px]">
            {/* Current page cards */}
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 ease-in-out ${isTransitioning
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



                {filteredProjects.length === 0 &&

                    <div className="col-span-full w-full flex items-center justify-center h-[70vh]">
                        <div className="flex flex-col items-center justify-center text-center text-muted-foreground animate-fade-in">
                            <Image size={48} className="mb-4 opacity-60" />
                            <p className="text-base sm:text-lg font-medium">{filterType} are on the way!</p>
                            <p className="text-xs sm:text-sm mt-1 max-w-sm">
                                Working on  {filterType}. Check back soon for updates. <br />
                            </p>
                            <span className="text-s"> Explore my <b onClick={() => handleFilterChange("all")} className="cursor-pointer text-primary-foreground">other research papers</b> in the meantime.</span>
                        </div>
                    </div>



                }

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

                                {/* status badge */}
                                <div className="absolute top-3 right-3">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border ${project.status === "Published"
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
                                className="relative mt-2 w-full sm:w-auto justify-between text-foreground bg-gradient-to-r from-primary/70 to-orange-500/60 border border-transparent hover:from-primary hover:to-orange-500 hover:text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group/btn text-xs sm:text-sm py-2 sm:py-2.5 rounded-lg hover:scale-[1.03] active:scale-[0.98]"
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
                    className={`absolute top-0 left-0 right-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 z-10 opacity-0 ${nextProjects.length < 3 && nextProjects.length > 0 ? "lg:justify-items-center" : ""
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

                            {/* Title & Description */}
                            <div className="p-4 flex-1 flex flex-col justify-between space-y-1">
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
    );
}
export default ResearchCard;