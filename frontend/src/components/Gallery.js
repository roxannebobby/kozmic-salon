const Content = () => {
	return (
		<>
			<div id='preloader'>
				<div className='spinner'>
					<div className='bounce1'></div>
					<div className='bounce2'></div>
					<div className='bounce3'></div>
				</div>
			</div>
			<div className='container-fluid'>
				<div id='sidebar' className='split col-md-2'>
					<div className='affix-sidebar col-md-12'>
						<div className='sidebar-nav'>
							<div className='navbar navbar-default' role='navigation'>
								<div className='navbar-header'>
									<button
										type='button'
										className='navbar-toggle'
										data-toggle='collapse'
										data-target='.sidebar-navbar-collapse'
									>
										<span className='sr-only'>Toggle navigation</span>
										<span className='icon-bar'></span>
										<span className='icon-bar'></span>
										<span className='icon-bar'></span>
									</button>
									<div className='brand'>
										<a href='index.html'>
											<img
												src='img/logo.png'
												alt=''
												className='img-responsive center-block'
											/>
										</a>
									</div>
								</div>
								<div className='navbar-collapse collapse sidebar-navbar-collapse'>
									<ul className='nav navbar-nav' id='sidenav01'>
										<li>
											<a href='index.html'>Home</a>
										</li>
										<li>
											<a href='services.html'>Our Services</a>
										</li>
										<li>
											<a href='aboutus.html'>About us</a>
										</li>
										<li className='active'>
											<a href='gallery.html'>Gallery</a>
										</li>
										<li>
											<a href='prices.html'>Prices</a>
										</li>
										<li>
											<a href='contact.html'>Contact</a>
										</li>
										<li className='dropdown'>
											<a
												className='dropdown-toggle'
												data-toggle='dropdown'
												href='#'
											>
												Pages
												<span className='caret'></span>
											</a>
											<ul className='dropdown-menu'>
												<li>
													<a href='blog-home.html'>Blog Home</a>
												</li>
												<li>
													<a href='blog-single.html'>Blog Single</a>
												</li>
												<li>
													<a href='elements.html'>Elements page</a>
												</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='navbar-info hidden-sm hidden-xs hidden-md'>
							<p className='small-text'>
								<i className='fas fa-map-marker-alt margin-icon'></i>Street name
								123 - New York
							</p>
							<p className='small-text'>
								<i className='far fa-clock margin-icon'></i>Mon-Fri: 9am-9pm{' '}
								<br /> Weekends : Closed
							</p>
							<div className='social-media '>
								<a href='#' title=''>
									<i className='fab fa-twitter'></i>
								</a>
								<a href='#' title=''>
									<i className='fab fa-facebook'></i>
								</a>
								<a href='#' title=''>
									<i className='fab fa-google-plus'></i>
								</a>
								<a href='#' title=''>
									<i className='fab fa-instagram'></i>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div id='content' className='col-md-10 split'>
					<div id='gallery'>
						<div className='content-wrapper'>
							<div className='content-box container'>
								<div className='inside-wrapper container'>
									<div className='section-heading'>
										<h2>Our Gallery</h2>
									</div>
									<ul className='nav nav-pills cat centered'>
										<li className='active'>
											<a href='#' data-filter='*'>
												All
											</a>
										</li>
										<li>
											<a href='#' data-filter='.spa'>
												Our Spa
											</a>
										</li>
										<li>
											<a href='#' data-filter='.services'>
												Our services
											</a>
										</li>
									</ul>
									<div id='gallery-isotope' className='margin1'>
										<div className='services col-lg-4 col-sm-6 col-md-6'>
											<div className='isotope-item'>
												<div className='gallery-thumb'>
													<img
														className='img-responsive'
														src='img/gallery/gallery1.jpg'
														alt=''
													/>
													<a
														href='img/gallery/gallery1.jpg'
														title='You can add caption to pictures.'
													>
														<span className='overlay-mask'></span>
													</a>
												</div>
											</div>
										</div>
										<div className='services col-lg-4 col-sm-6 col-md-6'>
											<div className='isotope-item'>
												<div className='gallery-thumb'>
													<img
														className='img-responsive'
														src='img/gallery/gallery2.jpg'
														alt=''
													/>
													<a
														href='img/gallery/gallery2.jpg'
														title='You can add caption to pictures.'
													>
														<span className='overlay-mask'></span>
													</a>
												</div>
											</div>
										</div>
										<div className='services col-lg-4 col-sm-6 col-md-6'>
											<div className='isotope-item'>
												<div className='gallery-thumb'>
													<img
														className='img-responsive'
														src='img/gallery/gallery3.jpg'
														alt=''
													/>
													<a
														href='img/gallery/gallery3.jpg'
														title='You can add caption to pictures.'
													>
														<span class='overlay-mask'></span>
													</a>
												</div>
											</div>
										</div>
										<div class='spa col-lg-4 col-sm-6 col-md-6'>
											<div class='isotope-item'>
												<div class='gallery-thumb'>
													<img
														class='img-responsive'
														src='img/gallery/gallery4.jpg'
														alt=''
													/>
													<a
														href='img/gallery/gallery4.jpg'
														title='You can add caption to pictures.'
													>
														<span class='overlay-mask'></span>
													</a>
												</div>
											</div>
										</div>
										<div class='services col-lg-4 col-sm-6 col-md-6'>
											<div class='isotope-item'>
												<div class='gallery-thumb'>
													<img
														class='img-responsive'
														src='img/gallery/gallery5.jpg'
														alt=''
													/>
													<a
														href='img/gallery/gallery5.jpg'
														title='You can add caption to pictures.'
													>
														<span class='overlay-mask'></span>
													</a>
												</div>
											</div>
										</div>
										<div class='spa col-lg-4 col-sm-6 col-md-6'>
											<div class='isotope-item'>
												<div class='gallery-thumb'>
													<img
														class='img-responsive'
														src='img/gallery/gallery6.jpg'
														alt=''
													/>
													<a
														href='img/gallery/gallery6.jpg'
														title='You can add caption to pictures.'
													>
														<span class='overlay-mask'></span>
													</a>
												</div>
											</div>
										</div>
										<div class='spa col-lg-4 col-sm-6 col-md-6'>
											<div class='isotope-item'>
												<div class='gallery-thumb'>
													<img
														class='img-responsive'
														src='img/gallery/gallery7.jpg'
														alt=''
													/>
													<a
														href='img/gallery/gallery7.jpg'
														title='You can add caption to pictures.'
													>
														<span class='overlay-mask'></span>
													</a>
												</div>
											</div>
										</div>
										<div class='services col-lg-4 col-sm-6 col-md-6'>
											<div class='isotope-item'>
												<div class='gallery-thumb'>
													<img
														class='img-responsive'
														src='img/gallery/gallery8.jpg'
														alt=''
													/>
													<a
														href='img/gallery/gallery8.jpg'
														title='You can add caption to pictures.'
													>
														<span class='overlay-mask'></span>
													</a>
												</div>
											</div>
										</div>
										<div class='services col-lg-4 col-sm-6 col-md-6'>
											<div class='isotope-item'>
												<div class='gallery-thumb'>
													<img
														class='img-responsive'
														src='img/gallery/gallery9.jpg'
														alt=''
													/>
													<a
														href='img/gallery/gallery9.jpg'
														title='You can add caption to pictures.'
													>
														<span class='overlay-mask'></span>
													</a>
												</div>
											</div>
										</div>
										<div class='spa col-lg-4 col-sm-6 col-md-6'>
											<div class='isotope-item'>
												<div class='gallery-thumb'>
													<img
														class='img-responsive'
														src='img/gallery/gallery10.jpg'
														alt=''
													/>
													<a
														href='img/gallery/gallery10.jpg'
														title='You can add caption to pictures.'
													>
														<span class='overlay-mask'></span>
													</a>
												</div>
											</div>
										</div>
										<div class='services col-lg-4 col-sm-6 col-md-6'>
											<div class='isotope-item'>
												<div class='gallery-thumb'>
													<img
														class='img-responsive'
														src='img/gallery/gallery11.jpg'
														alt=''
													/>
													<a
														href='img/gallery/gallery11.jpg'
														title='You can add caption to pictures.'
													>
														<span class='overlay-mask'></span>
													</a>
												</div>
											</div>
										</div>
										<div class='spa col-lg-4 col-sm-6 col-md-6'>
											<div class='isotope-item'>
												<div class='gallery-thumb'>
													<img
														class='img-responsive'
														src='img/gallery/gallery12.jpg'
														alt=''
													/>
													<a
														href='img/gallery/gallery12.jpg'
														title='You can add caption to pictures.'
													>
														<span class='overlay-mask'></span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<script src='vendor/jquery/jquery.min.js'></script>
			<script src='vendor/bootstrap/js/bootstrap.min.js'></script>
			<script src='js/custom.js'></script>
			<script src='js/plugins.js'></script>
		</>
	);
};

export default Content;
