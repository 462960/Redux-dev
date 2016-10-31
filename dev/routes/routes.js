const React = require('react');
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import  Home from '../common/home';
import  About from '../common/about';
import  Main from '../common/main';
import  Car from '../car/car.component';
import  CarDetail from '../car/car-detail.component';
import data from '../car/data';

export var routes = (
<Router history={browserHistory}>
<Route path="/" component={Main}>
  <IndexRoute component={Home}/>
  <Route path="cars" component={Car} data={data}/>
  <Route path="cars/:id" component={CarDetail} data={data}/>

  <Route path="about" component={About} />
</Route>
</Router>);

//module.exports = routes;	
//export {routes};