import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

const BlogHomePage = () => {
  const [posts, setPosts] = useState([]);

  useSEO({
    title: "Blog",
    description:
      "Explore insights, strategies, and updates from Skynetrix. Stay informed and empowered with our latest blog posts on shop growth, marketing, and innovation.",
  });

  useEffect(() => {
    // TODO: Replace with actual API call
    // Example placeholder fetch
    const dummyPosts = [
      {
        id: 1,
        title: "How Skynetrix Helps Independent Shops Scale",
        excerpt:
          "Discover how our platform automates follow-ups, surfaces shop insights, and simplifies operations...",
        slug: "how-skynetrix-helps-independent-shops",
        date: "2025-04-01",
      },
      {
        id: 2,
        title: "Marketing Tips for Small Dealerships in 2025",
        excerpt:
          "From local SEO to remarketing campaigns, these tactics will help your dealership thrive...",
        slug: "marketing-tips-for-small-dealerships",
        date: "2025-03-28",
      },
    ];

    setPosts(dummyPosts);
  }, []);

  return (
    <main className="min-h-screen py-12 px-6 bg-light-primary-bg dark:bg-dark-primary-bg text-black dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-light-purple dark:text-light-teal text-center">
          Skynetrix Blog
        </h1>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          Articles, insights, and real-world strategies to help auto repair
          shops and dealerships grow in a digital-first world.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-dark-secondary p-6 rounded-xl shadow-md transition hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-light-purple dark:text-light-teal mb-2">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {post.excerpt}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Posted on {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogHomePage;
