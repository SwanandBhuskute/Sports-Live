import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "../../config/constants";
import PreferredMatches from "./PreferredMatches";
import useAuthentication from '../../hooks/useAuthentication';
import { Match } from '../../context/Matches/types'
import { useTranslation } from "react-i18next";

const LiveMatches: React.FC = () => {
  const [liveMatchesWithScores, setLiveMatchesWithScores] = useState<Match[]>([]);
  const isLoggedIn = useAuthentication(); // Use the custom hook to get authentication status
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const { t } = useTranslation();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/matches`);
        const data = await response.json();
        const liveMatches = data.matches.filter((match: Match) => match.isRunning);
        const liveMatchesWithScoresPromises = liveMatches.map(async (match: Match) => {
          const matchResponse = await fetch(`${API_ENDPOINT}/matches/${match.id}`);
          const matchData = await matchResponse.json();
          return { ...match, score: matchData.score };
        });
        const liveMatchesWithScores = await Promise.all(liveMatchesWithScoresPromises);
        setLiveMatchesWithScores(liveMatchesWithScores);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching matches:', error);
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchMatches();
  }, []);

  // Function to handle syncing scores
  const handleSyncScores = async (matchId: number) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/matches/${matchId}`);
      const data = await response.json();
      // Update the score for the specific match
      setLiveMatchesWithScores(prevMatches =>
        prevMatches.map(match => 
          match.id === matchId ? { ...match, score: data.score } : match
        )
      );
    } catch (error) {
      console.error('Error syncing scores:', error);
    }
  };

  // Retrieve selected sports from localStorage if user is logged in
  const storedData = localStorage.getItem('userData');
  const userData = storedData ? JSON.parse(storedData) : {};
  const selectedSports = isLoggedIn ? userData.preferences?.selectedSports || [] : [];

  return (
    <div className="bg-orange-300 rounded-lg p-2 m-2 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {loading && <p>Loading...</p>}
        {liveMatchesWithScores.map((match: Match) => (
          <div key={match.id} className="relative bg-white rounded p-4 shadow-md border border-black">
            {/* Display "Live" text at the top right corner */}
            <div className="flex absolute top-0 right-0 p-1 text-red-500 font-bold rounded-full">
              &#x25cf;Live <p className="ml-1 cursor-pointer" onClick={() => handleSyncScores(match.id)}>&#x27f3;</p>
            </div>
            {/* Display match details */}
            <h2 className="text-xl font-bold mb-1">{t(`${match.sportName}`)}</h2>
            <h2 className="text-lg font-semibold mb-1">{match.name}</h2>
            <p className="text-gray-700">{t('Location')}: {match.location}</p>
            {/* Display scores if available */}
            {match.score && (
              <div className="mt-2">
                <p className="font-semibold">Scores:</p>
                <div className="flex space-x-4">
                  {Object.entries(match.score).map(([teamName, score]) => (
                    <p key={teamName}>{`${teamName}: ${score}*`}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Render PreferredMatches component only if user is logged in */}
      {isLoggedIn && <PreferredMatches selectedSports={selectedSports}/>}
    </div>
  );
};

export default LiveMatches;
