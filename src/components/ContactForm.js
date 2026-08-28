import React, {useRef} from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import validate from './validateInfo';
import useForm from './useForm';


const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: var(--fs-md);
    font-weight: bold;
  }
  input,
  textarea {
    width: 100%;
    font-size: var(--fs-md);
    padding: 10px;
    color: var(--dark-text);
    background-color: var(--dark-footer);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--dark-text);
    color: var(--dark-background);
    font-size: var(--fs-md);
    display: inline-block;
    outline: none;
    border: none;
    padding: 0.5rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.4s ease-in-out;

  }
  button[type='submit']:hover {
    background-color: var(--hover-accent);
    color: var(--dark-background);
  }
  button[type='submit']:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  button[type='submit']:disabled:hover {
    background-color: var(--dark-text);
    color: var(--dark-background);
  }
  .sendError {
    color: #bd2e2e;
    font-size: var(--fs-sm);
    margin-top: 1rem;
  }
  .contactreqs{
    color: #bd2e2e;
    font-size: var(--fs-sm);
    font-weight: normal;
  }
`;

const ContactForm = ({submitForm}) => {
  const form = useRef();
  const {t} = useTranslation(['contact']);
  const { handleChange, handleSubmit, values, errors, isSubmitting, sendError } = useForm(
    submitForm,
    validate
  );
  
  

  return (
    <>
      <FormStyle ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
          {t("yourname")}
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
             {errors.name && <p className="contactreqs">{t(errors.name)}</p>}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
          {t("youremail")}
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
           {errors.email && <p className="contactreqs">{t(errors.email)}</p>}

          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
          {t("yourmessage")}
            <textarea
              type="text"
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
            />
             {errors.message && <p className="contactreqs">{t(errors.message)}</p>}

          </label>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : t("send")}
        </button>
        {sendError && (
          <p className="sendError">Something went wrong sending your message — please try again, or email me directly.</p>
        )}
      </FormStyle>
    </>
  );
};

export default ContactForm;
