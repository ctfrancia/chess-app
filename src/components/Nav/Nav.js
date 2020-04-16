import React from "react";
import {
  BrowserRouter as Router,
  Switch, Route, Link } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import CreateTournament from "../Create-Tournament/Create-Tournament";
const navContainer = {
	display: 'flex',
	width: '100vw',
	justifyContent: 'space-evenly'
}

export default function Nav() {
	return (
		<Router>
			<div>
				<nav style={navContainer}>
          <Link to="/"><div>Home</div> </Link>
          <Link to="/about"><div>About</div> </Link>
					<Link to="/create-tournament"><div>Create Tournament</div></Link>
				</nav>

			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/create-tournament">
					<CreateTournament />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
			</div>
		</Router>
	)
}

