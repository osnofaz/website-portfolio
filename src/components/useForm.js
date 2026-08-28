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
  const [sendError, setSendError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSendError(false);
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // eslint-disable-next-line
  const memoizedCallback = useCallback(callback, []);

  useEffect(() => {
    if (!isSubmitting) return;

    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    emailjs.send('service_w52syad', 'template_kqjsrcs', values, 'jz3fzMXNhPfdplahd')
    .then(() => {
        memoizedCallback();
    })
    .catch((error) => {
        console.log(error.text);
        setSendError(true);
    })
    .finally(() => {
        setIsSubmitting(false);
    });
    // eslint-disable-next-line
  }, [errors]);

  return { handleChange, handleSubmit, values, errors, isSubmitting, sendError };
};

export default useForm;
