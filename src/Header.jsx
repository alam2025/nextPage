import React from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/24/solid'
import ActiveLink from './ActiveLink';

const Header = () => {
      return (
            <div  className=' bg-gray-200 py-3 shadow-md'>
                  <nav className=' flex justify-between items-center w-10/12 mx-auto'>
                        <Link to='/'><div className=' flex items-center gap-3' >
                              <BoltIcon className="h-8 w-8 text-blue-500" />
                              <h1 className=' text-3xl font-extrabold'>nextPage</h1>
                        </div></Link>
                        <div className=' flex gap-10 text-xl font-medium'>
                              <ActiveLink to='/'>Home</ActiveLink>
                              <ActiveLink to='/books'>Books</ActiveLink>
                              <ActiveLink to='/about'>About us</ActiveLink>
                        </div>
                  </nav>
            </div>
      );
};

export default Header;