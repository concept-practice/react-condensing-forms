import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../node_modules/bulma/css/bulma.min.css';
import Paths from '../utilities/Paths';

const App: React.FC = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<main aria-label="main" role="main">
					<Switch>
						{Paths.AllPaths().map((path, index) => (
							<Route key={index + path.PathName} path={path.Path} component={path.Component}></Route>
						))}
					</Switch>
				</main>
			</BrowserRouter>
		</div>
	);
};

export default App;
