import React from 'react';
import {Link} from 'react-router';

export default (props) => <div>
	<h2>Reposss</h2>
	<nav className="repo-nav">
		<Link to="/repos/randomtext/React">React</Link>
		<Link to="/repos/anytext/React-router">React Router</Link>
		{props.children}
	</nav>
</div>