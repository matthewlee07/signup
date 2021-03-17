import React from 'react'
import './Form.css'
import useForm from './useForm';
import validate from './validateInfo';

const FormSignup = ({ submitForm }) => {
  const { values, handleChange, handleSubmit, errors } = useForm(submitForm, validate);

  return (
    <div className="form-content-right">
      <form action="" className="form" onSubmit={handleSubmit}>
        <h1>Get started with us today! Create your account by filling out the information below.</h1>
        <div className="form-inputs">
          <label htmlFor="firstName" className="form-label">
            firstName:
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            className="form-input"
            placeholder="Enter your first name"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="lastName" className="form-label">
            lastName:
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            className="form-input"
            placeholder="Enter your last name"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password1" className="form-label">
            password:
          </label>
          <input
            id="password1"
            type="password"
            name="password1"
            className="form-input"
            placeholder="Enter your password"
            value={values.password1}
            onChange={handleChange}
          />
          {errors.password1 && <p>{errors.password1}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            re-enter password:
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Re-enter your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  )
}

export default FormSignup
