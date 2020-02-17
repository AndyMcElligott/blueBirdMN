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

class UserVideo extends Component {

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
    
      handleClick = (event) => {
        event.preventDefault()
        this.props.dispatch({
          type: 'POST_YOUTUBE',
          payload: this.state.newHill
        })
      }
    
      liveView = () => {
        // this.props.dispatch({
        //     type: 'GET_INFO',
        //     payload: id
        // })
        this.props.history.push(`/liveView`)
    }

    render() {

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        const { classes } = this.props;

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
            <Tab label="Hill Info" />
            <Tab label="Live View" />
            //   onClick = {()=>{this.liveView()}} />
            <Tab label="User Testimony" />
            //   onClick = {()=>{this.userVideo()}} />
          </Tabs>
        </Paper>
                <form onSubmit= {this.handleClick} className = "youtubePlayer">
                    <label> youTube URL </label>
                    <input value ={this.state.newHill.youtube_id} onChange = {(event) => this.handleChangeFor('youtube_id', event)} />
                    <input type= "submit" onClick = {this.handleClick}/>
                </form> 
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
  
  UserVideo.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRouter(connect(mapStateToProps) (withStyles(styles)(UserVideo)));