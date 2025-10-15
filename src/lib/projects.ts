import { banners } from "./banner";

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

export default projects;