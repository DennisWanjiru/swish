import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';


import Nav from './organisms/Nav';
import './index.css';
import Routes from './routes';
import JobStore from './stores/JobStore';

const App = () => (
  <Router>
    <Provider store={JobStore}>
      <Fragment>
        <Nav />
        <Routes />
      </Fragment>
    </Provider>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
