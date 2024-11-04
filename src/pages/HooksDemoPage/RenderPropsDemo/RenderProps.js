import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RenderProps = (props) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return <div className='ms-5'>{props.render(count, incrementCount)}</div>;
};

RenderProps.propTypes = {
  render: PropTypes.func
};

export default RenderProps;
