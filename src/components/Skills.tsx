import { Code2, Brain, Database, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "C", level: 80 },
      ],
    },
    {
      icon: Brain,
      title: "AI & Deep Learning",
      skills: [
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 82 },
        { name: "Keras", level: 85 },
        { name: "Scikit-learn", level: 80 },
      ],
    },
    {
      icon: Layers,
      title: "Computer Vision",
      skills: [
        { name: "OpenCV", level: 90 },
        { name: "Image Processing", level: 87 },
        { name: "OCR Systems", level: 85 },
        { name: "Object Detection", level: 82 },
      ],
    },
    {
      icon: Database,
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Jupyter Notebook", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Linux", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold animate-title-reveal">
              <span className="gradient-title">Technical Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expertise in modern AI technologies and software development tools
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <category.icon className="text-primary" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
