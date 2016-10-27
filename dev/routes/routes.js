const React = require('react');

let ReactRouter = require('react-router');
const Router = ReactRouter.Router;
let {
	Route,
	IndexRoute,
	//Router,
} = ReactRouter;

import  Home, { Stuff, Contact} from '../component/components';
import { App } from '../component/app';

export var routes = (
<Router>
<Route path="/" component={App} >
  <IndexRoute component={Home}/>
  <Route path="stuff" component={Stuff} />
  <Route path="contact" component={Contact} />
</Route>
</Router>);

//module.exports = routes;	
//export {routes};