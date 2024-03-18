import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import Navbar from '../NavBar';
import { useLocation } from 'react-router-dom';
import TeamAndSportList from '../teamAndSports/TeamandSportList';
import PreferredArticles from './PreferredArticles';
import useAuthentication from '../../hooks/useAuthentication'; 

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

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const location = useLocation();
  const isLoggedIn = useAuthentication(); // Use the custom hook to get authentication status

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

  // Retrieve selected sports from localStorage if user is logged in
  const storedData = localStorage.getItem('userData');
  const userData = storedData ? JSON.parse(storedData) : {};
  const selectedSports = isLoggedIn ? userData.preferences?.selectedSports || [] : [];
  const selectedTeams = isLoggedIn ? userData.preferences?.selectedTeams || [] : [];

  const handleSportClick = (sport: string) => {
    setSelectedSport(sport === selectedSport ? null : sport);
  };

  const filteredArticles = selectedSport
  ? articles.filter((article) => article.sport.name === selectedSport)
  : articles;

  const handleReadMore = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };


  return (
    <div className="flex">
      {/* Left Side (Article List) */}
      <div className={location.pathname === '/home' ? 'w-2/3' : 'flex-1'}>
        {location.pathname === '/articles' && <Navbar />}
        <h1 className='bg-green-500 text-red-800 text-2xl font-bold flex justify-center p-2 rounded-lg m-2'>Trending News</h1>
        <div className="bg-yellow-200 rounded-lg p-4 m-2 shadow-md">
          <div className="flex flex-wrap gap-4 mb-4 flex justify-center">
            {/* Create buttons for each sport */}
            {Array.from(new Set(articles.map((article) => article.sport.name))).map((sport) => (
              <button
                key={sport}
                onClick={() => handleSportClick(sport)}
                className={`px-3 py-2 rounded-md ${selectedSport === sport ? 'bg-blue-600 text-white font-semibold' : 'bg-gray-400 text-gray-800 font-semibold'} hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`}
              >
                {sport}
              </button>
            ))}
            {isLoggedIn && (
              <>
                <button
                  onClick={() => setSelectedSport(null)}
                  className={`px-6 py-3 rounded-md ${selectedSport === null ? 'bg-blue-600 text-white font-semibold' : 'bg-gray-400 text-gray-800 font-semibold'} hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`}
                  >
                  Preferred Articles
                </button>
                {!selectedSport && <PreferredArticles selectedSports={selectedSports} selectedTeams={selectedTeams}/>}
              </>
            )}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {selectedSport && filteredArticles.map((article) => (
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
        </div>

        {selectedArticle && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white rounded p-6 max-w-2xl overflow-y-auto'>
              <h2 className='text-2xl font-bold mb-4'>{selectedArticle.title}</h2>
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

      {/* Right Side (Team and Sport Dropdowns) */}
      {location.pathname === '/home' && (
        <div className="w-1/3">
          <TeamAndSportList />
        </div>
      )}
    </div>
  );
};

export default ArticleList;