import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './RegisterPage.css'

// Material UI Import
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';


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
    rider: '',
    terrain: '',
    experience: '',
    city: '',
  };

  editUser = (event) => {
    // event.preventDefault();

    // if (this.state.username && this.state.password) {
    this.props.dispatch({
      type: 'EDIT_USER',
      payload: {
        username: this.state.username,
        //   password: this.state.password,
        rider: this.state.rider,
        terrain: this.state.terrain,
        experience: this.state.experience,
        city: this.state.city,
      },
    });
    this.props.history.push(`/home`)
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form onSubmit={this.registerUser}
          className="editUserDiv" noValidate autoComplete="off">
          <h1>Edit User Profile</h1>
          <br />
          <div>
            <label htmlFor="rider">
              Rider:
              <br />
              <Input
                type="rider"
                name="rider"
                className={classes.input}
                value={this.state.rider}
                onChange={this.handleInputChangeFor('rider')}
              />
            </label>
          </div>
          <br />
          <br />
          <div>
            <label htmlFor="terrain">
              Terrain:
              <br />
              <Input
                type="terrain"
                name="terrain"
                className={classes.input}
                value={this.state.terrain}
                onChange={this.handleInputChangeFor('terrain')}
              />
            </label>
            <br />
            <br />
          </div>
          <div>
            <label htmlFor="experience">
              Experience:
              <br />
              <Input
                type="number"
                name="experience"
                value={this.state.experience}
                onChange={this.handleInputChangeFor('experience')}
              />
            </label>
          </div>
          <br />
          <br />
          <div>
            <label htmlFor="city">
              City:
              <br />
              <Input
                type="city"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChangeFor('city')}
              />
            </label>
          </div>
        </form>
        <div className="saveEditUserButton">
          <center>
            <Button
              type="button"
              variant="contained" color="primary"
              onClick={() => { this.editUser() }}
            >
              Save
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

