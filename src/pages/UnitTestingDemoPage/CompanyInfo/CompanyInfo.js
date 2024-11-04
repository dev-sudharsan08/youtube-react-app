import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CompanyInfo = ({ foundedYear, headQuarters }) => {
  const [countryName, setCountryName] = useState('USA');

  return (
    <div>
      <h2>Company Info</h2>
      <h3 data-testid='companyName'>Company Name: Cognizant</h3>
      <p data-testid='foundedYear' style={{ color: 'rgb(0, 255, 0)', backgroundColor: 'black' }}>
        Founded in: {foundedYear}
      </p>
      <p data-testid='headQuarters'>Headquarters: {headQuarters}</p>
      <button data-testid='joinButton' className='btn btn-primary'>
        JOIN COGNIZANT
      </button>
      <hr />
      <input
        type='text'
        placeholder='Enter Your Country Name'
        value={countryName}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
      />
      <p data-testid='visitWebsite'>Please visit Cognizant {countryName} Website</p>
    </div>
  );
};

CompanyInfo.propTypes = {
  foundedYear: PropTypes.string,
  headQuarters: PropTypes.string
};

export default CompanyInfo;
