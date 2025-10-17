import { useState } from "react";
import { Trophy, Award, Calendar, Users, MapPin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import icpcData from "@/lib/icpcData";



const ICPCShowcase = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [isCertificateView, setIsCertificateView] = useState(false);

    const openImageModal = (event, index, isCert = false) => {
        setSelectedEvent(event);
        setIsCertificateView(isCert);
        setSelectedImageIndex(index);
        setIsImageModalOpen(true);
    };

    const nextImage = () => {
        if (!selectedEvent) return;
        const certs = Array.isArray(selectedEvent.certificate)
            ? selectedEvent.certificate
            : [selectedEvent.certificate];
        const totalCerts = certs.length;
        const totalImages = selectedEvent.images.length;
        const totalItems = totalCerts + totalImages;

        const currentIndex = isCertificateView
            ? selectedImageIndex
            : totalCerts + selectedImageIndex;
        const nextIndex = (currentIndex + 1) % totalItems;

        if (nextIndex < totalCerts) {
            setIsCertificateView(true);
            setSelectedImageIndex(nextIndex);
        } else {
            setIsCertificateView(false);
            setSelectedImageIndex(nextIndex - totalCerts);
        }
    };

    const prevImage = () => {
        if (!selectedEvent) return;
        const certs = Array.isArray(selectedEvent.certificate)
            ? selectedEvent.certificate
            : [selectedEvent.certificate];
        const totalCerts = certs.length;
        const totalImages = selectedEvent.images.length;
        const totalItems = totalCerts + totalImages;

        const currentIndex = isCertificateView
            ? selectedImageIndex
            : totalCerts + selectedImageIndex;
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;

        if (prevIndex < totalCerts) {
            setIsCertificateView(true);
            setSelectedImageIndex(prevIndex);
        } else {
            setIsCertificateView(false);
            setSelectedImageIndex(prevIndex - totalCerts);
        }
    };


    return (
        <section id="icpc" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-card/30 animate-fade-in-up">
            <div className="container mx-auto max-w-7xl">
                <div className="space-y-8 sm:space-y-10">

                    {/* Section Header */}
                    <div className="text-center space-y-2 animate-fade-in">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold animate-title-reveal text-center">
                            <span className="gradient-title">Algorithmic Battles</span>
                        </h2>
                        <p className="text-muted-foreground text-sm sm:text-base max-w-4xl text-center mx-auto text-justify">
                            A journey through my ICPC participation, problem-solving challenges, and team achievements in regional contests.
                        </p>
                    </div>


                    {/* Timeline of Events */}
                    <div className="space-y-6">
                        {icpcData.map((event, index) => (
                            <Card
                                key={event.id}
                                className="group/card relative flex flex-col bg-gradient-to-br from-card via-card to-card/50 border border-border/50 shadow-lg overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-2"
                            >
                                {/* Animated gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                                {/* Animated corner accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative p-4 sm:p-6">
                                    <div className="flex flex-col lg:flex-row gap-6">
                                        {/* Left: Event Details */}
                                        <div className="flex-1 space-y-4">
                                            {/* Header */}
                                            <div className="flex flex-wrap items-start gap-3 mb-2">
                                                <span className="px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-md border bg-primary text-primary-foreground border-primary shadow-lg">
                                                    {event.year}
                                                </span>
                                                {/* <span className="px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border bg-green-500/90 text-white border-green-400 shadow-lg">
                                                    Rank: {event.rank}
                                                </span> */}
                                            </div>

                                            <div className="space-y-2">
                                                <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight transition-colors duration-300 group-hover/card:text-primary">
                                                    {event.contest}
                                                </h3>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                                                    <span className="text-sm font-semibold text-primary">
                                                        {event.team}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                {event.description}
                                            </p>

                                            {/* Event Info Grid */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2 border-t border-border/50">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5 text-primary" />
                                                    <span className="text-muted-foreground">{event.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="w-3.5 h-3.5 text-primary" />
                                                    <span className="text-muted-foreground">{event.location}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Trophy className="w-3.5 h-3.5 text-primary" />
                                                    <span className="text-muted-foreground">
                                                        Problems Solved: <span className="font-semibold text-foreground">{event.problemsSolved}</span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Users className="w-3.5 h-3.5 text-primary" />
                                                    <span className="text-muted-foreground">Team Competition</span>
                                                </div>
                                            </div>

                                            {/* Achievements */}
                                            <div className="relative bg-gradient-to-r from-primary/10 via-orange-500/10 to-primary/10 border-l-4 border-primary rounded-r-lg p-3 backdrop-blur-sm">
                                                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2">
                                                        <Award className="w-4 h-4 text-primary" />
                                                        <span className="text-xs font-bold text-primary uppercase tracking-wide">
                                                            Key Achievements
                                                        </span>
                                                    </div>
                                                    <ul className="space-y-1 pl-6">
                                                        {event.achievements.map((achievement, i) => (
                                                            <li key={i} className="text-xs text-muted-foreground leading-relaxed list-disc">
                                                                {achievement}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="relative mt-2 w-full sm:w-auto justify-between text-foreground bg-secondary/50 border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 overflow-hidden group/btn text-xs sm:text-sm py-2 sm:py-2.5"
                                                onClick={() => openImageModal(event, 0, true)}
                                            >
                                                <span className="relative z-10 font-semibold flex items-center gap-2">
                                                    <Award size={16} />
                                                    View Certificates
                                                </span>
                                                <ExternalLink
                                                    size={16}
                                                    className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                            </Button>

                                        </div>

                                        {/* Right: Image Gallery */}
                                        <div className="lg:w-80 space-y-3">
                                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                                Event Gallery
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                {event.images.map((image, imgIndex) => (
                                                    <div
                                                        key={imgIndex}
                                                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group/img border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                                                        onClick={() => openImageModal(event, imgIndex)}
                                                    >
                                                        <img
                                                            src={image}
                                                            alt={`${event.contest} - Image ${imgIndex + 1}`}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                                                            loading="lazy"
                                                            onError={(e) => {
                                                                e.currentTarget.src = `https://placehold.co/400x400/1f2937/ffffff?text=ICPC+${event.year}`;
                                                            }}
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                                            <ExternalLink className="w-6 h-6 text-primary-foreground" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Stats Summary */}
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-card via-card to-card/50 border border-border/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
                            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                            <div className="text-xl sm:text-2xl font-bold text-foreground">{icpcData.length}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Contests</div>
                        </Card>
                        <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-card via-card to-card/50 border border-border/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
                            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                            <div className="text-xl sm:text-2xl font-bold text-foreground">
                                {icpcData.reduce((acc, e) => acc + e.achievements.length, 0)}
                            </div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Achievements</div>
                        </Card>
                        <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-card via-card to-card/50 border border-border/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
                            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                            <div className="text-xl sm:text-2xl font-bold text-foreground">
                                {new Set(icpcData.map(e => e.team)).size}
                            </div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Teams</div>
                        </Card>
                        <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-card via-card to-card/50 border border-border/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
                            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                            <div className="text-xl sm:text-2xl font-bold text-foreground">
                                {Math.max(...icpcData.map(e => parseInt(e.year))) - Math.min(...icpcData.map(e => parseInt(e.year))) + 1}
                            </div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Years Active</div>
                        </Card>
                    </div> */}


                </div>
            </div>

            {/* Image Modal */}
            <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
                <DialogContent className="max-w-4xl p-0 bg-background border-primary/50">
                    {selectedEvent && (
                        <>
                            <DialogHeader className="p-4 pb-0 bg-card">
                                <DialogTitle className="text-foreground text-base sm:text-lg">
                                    {selectedEvent.contest} - Gallery
                                </DialogTitle>
                            </DialogHeader>
                            <div className="relative aspect-video bg-card">
                                <img
                                    src={
                                        isCertificateView
                                            ? (Array.isArray(selectedEvent.certificate)
                                                ? selectedEvent.certificate[selectedImageIndex]
                                                : selectedEvent.certificate)
                                            : selectedEvent.images[selectedImageIndex]
                                    }
                                    alt={
                                        isCertificateView
                                            ? `${selectedEvent.contest} - Certificate ${selectedImageIndex + 1}`
                                            : `${selectedEvent.contest} - Image ${selectedImageIndex + 1}`
                                    }
                                    className="w-full h-full object-contain"
                                />

                                {/* Image Counter */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 text-foreground px-4 py-2 rounded-full text-xs sm:text-sm border border-border">
                                    {isCertificateView
                                        ? `Certificate ${selectedImageIndex + 1}/${Array.isArray(selectedEvent.certificate)
                                            ? selectedEvent.certificate.length
                                            : 1
                                        }`
                                        : `Image ${selectedImageIndex + 1}/${selectedEvent.images.length}`}
                                </div>

                                {/* Navigation Buttons */}
                                {(selectedEvent.images.length > 0 || selectedEvent.certificate) && (
                                    <>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground"
                                            onClick={prevImage}
                                        >
                                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground"
                                            onClick={nextImage}
                                        >
                                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </Button>
                                    </>
                                )}

                                {/* Image Counter */}
                                {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 text-foreground px-4 py-2 rounded-full text-xs sm:text-sm border border-border">
                                    {selectedImageIndex === -1 ? 'Certificate' : `${selectedImageIndex + 1} / ${selectedEvent.images.length}`}
                                </div> */}
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default ICPCShowcase;