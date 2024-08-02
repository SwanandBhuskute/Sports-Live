import React, { Suspense } from 'react';
import { AuthProvider } from './context/AuthContext';
import { RouterProvider } from "react-router-dom";
import router from './routes';
import "./i18n"
import Chatbot from './components/Chatbot'; 

const App: React.FC = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Chatbot />
      </AuthProvider>
    </Suspense>
  );
};

export default App;