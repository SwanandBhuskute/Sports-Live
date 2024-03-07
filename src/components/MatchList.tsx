import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../config/constants';

interface Match {
  id: number;
  name: string;
  location: string;
}

const MatchList: React.FC = () => {
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

  return (
    <div>
      <h1 className='bg-green-500 text-red-800 text-2xl font-bold p-4 mb-4'>Match List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((match) => (
          <div key={match.id} className="bg-white rounded p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{match.name}</h2>
            <p className="text-gray-600">{match.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchList;
