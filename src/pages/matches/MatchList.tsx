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

  const filteredMatches = selectedSport
    ? matches.filter((match) => match.sportName === selectedSport)
    : matches;

  return (
    <div>

      {location.pathname === '/matches' && <Navbar /> }
      <div className="bg-yellow-500 rounded-lg p-4 m-2 shadow-md">
        {location.pathname === '/matches' && <LiveMatches/> }
        <h1 className='bg-green-500 text-red-800 text-2xl font-bold flex justify-center p-2 rounded-lg m-2'>Match List</h1>
        <div className="flex flex-wrap gap-4 mb-4 flex justify-center">
          {/* Create buttons for each sport */}
          {Array.from(new Set(matches.map((match) => match.sportName))).map((sport) => (
            <button
              key={sport}
              onClick={() => handleSportClick(sport)}
              className={`px-6 py-3 rounded-md ${selectedSport === sport ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchList;
