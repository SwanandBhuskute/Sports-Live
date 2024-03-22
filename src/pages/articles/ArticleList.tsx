import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import Navbar from '../NavBar';
import { useLocation } from 'react-router-dom';
import TeamAndSportList from '../teamAndSports/TeamandSportList';
import PreferredArticles from './PreferredArticles';
import useAuthentication from '../../hooks/useAuthentication';
import { Article } from '../../context/Articles/types';

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const isLoggedIn = useAuthentication(); 

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/articles`);
        const data = await response.json();
        setArticles(data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false); 
      }
    };

    fetchArticles();
  }, []);

  
  const handleSportClick = (sport: string) => {
    setSelectedSport(sport === selectedSport ? null : sport);
  };

  
  const handleReadMore = async (article: Article) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/articles/${article.id}`);
      const data = await response.json();
      setSelectedArticle(data);
      document.body.style.overflow = 'hidden';
    } catch (error) {
      console.error('Error fetching article details:', error);
    }
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'auto';
  };
  
  const filteredArticles = selectedSport
  ? articles.filter((article) => article.sport.name === selectedSport)
  : articles;
  
  return (
    <div className="flex">
      {/* Left Side (Article List) */}
      <div className={location.pathname === '/home' ? 'w-2/3 h-full overflow-y-auto' : 'flex-1'}>
        {location.pathname === '/articles' && <Navbar />}
        <h1 className='bg-gray-800 text-white text-2xl font-bold flex justify-center p-2 rounded-lg m-2'>Trending News</h1>
        <div className="bg-yellow-200 rounded-lg p-4 m-2 shadow-md">
          <div className="flex flex-wrap gap-4 mb-4 flex justify-center">
            {/* {loading && <p>Loading...</p>} */}
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
            {loading && <p>Loading...</p>}
            {isLoggedIn && !loading && (
              <>
                <button
                  onClick={() => setSelectedSport(null)}
                  className={`px-6 py-3 rounded-md ${selectedSport === null ? 'bg-blue-600 text-white font-semibold' : 'bg-gray-400 text-gray-800 font-semibold'} hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`}
                  >
                  Your choice
                </button>
                {!selectedSport && <PreferredArticles />}
              </>
            )}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {(selectedSport || !isLoggedIn) && filteredArticles.map((article) => (
              <div key={article.id} className='bg-white rounded p-4 shadow-md'>
                <img src={article.thumbnail} alt={article.title} className='mb-4 rounded-lg w-full h-40 object-cover' />
                <h2 className='text-xl font-semibold mb-2'>{article.title}</h2>
                <button
                  onClick={() => handleReadMore(article)}
                  className='bg-blue-600 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
                >
                  Read more
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for selected article */}
        <div className={`fixed top-0 left-0 w-full h-full overflow-y-auto flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${selectedArticle ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="bg-gray-300 rounded p-6 max-w-2xl mx-auto my-8 max-h-full overflow-y-auto">
            {/* Modal content */}
            {selectedArticle && (
              <>
                <img src={selectedArticle.thumbnail} alt={selectedArticle.title} className='mb-4 rounded-lg w-full h-40 object-cover' />
                <h2 className='text-2xl font-bold mb-4'>{selectedArticle.title}</h2>
                <p className='mb-4'>{selectedArticle.content}</p>
                <p className="font-semibold">Ends at: {new Date(selectedArticle.date).toLocaleString()}</p>
                {selectedArticle.teams.length > 0 && (
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-semibold">Teams:</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedArticle.teams.map((team) => (
                        <span key={team.id} className="bg-gray-200 px-2 py-1 rounded">{team.name}</span>
                      ))}
                    </div>
                  </div>
                )}
                <button
                  onClick={handleCloseModal}
                  className='bg-red-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300'
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>

      </div>
      {/* Right Side (Team and Sport Dropdowns) */}
      {location.pathname === '/home' && (
        <div className="w-1/3 overflow-y-auto">
          <TeamAndSportList />
        </div>
      )}
    </div>
  );
};

export default ArticleList;
