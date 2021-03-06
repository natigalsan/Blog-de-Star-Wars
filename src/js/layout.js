import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Personajes } from "./views/personajes";
import { Naves } from "./views/naves";
import {Planets} from "./views/planets"; 
import { LearnMorePj } from "./component/LearMorePj";
import { LMnaves } from "./component/LMnaves";
import {LMplanets} from "./component/LMplanets";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/personajes">
							<Personajes />
						</Route>
						<Route exact path="/personajes/learnMorePj/:i">
							<LearnMorePj />
						</Route>
						<Route exact path="/naves">
							<Naves />
						</Route>
						<Route exact path="/naves/LMnaves/:index">
							<LMnaves />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/planets/LMplanets/:ind">
							<LMplanets />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
