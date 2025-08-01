import React from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const navigate = useNavigate();
  const blogPosts = [
    { id: 1, title: "React Basics", content: <p>"React is a JavaScript library used for building fast and dynamic user interfaces, especially single-page applications. It follows a component-based architecture, where UIs are split into reusable parts. JSX allows writing HTML-like syntax in JavaScript. It uses state and props to manage and pass data. React updates the UI efficiently using a virtual DOM."

</p> },
    { id: 2, title: "Hooks in React", content: <p>"Hooks are special functions in React that let you use state and other features in functional components. The most common hooks are useState (for managing state) and useEffect (for side effects like API calls). Hooks make it possible to write logic without using class components. They follow specific rules, like only being called at the top level of a component."</p> },
    { id: 3, title: "React Router", content: <p>"React Router is a library that allows navigation between pages in a React application without refreshing the browser. It uses components like BrowserRouter, Routes, and Route to define different paths and views. It enables single-page application (SPA) behavior by showing different components based on the URL. It also supports dynamic routing, nested routes, and navigation controls like Link and useNavigate.

"</p> },
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
