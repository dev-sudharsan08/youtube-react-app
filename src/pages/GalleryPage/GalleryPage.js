import React, { Component } from 'react';
import Gallery from './Gallery/Gallery';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';

class GalleryPage extends Component {
  constructor() {
    super(); // must call super in derived cls constructor to access this keyword
    // comp-wide data
    this.state = {
      videos: [
        {
          id: 1,
          title: 'FraVsArg Football 2022 Highlights',
          thumbnailUrl: './assets/images/football-yt-thumbnail.png',
          views: '5.5M',
          publishedDate: '10 days ago',
          isInWatchlist: false
        },
        {
          id: 2,
          title: 'Cricket Highlights 2023 | Ind VS Aus | Star Sports |',
          thumbnailUrl: './assets/images/cricket-yt-thumbnail.jpg',
          views: '4M',
          publishedDate: '1 day ago',
          isInWatchlist: true
        },
        {
          id: 3,
          title: 'Tennis Highlights 2022 | Ind VS Singapore | Star Sports |',
          thumbnailUrl: './assets/images/tennis-yt-thumbnail.jpg',
          views: '4M',
          publishedDate: '1 day ago',
          isInWatchlist: false
        },
        {
          id: 4,
          title: 'Basketball Highlights 2022 | Vegas VS NY | Star Sports |',
          thumbnailUrl: './assets/images/basketball-yt-thumbnail.jpg',
          views: '4M',
          publishedDate: '1 day ago',
          isInWatchlist: true
        },
        {
          id: 5,
          title: 'Chess Highlights 2023 | Ind VS Dubai | Star Sports |',
          thumbnailUrl: './assets/images/chess-yt-thumbnail.jpg',
          views: '4M',
          publishedDate: '1 day ago',
          isInWatchlist: false
        },
        {
          id: 6,
          title: 'Kabaddi Highlights 2023 | Ind VS China | Star Sports |',
          thumbnailUrl: './assets/images/kabaddi-yt-thumbnail.jpg',
          views: '4M',
          publishedDate: '1 day ago',
          isInWatchlist: true
        },
        {
          id: 7,
          title: 'Volleyball Highlights 2023 | Vegas VS NY | Star Sports |',
          thumbnailUrl: './assets/images/volleyball-yt-thumbnail.jpg',
          views: '4M',
          publishedDate: '1 day ago',
          isInWatchlist: false
        },
        {
          id: 8,
          title: 'Hockey Highlights 2022 | Ind VS Nepal | Star Sports |',
          thumbnailUrl: './assets/images/hockey-yt-thumbnail.png',
          views: '4M',
          publishedDate: '1 day ago',
          isInWatchlist: true
        }
      ]
    };
  }

  handleWatchlist = (index) => {
    console.log(this);
    console.log(index);
    // Do not mutate state directly. Use setState().
    // working with state immutably
    const likes = [...this.state.videos];
    likes[index].isInWatchlist = !likes[index].isInWatchlist;
    // console.log(duplicateVideos);
    this.setState({
      videos: likes
    });
  };

  render() {
    return (
      <div className='container mt-3'>
        <HelmetSetup title='Gallery Page' />
        {/* <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/video">Video</a></li>
            <li className="breadcrumb-item"><a href="/hoc-demo">Hoc Demo</a></li>
            <li className="breadcrumb-item"><a href="/about-us">AboutUs</a></li>
            <li className="breadcrumb-item"><a href="/contact-us">ContactUs</a></li>
            <li className="breadcrumb-item active" aria-current="page">Gallery</li>
          </ol>
        </nav> */}
        <div className='row'>
          {this.state.videos.map((video, index) => {
            // console.log(video)
            return (
              <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 pt-3' key={video.id}>
                <Gallery {...video} handleWatchlist={this.handleWatchlist} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GalleryPage;
