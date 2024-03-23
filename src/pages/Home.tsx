import React from 'react';
import Articles from '../pages/articles/index';
import Navbar from './NavBar';
import LiveMatches from './matches/LiveMatches';

const Home: React.FC = () => {

  return (
    <div>
      <Navbar />
      <div>
        <LiveMatches/>
      </div>
      <div>
        <Articles />
      </div>
    </div>
  );
};

export default Home;
