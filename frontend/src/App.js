import './App.css';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import PolicyScreen from './screens/PolicyScreen';
import ContactScreen from './screens/ContactScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import GalleryScreen from './screens/GalleryScreen';
import ShopScreen from './screens/ShopScreen';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div class='container'>
				<Route path='/' component={HomeScreen} exact />
				<Route path='/about' component={AboutScreen} />
				<Route path='/policy' component={PolicyScreen} />
				<Route path='/contact' component={ContactScreen} />
				<Route path='/appointments' component={AppointmentScreen} />
				<Route path='gallery' component={GalleryScreen} />
				<Route path='shop' component={ShopScreen} />
			</div>
		</Router>
	);
}

export default App;
