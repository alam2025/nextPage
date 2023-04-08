import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
      const { image, title, subtitle, price, isbn13 } = book;
      return (

            <Link to={`../book/${isbn13}`}>
                  <div className=' shadow-lg overflow-hidden relative transform duration-1000 hover:-translate-y-2 '>
                        <img className=' object-cover w-full h-56 md:h-64 lg:h-80' src={image} alt="book cover" />
                        <div className=' bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-200 absolute inset-0 transition-opacity duration-1000 rounded-lg p-4 flex flex-col '>
                              <h3>{title}</h3>
                              <br />
                              <p>{subtitle.substring(0, 45)}....</p>
                              <br />
                              <p className=' mt-auto'>Price : {price}</p>
                        </div>
                  </div>

            </Link>
      );
};

export default Book;