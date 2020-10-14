import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';
import StudentAbout from './components/StudentAbout/StudentAbout';
import TeacherAbout from './components/TeacherAbout/TeacherAbout';
import './App.css';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/aboutstudent' component={StudentAbout} />
				<Route exact path='/aboutteacher' component={TeacherAbout} />
			</Switch>
		</Router>
	);
};

export default App;
