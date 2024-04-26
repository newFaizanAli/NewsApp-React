import React from "react";
import "../Styles/NewsCard.css";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ news }) => {
  const Navigate = useNavigate()

  return (
    <div className="glass-card flex flex-col justify-between p-6 rounded-lg shadow-lg max-w-sm w-full">
      <div>
        <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{news.source.name}</p>
        {news.urlToImage && (
          <img
            src={news.urlToImage}
            alt={news.title}
            className="mb-2 rounded-lg w-full"
            style={{ maxHeight: "200px" }} // Adjust the max height of the image
          />
        )}
        <p className="text-gray-700 mb-2">{news.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          {news.author || "Unknown author"}
        </p>
        <p className="text-sm text-gray-500">{news.publishedAt}</p>
      </div>
      <button className="glass-effect-button border-0 w-full py-2 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-300" onClick={() => Navigate('/news', {
        state : news
      })}>
        Open
      </button>
    </div>
  );
};

export default NewsCard;
