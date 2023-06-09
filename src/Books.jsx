import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import Lodding from './Lodding';

const Books = () => {
      const navigate = useNavigation();
      if(navigate.state === 'loading'){
            <Lodding />
      }
      const {books} = useLoaderData();
      // const navigate= useNavigation();
      // console.log(navigate.state);
      return (
            <div className='w-10/12 mx-auto gap-4 mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                 {/* <p className=' transition transform duration-1000'> {navigate.state === 'loading'?'loadiong': ''}</p>
                   */}
                  {books.map(book=><Book
                  key={book.isbn13}
                  book={book}
                  />)}
            </div>
      );
};

export default Books;