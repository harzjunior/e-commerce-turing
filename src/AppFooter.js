import React from 'react';
import styled from '@emotion/styled';

const Footer = styled('footer')`
	display: grid;
	font-family: OpenSans;
	grid-template-columns: 20% [col-start] 20% [col-start] 20% [col-start] auto [col-start];
	padding: 3em 2em;
	background-color: white;

	span {
		font-family: Montserrat;

		h3 {
			margin-bottom: 13px;
		}
	}
`;

const Ul = styled('ul')`
	list-style: none;
	font-family: Montserrat;
`;

const Separator = styled('li')`
	height: 10px;
`;

// const Span = styled('span')``;

class AppFooter extends React.Component {
	render() {
		return (
			<Footer>
				<span>
					<h3>QUESTIONS?</h3>
					<Ul>
						<li>Help</li>
						<Separator />
						<li>Track Order</li>
						<Separator />
						<li>Returns</li>
					</Ul>
				</span>
				<span>
					<h3>{"WHAT'S IN STORE"}</h3>
					<Ul>
						<li>Women</li>
						<Separator />
						<li>Men</li>
						<Separator />
						<li>Product A-Z</li>
						<Separator />
						<li>Buy Gift Vouchers</li>
					</Ul>
				</span>
				<span>
					<h3>FOLLOW US</h3>
					<Ul>
						<li>Facebook</li>
						<Separator />
						<li>Twitter</li>
						<Separator />
						<li>YouTube</li>
					</Ul>
				</span>
				<span className="copyright-container">&copy; 2016 shopmate Ltd</span>
			</Footer>
		);
	}
}

export default AppFooter;
