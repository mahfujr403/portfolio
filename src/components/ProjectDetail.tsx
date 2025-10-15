import { useState, useEffect } from "react";
import { ExternalLink, Award, FileText, Book, Image } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const ResearchModal = ({ project, isOpen, onClose }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Disable scrolling on body when lightbox is open
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPhoto]);

  if (!project) return null;

  const handleModalClose = () => {
    setSelectedPhoto(null); // Reset lightbox state
    onClose(); // Close modal
  };

  const handleLightboxClose = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedPhoto(null); // Close lightbox only
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open && !selectedPhoto) handleModalClose(); // Close modal on overlay click only if lightbox is not open
        }}
      >
        <DialogContent
          className={`max-w-5xl max-h-[90vh] overflow-y-auto p-0 gap-0 ${selectedPhoto ? 'pointer-events-none' : ''}`}
        >
          {/* Header with Banner */}
          <div className="relative h-64 overflow-hidden rounded-t-lg">
            <img
              src={project.banner}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white leading-tight">
                  {project.title}
                </DialogTitle>
              </DialogHeader>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Metadata Row */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="default" className="px-3 py-1">
                {project.status}
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 font-bold leading-tight">
                {project.publicationType}
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                {project.conference}
              </Badge>
              {project.presentationDate && (
                <Badge variant="outline" className="px-3 py-1">
                  📅 {project.presentationDate}
                </Badge>
              )}
            </div>

            {/* Publisher Info */}
            <Card className="p-4 bg-muted/30">
              <div className="flex items-center gap-4">
                <Book className="text-primary" size={24} />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-muted-foreground">Published by</p>
                  <p className="text-lg font-bold">{project.publisher}</p>
                </div>
                {project.doi && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="relative bg-gradient-to-r from-primary to-orange-500 text-primary-foreground border border-primary/50 hover:scale-105 hover:brightness-110 hover:shadow-md active:scale-95 active:shadow-sm transition-all duration-300 rounded-md px-4 py-2 text-sm font-semibold group"
                    onClick={() => window.open(project.doi, '_blank')}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      Read Publication
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-orange-500/80 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </Button>
                )}
              </div>
            </Card>

            {/* Full Description */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FileText size={20} className="text-primary" />
                Abstract
              </h3>
              <p className="text-muted-foreground text-justify leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Novelty & Contribution */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Award size={20} className="text-primary" />
                Key Contributions & Novelty
              </h3>
              <Card className="p-4 bg-primary/5 border-l-4 border-primary">
                <p className="text-sm leading-relaxed">{project.novelty}</p>
              </Card>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Authors */}
            {project.authors && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Authors</h3>
                <p className="text-muted-foreground">{project.authors.join(", ")}</p>
              </div>
            )}

            {/* Keywords */}
            {project.keywords && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {project.keywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Certificate */}
            {project.certificate && (
              <div className="space-y-2 pt-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Award size={25} className="text-primary" />
                  Certificate
                </h3>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={project.certificate}
                    alt="Certificate"
                    className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedPhoto(project.certificate)}
                  />
                </Card>
              </div>
            )}

            {/* Event Photos */}
            {project.eventPhotos && project.eventPhotos.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Image size={20} className="text-primary" />
                  Event Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.eventPhotos.map((photo, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={photo}
                          alt={`Event ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Publisher Banner */}
            {project.publisherBanner && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Conference/Journal</h3>
                <Card className="overflow-hidden">
                  <img
                    src={project.publisherBanner}
                    alt="Publisher"
                    className="w-full h-32 object-cover"
                  />
                </Card>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox for photos */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300 pointer-events-auto"
          onClick={handleLightboxClose}
        >
          <img
            src={selectedPhoto}
            alt="Full size"
            className="max-w-[90vw] max-h-[90vh] object-contain animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export { ResearchModal };