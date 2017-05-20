import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class StudentListPage extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        Student list page
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    'hi':'pop'
  };
}

export default connect(mapStateToProps)(StudentListPage);
