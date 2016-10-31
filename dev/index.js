// Useful course on Webpack configuration
// http://survivejs.com/webpack/introduction/

// React Router tutorial taken here
// https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm

//RRtraining take here https://scotch.io/tutorials/routing-react-apps-the-complete-guide


import React from 'react';
//const React = require('react');

let ReactDOM = require('react-dom');
import {render} from 'react-dom';

//Doesn't work! import ReactRouter from 'react-router'; 
let ReactRouter = require('react-router');
import {hasHistory} from 'react-router';

//import './sass/styles';
require('./sass/styles');

import {routes} from './routes/routes';
//const routes = require('./routes/routes');



render(routes,
document.querySelector("#app"));