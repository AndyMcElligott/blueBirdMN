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
            <Tab label="User Testimony"
              onClick={() => { this.userVideo() }} />
          </Tabs>
        </Paper>
        {/* <div style={{ display: 'flex' } }>
                    {this.props.reduxStore.hill.map(hill => {
                        return (
                            <HillItem 
                                id={hill.id} 
                                title={hill.name}
                                hours={hill.hours}
                                terrain={hill.terrain}
                                slopes={hill.slopes}
                                live={hill.live_view}
                                about={hill.about}
                                logo={hill.logo}
                            />
                        )
                    })
                    }
                </div> */}
        <div className="currentHillInfo">
          <p className="hill">Hill: </p>
          {this.props.selectedHillReducer.name} 
          <p className="trails">Trails Open: {this.props.selectedHillReducer.open_trails}</p>
          <p className="hours">Hours of Operation: {this.props.selectedHillReducer.hours} </p>
          <img src={this.props.selectedHillReducer.trail_map} />
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
