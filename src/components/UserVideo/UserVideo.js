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
import DeleteIcon from '@material-ui/icons/Delete';


const styles = {
    root: {
        flexGrow: 1,
    },
};

class UserVideo extends Component {

    componentDidMount() {
        // this.props.dispatch({ type: 'FETCH_YOUTUBE' })
        // getUserVideo();
    }

    // tab state
    state = {
        value: 0,
        playerObj: '',
        youtube_id: '',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeFor = (event) => {
        console.log(event.target.value)
        this.setState({
            youtube_id: event.target.value

        })
    };

    handleDelete = () => {
        console.log('deleting this video')
    }

    getUserVideo = () => {
        this.props.dispatch({ type: 'GET_USERVIDEO' })
    }

    handleClick = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'POST_YOUTUBE',
            payload: this.state.newHill
        })
    }

    liveView = () => {
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
        const { videoId } = this.props;

        return (
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
                            onClick={() => { this.info() }} />
                        <Tab label="Live View"
                            onClick={() => { this.liveView() }} />
                        <Tab label="User Testimony" />
                    </Tabs>
                </Paper>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/HvB8DUhIRgk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                {/* <form onSubmit={this.handleClick} className="youtubePlayer">
                    <label> youTube URL </label>
                    <input value={this.state.youtube_id} onChange={this.handleChangeFor} />
                    <input type="submit" onClick={this.handleClick} />
                </form>
                <br /> */}
                
                {/* <YouTube
                    videoId={this.props.hill.live_view}
                    opts={opts}
                    onReady={this.videoOnReady}
                    onPlay={this.videoOnPlay}
                    onStateChange={this.videoStateChange}
                /> */}
                {/* <br />
                <DeleteIcon className={classes.icon} fontSize="large"
                    onClick={() => this.props.dispatch(
                        {
                            type: 'DELETE_VIDEO',
                            //   payload: video
                        })} /> */}
                {/* <AddIcon /> */}
            </>
        );
    }
}



const mapStateToProps = (reduxStore) => ({
    reduxStore,
    userVideoReducer: reduxStore.userVideoReducer
});

UserVideo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(UserVideo)));