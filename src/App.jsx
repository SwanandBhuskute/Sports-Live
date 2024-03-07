import React from 'react';
import ArticleList from './components/ArticleList';
import SportList from './components/SportList';
import TeamList from './components/TeamandSportList';
import MatchList from './components/MatchList';

function App() {
  return (
    <div className="App">
      <TeamList />
      <MatchList />
      <ArticleList />
      {/* <SportList /> */}
    </div>
  );
}

export default App;