import React, { useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard';

const WikiPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/articles')
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div>
      <h2>All Wiki Articles</h2>
      {articles.map(article => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </div>
  );
};

export default WikiPage;
