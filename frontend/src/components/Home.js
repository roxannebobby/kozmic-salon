import React from 'react';

const Content = () => {
	return (
		<>
			<div id='content' className='col-md-10 split'>
				<div id='home'>
					<div className='slideshow'>
						<div className='slideshow-image'></div>
						<div className='slideshow-image'></div>
						<div className='slideshow-image'></div>
						<div className='slideshow-image'></div>
					</div>
					<div className='content-wrapper'>
						<div className='content-box home text-center container'>
							<div className='inside-wrapper home col-md-12'>
								<h2>
									Welcome to <br />
									Kozmic Salon!
								</h2>
								<p className='lead'>
									<br />
									<div className='alert alert-info col-md-12'>
										<strong>We are a Pulp Riot salon.</strong> Our specialties
										are <br />
										Creative Color & Healthy Hair.
									</div>
									<a href='aboutus.html'>Meet your hair care specialist</a>,
									Kelsey Kutz.
								</p>
								<a className='btn btn-primary' href='aboutus.html'>
									More info
								</a>
								<a className='btn btn-primary' href='aboutus.html'>
									Contact us
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Content;
