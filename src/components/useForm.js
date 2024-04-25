import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, email, message, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      [email]:value,
      [message]:value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        emailjs.send('service_w52syad', 'template_kqjsrcs', values, 'jz3fzMXNhPfdplahd')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
      });
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;