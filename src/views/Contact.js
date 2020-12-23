import React, { useState } from 'react';
import styled from 'styled-components';
import { Paper, Grid, TextField, Button } from '@material-ui/core';
import Title from './Title';

const ContactInfo = styled(Paper)`
	&& {
		padding: 32px;
		margin-top: 10px;
		p {
			margin: 0;
		}
	}
`;

const MapInfo = styled(Paper)`
	&& {
		position: relative;
		overflow: hidden;
		height: 383px;
		@media only screen and (max-width: 1170px) {
			height: 413px;
		}
	}
`;

const InputField = styled(TextField)`
	&& {
		margin: 16px 0;
	}
`;

const Contact = () => {
	const [contact, setContact] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = name => event => {
		setContact({
			...contact,
			[name]: event.target.value
		});
	};
	return (
		<Grid>
			<Title>Stay Connected with me</Title>
			<ContactInfo>
				<p>Hey There, happy to hear from you.</p>
				<form noValidate autoComplete='off'>
					<InputField
						fullWidth
						id='name'
						label='Name'
						value={contact.name}
						onChange={handleChange('name')}
					/>
					<InputField
						fullWidth
						id='email'
						label='Email'
						type='email'
						value={contact.email}
						onChange={handleChange('email')}
					/>
					<InputField
						fullWidth
						multiline
						id='message'
						label='Message'
						value={contact.message}
						onChange={handleChange('message')}
					/>
					<Grid md={4}>
						<Button type='submit' variant='contained' fullWidth color='primary'>
							Send
						</Button>
					</Grid>
				</form>
			</ContactInfo>
			<Grid style={{ marginTop: 20 }}>
				<MapInfo>
					<iframe
						// eslint-disable-next-line max-len
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.6798102789485!2d30.055807614666264!3d-1.9614511372882915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5d254bcdc5b%3A0xf3a49181d012bfdc!2sKN%20107%20St%2C%20Kigali!5e1!3m2!1sen!2srw!4v1586772350343!5m2!1sen!2srw'
						frameBorder='0'
						title='dfdfd'
						allowFullScreen
						style={{ border: 0, width: '100%', height: '100%' }}
					/>
				</MapInfo>
			</Grid>
		</Grid>
	);
};

export default Contact;
