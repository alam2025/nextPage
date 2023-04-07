import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
      const {books} = useLoaderData();
      return (
            <div className='w-10/12 mx-auto gap-4 mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  {books.map(book=><Book
                  key={book.isbn13}
                  book={book}
                  />)}
            </div>
      );
};

export default Books;