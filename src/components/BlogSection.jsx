// components/BlogSection.jsx
import React from "react";
import "./styles/BlogSection.css";

const blogPosts = [
  {
    image: "/imgs/AnalysisCard.png",
    title: "How UX works in web",
    date: "Nov 9, 2022",
    tags: ["UI", "UX"],
    link: "#"
  },
  {
    image: "/imgs/FortnCard.png",
    title: "Case study - Analysis Application.",
    date: "Aug 18, 2023",
    tags: ["DESIGN", "PRINT"],
    link: "#"
  },
  {
    image: "/imgs/ZincoidCard.png",
    title: "3 ways to develop your skill",
    date: "Feb 16, 2023",
    tags: ["FIGMA", "WEB"],
    link: "#"
  }
];

const BlogSection = () => {
  return (
    <section className="blog" id="blog">
      <div className="blog-title">
        ✹ Blog
        <a href="#" style={{ fontSize: "0.9rem", textDecoration: "underline", color: "#fff" }}>view all</a>
      </div>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <p className="date">{post.date}</p>
              <h3>{post.title}</h3>
              <div className="tags">
                {post.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
            <a href={post.link} className="read-more">Read</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
