import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';

interface Props {
  selectedSports: string[];
}

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

const PreferredMatches: React.FC<Props> = ({ selectedSports }) => {
  const [matches, setMatches] = useState<Match[]>([]);

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

  const preferredMatches = matches.filter(match => selectedSports.includes(match.sportName))
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {preferredMatches.map((match) => (
          <>
            <h1 className='text-xl font-semibold p-2 rounded-lg m-2'>Your own feed</h1>
            <div key={match.id} className="bg-white rounded p-4 shadow-md">
              {/* Display match details */}
              <h2 className="text-2xl font-semibold mb-2">{match.sportName}</h2>
              <h2 className="text-xl font-semibold mb-2">{match.name}</h2>
              <p className="text-gray-600 mb-2">Location: {match.location}</p>
              <p className="text-gray-600">Ends at: {new Date(match.endsAt).toLocaleString()}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-600">Teams:</p>
                <div className="flex flex-wrap gap-2">
                  {match.teams.map((team) => (
                    <span key={team.id} className="bg-gray-200 px-2 py-1 rounded">{team.name}</span>
                    ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default PreferredMatches;
