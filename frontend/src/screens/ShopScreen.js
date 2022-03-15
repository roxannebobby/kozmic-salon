import React from 'react';
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';

const ShopScreen = () => {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<Sidebar />
					</div>
					<div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<Products />
					</div>
				</div>
			</div>
		</>
	);
};

export default ShopScreen;