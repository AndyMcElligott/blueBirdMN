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

    handleVideoChange = (event) => {
        console.log(event.target.value)
        this.setState({
            user_video: event.target.value

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
            payload: {
                url: this.state.user_video,
                hill: this.props.reduxStore.selectedHillReducer
            }
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
                        placeholder="YouTube URL"
                        name="terrain"
                        align="center"
                        margin="dense"
                        variant="filled"
                        fullWidth
                        InputProps={{
                            shrink: true,
                            className: classes.input,
                        }}
                        className={classes.input}
                        value={this.state.user_video}
                        onChange={this.handleVideoChange}
                    />
                    <br />
                    <br />
                    <div className="userVideoPlayer">
                    <Button
                        onClick={this.handleClick}
                        label="Submit URL"
                        type="button"
                        className="link-button"
                        variant="contained" color="primary"
                    > Submit
                    </Button>
                    <br />
                    
                        <h2> User Video's</h2>

                        {this.props.userVideoReducer.map((userVid) => {
                            console.log(userVid)
                            return (
                                <div className="userVideoPlayerDiv">
                                    <iframe width="560" height="315" src={userVid.youtube_id} frameborder="0" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* <DeleteIcon className={classes.icon} fontSize="large"
                    onClick={() => this.props.dispatch(
                        {
                            type: 'DELETE_VIDEO',
                            //   payload: video
                        })} />  */}
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