import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import Navbar from '../NavBar';
import { useLocation } from 'react-router-dom';

interface Sport {
  id: number;
  name: string;
}

interface Team {
  id: number;
  name: string;
  country: string;
  plays: string;
}

const TeamAndSportDropdowns: React.FC = () => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/sports`);
        const data = await response.json();
        setSports(data.sports);
      } catch (error) {
        console.error('Error fetching sports:', error);
      }
    };

    const fetchTeams = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/teams`);
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchSports();
    fetchTeams();
  }, []);

  const handleSportChange = (sportName: string) => {
    setSelectedSport(sportName);
  };

  return (
    <div>
      {location.pathname === '/teams' && <Navbar />}
      <div className="mb-4">
        <h1 className="bg-green-500 text-red-800 text-2xl font-bold flex justify-center p-2 rounded-lg m-2">
          Sport List
        </h1>
        <select
          value={selectedSport || ''}
          onChange={(e) => handleSportChange(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="" disabled>
            Select Sport
          </option>
          {sports.map((sport) => (
            <option key={sport.id} value={sport.name}>
              {sport.name}
            </option>
          ))}
        </select>
      </div>

      {selectedSport && (
        <div>
          <h1 className="bg-green-500 text-red-800 text-2xl font-bold py-2 text-center rounded-lg mb-4">
            Team List
          </h1>
          <select className="p-2 border border-gray-300 rounded w-full">
            <option value="" disabled>
              Select Team
            </option>
            {teams
              .filter((team) => team.plays === selectedSport)
              .map((filteredTeam) => (
                <option key={filteredTeam.id} value={filteredTeam.id}>
                  {filteredTeam.name} - {filteredTeam.country}
                </option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default TeamAndSportDropdowns;
