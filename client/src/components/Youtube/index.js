import React,{Component} from 'react';
import YouTube from 'react-youtube';
 
class GymTube extends Component {
  render(props) {
    const opts = {
      height: '250',
      width: '800',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId="ysUTNll8JQ8"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}
 
export default GymTube