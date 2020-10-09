import React from 'react';
import './landing.css';
import { Button, ButtonGroup, Image } from 'react-bootstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import NavbarComponent from '../Navbar/NavbarComponent';
import LandingPagePicture from '../../../assets/images/landingPagePic.png';
import styled from 'styled-components';

const Btn2 = styled(Button)`
	background-color: #f4a261;

	width: 12rem;
	height: 4rem;
	border-radius: 1rem;
`;

const Landing = () => {
	return (
		<div className='container-fluid landing-container'>
			<NavbarComponent />
			<div className='row panel-container'>
				<div className='left-panel col-12 col-md-6'>
					<div className='row'>
						<div className='title-container'>
							<div className='col-12'>
								<h1 className='title'>
									<b>
										Get in touch with your students, your teachers, and your
										peers by practicing new knowledge.
									</b>
								</h1>
							</div>
							<div className='col-12'>
								<h1 className='subtitle'>
									<b>All in one place.</b>
								</h1>
							</div>
							<div className='col-12 mt-5'>
								<h2 className='subtitle2'>
									<b>Get Started now!</b>
								</h2>
							</div>
						</div>
					</div>

					<div className='row justify-content-center mb-3 mb-md-0'>
						<div className='col-6'>
							<ButtonGroup aria-label='TeacherStudent'>
								<Btn2 id='teacher' variant='outline-light'>
									<b>I'm a teacher</b>
								</Btn2>
								<Btn2 id='student7' variant='outline-light'>
									<b>I'm a student</b>
								</Btn2>
							</ButtonGroup>
						</div>
					</div>
				</div>
				<div className='right-panel col-12 col-md-6'>
					<div className='row'>
						<Image
							src={LandingPagePicture}
							alt='Young student'
							className='landingpage-pic'
							fluid
						/>
					</div>
					<div className='row justify-content-center testimonials'>
						<div className='col-12 col-md-5'>
							<Toast>
								<ToastHeader>
									<b>John Smith | Parent</b>
								</ToastHeader>
								<ToastBody>
									"As parents, we also have become home-schoolers. With
									***NAME*** we can easily keep our kids on track with their
									studies and help their teachers get the job done"
								</ToastBody>
							</Toast>
						</div>
						<div className='col-12 col-md-5 mt-2 mt-md-0 mb-2 mb-md-0'>
							<Toast>
								<ToastHeader>
									<b>Sarah Doe | Teacher</b>
								</ToastHeader>
								<ToastBody>
									"**NAME** has created a bridge between learning and applying,
									helping students to have a great e-learning experience while
									making our job much easier."
								</ToastBody>
							</Toast>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
