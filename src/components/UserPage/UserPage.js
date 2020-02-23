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
    <div className="userNameDiv">
      <h1 id="welcome">
        Hello, {this.props.user.username}!
      </h1>
      {/* <p>Your ID is: {props.user.id}</p> */}
    </div>
    <br />
    <div>
      <label className="userInfo">
        You are this type of rider:
      <br />
        <p className="userResponse">{this.props.user.rider}</p>
        <br />
      </label>
      
      <label className="userInfo">
        This is the type of terrain you like to ride:
      <br />
      <p className="userResponse">{this.props.user.terrain}</p>
        <br />
      </label>
      
      <label className="userInfo">
        This is how many years of experience you have on the snow:
      <br />
      <p className="userResponse">{this.props.user.experience}</p>
        <br />
      </label>
      
      <label className="userInfo">
        This is the city you currently reside in:
      <br />
      <p className="userResponse">{this.props.user.city}</p>
        <br />
      </label>
      
    </div>
    <Button
      className="editButton"
      variant="contained"
      color="secondary"
      // margin-left="5em" 
      onClick={editUser}
      marginLeft= "5em"
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
