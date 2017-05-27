import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  instructor,
}) => (
  <form action="/" onSubmit={onSubmit}>
    <div className="container">
      <h2 className="login">Log In</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}
      <div className="field-line">
        <label htmlFor="userName">Username:</label>
        <input id="userName" name="userName" errorText={errors.userName} onChange={onChange} value={instructor.userName} />
      </div>
      <div className="field-line">
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" errorText={errors.password} onChange={onChange} value={instructor.password} />
      </div>
      <div className="button-line">
        <button type="submit" className="login-button">Login</button>
      </div>

      <div className="signup-redirect">Don't have an account? Create one. <Link to={'/signup'} />
      </div>
    </div>
  </form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  instructor: PropTypes.object.isRequired
};

export default LoginForm;
