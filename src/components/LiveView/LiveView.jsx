import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import YouTube from 'react-youtube';
import HillItem from '../HillItem/HillItem';

class LiveView extends Component {

    state = {
        playerObj : ''
    }

    render() {

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return(
        
            <YouTube
                videoId={hill.live_view}
                opts={opts}
                onReady={this.videoOnReady}
                onPlay={this.videoOnPlay}
                onStateChange={this.videoStateChange}
            />
        );
    }
}



const mapStateToProps = (reduxStore) => ({
    reduxStore
  });
  
  export default withRouter(connect(mapStateToProps)(LiveView));