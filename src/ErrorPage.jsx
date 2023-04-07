import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
      const error= useRouteError();
      console.error(error);
      return (
            <div>
                  <h1>This is Error Page</h1>
            </div>
      );
};

export default ErrorPage;