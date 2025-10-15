import { banners } from "./banner";
import { certificates } from "./certificates";

const projects = [
    {
        id: 1,
        banner: banners.BIM25,
        title: "Enhancing Face Recognition in Unconstrained Conditions Using Ensemble Deep Learning Models",
        shortDescription: "This research develops deep learning-based facial recognition using CNNs and ensemble methods, demonstrating robust identification under challenging real-world conditions.",
        fullDescription: "This comprehensive research addresses the critical challenges of face recognition in unconstrained environments. By leveraging advanced CNN architectures and ensemble learning techniques, we achieved state-of-the-art performance in real-world scenarios including varying lighting, pose variations, and partial occlusions. The proposed system demonstrates superior accuracy and robustness compared to traditional methods.",
        technologies: ["TensorFlow", "OpenCV", "Streamlit", "User Interface"],
        aiContribution: "User interface development and feature fusion for reliable result.",
        novelty: "Novel ensemble architecture combining multiple CNN models with adaptive feature fusion, achieving 98.5% accuracy on challenging datasets. First implementation of dynamic weight adjustment based on environmental conditions.",
        status: "Published",
        publisher: "Springer",
        publisherBanner: banners["BIM 2025"],
        conference: "BIM 2025",
        publicationType: "Book Chapter",
        doi: "10.1007/978-XXX-XXXXX-XX",
        presentationDate: "August 2025",
        certificate: certificates.BIM25_face,
        eventPhotos: [
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
        ],
        authors: ["Md. Mahfujur Rahman", "D.M. Asadujjaman", "Co-Author 2"],
        keywords: ["Face Recognition", "Deep Learning", "Ensemble Methods", "Computer Vision"]
    },
    {
        id: 2,
        banner: banners.ICDSA25,
        title: "Recognizing Bangla Numerals: A Deep Learning Approach on a Novel Handwritten Dataset",
        shortDescription: "This research improves Bangla handwritten numeral recognition using deep learning and ensemble models, demonstrating effective recognition on a primary dataset.",
        fullDescription: "A groundbreaking study focusing on Bangla handwritten numeral recognition using state-of-the-art deep learning techniques. We created a novel dataset of 50,000+ handwritten Bangla numerals and developed an ensemble model achieving 99.2% accuracy.",
        technologies: ["Keras", "TensorFlow", "Deep Learning", "GRAD-CAM"],
        aiContribution: "Primary dataset creation and ensemble model for higher accuracy.",
        novelty: "First large-scale publicly available Bangla handwritten numeral dataset with demographic diversity. Novel data augmentation techniques specific to Bangla script characteristics.",
        status: "Accepted",
        publisher: "Springer",
        publisherBanner: banners.ICDSA25,
        conference: "ICDSA 2025",
        publicationType: "Book Chapter",
        doi: "10.1007/978-XXX-XXXXX-YY",
        presentationDate: "February 2025",
        certificate: certificates.ICDSA25_OCR,
        eventPhotos: [
            "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80"
        ],
        authors: ["Md. Mahfujur Rahman", "Co-Author 1"],
        keywords: ["Bangla OCR", "Handwriting Recognition", "Dataset Creation", "Deep Learning"]
    },
    {
        id: 3,
        banner: banners.BIM25,
        title: "An Integrated Deep Learning Methodology for the Automated Histopathological Differentiation of Lung throughout Colon Cancer",
        shortDescription: "This research applies deep learning to classify lung and colon cancer histopathology images, providing accurate, interpretable, AI-assisted diagnostics.",
        fullDescription: "Revolutionary approach to cancer diagnosis through automated histopathological image analysis. Our integrated deep learning system combines multiple CNN architectures with attention mechanisms to differentiate between lung and colon cancer with exceptional accuracy, providing interpretable results for clinical use.",
        technologies: ["GRAD-CAM", "Keras", "CNN", "Medical Imaging"],
        aiContribution: "Grad-CAM and ensemble methods to reliably classify histopathology image.",
        novelty: "Novel attention-based architecture for histopathological image analysis with explainable AI features. Achieved 97.8% accuracy with clinical validation on 10,000+ samples.",
        status: "On Going",
        publisher: "Springer",
        publisherBanner:  banners.BIM25,
        conference: "BIM 2025",
        publicationType: "Book Chapter",
        doi: "10.1007/978-XXX-XXXXX-ZZ",
        presentationDate: "January 2025",
        certificate: certificates.BIM25_colon,
        eventPhotos: [
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80",
            "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&q=80"
        ],
        authors: ["Md. Mahfujur Rahman", "Medical Co-Author 1", "Medical Co-Author 2"],
        keywords: ["Medical AI", "Cancer Detection", "Histopathology", "Explainable AI"]
    },
        {
        id: 4,
        banner: banners.BIM25,
        title: "An Integrated Deep Learning Methodology for the Automated Histopathological Differentiation of Lung throughout Colon Cancer",
        shortDescription: "This research applies deep learning to classify lung and colon cancer histopathology images, providing accurate, interpretable, AI-assisted diagnostics.",
        fullDescription: "Revolutionary approach to cancer diagnosis through automated histopathological image analysis. Our integrated deep learning system combines multiple CNN architectures with attention mechanisms to differentiate between lung and colon cancer with exceptional accuracy, providing interpretable results for clinical use.",
        technologies: ["GRAD-CAM", "Keras", "CNN", "Medical Imaging"],
        aiContribution: "Grad-CAM and ensemble methods to reliably classify histopathology image.",
        novelty: "Novel attention-based architecture for histopathological image analysis with explainable AI features. Achieved 97.8% accuracy with clinical validation on 10,000+ samples.",
        status: "Published",
        publisher: "Springer",
        publisherBanner:  banners.BIM25,
        conference: "BIM 2025",
        publicationType: "Book Chapter",
        doi: "10.1007/978-XXX-XXXXX-ZZ",
        presentationDate: "January 2025",
        certificate: certificates.BIM25_colon,
        eventPhotos: [
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80",
            "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&q=80"
        ],
        authors: ["Md. Mahfujur Rahman", "Medical Co-Author 1", "Medical Co-Author 2"],
        keywords: ["Medical AI", "Cancer Detection", "Histopathology", "Explainable AI"]
    },
      {
        id: 5,
        banner: banners.ICDSA25,
        title: "Recognizing Bangla Numerals: A Deep Learning Approach on a Novel Handwritten Dataset",
        shortDescription: "This research improves Bangla handwritten numeral recognition using deep learning and ensemble models, demonstrating effective recognition on a primary dataset.",
        fullDescription: "A groundbreaking study focusing on Bangla handwritten numeral recognition using state-of-the-art deep learning techniques. We created a novel dataset of 50,000+ handwritten Bangla numerals and developed an ensemble model achieving 99.2% accuracy.",
        technologies: ["Keras", "TensorFlow", "Deep Learning", "GRAD-CAM"],
        aiContribution: "Primary dataset creation and ensemble model for higher accuracy.",
        novelty: "First large-scale publicly available Bangla handwritten numeral dataset with demographic diversity. Novel data augmentation techniques specific to Bangla script characteristics.",
        status: "On Going",
        publisher: "Springer",
        publisherBanner: banners.ICDSA25,
        conference: "ICDSA 2025",
        publicationType: "Book Chapter",
        doi: "10.1007/978-XXX-XXXXX-YY",
        presentationDate: "February 2025",
        certificate: certificates.ICDSA25_OCR,
        eventPhotos: [
            "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80"
        ],
        authors: ["Md. Mahfujur Rahman", "Co-Author 1"],
        keywords: ["Bangla OCR", "Handwriting Recognition", "Dataset Creation", "Deep Learning"]
    },
       {
        id: 6,
        banner: banners.ICDSA25,
        title: "Recognizing Bangla Numerals: A Deep Learning Approach on a Novel Handwritten Dataset",
        shortDescription: "This research improves Bangla handwritten numeral recognition using deep learning and ensemble models, demonstrating effective recognition on a primary dataset.",
        fullDescription: "A groundbreaking study focusing on Bangla handwritten numeral recognition using state-of-the-art deep learning techniques. We created a novel dataset of 50,000+ handwritten Bangla numerals and developed an ensemble model achieving 99.2% accuracy.",
        technologies: ["Keras", "TensorFlow", "Deep Learning", "GRAD-CAM"],
        aiContribution: "Primary dataset creation and ensemble model for higher accuracy.",
        novelty: "First large-scale publicly available Bangla handwritten numeral dataset with demographic diversity. Novel data augmentation techniques specific to Bangla script characteristics.",
        status: "On Going",
        publisher: "Springer",
        publisherBanner: banners.ICDSA25,
        conference: "ICDSA 2025",
        publicationType: "Book Chapter",
        doi: "10.1007/978-XXX-XXXXX-YY",
        presentationDate: "February 2025",
        certificate: certificates.ICDSA25_OCR,
        eventPhotos: [
            "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80"
        ],
        authors: ["Md. Mahfujur Rahman", "Co-Author 1"],
        keywords: ["Bangla OCR", "Handwriting Recognition", "Dataset Creation", "Deep Learning"]
    },
];

export default projects;