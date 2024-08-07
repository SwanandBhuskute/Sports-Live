import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import Navbar from '../NavBar';
import { useLocation } from 'react-router-dom';
import { Team, Sport, Article } from '../../context/TeamandSport/types';
import { useTranslation } from 'react-i18next';
import { formatDateTime } from '../../components/dateUtils';

const TeamAndSportList: React.FC = () => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/sports`);
        const data = await response.json();
        setSports(data.sports);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching sports:', error);
        setLoading(false);
      }
    };

    const fetchTeams = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/teams`);
        const data = await response.json();
        setTeams(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching teams:', error);
        setLoading(false);
      }
    };

    fetchSports();
    fetchTeams();
  }, []);

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

  useEffect(() => {
    // Select the first sport by default
    if (sports.length > 0) {
      setSelectedSport(sports[0].name);
    }
  }, [sports]);

  useEffect(() => {
    // Select the first team of the selected sport by default
    if (selectedSport && teams.length > 0) {
      const teamsOfSelectedSport = teams.filter(team => team.plays === selectedSport);
      if (teamsOfSelectedSport.length > 0) {
        setSelectedTeam(teamsOfSelectedSport[0].name);
      }
    }
  }, [selectedSport, teams]);

  const handleSportChange = (sportName: string) => {
    setSelectedSport(sportName);
    setSelectedTeam(null);
  };

  const handleTeamChange = (teamName: string) => {
    setSelectedTeam(teamName);
  };

  const desiredTeamWiseArticles = articles.filter((article) => {
    return (
      article.sport.name === selectedSport &&
      article.teams.some((team) => team.name === selectedTeam)
    );
  });

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

  return (
    <div>
      {location.pathname === '/teams' && <Navbar />}
      <div className="mb-4">
        <h1 className="bg-gray-800 text-white text-2xl font-bold flex justify-center p-2 rounded-lg m-1">
          {t('Select your Favorite Team')}
        </h1>
        <div className="mb-4 flex justify-center">
          <select
            value={selectedSport || ''}
            onChange={(e) => handleSportChange(e.target.value)}
            className="p-2 border border-gray-300 rounded w-1/3 m-1"
          >
            <option value='' disabled>
              {t('Select Sport')}
            </option>
            {sports.map((sport) => (
              <option key={sport.id} value={sport.name}>
                {t(`${sport.name}`)}
              </option>
            ))}
          </select>

          <select
            value={selectedTeam || ''}
            onChange={(e) => handleTeamChange(e.target.value)}
            className="p-2 border border-gray-300 rounded w-1/3 m-1"
          >
            <option value="" disabled>
              {t('Select Team')}
            </option>
            {teams
              .filter((team) => team.plays === selectedSport)
              .map((filteredTeam) => (
                <option key={filteredTeam.id} value={filteredTeam.name}>
                  {filteredTeam.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div>
        <h1 className="bg-gray-800 text-white text-xl font-semibold p-1 text-center rounded-lg m-1 mb-4 mt-2">
          {t('Articles of your favourite team')}
        </h1>
        <div>
          {loading && <p>Loading...</p>}
          {desiredTeamWiseArticles.map((article) => (
            <div key={article.id} className="p-2 border border-gray-300 rounded mb-2">
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p>{article.summary}</p>
              <button
                onClick={() => handleReadMore(article)}
                className='bg-blue-600 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
              >
                {t('Read more')}
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
              <h2 className='text-2xl font-bold mb-4'>{selectedArticle.title}</h2>
              <img src={selectedArticle.thumbnail} alt={selectedArticle.title} className='mb-4 rounded-lg w-full h-full object-cover' />
              <p className='mb-4'>{selectedArticle.content}</p>
              <p className="font-semibold">{formatDateTime(selectedArticle.date, i18n.language)}</p>
              {selectedArticle.teams.length > 0 && (
                <div className="flex justify-between items-center mt-2">
                  <p className="font-semibold">{t('Teams')}:</p>
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
                {t('Close')}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamAndSportList;
