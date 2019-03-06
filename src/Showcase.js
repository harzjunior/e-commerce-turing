import React from 'react';
import styled from '@emotion/styled';

import colors from './color-theme';

const showcaseLongImg = require('../assets/showcase-banner.jpg');
const showcaseMini = require('../assets/showcase-mini-banner.jpg');

const ShowcaseContainer = styled('div')`
	position: relative;
	margin: 2%;
	display: flex;

	.showcase-container-left {
		width: 30%;
		height: 40em;

		.left-col-showcase {
			height: 48%;
			padding: 9%;
			text-align: center;
		}
	}

	.separator {
		width: 2%;
		display: inline-block;
	}
	.showcase-container-right {
		width: 70%;
	}

	.showcase-separator {
		height: 4%;
		display: block;
	}
`;

const Showcase1 = styled('div')`
	background-color: ${colors.lightblue};
	font-size: 2rem;
	padding-top: 12%;
	h1 {
		margin: 4% 0px;
	}
	h2 {
		color: ${colors.pinkColor};
		font-family: Montserrat;
	}
`;

const Showcase2 = styled('div')`
	background-image: url(${showcaseMini});
	background-size: 100%;
	background-position: center;
	background-repeat: no-repeat;
	h1 {
		font-size: 4rem;
		text-align: right;
		margin-top: 8%;
	}
`;

const Showcase3 = styled('div')`
	height: 60%;
	background-image: url(${showcaseLongImg});
	background-size: 100%;
`;

const Showcase4 = styled('div')`
	height: 40%;
	background-color: white;
	padding: 2%;
	text-align: center;
	font-size: 3rem;
	color: ${colors.articleColor};
	h3 {
		font-size: 2.4rem;
		font-family: Montserrat;
	}
`;

const RegisterButton = styled('button')`
	background-color: ${colors.pinkColor};
	color: white;
	font-weight: bold;
	font-family: 'Open Sans';
	font-size: 1.7rem;
	border: none;
	border-radius: 25px;
	padding: 8px;
	width: 8em;
	height: 2.7em;
	outline: none;
	margin-top: 2%;
`;

class ShowCase extends React.Component {
	render() {
		return (
			<ShowcaseContainer>
				<div className="showcase-container-left">
					<Showcase1 className="left-col-showcase">
						<h1>AWESOME!</h1>
						<h2>Check this out</h2>
					</Showcase1>
					<span className="showcase-separator" />
					<Showcase2 className="left-col-showcase">
						<h1>FOR MEN</h1>
					</Showcase2>
				</div>
				<span className="separator" />
				<div className="showcase-container-right">
					<Showcase3 />
					<Showcase4>
						<h1>Dress like a Boss!</h1>
						<h3>Register and shop now!</h3>
						<RegisterButton>Register</RegisterButton>
					</Showcase4>
				</div>
			</ShowcaseContainer>
		);
	}
}

export default ShowCase;
