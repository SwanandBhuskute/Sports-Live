// Home.tsx
import React from 'react';
import TeamandSportList from "../pages/teamAndSports/TeamandSportList";
import MatchList from '../pages/matches/MatchList';
import ArticleList from '../pages/articles/ArticleList';
import Navbar from './NavBar';
const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1 className='bg-green-500 text-red-800 text-2xl font-bold p-4 mb-4'>Welcome to the Home Page</h1>
      <div>
        <TeamandSportList />
      </div>
      <div>
        <MatchList />
      </div>
      <div>
        <ArticleList />
      </div>
    </div>
  );
};

export default Home;
