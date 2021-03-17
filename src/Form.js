import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true)
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
      </div>
      {!isSubmitted
        ? <FormSignup submitForm={submitForm} />
        : <FormSuccess />
      }
    </>
  )
}

export default Form
