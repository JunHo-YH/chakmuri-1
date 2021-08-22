import React from "react";
import Main from "../src/pages/Home";
import Detail from "../src/pages/Detail"
import { Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Main} />
			<Route exact path="/detail" component={Detail} />
		</Switch>
	);
};


export default App;
