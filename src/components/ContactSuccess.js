import React from 'react';
import '../App.css';
import { useTranslation } from "react-i18next";


const ContactSuccess = () => {
  const {t} = useTranslation(['contact']);

  return (

      <h1>{t("contactmessage")}</h1>
  );
};

export default ContactSuccess;