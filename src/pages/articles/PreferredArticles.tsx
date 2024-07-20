import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import { Article } from '../../context/Articles/types';
import { useTranslation } from 'react-i18next';
import { formatDateTime } from '../../components/dateUtils';


const PreferredArticles: React.FC = () => {
  const [articless, setArticless] = useState<Article[]>([]);
  const [selectedArticleReadMore, setSelectedArticleReadMore] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [preferredArticles, setPreferredArticles] = useState<Article[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/articles`);
        const data = await response.json();
        setArticless(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const retrievePreferences = () => {
    const userDataString = localStorage.getItem('userData');
    const userData = userDataString ? JSON.parse(userDataString) : null;
  
    // Check if userData.preferences exists, if not, set preferredArticles to all articles
    if (!userData || !userData.preferences) {
      setPreferredArticles(articless);
      return;
    }
  
    const latestSelectedSports = userData.preferences.selectedSports || [];
    const latestSelectedTeams = userData.preferences.selectedTeams || [];
  
    const filteredArticles = articless.filter(article => {
      return (
        latestSelectedSports.includes(article.sport.name) ||
        article.teams.some(team => latestSelectedTeams.includes(team.name))
      );
    });
  
    setPreferredArticles(filteredArticles);
  };
  

  useEffect(() => {
    retrievePreferences();
  }, [articless]);

  const handleRefresh = () => {
    retrievePreferences();
  };

  const handleReadMore = async (article: Article) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/articles/${article.id}`);
      const data = await response.json();
      setSelectedArticleReadMore(data);
      document.body.style.overflow = 'hidden';
    } catch (error) {
      console.error('Error fetching article details:', error);
    }
  };

  const handleCloseModal = () => {
    setSelectedArticleReadMore(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <button 
        className='text-xl flex items-center font-semibold rounded-lg'
        onClick={handleRefresh}>
        &#x27f3;
      </button>
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {preferredArticles.map((article) => (
          <div key={article.id} className='bg-white rounded p-4 shadow-md'>
            <img src={article.thumbnail} alt={article.title} className='mb-4 rounded-lg w-full h-40 object-cover' />
            <h2 className='text-xl font-semibold mb-2'>{article.id}: {article.title}</h2>
            <button
              onClick={() => handleReadMore(article)}
              className='bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
            >
              {t('Read more')}
            </button>
          </div>
        ))}
      </div>
      {selectedArticleReadMore && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-gray-300 rounded p-6 max-w-2xl mx-auto my-8 max-h-full overflow-y-auto'>
            <h2 className='text-2xl font-bold mb-4'>{selectedArticleReadMore.title}</h2>
            <img src={selectedArticleReadMore.thumbnail} alt={selectedArticleReadMore.title} className='mb-4 rounded-lg w-full h-full object-cover' />
            <p className='mb-4'>{selectedArticleReadMore.content}</p>
            <p className="font-semibold">{t('Ends at')}: {formatDateTime(selectedArticleReadMore.date, i18n.language)}</p>
            {selectedArticleReadMore.teams.length > 0 && (
              <div className="flex justify-between items-center mt-2">
                <p className="font-semibold">{t('Teams')}:</p>
                <div className="flex flex-wrap gap-1">
                  {selectedArticleReadMore.teams.map((team) => (
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
          </div>
        </div>
      )}
    </>
  );
};

export default PreferredArticles;
