import React from 'react';
import './navbar.css';
import { Nav, Navbar, Button, Image } from 'react-bootstrap';
import styled from 'styled-components';
import Brand from '../../../assets/images/Brand.png';

const LoginBtn = styled(Button)`
	border-radius: 0.7rem;
	margin: 0.5rem;
	width: 7rem;
`;
const SignUpBtn = styled(LoginBtn)`
	background-color: #f4a261;
	color: black;
	border: none;
	&:hover {
		background-color: white;
		color: black;
	}
`;

const NavbarComponent = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand='lg' variant='dark'>
				<Navbar.Brand href='/'>
					<Image src={Brand} alt='Logo' className='logo' />{' '}
					<h1 className='brand-title'>
						<b>Spark Learning</b>
					</h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'></Nav>
					<LoginBtn variant='outline-light'>Login</LoginBtn>
					<SignUpBtn variant='success'>Sign Up</SignUpBtn>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;
