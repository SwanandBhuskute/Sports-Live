import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "../../config/constants";
import PreferredMatches from "./PreferredMatches";
import useAuthentication from '../../hooks/useAuthentication'; 

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
  const isLoggedIn = useAuthentication(); // Use the custom hook to get authentication status

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

  // Retrieve selected sports from localStorage if user is logged in
  const storedData = localStorage.getItem('userData');
  const userData = storedData ? JSON.parse(storedData) : {};
  const selectedSports = isLoggedIn ? userData.preferences?.selectedSports || [] : [];

  return (
    <div className="bg-orange-200 rounded-lg p-4 m-2 shadow-md">
      {/* <h1 className='text-2xl font-bold p-2 rounded-lg m-2'>Live Matches</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {liveMatches.map((match) => (
          <div key={match.id} className="relative bg-white rounded p-4 shadow-md">
            {/* Display "Live" text at the top right corner */}
            <div className="absolute top-0 right-0 p-1 text-red-500 font-bold rounded-full">
              &#x25cf; Live
            </div>
            {/* Display match details */}
            <h2 className="text-2xl font-bold mb-2">{match.sportName}</h2>
            <h2 className="text-xl font-semibold mb-2">{match.name}</h2>
            <p className="text-gray-700">Location: {match.location}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-600">Teams:</p>
              <div className="flex flex-wrap gap-2">
                {match.teams.map((team) => (
                  <span key={team.id} className="bg-gray-200 px-2 py-1 rounded">{team.name}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Render PreferredMatches component only if user is logged in */}
      {isLoggedIn && <PreferredMatches selectedSports={selectedSports}/>}
    </div>
  );
};

export default LiveMatches;
