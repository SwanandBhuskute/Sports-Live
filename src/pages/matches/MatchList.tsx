import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import Navbar from '../NavBar';
import { useLocation } from 'react-router-dom';
import LiveMatches from './LiveMatches';
import { Match } from '../../context/Matches/types';
import { useTranslation } from 'react-i18next';
import { formatDateTime } from '../../components/dateUtils';  // Import the utility function

const MatchList: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { t, i18n } = useTranslation();

  const location = useLocation();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/matches`);
        const data = await response.json();
        setMatches(data.matches);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching matches:', error);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const handleSportClick = (sport: string) => {
    setSelectedSport(sport === selectedSport ? null : sport);
  };

  const handleReadMore = async (matchId: number) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/matches/${matchId}`);
      const data = await response.json();
      setSelectedMatch(data);
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    } catch (error) {
      console.error('Error fetching match details:', error);
    }
  };

  const handleCloseModal = () => {
    setSelectedMatch(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';

  //   //@ts-ignore
  //   // Deliberate runtime errors that look normal
  //   const obj: any = {};
  //   const fakeError = "error";
  //   if (fakeError) {
  //     throw new Error ("Error occured at readmore match article") // This will throw an error at runtime
  //   }
  };

  const filteredMatches = selectedSport
    ? matches.filter((match) => match.sportName === selectedSport)
    : matches;

  return (
    <div>
      {location.pathname === '/matches' && <Navbar />}
      <h1 className='bg-gray-800 text-white text-2xl font-bold flex justify-center p-2 rounded-lg m-2'>{t('Match List')}</h1>
      <div className="bg-yellow-200 rounded-lg p-4 m-2 shadow-md">
        {location.pathname === '/matches' && <LiveMatches />}
        <div className="flex flex-wrap gap-4 mb-4 flex justify-center">
          {/* Create buttons for each sport */}
          {loading && <p>Loading...</p>}
          {Array.from(new Set(matches.map((match) => match.sportName))).map((sport) => (
            <button
              key={sport}
              onClick={() => handleSportClick(sport)}
              className={`px-6 py-3 rounded-md ${selectedSport === sport ? 'bg-blue-600 text-white font-semibold' : 'bg-gray-400 text-gray-800 font-semibold'} hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`}
            >
              {t(`${sport}`)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMatches.map((match) => (
            <div key={match.id} className="bg-white rounded p-4 shadow-md relative">
              {/* Display match details */}
              {match.isRunning && (
                <div className="flex absolute top-0 right-0 p-1 text-red-500 font-bold rounded-full">
                  &#x25cf;Live
                </div>
              )}
              <h2 className="text-2xl font-semibold mb-2">{t(`${match.sportName}`)}</h2>
              <h2 className="text-xl font-semibold mb-2">{match.name}</h2>
              <p className="text-gray-600">{match.location}</p>
              <button
                onClick={() => handleReadMore(match.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                {t('Read more')}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for selected match */}
      {selectedMatch && (
        <div className={`fixed top-0 left-0 w-full h-full overflow-y-auto flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="bg-gray-300 rounded p-6 max-w-2xl mx-auto my-8 max-h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-2"><b><u>{t('Match')}</u> - </b>{selectedMatch.name}</h2>
            <hr/>
            <ul className='flex justify-center'>
              {Object.entries(selectedMatch.score).map(([team, score]) => (
                <li key={team} className="text-lg m-3">&#x25cf; {team} - {score}</li>
              ))}
            </ul>
            <p className="text-lg"><b>{t('Location')}: </b> {selectedMatch.location}</p>
            <p className="text-lg"><b>{t('Starts at')}: </b> {formatDateTime(selectedMatch.startsAt, i18n.language)}</p>
            <p className="text-lg"><b>{t('Ends at')}: </b> {formatDateTime(selectedMatch.endsAt, i18n.language)}</p>
            <p className="text-lg"><b>{t('Sport')}:</b> {t(`${selectedMatch.sportName}`)}</p>
            <p className="text-lg"><b>{t('Story')}:</b></p>
            <p className="">{selectedMatch.story}</p>
            <button
              onClick={handleCloseModal}
              className="bg-red-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300"
            >
              {t('Close')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchList;
