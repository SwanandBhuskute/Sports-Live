import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_ENDPOINT } from "../../config/constants";

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

const LiveMatches: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
//   const location = useLocation();

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

  const liveMatches = matches.filter((match) => match.isRunning);

  return (
    <div className="bg-orange-200 rounded-lg p-4 m-2 shadow-md">
      <h1 className='text-2xl font-bold p-2 rounded-lg m-2'>Live Matches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {liveMatches.map((match) => (
          <div key={match.id} className="bg-white rounded p-4 shadow-md">
            {/* Display match details */}
            <h2 className="text-2xl font-semibold mb-2">{match.sportName}</h2>
            <h2 className="text-xl font-semibold mb-2">{match.name}</h2>
            <p className="text-gray-600">{match.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveMatches;
