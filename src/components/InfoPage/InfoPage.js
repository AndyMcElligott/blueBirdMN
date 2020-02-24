import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import HillItem from '../HillItem/HillItem';
import LocalHills from '../LocalHills/LocalHills';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1,
    fontFamily: 'snowblobs',
  },
};

class InfoPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_YOUTUBE' })
  }

  // tab state
  state = {
    value: 0,
    // newHill state
    newHill: {
      live_view: '',
      youtube_id: '',
    }
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  liveView = () => {
    this.props.history.push(`/liveView`)
  }

  userVideo = () => {
    this.props.history.push(`/userVideo`)
  }

  render() {

    const { classes } = this.props;

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
            <Tab label="Hill Info" />
            <Tab label="Live View"
              onClick={() => { this.liveView() }} />
            <Tab label="User Video's"
              onClick={() => { this.userVideo() }} />
          </Tabs>
        </Paper>

        <div className="currentHillInfo">
          <h2 className="hill">Hill: </h2>
            <h3 className="selectedHillName">{this.props.selectedHillReducer.name}</h3>
          <h2 className="trails">Trails Open: </h2>
            <h3 className="selectedHillName">{this.props.selectedHillReducer.open_trails}</h3>
          <h2 className="hours">Hours of Operation:</h2>
            <h3 className="selectedHillName">{this.props.selectedHillReducer.hours}</h3>
          <h2 className="price">Lift Ticket Prices:</h2>
          <h2 className="selectedHillName"> $47 day pass for Adults</h2>
          <h2 className="selectedHillName"> $27 day pass for Children</h2>
        </div>
        <div className="trailMapDiv">
          <img className="trailMap" src={this.props.selectedHillReducer.trail_map} />
        </div>

      </>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore,
  selectedHillReducer: reduxStore.selectedHillReducer
});

InfoPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(InfoPage)));
