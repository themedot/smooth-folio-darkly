
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const BlogPost = () => {
  // Pick an image based on a static post (for demo, rotate by post id or something easily updatable)
  // For now, hardcode one for illustrative purposes
  const post = {
    title: "Blog Post Title",
    date: "April 19, 2025",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <Card className="p-8">
          <img
            src={post.image}
            alt={post.title}
            className="mb-6 rounded-lg w-full max-h-80 object-cover"
          />
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-2 text-muted-foreground mb-8">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost;
