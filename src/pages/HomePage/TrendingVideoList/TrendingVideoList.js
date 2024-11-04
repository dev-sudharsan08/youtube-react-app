import { Component } from 'react';
import TrendingVideo from './TrendingVideo/TrendingVideo';

// class comp a.k.a. containers/smart comp/ stateful comp
class TrendingVideoList extends Component {
  // comp-wide data
  // state is an object
  state = {
    videoResolution: '4K',
    videos: [
      {
        id: 121231,
        title: 'Man Vs Wild',
        description: 'Adventure TV Show by Bear Grylls | Watch it on Discovery TV',
        thumbnailUrl: 'https://plchldr.co/i/300x200?&bg=0000ff&fc=ffffff&text=ManVsWild',
        channel: 'Discovery TV',
        views: '1M',
        publishedDate: '4 days ago'
      },
      {
        id: 7856786,
        title: 'Planet Earth II',
        description: 'Fanstastic TV Series about the Planet Earth | Watch it on BBC Earth',
        thumbnailUrl: 'https://plchldr.co/i/300x200?&bg=ffff00&fc=000000&text=PlanetEarthII',
        channel: 'BBC Earth',
        views: '2M',
        publishedDate: '10 days ago'
      }
    ]
  };

  handleChangeResolution = () => {
    // within arrow fn -- 'this' keyword will be available
    // lets update the state data
    console.log('clicked');
    // this.state.videoResolution = "8K"; // Do not mutate state directly. Use setState().
    this.setState({
      videoResolution: '8K'
    });
    // whenever setState is called -- render() method will be executed
    // setState will smartly merge the change with existing properties
  };

  // must have render method
  render() {
    console.log(this.state);
    console.log('Inside Render');
    // must return JSX

    return (
      <div className='row'>
        <p>
          Enjoy the Trending Videos in Stunning {this.state.videoResolution} Resolution
          <button
            type='button'
            className='btn btn-primary btn-sm ms-2'
            onClick={this.handleChangeResolution}>
            Change Resolution
          </button>
        </p>

        {this.state.videos.map((video) => {
          return (
            <div className='col-md-3' key={video.id}>
              <TrendingVideo {...video} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default TrendingVideoList;
