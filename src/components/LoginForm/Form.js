import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';
import { Link } from 'react-router-dom';

const Form = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Welcome Back!</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        {/* this is the email box if we decide to use email instead of usernames */}

        {/* <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div> */}
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Log in
        </button>
        <span className="form-input-login">
          
            Don't have an account? Sign up, <Link to='/signup'>here</Link>
          
        </span>
      </form>
    </div>
  );
};

export default Form;
