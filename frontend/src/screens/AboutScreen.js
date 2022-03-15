import React from 'react';
import Kelsey from '../images/kelsey-profile-img.png';
import Sidebar from '../components/Sidebar';

const Aboutus = () => {
	return (
		<>
			<div class='container'>
				<div class='row'>
					<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<Sidebar />
					</div>
					<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<div id='content' class='col-md-10 split'>
							<div id='aboutus'>
								<div class='content-wrapper'>
									<div class='content-box container'>
										<div class='inside-wrapper container'>
											<div class='section-heading'>
												<h2>About Us</h2>
											</div>
											<div class='row'>
												<div class='col-md-6'>
													<img
														class='img-responsive img-paragraph center-block'
														src={Kelsey}
														alt=''
													/>
												</div>
												<div class='col-lg-6'>
													<h4>Hey there!</h4>
													<p>
														My name is Kelsey Kutz and I am the owner/stylist at
														Kozmic Salon. I've been in the beauty industry for
														several years but have found my passion to be
														creative/custom coloring and healthy hair, which I
														now specialize in.
													</p>
													<p>
														The salon is certified by Malibu C. Malibu C
														products are used to restore and maintain hair and
														scalp health and wellness. I am always committed to
														using the best products, which is why I use Pulp
														Riot hair color exclusively.
													</p>
													<p>
														Kozmic Salon is also certified in Tape-In Hair
														Extensions by Donna Bella, and Cluster Lash
														Extensions by Ardell. The salon carries Pulp Riot,
														Malibu C, Olaplex, Amika and GIBS professional care
														and styling products.
													</p>

													<p>
														I became a hairstylist to help people find and
														express their own unique style, and am proud to
														provide quality hair care and professional services
														and products to my community.
													</p>
													<p>
														I'm a Scorpio, self-proclaimed hair nerd,
														renaissance enthusiast and Star Wars fanatic!
														Originally from South Dakota, I now reside in Ashton
														with my husband, our three boys and our furbabies.
													</p>

													<p>Want to know more? Let's connect!</p>
													<div class='social-media '>
														<a
															href='https://www.instagram.com/kozmicsalon'
															title=''
														>
															<i class='fab fa-instagram'></i>
														</a>
														<a
															href='https://www.facebook.com/KozmicSalon/'
															title=''
														>
															<i class='fab fa-facebook'></i>
														</a>
														<a
															href='https://www.tiktok.com/@kozmickelsey'
															title=''
														>
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
											<div class='row margin1'>
												<div class='col-md-4'>
													<div class='serviceBox'>
														<div class='service-icon'>
															<i class='flaticon-massage-spa-body-treatment'></i>
														</div>
														<div class='service-content'>
															<h5>Creative Color</h5>
															<p>
																Lorem ipsum dolor sit amet, consectetur
																adipiscing elit. Integer dictum malesuada.
															</p>
														</div>
													</div>
												</div>

												<div class='col-md-4'>
													<div class='serviceBox'>
														<div class='service-icon'>
															<i class='flaticon-spa-cream-pot-of-natural-flowers'></i>
														</div>
														<div class='service-content'>
															<h5>Quality Products</h5>
															<p>
																Lorem ipsum dolor sit amet, consectetur
																adipiscing elit. Integer dictum malesuada.
															</p>
														</div>
													</div>
												</div>
												<div class='col-md-4'>
													<div class='serviceBox'>
														<div class='service-icon'>
															<i class='flaticon-relaxing-spa-light-of-burning-candles-couple'></i>
														</div>
														<div class='service-content'>
															<h5>Relaxing Enviroment</h5>
															<p>
																Lorem ipsum dolor sit amet, consectetur
																adipiscing elit. Integer dictum malesuada.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class='col-md-12'>
											<div class='inside-wrapper container'>
												<div class='col-md-8 col-md-offset-2'>
													<h3 class='text-center'>
														What Clients are Saying...
													</h3>

													<div
														id='owl-testimonial'
														class='margin1 owl-carousel owl-theme'
													>
														<div class='testimonial'>
															<div class='content'>
																<p class='description'>
																	Kelsey is an amazing artist. She's given me
																	two different hair color transformations since
																	i've started going to her for my hair needs.
																	Both times the color results have been
																	absolutely stellar. I've gotten so many
																	compliments from friends, family & strangers.
																	She's my go to for gorgeous hair. Highly
																	recommend.
																</p>
															</div>
															<div class='testimonial-review'>
																<h6 class='testimonial-title'>
																	Stephanie Senn
																</h6>
																<span>Texas</span>
															</div>
														</div>
														<div class='testimonial'>
															<div class='content'>
																<p class='description'>
																	I've been a licensed cosmetologist for years,
																	and I can honestly say Kelsey is one of the
																	only people I trust with my hair, and who I
																	will now send my clients to. It's always been
																	very difficult for me to find a stylist who
																	speaks the same language as me but Kelsey is
																	educated, professional, creative, and will
																	become a friend the moment you sit in her
																	chair. She provides a relaxing experience, and
																	has created an environment that truly
																	encourages people to be themselves. Her
																	education, passion, and color skills truly are
																	unmatched!
																</p>
															</div>
															<div class='testimonial-review'>
																<h6 class='testimonial-title'>Larissa Lopez</h6>
																<span>Dixon, Illinois</span>
															</div>
														</div>
														<div class='testimonial'>
															<div class='content'>
																<p class='description'>
																	I LOVE Kozmic Salon! It's very spacious and
																	Kelsey is a fantastic hair stylist!! She is
																	always friendly and courteous to every client
																	and she also has a different array of products
																	to buy. She also makes bows and hot cocoa
																	bombs which are so good!!!
																</p>
															</div>
															<div class='testimonial-review'>
																<h6 class='testimonial-title'>Carol Lewis</h6>
																<span>Dixon, Illinois</span>
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
					</div>
				</div>
			</div>
		</>
	);
};

export default Aboutus;
