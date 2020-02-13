import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RegisterPage.css'

// Material UI Import
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


// Bring in MUI styling
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    rider: '',
    terrain: '',
    experience: '',
    city: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          rider: this.state.rider,
          terrain: this.state.terrain,
          experience: this.state.experience,
          city: this.state.city,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_Input_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser} className={classes.container} noValidate autoComplete="off">
          <h1>Register User</h1>
          <div className={classes.container}>
            <label htmlFor="username">
              Email:
              <TextField
                type="text"
                name= "username"
                placeholder="    Email@email.com"
                // className={classes.input}
                className={classes.textField}
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
                margin="normal"
                variant="outlined"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <Input
                type="password"
                name="password"
                className={classes.input}
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="rider">
              Rider:
              <Input
                type="rider"
                name="rider"
                placeholder="    eg. Skier, Boarder, Racer"
                className={classes.input}
                value={this.state.rider}
                onChange={this.handleInputChangeFor('rider')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="terrain">
              Terrain:
              <Input
                type="terrain"
                name="terrain"
                placeholder="    eg. Park, Race, Back Country"
                className={classes.input}
                value={this.state.terrain}
                onChange={this.handleInputChangeFor('terrain')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="experience">
              Experience:
              <Input
                type="number"
                name="experience"
                value={this.state.experience}
                onChange={this.handleInputChangeFor('experience')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="city">
              City:
              <Input
                type="city"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChangeFor('city')}
              />
            </label>
          </div>
          <div>
            {/* put the input and btn in own div and apply styling; change register input into a btn? */}
            <Input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <Button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          >
            Login
          </Button>
        </center>
      </div>
    );
  }
}



// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(RegisterPage));
