
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const BlogPost = () => {
  const post = {
    title: "Blog Post Title",
    date: "April 19, 2025",
    author: "John Doe",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <Card className="p-8">
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
