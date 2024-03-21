import React from 'react';
import { Link } from 'react-router-dom';
import ArticleList from '../pages/articles/ArticleList';
import Navbar from './NavBar';
import LiveMatches from './matches/LiveMatches';

const Home: React.FC = () => {
  const userDataString = localStorage.getItem('userData');
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const username = userData ? userData.name : '';

  return (
    <div>
      <Navbar />
      {userData ? (
        <h1 className="bg-gray-800 text-white text-xl font-semibold flex justify-center rounded-lg p-2 m-1">
          Welcome <Link to="/user" className='ml-2 mr-2'><u>{username}</u></Link>! Step into the Arena: Explore Your Favorite Sports and Catch Up on Trending News!
        </h1>
      ) : (
        <h1 className="bg-gray-800 text-white text-xl font-bold flex justify-center rounded-lg p-2 m-1">
          Signup and Step into the Arena: Explore Your Favorite Sports and Catch Up on Trending News!
        </h1>
      )}
      <div>
        <LiveMatches/>
      </div>
      <div>
        <ArticleList />
      </div>
    </div>
  );
};

export default Home;
