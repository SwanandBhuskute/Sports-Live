import { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';
// import { usePreferencesDispatch } from "../../context/Preferences/context";
// import { fetchPreferencesList } from "../../context/Preferences/actions";

interface UserPreferences {
  selectedSports: string[];
  selectedTeams: string[];
}

const useUserPreferences = (authToken: string | null): UserPreferences | null => {
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);
  // const preferencesDispatch = usePreferencesDispatch();

  useEffect(() => {
    const fetchUserPreferences = async () => {
      try {
        if (!authToken) return;

        const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user preferences');
        }

        const data = await response.json();
        setUserPreferences(data.preferences);

        // fetchPreferencesList(preferencesDispatch);
      } catch (error) {
        console.error('Error fetching user preferences:', error);
      }
    };

    fetchUserPreferences();
  // }, [authToken, preferencesDispatch]);
  }, [authToken]);

  return userPreferences;
};

export default useUserPreferences;
