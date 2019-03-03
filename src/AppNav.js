import React from 'react';
import styled from '@emotion/styled';

const SearchIco = require('../assets/magnifying-glass.png');
const CartIco = require('../assets/shopping-cart.png');

const Container = styled('header')`
	background-color: white;
	padding: 0px 30px;
	height: 74px;
	display: flex;
	h1 {
		color: #f62f5e;
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		margin: auto;
		padding: 12px 0px;
	}

	.header-element {
		display: inline-block;
	}
`;

const NavigationLinks = styled('span')`
	padding: 27px 0px;
	list-style: none;
	flex: 1;
	text-align: center;
	display: flex;

	ul li {
		display: inline-block;
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
	}
`;

const Separator = styled('li')`
	width: 5em;
`;

const CartSearch = styled('span')`
	padding: 25px 0px;
	/* min-width: 250px; */
	button {
		background-color: transparent;
		border: none;
		position: relative;
		outline: none;
		cursor: pointer;
	}

	button > img {
		height: 20px;
		width: auto;
	}
`;

const SearchbarContainer = styled('div')`
	display: inline-block;
	width: 200px;
	margin-right: 5px;
	input {
		width: 100%;
	}
	.make-visible {
		visibility: 'display';
	}
	.make-hidden {
		visibility: hidden;
	}
`;

class AppNav extends React.Component {
	state = {
		showSearchBar: 'make-hidden'
	};

	showSearchBar = () => {
		if (this.state.showSearchBar === 'make-hidden') {
			this.setState({ showSearchBar: 'make-visible' });
		} else {
			this.setState({ showSearchBar: 'make-hidden' });
		}
	};

	render() {
		return (
			<Container>
				<h1 className="header-element">SHOPMATE</h1>

				<NavigationLinks className="header-element">
					<ul>
						<li>Women</li>
						<Separator />
						<li>Men</li>
						<Separator />
						<li>Kids</li>
						<Separator />
						<li>Shoes</li>
						<Separator />
						<li>Brands</li>
					</ul>
				</NavigationLinks>

				<CartSearch>
					<SearchbarContainer>
						<input className={this.state.showSearchBar} type="text" />
					</SearchbarContainer>
					<button onClick={this.showSearchBar}>
						<img src={SearchIco} alt="Search" />
					</button>
					<button>
						<img src={CartIco} alt="Cart" />
					</button>
				</CartSearch>
			</Container>
		);
	}
}

export default AppNav;
