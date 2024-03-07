import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../config/constants';

interface Sport {
  id: number;
  name: string;
}

interface Team {
  id: number;
  name: string;
  country: string;
  plays: string; // Use plays instead of sportId
}

const TeamAndSportDropdowns: React.FC = () => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedSport, setSelectedSport] = useState<string | null>(null); // Change the type to string

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
    <div className='flex space-x-4 justify-center'>
      <div>
        <h1 className='bg-green-500 text-red-800 text-2xl font-bold p-4 mb-4'>Sport List</h1>
        <select
          value={selectedSport || ''}
          onChange={(e) => handleSportChange(e.target.value)}
          className='p-2 border border-gray-300 rounded'
        >
          <option value='' disabled>
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
          <h1 className='bg-green-500 text-red-800 text-2xl font-bold p-4 mb-4'>Team List</h1>
          <select className='p-2 border border-gray-300 rounded'>
            <option value='' disabled>
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
