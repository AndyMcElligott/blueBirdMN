import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Button } from '@material-ui/core'

// editUser = () => {
//   console.log('in edit User')
//   this.props.history.push(`/EditUser`)
// }

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {

  render() {

  const editUser = (event) => {
    console.log('in edit User');
    this.props.history.push(`/EditUser`)
  }

  return (

  <>
    <div>
      <h1 id="welcome">
        Hello, {this.props.user.username}!
      </h1>
      {/* <p>Your ID is: {props.user.id}</p> */}
    </div>
    <div className="userInfo">
      <label>
        You are this type of rider:
      <br />
        {this.props.user.rider}
        <br />
      </label>
      <br />
      <label>
        This is the type of terrain you like to ride:
      <br />
        {this.props.user.terrain}
        <br />
      </label>
      <br />
      <label>
        This is how many years of experience you have on the snow:
      <br />
        {this.props.user.experience}
        <br />
      </label>
      <br />
      <label>
        This is the city you currently reside in:
      <br />
        {this.props.user.city}
        <br />
      </label>
      <br />
    </div>
    <Button
      className="editButton"
      variant="contained"
      color="secondary"
      margin-left="5em" 
      onClick={editUser}
      >Edit</Button>
    <br />
    <br />
    <LogOutButton className="log-in" />
  </>
)
    }};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
