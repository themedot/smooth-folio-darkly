
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold">Portfolio</span>
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-colors hover:text-primary ${
                activeSection === "home" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors hover:text-primary ${
                activeSection === "about" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`transition-colors hover:text-primary ${
                activeSection === "projects"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className={`transition-colors hover:text-primary ${
                activeSection === "blog" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors hover:text-primary ${
                activeSection === "contact"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Contact
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
