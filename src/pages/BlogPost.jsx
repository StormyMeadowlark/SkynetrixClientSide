import { useParams } from "react-router-dom";
import useSEO from "../hooks/useSEO"; // Assumes you have this
import { useEffect, useState } from "react";

// Fake blog data - replace with API call later
const dummyPosts = [
  {
    slug: "why-customer-retention-matters",
    title: "Why Customer Retention Matters for Auto Shops",
    content: `<p>Customer retention is key to sustainable growth...</p>`,
    description:
      "Learn why retaining customers is more profitable than always chasing new ones.",
    image: "/images/retention.jpg",
    date: "2025-03-15",
  },
  {
    slug: "ai-in-auto-industry",
    title: "How AI is Revolutionizing the Auto Industry",
    content: `<p>From diagnostics to customer service, AI is changing everything...</p>`,
    description: "Explore the real impact AI is having in the shop and beyond.",
    image: "/images/ai-impact.jpg",
    date: "2025-03-10",
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const found = dummyPosts.find((p) => p.slug === slug);
    setPost(found);
  }, [slug]);

  useSEO({
    title: post?.title || "Blog Post",
    description: post?.description || "Insightful strategies for shop owners.",
    image: post?.image,
    type: "article",
  });

  if (!post) {
    return (
      <div className="text-center py-16 text-light-text dark:text-dark-text">
        <h2 className="text-3xl font-bold">Post Not Found</h2>
        <p className="text-lg">
          We couldn't find the blog post you're looking for.
        </p>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-light-text dark:text-dark-text">
      <h1 className="text-4xl font-bold text-light-purple dark:text-light-teal mb-4">
        {post.title}
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {new Date(post.date).toDateString()}
      </p>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full max-h-[400px] object-cover rounded-xl mb-8"
        />
      )}
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
};

export default BlogPost;