import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentIntroPage extends Component {
  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div className="main">
        <h1>School Management System</h1>
        <form className="login">
          <label htmlFor="userName">Username:</label>
          <input id="userName"></input>
          <label>Password: </label>
          <input id="password"></input>
          <button id="signup">Sign Up</button>
          <button id="login">Login</button>
        </form>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps() {
  return { hi: 'pop' };
}

export default connect(mapStateToProps)(StudentIntroPage);
