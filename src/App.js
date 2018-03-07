import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Menu from './components/Menu/Menu';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
	showContentMenu = (routes) => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
			});
		}
		return <Switch>
			{result}
		</Switch>;
	}

	render() {
		return (
			<Router>
				<div className="App">
					{/* Menu */}
					<Menu />
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								
								{this.showContentMenu(routes)}
							</div>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
