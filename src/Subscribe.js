import React from 'react';
import styled from '@emotion/styled';

import colors from './color-theme';

const mailIco = require('../assets/mail.png');

const SubscribeContainer = styled('div')`
	width: 100%;
	padding: 3em 0em;
	background-color: ${colors.grayColor};
	text-align: center;

	h1 {
		color: ${colors.headingColor};
		margin-bottom: 0.5em;
		font-family: Montserrat;
	}
	p {
		font-weight: bold;
		margin-bottom: 1.4em;
		font-family: 'Open Sans';
		font-size: 1.7rem;
	}
	form {
		display: flex;
		width: 50%;
		min-width: 390px;
		margin: auto;
	}
	.inner-showcase-container {
		width: 59%;
		text-align: center;
		margin: auto;
	}
`;

const EmailInput = styled('span')`
	border-radius: 20px;
	border: 1px solid ${colors.inputBorder};
	padding: 0.5em 1em;
	background-color: white;
	display: flex;
	width: 80%;
	max-width: 304px;

	img {
		height: 20px;
		width: 20px;
		margin-right: 5px;
	}
	input {
		border: none;
		outline: none;
		flex: 1;
		width: 100%;
	}
`;

const SubmitButton = styled('button')`
	border-radius: 20px;
	border: none;
	outline: none;
	background-color: ${colors.pinkColor};
	color: white;
	padding: 0.5em 2em;
	margin-left: 9px;
`;

class Subscribe extends React.Component {
	render() {
		return (
			<SubscribeContainer>
				<div className="inner-showcase-container">
					<h1>Get 10% Discount for subscribing</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						posuere nisl purus, eu commodo ante semper sed. Donec sodales odio
						velit, sed rhoncus metus fermentum eu. Aenean faucibus ipsum sed
						consequat elementum.
					</p>
					<form>
						<EmailInput>
							<img src={mailIco} alt="Email" />
							<input type="email" placeholder="Your e-mail here" />
						</EmailInput>
						<SubmitButton>Subscribe</SubmitButton>
					</form>
				</div>
			</SubscribeContainer>
		);
	}
}

export default Subscribe;
