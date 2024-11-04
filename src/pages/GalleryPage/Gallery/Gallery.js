import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../GalleryPage.scss';

const Gallery = ({ thumbnailUrl, title, handleWatchlist, isInWatchlist, index }) => {
  // console.log(props)
  // const heart=document.querySelector('.fa-heart');
  // const grayHeart=document.querySelector('.gray-heart');
  return (
    <div className='card'>
      <img src={thumbnailUrl} className='card-img-top' height={160} alt={title} />
      <div className='card-body'>
        <p className='card-text'>{title}</p>
      </div>
      <button type='button' className='col-2 heart-btn' onClick={handleWatchlist.bind(this, index)}>
        {isInWatchlist
          ? (
          <FontAwesomeIcon icon='fa fa-heart' />
            )
          : (
          <FontAwesomeIcon icon='fa fa-heart' style={{ color: 'gray' }} />
            )}
      </button>
    </div>
  );
};

Gallery.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  handleWatchlist: PropTypes.func,
  isInWatchlist: PropTypes.bool,
  index: PropTypes.number
};

export default Gallery;
