import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Blog.css";

const BlogDetail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const post = state?.post;

  if (!post) {
    return <p>Post not found (ID: {id})</p>;
  }

  return (
    <article className="blog-detail">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {/* You can expand this with more content, images, etc. */}
    </article>
  );
};

export default BlogDetail;
