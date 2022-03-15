import React from 'react';
import Sidebar from '../components/Sidebar';

const AppointmentScreen = () => {
	return (
		<>
			<div class='container'>
				<div class='row'>
					<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<Sidebar />
					</div>
					<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<h2>Appointments</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default AppointmentScreen;
