import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import Navbar from '../NavBar';
import { useLocation } from 'react-router-dom';
import LiveMatches from './LiveMatches';

interface Team {
  id: number;
  name: string;
}

interface Match {
  startsAt: string | number | Date;
  score(score: any): unknown;
  story: string;
  id: number;
  name: string;
  location: string;
  endsAt: Date;
  sportName: string;
  isRunning: boolean;
  teams: Team[];
}

const MatchList: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/matches`);
        const data = await response.json();
        setMatches(data.matches);
      } catch (error) {
        console.error('Error fetching matches:', error);
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
  };

  const filteredMatches = selectedSport
    ? matches.filter((match) => match.sportName === selectedSport)
    : matches;

  return (
    <div>
      {location.pathname === '/matches' && <Navbar />}
      <h1 className='bg-green-500 text-red-800 text-2xl font-bold flex justify-center p-2 rounded-lg m-2'>Match List</h1>
      <div className="bg-yellow-200 rounded-lg p-4 m-2 shadow-md">
        {location.pathname === '/matches' && <LiveMatches />}
        <div className="flex flex-wrap gap-4 mb-4 flex justify-center">
          {/* Create buttons for each sport */}
          {Array.from(new Set(matches.map((match) => match.sportName))).map((sport) => (
            <button
              key={sport}
              onClick={() => handleSportClick(sport)}
              className={`px-6 py-3 rounded-md ${selectedSport === sport ? 'bg-blue-600 text-white font-semibold' : 'bg-gray-400 text-gray-800 font-semibold'} hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`}
            >
              {sport}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMatches.map((match) => (
            <div key={match.id} className="bg-white rounded p-4 shadow-md">
              {/* Display match details */}
              <h2 className="text-2xl font-semibold mb-2">{match.sportName}</h2>
              <h2 className="text-xl font-semibold mb-2">{match.name}</h2>
              <p className="text-gray-600">{match.location}</p>
              <button
                onClick={() => handleReadMore(match.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected match */}
      {selectedMatch && (
        <div className={`fixed top-0 left-0 w-full h-full overflow-y-auto flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="bg-gray-300 rounded p-6 max-w-2xl mx-auto my-8 max-h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-2"><b><u>Match</u> - </b>{selectedMatch.name}</h2>
            <hr/>
            <ul className='flex justify-center'>
              {Object.entries(selectedMatch.score).map(([team, score]) => (
                <li key={team} className="text-lg m-3">&#x25cf; {team} - {score}</li>
              ))}
            </ul>
            <p className="text-lg"><b>Location: </b> {selectedMatch.location}</p>
            <p className="text-lg"><b>Starts At: </b> {new Date(selectedMatch.startsAt).toLocaleString()}</p>
            <p className="text-lg"><b>Ends At: </b>{new Date(selectedMatch.endsAt).toLocaleString()}</p>
            <p className="text-lg"><b>Sport:</b> {selectedMatch.sportName}</p>
            {/* <p className="text-lg"><b>Score:</b></p> */}
            {/* <p className="text-lg"><b>Teams:</b></p>
            <ul>
              {selectedMatch.teams.map((team) => (
                <li key={team.id} className="text-sm">{team.name}</li>
              ))}
            </ul> */}
            <p className="text-lg"><b>Story:</b></p>
            <p className="">{selectedMatch.story}</p>
            <button
              onClick={handleCloseModal}
              className="bg-red-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default MatchList;
