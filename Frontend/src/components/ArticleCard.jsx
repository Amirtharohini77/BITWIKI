import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="card">
      <h3>{article.title}</h3>
      <p>{article.content.substring(0, 100)}...</p>
      <Link to={`/article/${article._id}`}>Read More</Link>
    </div>
  );
};

export default ArticleCard;
