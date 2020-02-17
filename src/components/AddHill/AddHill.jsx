import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: '5px',
    marginRight: '5px',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});



class AddHill extends Component {

  state = {
      hillName: '',
      open_trails: '',
      live_view: '',
      hours: '',
      logo: '',
      about: '',
      avatar: '',
  }

  submitHill = (event) => {
    console.log('submit hill clicked, sending to DB');
    event.preventDefault();
    this.props.dispatch({
      type: 'SUBMIT_HILL',
      payload: {
        hillName: this.state.hillName,
        open_trails: this.state.open_trails,
        live_view: this.state.live_view,
        hours: this.state.hours,
        logo: this.state.logo,
        about: this.state.about,
        avatar: this.state.avatar,
      },
    });
  };
  
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <form className={classes.container} noValidate autoComplete="off" style={{ display: 'flex' }}>
          <TextField style={{ display: 'inline-block' }}
            id="filled-name"
            label="Hill Name"
            className={classes.textField}
            value={this.state.hillName}
            margin="normal"
            variant="filled"
            onChange={this.handleInputChangeFor('hillName')}
          />
          <TextField style={{ display: 'inline-block' }}
            id="filled-name"
            label="Two Letters"
            className={classes.textField}
            value={this.state.avatar}
            onChange={this.handleInputChangeFor('avatar')}
            margin="normal"
            variant="filled"
          />
          {"\n"}
          <TextField style={{ display: 'inline-block' }}
            id="filled-name"
            label="Open"
            className={classes.textField}
            value={this.state.open}
            onChange={this.handleInputChangeFor('open_trails')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Live View URL"
            className={classes.textField}
            value={this.state.live_view}
            onChange={this.handleInputChangeFor('live_view')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Hours"
            className={classes.textField}
            value={this.state.hours}
            onChange={this.handleInputChangeFor('hours')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Logo URL"
            className={classes.textField}
            value={this.state.logo}
            onChange={this.handleInputChangeFor('logo')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Hill Info"
            className={classes.textField}
            value={this.state.info}
            onChange={this.handleInputChangeFor('about')}
            margin="normal"
            variant="filled"
          />
          <Button className="AddHillBtn" type="submit" variant="contained" color="primary" onClick={this.submitHill}> Submit
          </Button>
        </form>

      </>
    )
  }
}


AddHill.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(withStyles(styles)(AddHill));