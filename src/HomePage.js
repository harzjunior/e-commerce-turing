import React from 'react';
import styled from '@emotion/styled';

import Featured from './Featured';
import Showcase from './Showcase';
import Subscribe from './Subscribe';

const HeroImg = require('../assets/hero-1@3x.png');
const Hero = styled('div')`
	img {
		width: 100%;
		height: auto;
	}
`;
class HomePage extends React.Component {
	render() {
		return (
			<div>
				<Hero>
					<img src={HeroImg} alt="Hero" />
				</Hero>
				<Featured />
				<Showcase />
				<Subscribe />
			</div>
		);
	}
}

export default HomePage;
