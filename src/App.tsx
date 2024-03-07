import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { RouterProvider } from "react-router-dom";
import router from './routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;




// import React from 'react';
// import ArticleList from './components/ArticleList';
// import SportList from './components/SportList';
// import TeamList from './components/TeamandSportList';
// import MatchList from './components/MatchList';

// function App() {
  //   return (
    //     <div className="App">
    //       <TeamList />
    //       <MatchList />
    //       <ArticleList />
//       {/* <SportList /> */}
//     </div>
//   );
// }

// export default App;