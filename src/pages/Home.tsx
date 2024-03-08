import React from 'react';
import TeamandSportList from '../pages/teamAndSports/TeamandSportList';
import MatchList from '../pages/matches/MatchList';
import ArticleList from '../pages/articles/ArticleList';
import Navbar from './NavBar';
import LiveMatches from './matches/LiveMatches';

const Home: React.FC = () => {
  return (
      <div>
        <Navbar/>
        <h1 className="bg-green-500 text-red-800 text-2xl font-bold flex justify-center rounded-lg p-2 m-2">
          Welcome to the Home Page
        </h1>
        <div>
          <LiveMatches/>
        </div>
        <div>
          <ArticleList />
        </div>
        {/* <div>
          <MatchList />
        </div> */}
        {/* <div>
          <TeamandSportList />
        </div> */}
      </div>
  );
};

export default Home;
