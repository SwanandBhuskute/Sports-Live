// src/components/ArticleList.tsx
import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import Navbar from '../NavBar';
import { useLocation } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  summary: string;
  thumbnail: string;
  sport: {
    id: number;
    name: string;
  };
  date: string;
  content: string;
  // content: React.ReactNode;
  teams: {
    id: number;
    name: string;
  }[];
}

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const location = useLocation();

  useEffect(() => {
    // Function to fetch articles
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/articles`);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleReadMore = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
      {location.pathname === '/articles' && <Navbar />}
      <h1 className='bg-green-500 text-red-800 text-2xl font-bold flex justify-center p-2 rounded-lg m-2'>Article List</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {articles.map((article) => (
          <div key={article.id} className='bg-white rounded p-4 shadow-md'>
            <img src={article.thumbnail} alt={article.title} className='mb-4 rounded-lg w-full h-40 object-cover' />
            <h2 className='text-xl font-semibold mb-2'>{article.id}: {article.title}</h2>
            {/* <h2 className='text-xl font-semibold mb-2'>{article.content}</h2> */}
            {/* <h2 className='text-xl font-semibold mb-2'>{article.summary}</h2> */}
            <button
              onClick={() => handleReadMore(article)}
              className='bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
            >
              Read more
            </button>
          </div>
        ))}
      </div>

      {selectedArticle && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white rounded p-6 max-w-2xl overflow-y-auto'>
            <h2 className='text-2xl font-bold mb-4'>{selectedArticle.title}</h2>
            {/* <p className='text-gray-600 mb-4'>{selectedArticle.content}</p> */}
                <p className='text-gray-600 mb-4'>{selectedArticle.summary}</p>
            <button
              onClick={handleCloseModal}
              className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
