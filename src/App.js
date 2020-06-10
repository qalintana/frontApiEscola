import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}

export default App;
