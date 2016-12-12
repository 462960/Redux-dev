import React from 'react';
import {Link, IndexLink } from 'react-router';

export default (props) => 
<div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">ScotchCars</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                                <li><Link to="/cars" activeClassName="active">Cars</Link></li>
                                <li><Link to="/about" activeClassName="active">About</Link></li>
                                <li><Link to="/repos" activeClassName="active">Repos</Link></li>
                                <li><Link to="/login" activeClassName="active">Log in</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {props.children}
                </div>
            </div>