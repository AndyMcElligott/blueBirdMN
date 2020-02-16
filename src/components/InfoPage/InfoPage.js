import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

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

class InfoPage extends Component {

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
          >
            <Tab label="Live View" />
            <Tab label="User Testimony" />
          </Tabs>
        </Paper>
        <form onSubmit= {this.handleClick}>
          <label> youTube URL </label>
                  <input value ={this.state.newHill.youtube_id} onChange = {(event) => this.handleChangeFor('youtube_id', event)} />
                  <input type= "submit" onClick = {this.handleClick}/>
        </form>
      </>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
});

InfoPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps) (withStyles(styles)(InfoPage)));
