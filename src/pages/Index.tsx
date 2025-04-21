import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center space-y-6">
          <img
            src="/demo-preview.jpg"
            alt="Portfolio preview"
            className="mx-auto mb-6 rounded-lg shadow-lg max-w-xs md:max-w-md"
            style={{ objectFit: "cover" }}
          />
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate full-stack developer creating beautiful and functional web experiences.
          </p>
          <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get in touch
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground">
                With over 5 years of experience in web development, I specialize in
                creating modern and responsive web applications using the latest
                technologies.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="text-muted-foreground mb-4">
                  A brief description of the project and its main features.
                </p>
                <Link to={`/project/${project}`}>
                  <Button variant="outline" className="w-full">
                    View Project
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <Card key={post} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Blog Post {post}</h3>
                <p className="text-muted-foreground mb-4">
                  A preview of the blog post content goes here.
                </p>
                <Link to={`/blog/${post}`}>
                  <Button variant="ghost" className="w-full">
                    Read More
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <form onSubmit={handleContact} className="max-w-md mx-auto space-y-4">
            <Input
              placeholder="Your Name"
              value={contactForm.name}
              onChange={(e) =>
                setContactForm({ ...contactForm, name: e.target.value })
              }
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={(e) =>
                setContactForm({ ...contactForm, email: e.target.value })
              }
            />
            <Textarea
              placeholder="Your Message"
              value={contactForm.message}
              onChange={(e) =>
                setContactForm({ ...contactForm, message: e.target.value })
              }
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
