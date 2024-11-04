import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comment = ({ thumbnailUrl, name, comment, publishedDate, reply, title, like, dislike }) => {
  return (
    <>
      <Link to='/video'>
        <img src={thumbnailUrl} alt={title} />
      </Link>
      <Link to='/video'>
        <b>{name}</b>
        <span> &nbsp;{publishedDate}</span>
      </Link>
      <p>{comment}</p>
      <button type=' button' className='like-button'>
        <FontAwesomeIcon icon='fa-regular fa-thumbs-up' /> {like}
      </button>
      <button type='button' className='dislike-button'>
        <FontAwesomeIcon icon='fa-regular fa-thumbs-down' /> {dislike}
      </button>
      <button type='button' className='reply-button'>
        <span>Reply</span>
      </button>
      <div className='reply-btn'>
        <button type='button'>
          <FontAwesomeIcon icon='fa-solid fa-caret-down' /> &nbsp;{reply}
        </button>
      </div>
    </>
  );
};

Comment.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  comment: PropTypes.string,
  reply: PropTypes.string,
  publishedDate: PropTypes.string,
  like: PropTypes.number,
  dislike: PropTypes.number
};

export default Comment;
