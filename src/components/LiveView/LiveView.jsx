import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import YouTube from 'react-youtube';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
    root: {
      flexGrow: 1,
    },
  };

class LiveView extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_YOUTUBE'})
      }
      
      // tab state
      state = {
        value: 0,
        playerObj : '',
        // newHill state
        newHill: {
          live_view: '',
          youtube_id: '',
        }
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };
    
      handleChangeFor = (event, propertyName) => {
        console.log(event.target.value)
        this.setState({
          newHill: {
            ...this.state.newHill,
            [propertyName]: event.target.value
          }
        })
      };

      info = (id) => {
        this.props.dispatch({
            type: 'GET_INFO',
            payload: id
        })
        this.props.history.push(`/infopage`)
    }
    
    //   handleClick = (event) => {
    //     event.preventDefault()
    //     this.props.dispatch({
    //       type: 'POST_YOUTUBE',
    //       payload: this.state.newHill
    //     })
    //   }
    
      liveView = () => {
        this.props.history.push(`/liveView`)
    }

    userVideo = () => {
        this.props.history.push(`/userVideo`)
    }

    render() {

        const { classes } = this.props;

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return(
         <>
            <Paper className={classes.root}>
                <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                // onClick = {()=>{this.liveView()}}
                >
                <Tab label="Hill Info"
                    onClick = {()=>{this.info()}} />
                <Tab label="Live View" />
                <Tab label="User Testimony"
                    onClick = {()=>{this.userVideo()}} />
                </Tabs>
            </Paper>
            <YouTube
                // live_view={live_view}
                opts={opts}
                onReady={this.videoOnReady}
                onPlay={this.videoOnPlay}
                onStateChange={this.videoStateChange}
            />
                
            </>
        );
    }
}



const mapStateToProps = (reduxStore) => ({
    reduxStore
  });
  
  LiveView.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRouter(connect(mapStateToProps) (withStyles(styles)(LiveView)));