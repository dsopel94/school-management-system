import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentIntroPage extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>School Management System</h1>
        <p>Hi, my name is Damian Sopel. This is a school management app. You can manage a roster of students and courses easily.</p>
        <button className="startButton">Start</button>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps() {
  return {
    hi: 'pop'
  };
}

export default connect(mapStateToProps)(StudentIntroPage);
