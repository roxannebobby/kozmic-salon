import React from 'react';
import logo from '../images/kozmic-logo.png';
import { Link } from 'react-router-dom';

// @Link imports

const Sidebar = () => {
	return (
		<>
			<div id='sidebar' class='split col-md-2'>
				<div class='affix-sidebar col-md-12'>
					<div class='sidebar-nav'>
						<div class='navbar navbar-default' role='navigation'>
							<div class='navbar-header'>
								<button
									type='button'
									class='navbar-toggle'
									data-toggle='collapse'
									data-target='.sidebar-navbar-collapse'
								>
									<span class='sr-only'>Toggle navigation</span>
									<span class='icon-bar'></span>
									<span class='icon-bar'></span>
									<span class='icon-bar'></span>
								</button>

								<div class='brand'>
									<a href='index.html'>
										<img
											src={logo}
											alt=''
											class='img-responsive center-block'
										/>
									</a>
								</div>
							</div>

							<div class='navbar-collapse collapse sidebar-navbar-collapse'>
								<ul class='nav navbar-nav' id='sidenav01'>
									<li class='active'>
										<Link to='/'>Home</Link>
									</li>
									<li>
										<Link to='/about'>About Kelsey</Link>
									</li>
									<li>
										<Link to='/gallery'>Gallery</Link>
									</li>
									<li>
										<Link to='/shop'>Shop</Link>
									</li>

									<li>--------------------</li>

									<li>
										<Link to='/appointments'>Appointments</Link>
									</li>

									<li>
										<Link to='/services'>Services</Link>
									</li>
									<li>
										<Link to='/pricing'>Pricing</Link>
									</li>

									<li>
										<Link to='/contact'>Questions?</Link>
									</li>
								</ul>
								<div class='social-media '>
									<a href='https://www.instagram.com/kozmicsalon' title=''>
										<i class='fab fa-instagram'></i>
									</a>
									<a href='https://www.facebook.com/KozmicSalon/' title=''>
										<i class='fab fa-facebook'></i>
									</a>
									<a href='https://www.tiktok.com/@kozmickelsey' title=''>
										<i class='fa-brands fa-tiktok'></i>
									</a>
									<a
										href='https://www.snapchat.com/add/kozmicsalon?sender_web_id=e3c22ea9-e5e5-44d6-88eb-c8ddc8fa79d5&device_type=desktop&is_copy_url=true'
										title=''
									>
										<i class='fa-brands fa-snapchat'></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div class='navbar-info hidden-sm hidden-xs hidden-md'>
						<p class='small-text'>
							<i class='fas fa-map-marker-alt margin-icon'></i>Kozmic Salon, 813
							Main St. Ashton, IL 61006
						</p>
						<p class='small-text'>
							<i class='far fa-clock margin-icon'></i>---AVAILABLE BY
							APPOINTMENT---
							<br /> Retail Hours: Thurs-Sat 11am-2pm
						</p>

						<div class='social-media '>
							<a href='https://www.instagram.com/kozmicsalon' title=''>
								<i class='fab fa-instagram'></i>
							</a>
							<a href='https://www.facebook.com/KozmicSalon/' title=''>
								<i class='fab fa-facebook'></i>
							</a>
							<a href='https://www.tiktok.com/@kozmickelsey' title=''>
								<i class='fa-brands fa-tiktok'></i>
							</a>
							<a
								href='https://www.snapchat.com/add/kozmicsalon?sender_web_id=e3c22ea9-e5e5-44d6-88eb-c8ddc8fa79d5&device_type=desktop&is_copy_url=true'
								title=''
							>
								<i class='fa-brands fa-snapchat'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
