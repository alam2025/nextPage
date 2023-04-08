import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Lodding from './Lodding';

const BookDetails = () => {
      const navigate = useNavigation();
      const bookDetails= useLoaderData();

      if(navigate.state === 'loading'){
            return <Lodding/>
      }
      console.log(bookDetails);
      return (
            <div>
                  <h1>Book Details</h1>
            </div>
      );
};

export default BookDetails;