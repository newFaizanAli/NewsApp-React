import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import NewsCard from "./NewsCard";
import { UserRoleContext } from "./ContextFile";
import "../Styles/LayoutPage.css";

const LayoutPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { Categ, setFetch, Fetch } = useContext(UserRoleContext);
  const apiKey = process.env.REACT_APP_API_KEY; 

  const fetchNews = async () => {
    setLoading(true);
    // const pageSize = 20;
    const pageSize = 10;
  
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${Categ !== '' ? Categ.toLowerCase() : 'general'}&pageSize=${pageSize}&page=1&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (Array.isArray(data.articles)) {
        setArticles(prevArticles => [...prevArticles, ...data.articles]);
      } else {
        setError("Unexpected data format. Unable to fetch articles.");
      }
    } catch (error) {
      setError("Error fetching data. Please try again later.");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (Fetch) {
      setFetch(false);
      fetchNews();
    }
    
  }, [Fetch]);

  useEffect(() => {
    setArticles([]); // Clear existing articles
    fetchNews();
  }, [Categ]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20 && !loading) {
      fetchNews(); // Fetch data immediately without throttling
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Add empty dependency array to ensure this effect runs only once

  return (
    <div className="layout-container">
      <div id="top"></div>
    
      <h2 className="page-title typewriter-text p-3">{Categ ? Categ : 'General'}</h2>
      <div className="news-container">
        {articles.map((news, index) => (
          <NewsCard key={index} news={news} className="news-card" />
        ))}
      </div>
      {loading && (
        <div className="flex justify-center my-4">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {error && <p>{error}</p>}
      {/* "Go to Top" Link */}
      <div>
        <Link
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Go to Top
        </Link>
      </div>
    </div>
  );
};

export default LayoutPage;
