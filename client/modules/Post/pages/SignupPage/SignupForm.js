import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  instructor,
}) => (
  <form action="/" onSubmit={onSubmit}>
    <div className="container">
      <h2 className="sign-up">Sign Up</h2>
      errors.summary && <p className="error-message">{errors.summary}</p>
      <div className="field-line">
        <label htmlFor="fullName">Full Name:</label>
        <input id="fullName" onChange={onChange} errorText={errors.fullName} errorText={errors.fullName} value={instructor.fullName}></input>
      </div>
      <div className="field-line">
        <label htmlFor="userName">Username:</label>
        <input id="userName" onChange={onChange} errorText={errors.userName} value={instructor.userName}></input>
      </div>
      <div className="field-line">
        <label htmlFor="password">Password:</label>
        <input id="password" onChange={onChange} errorText={errors.password} value={instructor.password}></input>
      </div>
      <div className="button-line">
        <button type="submit" className="sign-up-button" >Create New Account</button>
      </div>

      <div className="login-redirect">Already have an account? <Link to={'/login'}> Log in</Link>
      </div>
    </div>
  </form>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  instructor: PropTypes.object.isRequired
};

export default SignUpForm;
