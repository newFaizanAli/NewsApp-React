import React from 'react';
import { useLocation } from 'react-router-dom';
import "../Styles/NewsContent.css";

const NewsContent = () => {
  const location = useLocation();
  const { author, publishedAt, content, title, urlToImage, source, url } = location.state;

  return (
    <div className="news-content">
      <div className="news-header">
        <h1>{title}</h1>
        <p>By {author} | Published on {new Date(publishedAt).toLocaleDateString()}</p>
      </div>
      <div className="news-body">
        <img src={urlToImage} alt={title} />
        <p>{content}</p>
      </div>
      <div className="news-footer">
        <p>Source: {source.name}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Read Full Article</a>
      </div>
    </div>
  );
};

export default NewsContent;
