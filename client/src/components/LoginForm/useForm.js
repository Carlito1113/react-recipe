import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useForm = (callback, validate) => {
  let history = useHistory();
  const [values, setValues] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      history.push('/user');
    }
  }, [history]);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    try {
      const username = values.username;
      const password = values.password;
      const { data } = await axios.post(
        '/api/user/login',
        {
          username,
          password,
        },
        config
      );

      localStorage.setItem('auth-token', data.token);
      localStorage.setItem('user-id', data.userId);
      history.push('/user');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
