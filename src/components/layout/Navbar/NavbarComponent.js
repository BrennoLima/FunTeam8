import React, { useState } from 'react';
import './navbar.css';
import { Nav, Navbar, Button, Image, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId='formBasicEmail'>
							<Form.Label>Email:</Form.Label>
							<Form.Control type='email' placeholder='example@user.com' />
						</Form.Group>

						<Form.Group controlId='formBasicPassword'>
							<Form.Label>Password:</Form.Label>
							<Form.Control type='password' placeholder='Password' />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleClose}>
						Login
					</Button>
				</Modal.Footer>
			</Modal>
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
					<LoginBtn variant='outline-light' onClick={handleShow}>
						Login
					</LoginBtn>
					<SignUpBtn variant='success'>Sign Up</SignUpBtn>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default NavbarComponent;
