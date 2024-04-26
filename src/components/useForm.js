import emailjs from '@emailjs/browser';
import { useCallback, useEffect, useState } from 'react';

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

  // eslint-disable-next-line
  const memoizedCallback = useCallback(callback, []);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      emailjs.send('service_w52syad', 'template_kqjsrcs', values, 'jz3fzMXNhPfdplahd')
      .then((result) => {
          console.log(result.text);
      })
      .catch((error) => {
          console.log(error.text);
      });
      memoizedCallback();
    }
  }, [errors, memoizedCallback, isSubmitting, values]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;