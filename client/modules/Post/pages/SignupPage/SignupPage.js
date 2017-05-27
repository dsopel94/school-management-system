import React from 'react';
import SignUpForm from './SignupForm.js';

class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      instructor: {
        fullName: '',
        userName: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeInstructor = this.changeInstructor.bind(this);
  }

  changeInstructor(event) {
    const field = event.target.name;
    const instructor = this.state.instructor;
    instructor[field] = event.target.value;

    this.setState({
      instructor
    });
  }

  processForm(event) {
    event.preventDefault();

    const fullName = encodeURIComponent(this.state.instructor.fullName);
    const userName = encodeURIComponent(this.state.instructor.userName);
    const password = encodeURIComponent(this.state.instructor.password);
    const formData = `fullName=${fullName}&userName=${userName}&password=${password}`;

    console.log('userName:', this.state.instructor.userName);
    console.log('fullName:', this.state.instructor.fullName);
    console.log('password:', this.state.instructor.password);
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        console.log('The form is valid');
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }
  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeInstructor}
        errors={this.state.errors}
        instructor={this.state.instructor}
      />
    );
  }
}
export default SignUpPage;
