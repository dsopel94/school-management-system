import React, { PropTypes } from 'react';
import LoginForm from './LoginForm.js';
import Auth from '../../../Auth.js';

class LoginPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      errors: {},
      successMessage: '',
      instructor: {
        userName: '',
        password: ''
      }
    };
    this.processForm = this.processForm.bind(this);
    this.changeInstructor = this.changeInstructor.bind(this);
  }
  componentDidMount() {
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = 'Success!';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }
    this.state.successMessage = successMessage;
  }
  processForm(event) {
    event.preventDefault();

    console.log('userName:', this.state.instructor.userName);
    console.log('password:', this.state.instructor.password);

    const userName = encodeURIComponent(this.state.instructor.userName);
    const password = encodeURIComponent(this.state.instructor.password);
    const formData = `userName=${userName}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });
        Auth.authenticateUser(xhr.response.token);
        this.context.router.replace('/');
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }
  changeInstructor(event) {
    const field = event.target.name;
    const instructor = this.state.instructor;
    instructor[field] = event.target.value;

    this.setState({
      instructor
    });
  }
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeInstructor}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        instructor={this.state.instructor}
      />
    );
  }
}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};
export default LoginPage;
