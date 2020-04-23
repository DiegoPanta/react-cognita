import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  document.getElementById('root')
);