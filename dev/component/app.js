import React from 'react';

// The first approach
import {Link, IndexLink } from 'react-router';

// The second approach
//let ReactRouter = require('react-router');
// let {
//   Link,
//   IndexLink
// } = ReactRouter;

 // The first option
 export const App = (props) =>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
        <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
          <li><Link activeClassName="active" to="/stuff">Stuff</Link></li>
          <li><Link activeClassName="active" to="/contact">Contact</Link></li>
        </ul>
        <div className="content">
        {props.children}
        </div>
      </div>

// The second option
// var App = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h1>Simple SPA</h1>
//         <ul className="header">
//         <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
//           <li><Link activeClassName="active" to="/stuff">Stuff</Link></li>
//           <li><Link activeClassName="active" to="/contact">Contact</Link></li>
//         </ul>
//         <div className="content">
//         {this.props.children}
//         </div>
//       </div>
//     )
//   }
// });
//export {App};
