import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import { Match } from '../../context/Matches/types'

interface Props {
  selectedSports: string[];
}

const PreferredMatches: React.FC<Props> = ({ selectedSports }) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const userDataString = localStorage.getItem('userData');
  const userData = userDataString ? JSON.parse(userDataString) : null;

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

  const preferredMatches = matches.filter(match => selectedSports.includes(match.sportName))
  
  return (
    <>
      {loading && <p>Loading...</p>}
      {preferredMatches && userData.preferences &&
        <>
          <h1 className='text-xl font-bold p-2 rounded-lg m-1 display-block underline'>Your Picked:</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {/* {loading && <p>Loading...</p>} */}
            {preferredMatches.map((match) => (
              <div key={match.id} className="relative bg-white rounded p-3 shadow-lg border border-black">
                {match.isRunning && <div className="flex absolute top-0 right-0 p-1 text-red-500 font-bold rounded-full">
                  &#x25cf;Live
                </div>}
                {/* Display match details */}
                <h2 className="text-xl font-bold mb-1">{match.sportName}</h2>
                <h2 className="text-lg font-semibold mb-1">{match.name}</h2>
                <p className="text-gray-700 mb-1">Location: {match.location}</p>
                <p className="text-gray-700">Ends at: {new Date(match.endsAt).toLocaleString()}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-600">Teams:</p>
                  <div className="flex flex-wrap gap-1">
                    {match.teams.map((team) => (
                      <span key={team.id} className="bg-gray-200 px-1 rounded">{team.name}</span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      }
    </>
  );
};

export default PreferredMatches;
