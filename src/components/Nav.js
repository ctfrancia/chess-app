import React from "react";
import {
  BrowserRouter as Router,
  Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
const navContainer = {
	display: 'flex',
	width: '100vw',
	justifyContent: 'space-evenly'
}
const navStyle = {
}

function Nav() {
	return (
		<Router>
			<div>
				<nav style={navContainer}>
          <Link to="/"><div>Home</div> </Link>
          <Link to="/about"><div>About</div> </Link>
				</nav>

			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
			</div>
		</Router>
	)
}

export default Nav;
