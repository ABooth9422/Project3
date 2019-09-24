import React,{Component} from 'react';
import YouTube from 'react-youtube';
 
class GymTube extends Component {


  render(props) {
    const opts = {
      height: '250',
      width: '70%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        color: "red",
        fs:0,
        modestbranding:1
      }
    
    };
 
    return (
      
      <YouTube
        className="gymTube"
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