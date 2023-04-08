import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Lodding from './Lodding';

const BookDetails = () => {
      const navigate = useNavigation();
      if (navigate.state === 'loading') {
            return <Lodding />
      }

      const [fold, setFold] = useState(true);

      const bookDetails = useLoaderData();
      const { image, title, authors, publisher, year, rating, desc, price ,url} = bookDetails;


      console.log(bookDetails);
      return (
            <div className='flex flex-col md:flex-row max-w-screen-lg sm:mx-auto overflow-hidden bg-white border rounded shadow-sm md:justify-center md:items-center mt-16'>
                  <div className='lg:w-1/2 h-full'>
                        <img className=' w-full object-cover lg:h-full' src={image} alt="book cover" />

                  </div>
                  <div className='lg:w-1/2 p-8 lg:p-16 lg:pl-10 '>
                        <div className=' bg-yellow-500 object-fill w-32 rounded-lg text-center my-4'>
                              <p >Brand new</p>
                        </div>
                        <h1 className=' text-4xl font-bold mb-4'>{title}</h1>
                        <p >Authors : {authors}</p>
                        <p >Publisher : {publisher}</p>
                        <p >Year : {year}</p>
                        <p >Rating : {rating} star</p> <br />



                        {
                              fold ? (
                                    <>
                                          <p>{desc.substring(0, 100)}.....
                                                <span onClick={() => setFold(!fold)} className=' text-cyan-600 cursor-pointer'>Read More</span></p>

                                    </>
                              ) : (
                                    <>
                                          <p>{desc}</p>
                                          <span onClick={() => setFold(!fold)} className=' text-sky-600 cursor-pointer'>Read Less</span>
                                    </>
                              )
                        }
                        <div className=' flex gap-10 justify-start mt-10 items-center'>
                              <Link className=' bg-cyan-600 text-white py-4 px-10 rounded-md hover:bg-cyan-950' to={url} target='_blank'>
                                    <button>Buy Now</button>
                              </Link>
                              <p className=' font-bold text-xl text-gray-600'>Price : {price} </p>
                        </div>


                  </div>
            </div>
      );
};

export default BookDetails;