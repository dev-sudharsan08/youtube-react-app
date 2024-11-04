import React from 'react';
import SuggestedVideo from './SuggestedVideo/SuggestedVideo';
import '../VideoPage.scss';

const SuggestedVideoList = () => {
  const videos = [
    {
      id: 1,
      title: 'Football Highlights of 2022 | France VS Spain',
      thumbnailUrl: './assets/images/football-yt-thumbnail.png',
      channel: 'Channel A',
      views: '1M views',
      publishedDate: '2 weeks ago'
    },
    {
      id: 2,
      title: 'Tennis Highlights of 2022 | Ind VS Aus',
      thumbnailUrl: './assets/images/tennis-yt-thumbnail.jpg',
      channel: 'Channel B',
      views: '26M views',
      publishedDate: '8 months ago'
    },
    {
      id: 3,
      title: 'Volleyball Highlights of 2022 | China VS Japan',
      thumbnailUrl: './assets/images/volleyball-yt-thumbnail.jpg',
      channel: 'Channel C',
      views: '7k views',
      publishedDate: '6 hours ago'
    },
    {
      id: 4,
      title: 'Hockey Highlights of 2022 | Ind VS Korea',
      thumbnailUrl: './assets/images/hockey-yt-thumbnail.png',
      channel: 'Channel D',
      views: '896K views',
      publishedDate: '1 month ago'
    },
    {
      id: 5,
      title: 'Cricket Highlights of 2022 | NZ VS Aus',
      thumbnailUrl: './assets/images/cricket-yt-thumbnail.jpg',
      channel: 'Channel E',
      views: '30M views',
      publishedDate: '6 hours ago'
    },
    {
      id: 6,
      title: 'Best video of 2022 | Nat-Geo Wild',
      thumbnailUrl: './assets/images/nat-geo-thumbnail.png',
      channel: 'Channel F',
      views: '1M views',
      publishedDate: '2 weeks ago'
    },
    {
      id: 7,
      title: 'Chess Highlights of 2022 | Ind VS Aus',
      thumbnailUrl: './assets/images/chess-yt-thumbnail.jpg',
      channel: 'Channel G',
      views: '1M views',
      publishedDate: '2 weeks ago'
    },
    {
      id: 8,
      title: 'Football Highlights of 2022 | France VS Spain',
      thumbnailUrl: './assets/images/football-yt-thumbnail.png',
      channel: 'Channel H',
      views: '10M views',
      publishedDate: '2 weeks ago'
    },
    {
      id: 9,
      title: 'Cricket Highlights of 2022 | NZ VS Aus',
      thumbnailUrl: './assets/images/cricket-yt-thumbnail.jpg',
      channel: 'Channel I',
      views: '190K views',
      publishedDate: '6 days ago'
    },
    {
      id: 10,
      title: 'Best video of 2022 | Nat-Geo Wild',
      thumbnailUrl: './assets/images/nat-geo-thumbnail.png',
      channel: 'Channel J',
      views: '1M views',
      publishedDate: '2 weeks ago'
    },
    {
      id: 11,
      title: 'Tennis Highlights of 2022 | Ind VS Aus',
      thumbnailUrl: './assets/images/tennis-yt-thumbnail.jpg',
      channel: 'Channel K',
      views: '26M views',
      publishedDate: '8 months ago'
    }
  ];

  return (
    <div className='suggested-video-list'>
      {videos.map((video) => {
        // console.log(video)
        return (
          <div className='side-video mt-3' key={video.id}>
            <SuggestedVideo {...video} />
          </div>
        );
      })}
    </div>
  );
};

export default SuggestedVideoList;
