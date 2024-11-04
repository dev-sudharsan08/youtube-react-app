import React from 'react'
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const HelmetSetup = ({ title }) => {
  return (
    <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
  )
}

HelmetSetup.propTypes = {
  title: PropTypes.string
}

export default HelmetSetup;
