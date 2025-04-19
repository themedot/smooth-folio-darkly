
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectPage = () => {
  const project = {
    title: "Project Title",
    description: "A detailed description of the project and its main features.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    images: ["project-image-1.jpg", "project-image-2.jpg"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <Card className="p-8">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <p className="text-muted-foreground mb-8">{project.description}</p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="h-64 bg-muted rounded-lg flex items-center justify-center"
              >
                Image Placeholder {index + 1}
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Button onClick={() => window.open(project.liveUrl, '_blank')}>
              View Live Demo
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              View Source Code
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectPage;
