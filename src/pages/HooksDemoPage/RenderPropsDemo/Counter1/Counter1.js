import React from 'react';
import PropTypes from 'prop-types';

const Counter1 = (props) => (
  <button className='btn btn-dark' onClick={props.incrementCount}>
    Clicked {props.count} times
  </button>
);

Counter1.propTypes = {
  incrementCount: PropTypes.func,
  count: PropTypes.number
};

export default Counter1;
