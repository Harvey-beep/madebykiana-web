import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="h-0.5 bg-black"></div>

      <main>
        <Outlet />
      </main>
      
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default App;