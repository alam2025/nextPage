import React from 'react';
import Lottie from 'lottie-react'
import reader from './assets/boy.json'
import { Link } from 'react-router-dom';

const BannerSection = () => {
      return (
            <div className=' md:flex gap-4 w-10/12 mx-auto justify-between items-center mt-20'>
                  <div className=''>
                        <button className=' bg-amber-300 px-4 py-1 rounded-md text-sm' >ON SALE</button>
                        <h1 className=' my-6 text-4xl font-bold'>A reader lives a <br />thousand lives <span className=' text-emerald-400'>before he dies</span></h1>
                        <p className=' text-lg'>
                              Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.
                        </p>
                        <div className=' flex gap-4 items-center mt-6'>
                              <Link className=' bg-emerald-500 py-3 px-8 rounded-md text-white font-bold hover:bg-emerald-800' to='/books'>
                                    <button className=' '>Visit Store</button>
                              </Link>
                              <Link className=' text-lg font-semibold hover:text-cyan-800' to='/about'>
                                    <button>Learn More</button>
                              </Link>
                        </div>
                  </div>
                  <div className=''>
                        <Lottie className='w-100' animationData={reader} loop={true} />

                  </div>
            </div>
      );
};

export default BannerSection;