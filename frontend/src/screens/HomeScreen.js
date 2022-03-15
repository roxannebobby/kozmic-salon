import React from 'react';
import Home from '../components/Home';
import Sidebar from '../components/Sidebar';

const HomeScreen = () => {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<Sidebar />
					</div>
					<div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<Home />
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeScreen;
