import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './LoginForm.scss';
import '../SignupForm/Form.scss';
import { Link } from 'react-router-dom';

const Form = ({ submitForm, setLoggedin }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate,
    () => {
      setLoggedin(true)
    }
  );

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Welcome Back!</h1>
        <div className="form__inputs">
          <label htmlFor="username" className="form__label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form__input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form__inputs">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form__input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button className="form__btn" type="submit">
          Log in
        </button>
        <span className="form__span">
          Don't have an account? Sign up, <Link to="/signup">here</Link>
        </span>
      </form>
    </div>
  );
};

export default Form;
