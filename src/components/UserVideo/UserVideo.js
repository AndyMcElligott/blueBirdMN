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
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


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
        user_video: '',
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

    info = () => {
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

                <div className="userVideoDiv">
                    <Input
                        type="text"
                        placeholder="URL"
                        name="terrain"
                        align="center"
                        className={classes.input}
                        value={this.state.user_video}
                        // onChange={this.handleInputChangeFor('user_video')}
                    />
                    <br/>
                    <br />
                    <Button
                        onClick={this.handleClick}
                        label="Submit URL"
                        type="button"
                        className="link-button"
                        variant="contained" color="primary"
                    > Submit URL
                    </Button>
                    <br />
                    <h4> User Video's</h4>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HvB8DUhIRgk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    {/* {this.props.userVideoReducer.map((userVid) => {
                        return (
                            <div className="userVideoPlayerDiv">
                                <iframe width="560" height="315" src={this.props.selectedHillReducer.user_video} frameborder="0" />
                            </div>
                        )
                        })} */}
                </div>
                {/* <br /> */}

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
    userVideoReducer: reduxStore.userVideoReducer,
    selectedHillReducer: reduxStore.selectedHillReducer,
});

UserVideo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(UserVideo)));