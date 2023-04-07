import React from 'react';
import MainPage from './MainPage';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
      return (
            <div className=' flex  flex-col justify-between h-screen'>
                  <div>
                        <Header />
                        <Outlet />
                  </div>
                  <Footer/>
            </div>
      );
};

export default Home;