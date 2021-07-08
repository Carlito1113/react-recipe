import React, { useState } from 'react';
import FormSignup from './FormSignUp';
import './Form.css';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
          <FormSignup submitForm={submitForm} />
      </div>
    </>
  );
};

export default Form;
