import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../config/constants';

interface Sport {
  id: number;
  name: string;
}

const SportList: React.FC = () => {
  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/sports`);
        const data = await response.json();
        setSports(data.sports); // Access the 'sports' array from the JSON data
      } catch (error) {
        console.error('Error fetching sports:', error);
      }
    };

    fetchSports();
  }, []);

  return (
    <div>
      <h1 className='bg-green-500 text-red-800 text-2xl font-bold p-4 mb-4' >Sport List</h1>
      <ul>
        {sports.map((sport) => (
          <li key={sport.id}>
            {sport.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SportList;
