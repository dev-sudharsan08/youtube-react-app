import { Component } from 'react';
import RecommendedVideo from './RecommendedVideo/RecommendedVideo';

class RecommendedVideoList extends Component {
  constructor() {
    super(); // must call super in derived cls constructor to access this keyword
    // comp-wide data
    this.state = {
      videos: [
        {
          id: 57688797,
          title: 'Ind Vs Aus Cricket 2023',
          description: 'Enjoy watching Cricket',
          thumbnailUrl: 'https://plchldr.co/i/300x200?&bg=0000ff&fc=ffffff&text=IndVsAus Cricket',
          channel: 'Hotstar',
          views: '1M',
          publishedDate: '1 month ago',
          isInWatchlist: false
        },
        {
          id: 87579763,
          title: 'Top 10 Goals of Messi',
          description: 'Enjoy watching 10 best goals of Messi',
          thumbnailUrl:
            'https://plchldr.co/i/300x200?&bg=0000ff&fc=ffffff&text=Top 10 Goals of Messi',
          channel: 'FIFA',
          views: '1M',
          publishedDate: '1 month ago',
          isInWatchlist: false
        },
        {
          id: 76445546,
          title: 'Top 10 Goals of Ronaldo',
          description: 'Enjoy watching 10 best goals of Ronaldo',
          thumbnailUrl:
            'https://plchldr.co/i/300x200?&bg=0000ff&fc=ffffff&text=Top 10 Goals of Ronaldo',
          channel: 'FIFA',
          views: '4M',
          publishedDate: '2 month ago',
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
    const duplicateVideos = [...this.state.videos];
    duplicateVideos[index].isInWatchlist = !duplicateVideos[index].isInWatchlist;
    // console.log(duplicateVideos);

    this.setState({
      videos: duplicateVideos
    });
  };

  render() {
    // Conditional Rendering
    if (!Array.isArray(this.state.videos) || this.state.videos.length === 0) {
      return (
        <div className='alert alert-warning'>
          Sorry! Unable to fetch Recommended Videos. Try again later!
        </div>
      );
    }

    // all comp-specific transformations can be done here
    // loop thru
    return (
      <div className='row'>
        {this.state.videos.map((video, index) => {
          // console.log(video);
          return (
            <div className='col-md-3' key={video.id}>
              <RecommendedVideo {...video} handleWatchlist={this.handleWatchlist} index={index} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default RecommendedVideoList;
