import React from "react";
import "./landing.css";
import { Button, Image } from "react-bootstrap";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import NavbarComponent from "../Navbar/NavbarComponent";
import LandingPagePicture from "../../../assets/images/landingPagePic.png";
import styled from "styled-components";

const GetStartedBtn = styled(Button)`
	background-color: #f4a261;
	border: none;
	width: 12rem;
	height: 4rem;
	border-radius: 1rem;
`;
const Btn2 = styled(Button)`
	border: none;
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
										peers
									</b>
								</h1>
							</div>
							<div className='col-12'>
								<h1 className='subtitle'>
									<b>All in one place.</b>
								</h1>
							</div>
							<div className='col-12'>
								<GetStartedBtn
									variant='dark'
									className='get-started-btn'
									size='lg'
								>
									<b>Get Started</b>
								</GetStartedBtn>
							</div>
						</div>
					</div>

					<div className='row justify-content-center mb-3 mb-md-0'>
						<div className='col-5 col-md-4'>
							<Btn2 variant='outline-light'>I'm a teacher</Btn2>
						</div>
						<div className='col-5 col-md-4'>
							<Btn2 variant='outline-light'>I'm a student</Btn2>
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
