import React from 'react';
import SignIn from './SignIn';
import FirebaseUser from './firebase/FirebaseUser';
import Home from './Home';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="App">
			<FirebaseUser>
				<Router>
					<Navigation />
					<Route path="/" exact component={Home} />
					<Route path="/signin" component={SignIn} />
				</Router>
			</FirebaseUser>
		</div>
	);
}

export default App;
