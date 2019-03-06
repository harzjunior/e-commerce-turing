import React from 'react';
import styled from '@emotion/styled';

import colors from './color-theme';

const featuredItem = require('../assets/featured.jpg');

const FeaturedContainer = styled('div')`
	margin: 2%;
	padding: 1.8em 0em;
	background-color: white;

	position: relative;

	.inner-featured-container {
		display: grid;
		grid-template-columns: 3% [col-start] 25% [col-start] 6% [col-start] 65% [col-start];
		width: 93%;
		margin: auto;
	}
`;

const FeaturedThumb = styled('img')`
	width: 100%;
	height: auto;
`;

const FeatDescriptionContainer = styled('span')`
	margin: 2em 1em;
	font-size: 1.7rem;

	h1 {
		font-family: Montserrat;
	}
	p {
		font-family: 'Open Sans';
		color: ${colors.articleColor};
	}

	p,
	h1 {
		margin-bottom: 0.6em;
	}
`;

const ShopButton = styled('button')`
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
`;

const SaleTag = styled('span')`
	background-color: ${colors.blueColor};
	width: 57px;
	height: 30px;
	text-align: center;
	z-index: 2;
	font-weight: bold;
	color: white;
	font-family: Montserrat;
	margin-top: 1em;
	padding: 0.5em 0px;
`;

class Featured extends React.Component {
	render() {
		return (
			<FeaturedContainer>
				<div className="inner-featured-container">
					<SaleTag>SALE</SaleTag>
					<FeaturedThumb src={featuredItem} alt="Featured item" />
					<span className="spacer" />
					<FeatDescriptionContainer>
						<h1>Red Bag</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							posuere nisl purus, eu commodo ante semper sed. Donec sodales odio
							velit, sed rhoncus metus fermentum eu.
						</p>
						<ShopButton>Shop Now</ShopButton>
					</FeatDescriptionContainer>
				</div>
			</FeaturedContainer>
		);
	}
}

export default Featured;
