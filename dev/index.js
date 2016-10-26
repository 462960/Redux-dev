// Useful course on Webpack configuration
// http://survivejs.com/webpack/introduction/

// React Router tutorial taken here
// https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm


import React from 'react';
//const React = require('react');
let ReactDOM = require('react-dom');

//Doesn't work!
//import ReactRouter from 'react-router'; 

let ReactRouter = require('react-router');

import {hasHistory} from 'react-router';

//import './sass/styles';
require('./sass/styles');
// import { Home, Stuff, Contact} from './component/components';
// import { App } from './component/app';
//import Button from './button';
//import {Button} from './button';
//const Button = require('./button');
//import {routes} from './routes/routes';
//const routes = require('./routes/routes');


  let { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link } = ReactRouter;

      var Home = React.createClass({
  render: function() {
      return (
        <div>
          <h2>HELLO</h2>
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>
  
          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
      );
    }
});

var Contact = React.createClass({
  render: function() {
      return (
        <div>
          <h2>GOT QUESTIONS?</h2>
          <p>The easiest thing to do is post on
          our <a href="http://forum.kirupa.com">forums</a>.
          </p>
        </div>
      );
    }
});
 
var Stuff = React.createClass({
  render: function() {
      return (
        <div>
          <h2>STUFF</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>Nulla pulvinar diam</li>
            <li>Facilisis bibendum</li>
            <li>Vestibulum vulputate</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
});
 
var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
        <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
          <li><Link activeClassName="active" to="/stuff">Stuff</Link></li>
          <li><Link activeClassName="active" to="/contact">Contact</Link></li>
        </ul>
        <div className="content">
        {this.props.children}
        </div>
      </div>
    )
  }
});


const routes = 
<Router >
<Route path="/" component={App} >
  <IndexRoute component={Home}/>
  <Route path="stuff" component={Stuff} />
  <Route path="contact" component={Contact} />
</Route>
</Router>
 



ReactDOM.render(routes,
document.querySelector("#app"));