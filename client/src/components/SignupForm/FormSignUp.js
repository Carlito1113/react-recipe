import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.scss';
import { Link } from 'react-router-dom';

const FormSignUp = ({ submitForm, setLoggedin }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate,
    () => {
      setLoggedin(true)
    }
  );

  return (
      <form className="form" onSubmit={handleSubmit}>
        <h1>
        Start saving recipes today!
        </h1>
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
        <div className="form__inputs">
          <label htmlFor="confirmPassword" className="form__label">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            className="form__input"
            placeholder="Confirm your password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

        <button className="form__btn" type="submit">
          Sign up
        </button>
        <span className="form__span">
          Already have an account? Login <Link to="/login"> here</Link>
        </span>
      </form>
  );
};

export default FormSignUp;
