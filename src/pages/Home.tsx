// Home.tsx
import React from 'react';
import TeamandSportList from "../pages/teamAndSports/TeamandSportList" // Adjust the import based on your project structure
import MatchList from '../pages/matches/MatchList'; // Adjust the import based on your project structure
import ArticleList from '../pages/articles/ArticleList'; // Adjust the import based on your project structure

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <h2>Sports</h2>
        <TeamandSportList />
      </div>
      <div>
        <h2>Matches</h2>
        <MatchList />
      </div>
      <div>
        <h2>Articles</h2>
        <ArticleList />
      </div>
    </div>
  );
};

export default Home;
