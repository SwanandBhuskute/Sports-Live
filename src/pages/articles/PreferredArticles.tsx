import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';

interface Props {
  selectedSports: string[];
  selectedTeams: string[];
}

interface Team {
  id: number;
  name: string;
}

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
  teams: {
    id: number;
    name: string;
  }[];
}

const PreferredArticles: React.FC<Props> = ({ selectedSports, selectedTeams }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticleReadMore, setSelectedArticleReadMore] = useState<Article | null>(null);

  useEffect(() => {
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

  const preferredArticles = articles.filter(article => {
    return (
      selectedSports.includes(article.sport.name) ||
      article.teams.some(team => selectedTeams.includes(team.name))
    );
  });

  const handleReadMore = (article: Article) => {
    setSelectedArticleReadMore(article);
  };

  const handleCloseModal = () => {
    setSelectedArticleReadMore(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {preferredArticles.map((article) => (
          <div key={article.id} className='bg-white rounded p-4 shadow-md'>
          <img src={article.thumbnail} alt={article.title} className='mb-4 rounded-lg w-full h-40 object-cover' />
          <h2 className='text-xl font-semibold mb-2'>{article.id}: {article.title}</h2>
          <button
            onClick={() => handleReadMore(article)}
            className='bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Read more
          </button>
        </div>
        ))}
      </div>
      {selectedArticleReadMore && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white rounded p-6 max-w-2xl overflow-y-auto'>
              <h2 className='text-2xl font-bold mb-4'>{selectedArticleReadMore.title}</h2>
              <p className='text-gray-600 mb-4'>{selectedArticleReadMore.summary}</p>
              <button
                onClick={handleCloseModal}
                className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300'
              >
                Close
              </button>
            </div>
          </div>
        )}
    </>
  );
};

export default PreferredArticles;
