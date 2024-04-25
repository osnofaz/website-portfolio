import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './components/styles/GlobalStyle';
import Typography from './components/styles/Typography';

import "./i18n";

ReactDOM.render(
    <>
    <GlobalStyles />
    <Typography />
    <App />
    </>,
     document.getElementById('root'));
