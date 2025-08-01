import React from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const navigate = useNavigate();
  const blogPosts = [
    { id: 1, title: "React Basics", content: "Learn the fundamentals of React including components, props, and state." },
    { id: 2, title: "Hooks in React", content: "Discover how to use useState, useEffect, and custom hooks effectively." },
    { id: 3, title: "React Router", content: "Navigate between pages using React Router DOM with ease." },
  ];

  return (
    <section className="blog-section">
      <h2 className="blog-title">Latest Blog News</h2>
      <div className="blog-container">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-box">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button
              onClick={() =>
                navigate(`/post/${post.id}`, { state: { post } })
              }
            >
              Read More
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
