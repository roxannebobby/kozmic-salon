import React from 'react';
import Sidebar from '../components/Contact';

const GalleryScreen = () => {
	return (
		<>
			<div class='container'>
				<div class='row'>
					<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<Sidebar />
					</div>
					<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<h2>Gallery Page</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default GalleryScreen;
