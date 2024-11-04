import React from 'react';
import PropTypes from 'prop-types';

const Counter2 = (props) => (
  <button className='btn btn-warning' onClick={props.incrementCount}>
    Clicked {props.count} times
  </button>
);

Counter2.propTypes = {
  incrementCount: PropTypes.func,
  count: PropTypes.number
};

export default Counter2;
