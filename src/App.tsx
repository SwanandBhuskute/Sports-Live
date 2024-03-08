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