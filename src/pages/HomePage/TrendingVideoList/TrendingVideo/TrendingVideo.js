import React from 'react';
import PropTypes from 'prop-types';

const TrendingVideo = (props) => {
  // console.log(props)

  return (
    // <div className="col-md-3">
    <div className='card'>
      <img
        // eslint-disable-next-line react/prop-types
        src={props.thumbnailUrl}
        className='card-img-top'
        // eslint-disable-next-line react/prop-types
        alt={props.title}
      />
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>{props.description}</p>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{props.channel}</li>
        <li className='list-group-item'>
          {props.views} Views | {props.publishedDate}
        </li>
      </ul>
    </div>
    // </div>
  );
};

TrendingVideo.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  views: PropTypes.string,
  publishedDate: PropTypes.string,
  description: PropTypes.string
};

export default TrendingVideo;
