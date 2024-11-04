import React from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment/Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../VideoPage.scss';

const CommentList = () => {
  const comments = [
    {
      id: 1,
      name: 'Henry Brook',
      thumbnailUrl: './assets/images/cricket-channel-thumbnail.jpg',
      title: 'Football Highlights of 2022 | France VS Spain',
      comment: 'Cool bro 😎',
      publishedDate: '10 days ago',
      reply: '2 replies',
      like: 6,
      dislike: 1
    },
    {
      id: 2,
      name: 'David Miller',
      thumbnailUrl: './assets/images/hockey-channel-thumbnail.png',
      comment: 'The concept of the video was fantastic👌',
      publishedDate: '5 years ago',
      reply: '16 replies',
      like: 3,
      dislike: 1
    },
    {
      id: 3,
      name: 'Mitchell Starc',
      thumbnailUrl: './assets/images/kabaddi-yt-thumbnail.jpg',
      comment: 'You have made a beautiful ui✌🏻 Please give us the source code as well🔁',
      publishedDate: '1 month ago',
      reply: '33 replies',
      like: 18,
      dislike: 3
    }
  ];

  return (
    <div className='comment-section'>
      <div className='comment-title'>
        <span>52 Comments</span>
        <button>
          <FontAwesomeIcon className='icon-styles' icon='fa-solid fa-arrow-down-wide-short' /> &nbsp;Sort By
        </button>
      </div>
      <div className='comment-name'>
        <Link to='/video'>
          <img src='./assets/images/profile2-yt-thumbnail.png' alt='Channel Name' />
        </Link>
        <span>Add a comment</span>
      </div>
      {comments.map((comment) => {
        // console.log(comment)
        return (
          <div className='video-comment' key={comment.id}>
            <Comment {...comment} />
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
