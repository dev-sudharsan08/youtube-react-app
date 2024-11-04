import React from 'react';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import CommentList from './CommentList/CommentList';
import SuggestedVideoList from './SuggestedVideoList/SuggestedVideoList';
import VideoPlayer from './VideoPlayer/VideoPlayer';

const VideoPage = () => {
  return (
    <>
      <HelmetSetup title='Video Page'/>
      <div className='d-flex col-md-9 ms-5'>
        <div className=' mt-3 ms-2'>
          <VideoPlayer />
          <div className='mt-4'>
            <CommentList />
          </div>
        </div>
        <div className='col-md-5 ms-4'>
          <SuggestedVideoList />
        </div>
      </div>
    </>
  );
};
export default VideoPage;
