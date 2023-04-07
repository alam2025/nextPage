import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {
      const books = useLoaderData();
      console.log(books);
      return (
            <div>
                  <h1>This is Books Page</h1>
            </div>
      );
};

export default Books;