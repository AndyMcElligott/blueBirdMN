import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RegisterPage.css'

// Material UI Import
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import { Input } from '@material-ui/core';


// Bring in MUI styling
const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: teal
  }
})

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    color: "black"
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

        <form onSubmit={this.registerUser}
          className="registerUserDiv" noValidate autoComplete="off">
          <h1>Register User</h1>
          <br />
          <div className="createUserDiv">
            <TextField
              type="text"
              name="username"
              label="User Name"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
              margin="normal"
              variant="filled"
              InputProps={{
                shrink: true,
                className: classes.input,
              }}
            />
          </div>
          <div>
            <TextField
              type="password"
              name="password"
              label="Password"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
              margin="normal"
              variant="filled"
              InputProps={{
                shrink: true,
                className: classes.input,
              }}
            />
            {/* </label> */}
          </div>
          <div>
            <TextField
              label="Type of Rider?"
              type="rider"
              name="rider"
              value={this.state.rider}
              onChange={this.handleInputChangeFor('rider')}
              variant="filled"
              InputProps={{
                shrink: true,
                className: classes.input,
              }}
            />
          </div>
          <div>
            <TextField
              type="terrain"
              name="terrain"
              label="Type of Terrain"
              className={classes.input}
              value={this.state.terrain}
              onChange={this.handleInputChangeFor('terrain')}
              margin="normal"
              variant="filled"
              InputProps={{
                shrink: true,
                className: classes.input,
              }}
            />
          </div>
          <div>
            <TextField
              type="number"
              name="experience"
              label="Years of Experience?"
              value={this.state.experience}
              onChange={this.handleInputChangeFor('experience')}
              margin="normal"
              variant="filled"
              InputProps={{
                shrink: true,
                className: classes.input,
              }}
            />
          </div>
          <div>
            <TextField
              type="city"
              name="city"
              label="Current City"
              value={this.state.city}
              onChange={this.handleInputChangeFor('city')}
              margin="normal"
              variant="filled"
              InputProps={{
                shrink: true,
                className: classes.input,
              }}
            />
          </div>
          <div>
            {/* put the input and btn in own div and apply styling; change register input into a btn? */}
            <Input
              className="register"
              type="submit"
              name="submit"
              value="CREATE"
            />
          </div>
        </form>
        <div className="registerLoginBtn">
          <center>
            <Button
              type="button"
              className="link-button"
              variant="contained" color="primary"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
            >
              Login
          </Button>
          </center>
        </div>
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

