import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="text-center bg-[#DDD5C4] min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
      <p className="text-xl mb-4">
        Welcome to our blog! Here you'll find the latest updates and articles.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Recent Posts</h2>
        <ul className="list-disc list-inside">
          <li>The Future of Web Development</li>
          <li>10 Tips for Better React Performance</li>
          <li>Why TypeScript is a Game Changer</li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;