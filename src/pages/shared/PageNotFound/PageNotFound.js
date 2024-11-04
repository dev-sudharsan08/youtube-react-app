import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import HelmetSetup from '../../../components/HelmetSetup/HelmetSetup';

const PageNotFound = () => {
  return (
    <>
      <HelmetSetup title='404 - Page Not Found' />
      <div className='text-center'>
        <h1>404 - Page Not Found</h1>
        <h5>Sorry, page not found</h5>
        <h4>
          Go back to{' '}
          <Link
            to='/'
            style={{
              textDecoration: 'none',
              color: 'orange'
            }}>
            Home Page
          </Link>
        </h4>
        <Outlet />
      </div>
    </>
  );
};

export default PageNotFound;
