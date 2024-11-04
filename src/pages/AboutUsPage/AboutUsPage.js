import React, { useContext } from 'react';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import { Link, Outlet } from 'react-router-dom';
import './AboutUsPage.scss';
import { PageContext } from '../../contexts/PageContext';

const AboutUsPage = () => {
  // console.log(props);
  // console.log(props.test);

  const userStatus = useContext(PageContext);
  console.log(userStatus);

  // TODO: learn abt child/nested routing
  // FIXME: should complete

  return (
    <div className='container'>
      <HelmetSetup title='About Us Page' />
      About Us Page
      <div className='about-us-nav'>
        <Link to='mission'>Mission</Link>
        <Link to='customer-care'>Customer Care</Link>
      </div>
      <Outlet />
      <hr />
      <h2>Data Received via Page Context using Context API</h2>
      <p>Logged In Status: {userStatus.isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
      <p>Last Login: {userStatus.lastLogin}</p>
    </div>
  );
};

export default AboutUsPage;

// {props.test()}
