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
  plays: string;
}

const PreferencesModal: React.FC = () => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [sportsList, setSportsList] = useState<Sport[]>([]);
  const [teamsList, setTeamsList] = useState<Team[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const authToken = localStorage.getItem("authToken");
  // console.log("authToken in Preferences", authToken)

  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const sportsResponse = await fetch(`${API_ENDPOINT}/sports`);
        const sportsData = await sportsResponse.json();
        setSportsList(sportsData.sports);

        const teamsResponse = await fetch(`${API_ENDPOINT}/teams`);
        const teamsData = await teamsResponse.json();
        setTeamsList(teamsData);

        if (!sportsResponse.ok || !teamsResponse.ok) {
          throw new Error('Failed to fetch data');
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPreferences();
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const value = event.target.value;

    if (name === 'sport') {
      if (checked) {
        setSelectedSports([...selectedSports, value]);
      } else {
        setSelectedSports(selectedSports.filter((sport) => sport !== value));
      }
    } else if (name === 'team') {
      if (checked) {
        setSelectedTeams([...selectedTeams, value]);
      } else {
        setSelectedTeams(selectedTeams.filter((team) => team !== value));
      }
    }
  };

  const handleSubmit = async () => {
    try {
        const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(
            {
                preferences: {
                selectedSports,
                selectedTeams,
              }
            }
          ),
        });
        if (!response.ok) {
            throw new Error('Failed to update preferences');
        }
        console.log('Selected Sports:', selectedSports);
        console.log('Selected Teams:', selectedTeams);
        // Save selected preferences in localStorage
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        localStorage.setItem(
        'userData',
        JSON.stringify({
            ...userData,
            preferences: {
            selectedSports,
            selectedTeams,
            },
        })
        );
        setModalOpen(false);
      } catch (error) {
        console.error('Error updating preferences:', error);
      }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl w-112 max-h-full overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Select Favorites</h2>
              <div className="mb-4 grid grid-cols-3 gap-4">
                <h3 className="font-bold mb-2 col-span-3">Sports</h3>
                {sportsList.slice(0, 12).map((sport) => (
                  <label key={sport.id} className="block">
                    <input
                      type="checkbox"
                      name="sport"
                      value={sport.name}
                      checked={selectedSports.includes(sport.name)}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    {sport.name}
                  </label>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                <h3 className="font-bold mb-2 col-span-3">Teams</h3>
                {teamsList.slice(0, 12).map((team) => (
                  <label key={team.id} className="block">
                    <input
                      type="checkbox"
                      name="team"
                      value={team.name}
                      checked={selectedTeams.includes(team.name)}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    {team.name}
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-end px-6 pb-6">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                Save Preferences
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreferencesModal;
