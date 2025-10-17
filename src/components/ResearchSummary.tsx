import { Card } from "./ui/card";


const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
};

export const ResearchSummary = () => {
    return (
        <Card className="relative overflow-hidden bg-gradient-to-br from-card via-card to-card/50 border border-border/50 shadow-lg mt-8">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5 opacity-50"></div>

            {/* Animated corner accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent blur-3xl"></div>

            <div className="relative p-6 sm:p-8">
                <div className="text-center space-y-4 mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        <span className="gradient-title">Research Impact & Vision</span>
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Driving innovation in artificial intelligence, deep learning, and computer vision through impactful research in medical imaging, pattern recognition, and intelligent systems.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {/* Focus Area 1 */}
                    <div className="space-y-2 p-4 rounded-lg bg-secondary/30 border border-border/50 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <h4 className="text-sm font-bold text-foreground">Medical Imaging & AI</h4>
                        </div>
                        <ul className="text-xs text-muted-foreground leading-relaxed list-disc pl-5 space-y-1">
                            <li>Deep learning models for medical image classification</li>
                            <li>AI-driven tumor and cancer detection techniques</li>
                            <li>Transfer learning for precise MRI-based diagnosis</li>
                        </ul>
                    </div>

                    {/* Focus Area 2 */}
                    <div className="space-y-2 p-4 rounded-lg bg-secondary/30 border border-border/50 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <h4 className="text-sm font-bold text-foreground">Computer Vision & Recognition</h4>
                        </div>
                        <ul className="text-xs text-muted-foreground leading-relaxed list-disc pl-5 space-y-1">
                            <li>Ensemble methods for robust face recognition</li>
                            <li>Bangla handwritten digit recognition with deep CNNs</li>
                            <li>Novel dataset creation for OCR research</li>
                        </ul>
                    </div>

                    {/* Focus Area 3 */}
                    <div className="space-y-2 p-4 rounded-lg bg-secondary/30 border border-border/50 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <h4 className="text-sm font-bold text-foreground">Intelligent Systems</h4>
                        </div>
                        <ul className="text-xs text-muted-foreground leading-relaxed list-disc pl-5 space-y-1">
                            <li>Adaptive intelligence with deep learning and OCR</li>
                            <li>Pattern recognition and ensemble modeling</li>
                            <li>Applications in real-world intelligent automation</li>
                        </ul>

                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-6 text-center">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                        Interested in collaboration or exploring my research in AI and deep learning?{" "}
                        <a onClick={scrollToContact} className="text-primary font-semibold cursor-pointer transition-colors">
                            Get in touch
                        </a>
                    </p>
                </div>
            </div>
        </Card>
    );
}


export default ResearchSummary;


