import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <>
    <div>
      <h1 id="welcome">
        Welcome, { props.user.username }!
      </h1>
      {/* <p>Your ID is: {props.user.id}</p> */}
    </div>
    <div className="userInfo">
    <label>
      You are this type of rider: {props.user.rider}
    </label>
    <br/>
    <label>
      This is the type of terrain you like to ride: {props.user.terrain}
    </label>
    <br/>
    <label>
      This is how many years of experience you have on the snow: {props.user.experience}
    </label>
    <br/>
    <label>
      This is the city you currently reside in: {props.user.city}
    </label>
  </div>
  <LogOutButton className="log-in" />
</>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
