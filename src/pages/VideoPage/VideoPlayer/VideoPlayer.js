import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../VideoPage.scss';

const VideoPlayer = () => {
  return (
    <div className='main-video'>
      <video controls>
        <source src='./assets/videos/yt-video-2.mp4' type='video/mp4' />
      </video>
      <div>
        <h4 style={{ marginTop: '8px' }}>Nat-Geo Wild | Bear-Birds Wildlife Video</h4>
        <div className='video-meta'>
          <Link to='/video'>
            <img src='./assets/images/nat-geo-thumbnail.png' alt='Nat-Geo Wild' />
          </Link>
          <Link to='/video'>
            <h2>
              Nat-Geo <FontAwesomeIcon icon='fa-solid fa-circle-check' />
            </h2>
          </Link>
          <button type='button' className='subscribe-button'>
            Subscribe
          </button>
          <div className='video-button-container'>
            <div className='video-button'>
              <button type=' button' className='likeButton'>
                <FontAwesomeIcon icon='fa-regular fa-thumbs-up' /> 35K
              </button>
              <button type='button' className='dislikeButton'>
                <FontAwesomeIcon icon='fa-regular fa-thumbs-down' /> 2
              </button>
              <button type='button'>
                <FontAwesomeIcon icon='fa-solid fa-share' />
                Share
              </button>
              <button type='button'>
                <FontAwesomeIcon icon='fa-solid fa-download' />
                Download
              </button>
              <button type='button'>
                <FontAwesomeIcon icon='fa-solid fa-ellipsis' />
              </button>
            </div>
          </div>
          <div className='subs-count'>10M Subscribers</div>
        </div>
      </div>

      <div className='video-description'>
        <div>4.5M Views &nbsp;6 months ago</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio alias omnis
          repellendus placeat nemo ea, reprehenderit numquam natus tempore a similique pariatur, ad,
          dolorum modi veritatis ipsa facere It has survived not only five centuries. #country #bear
          #duck #flowers #autumn
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
