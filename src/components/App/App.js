import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import webpackLogo from '../../assets/img/webpack-logo.png';

const App = () => {
  return (
    <>
      <Header />
      <img src={webpackLogo} alt="Webpack Logo" width="150" />
      <h1>Hello world!</h1>
    </>
  );
};

export default App;
