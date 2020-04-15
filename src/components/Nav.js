import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
           <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
					</ul>
				</nav>

			<Switch>
				<Route path="/about">
				</Route>
				<Route path="/">
				</Route>
			</Switch>
			</div>
		</Router>
	)
}

export default Nav;
