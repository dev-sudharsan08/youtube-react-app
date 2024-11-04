// import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SuggestedVideo = ({ title, thumbnailUrl, channel, views, publishedDate }) => {
  // receiving data from parent comp in props
  // props are objects
  // props are read-only
  // props can have children
  // props are used for receiving data from parent comp
  // console.log(props);

  return (
    <>
      <div>
        <Link to='/video'>
          <img src={thumbnailUrl} height={100} width={200} alt={title} />
        </Link>
      </div>
      <div className='suggested-video'>
        <Link to='/video'>
          <h6>{title}</h6>
          <div>{channel}</div>
          <p>
            <span>{views}</span>
            <span> &#8226; {publishedDate}</span>
          </p>
        </Link>
      </div>
    </>
  );
};

SuggestedVideo.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  channel: PropTypes.string,
  views: PropTypes.string,
  publishedDate: PropTypes.string
};

export default SuggestedVideo;
