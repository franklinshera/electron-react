import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Route } from 'react-router-dom'
import About from "./pages/About"
ReactDOM.render(
  <Router>
        <main>
        <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
        </main>

  </Router>,
  document.getElementById('root')
);


